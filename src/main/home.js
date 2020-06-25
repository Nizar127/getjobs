import React, { Component } from 'react';
import { StyleSheet, Image, Animated, Alert, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Container,
  Header,
  TabHeading,
  View,
  Card,
  Tab,
  Tabs,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Button,
  Right,
  Fab,
  Separator,
  Content
} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
//import { db } from '../../config/firebase';
//import { addApplicant } from '../../config/firebase';
import firestore from '@react-native-firebase/firestore';


//let job = db.ref('/Job');


export default class Home extends Component {

  constructor() {
    super();
    this.applyRef = firestore().collection('Job_list');
    this.state = {
      show: true,
      jobs: [],
      jobname: '',
      userId: '',
      job_provider: '',


    };
  }

  //get the job creator name from uid
  setJobProvider = (data) => {
    this.setState({ job_provider: data })

  }

  componentDidMount() {
    //SplashScreen.hide();
    this.unsubscribe = this.applyRef.onSnapshot(this.getCollection);


  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  // profileDetail = () => {
  //   UserDetail = this.ProfileDetailRef.onSnapshot(this.getProfileCollection);
  // }

  // getProfileCollection = (querySnapshot) => {
  //   const jobs = [];
  //   querySnapshot.forEach((res) => {
  //     const { username, profileImage, description, key_player, notable_project } = res.data();
  //     jobs.push({
  //       key: res.id,
  //       res,
  //       username,
  //       profileImage,
  //       description,
  //       key_player,
  //       notable_project
  //     });
  //   });
  //   this.setState({
  //     jobs,
  //     isLoading: false
  //   })
  // }

  getCollection = (querySnapshot) => {
    const jobs = [];
    querySnapshot.forEach((res) => {
      const { jobname, uniqueId, jobCreatorName, jobdesc, worktype, lat, lng, url, salary, peoplenum, chosenDate, time, location } = res.data();
      jobs.push({
        key: res.id,
        res,
        jobCreatorName,
        jobname,
        uniqueId,
        jobdesc,
        lat,
        lng,
        url,
        worktype,
        salary,
        peoplenum,
        chosenDate,
        time,
        location
      });
    });
    this.setState({
      jobs,
      isLoading: false
    })
  }


  //use this to delete particular data once data has been send
  // async deleteRow(secId, rowId, rowMap, data) {

  //   await firebase.database().ref('contacts/' + data.key).set(null)

  //   rowMap[`${secId}${rowId}`].props.closeRow();
  //   var newData = [...this.state.listViewData];
  //   newData.splice(rowId, 1)
  //   this.setState({ listViewData: newData });

  // }
  static navigationOptions = {
    title: 'Feed',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-compass" style={{ color: tintColor }} size={20} />
    ),
    headerTitle: {
      title: 'GET-THE-JOB'
    },
    headerStyle: {
      backgroundColor: '#f45fff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

  renderSuccess = () => {
    if (this.state.show == true) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  };

  // saveData(){
  //   let job = firebase.firestore().collection('Job_list').doc('JobCreatorName');
  //   job = this.state.job_provider;

  // }

  sendApplication = () => {
    if (this.state.jobname && this.state.uniqueId && this.state.jobdesc && this.state.w) {
      addApplicant(this.state.jobname, this.state.uniqueId, this.state.jobdesc, this.state.worktype, this.state.salary, this.state.peoplenum, this.state.date, this.state.location);
      Alert.alert('Your Job Has Been Posted', 'Please Choose',
        [
          {
            text: "Return To Main Screen",
            onPress: () => this.props.navigation.navigate('Hire')
          },
          {
            text: "View Current Job Posted",
            onPress: () => this.props.navigation.navigate('MyJob')
          }
        ], { cancelable: false }
      );


    } else {
      Alert.alert('Status', 'Empty Field(s)!');
    }
  }

  render() {

    return (
      <ScrollView>
        <Separator>
          <Text style={{ alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>Available Job</Text>
        </Separator>
        <Container>
          <Content padder>
            <Text style={{ textAlign: "center", height: 40, fontWeight: "bold", marginTop: 20 }}>List of Available Job</Text>
            <FlatList
              data={this.state.jobs}

              renderItem={({ item, index }) => {
                return (
                  <Card key={index} onPress={() => this.props.navigation.navigate('FeedDetail', {
                    userkey: item.key
                  })}>
                    <CardItem><Text style={{ fontStyle: 'bold', margin: 10, textAlign: 'center', textColor: 'green' }}>{item.worktype}</Text></CardItem>
                    <CardItem cardBody bordered button>
                      <Image source={{ uri: item.url }} style={{ height: 200, width: null, flex: 1 }} />
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Text>{item.jobname}</Text>
                        <Text note>{item.jobCreatorName}</Text>

                      </Body>
                    </CardItem>
                    <CardItem>
                      <Text>RM  {item.salary}/job</Text>
                    </CardItem>
                    <CardItem style={{ justifyContent: 'center' }}>

                      <Button rounded primary onPress={this.sendApplication}>
                        <Text>Book Now</Text>
                      </Button>
                    </CardItem>
                  </Card>
                )
              }}
            />

          </Content>
          {/* {this.state.show ? (





          ) :
            <Card style={{ height: 20 }}>
              <CardItem>
                <Button transparent style={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'Montserrat-Regular' }}>
                  <Text>
                    Your Application Have Been Send!
                  </Text>
                  <Icon name="md-checkmark-circle" style={{ iconSize: 20, backgroundColor: '#3BFD0F' }} />
                </Button>
              </CardItem>
            </Card>} */}

          {/* : null} */}
          {/* <Container style={{ margin: 4, padding: 2 }}>
            <Content>





              <Card>
                <CardItem cardBody bordered button onPress={() => this.props.navigation.navigate('FeedDetail')}>
                  <Image source={require('../../img/kambing.jpg')} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>Catering Services</Text>
                    <Text note>Global Ventures Industies</Text>

                  </Body>
                </CardItem>
                <CardItem>
                  <Text>This works well somehow</Text>
                </CardItem>
                <CardItem style={{ justifyContent: 'center' }}>

                  <Button rounded primary onPress={() => this.props.navigation.navigate('JobHome')} >
                    <Text>Book Now</Text>
                  </Button>



                </CardItem>

              </Card> */}

          {/* </Content> */}




          {/* </Container> */}




          <Fab style={{ backgroundColor: '#f8f8fa', borderColor: '#000000' }} onPress={() => this.props.navigation.navigate('CarouselMap')}>

            <Icon android name="md-compass" style={{ color: '#000000' }} />
          </Fab>

        </Container>
      </ScrollView>

    );

  }
}







const Style = StyleSheet.create({

  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 150,
    backgroundColor: '#E91E63',
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  },
})