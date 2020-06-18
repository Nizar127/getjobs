// import React, { Component } from 'react';
// import { Alert, Image} from 'react-native';
// import { Container, Content, Button, Icon, Text, Form, Item, Label, Input, DatePicker, Thumbnail, Left, Right, Card, CardItem, Body, Grid, Col} from 'native-base';
// import { updateEvent } from '../services/DataService';
// import ImagePicker from 'react-native-image-crop-picker';
// import RNFetchBlob from 'rn-fetch-blob';
// import { db,storage } from '../config/db';
// import { Actions } from 'react-native-router-flux';

// let eventRef = db.ref('/events');
// let questRef = db.ref('questions');

// const Blob = RNFetchBlob.polyfill.Blob
// const fs = RNFetchBlob.fs;
// window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
// window.Blob = Blob;

// export default class Profile extends Component {
//   //INCOMPLETE!!!!!!!!!  
//     constructor(){
//         super();
//         this._isMounted = false;
//         this.pickImage = this.pickImage.bind(this);
//         this.state = {
//             events: [],
//             name:null,
//             photo:null,
//             url:null,
//             imageType: null,
//             randID:null,
//             chosenDate:new Date(),
//             date:"",
//             location:null,
//             speakerName:null,
//             speakerProfile:null,
//             summary:null
//         };

//         this.pickImage = this.pickImage.bind(this);
//         this.uploadImage = this.uploadImage.bind(this);
//         this.deleteEvent = this.deleteEvent.bind(this);
//         this.setDate = this.setDate.bind(this);

//         //Convert chosen date to string datatype to store in Database
//         this.state.date = this.state.chosenDate.toString().substr(4,12);
//     }

//     componentDidMount(){
//         this._isMounted = true;
//         let query = eventRef.orderByChild("randID").equalTo(this.props.eventID);
//         query.once('value', (snapshot) => {
//             let data = snapshot.val();
//             if(data){
//                 let firebaseData = Object.values(data);
//                 if(this._isMounted){
//                     this.setState({events: firebaseData},()=>{
//                         this.state.events.map((element)=>{
//                             this.setState({
//                                 name: element.name,
//                                 url: element.url,
//                                 summary:element.summary,
//                                 randID: element.randID,
//                                 date: element.date,
//                                 speakerName:element.speakerName,
//                                 speakerProfile:element.speakerProfile,
//                             });
//                         });
//                     });
//                 }

//             }
//         });
//     }

//     componentWillUnmount(){
//         this._isMounted = false;
//     }

//     setName = (value) =>{
//         this.setState({ name: value});
//     }

//     setDate = (newDate) =>{
//         this.setState({ date: newDate.toString().substr(4,12)});
//     }
//     setLocation = (value) =>{
//         this.setState({ location: value});
//     }
//     setSpeakerName = (value) =>{
//         this.setState({ speakerName: value});
//     }
//     setSpeakerProfile = (value) =>{
//         this.setState({ speakerProfile: value});
//     }
//     setSummary = (value) =>{
//         this.setState({ summary: value});
//     }

//     //Pick Image from camera or library
//     pickImage (){
//         ImagePicker.openPicker({
//           width:300,
//           height:180,
//           cropping:true
//         }).then(image=>{
//           this.setState({
//             url : image.path,
//             imageType : image.mime
//           })
//         }).catch((error)=>{
//             console.log(error)
//         })
//     }

//     //Upload image to Firebase storage
//     uploadImage () {

//         return new Promise((resolve,reject)=> {
//         let uploadBlob = null;
//         const appendIDToImage = new Date().getTime();
//         const imageRef = storage.ref('thumbnails').child(`${appendIDToImage}`);

//         fs.readFile(this.state.url, 'base64')
//         .then((data) => {
//             return Blob.build(data, { type: `${this.state.imageType};BASE64` })
//         })
//         .then((blob) => {
//             uploadBlob = blob
//             return imageRef.put(blob, { contentType: this.state.imageType })
//         })
//         .then(() => {
//             uploadBlob.close()
//             return imageRef.getDownloadURL()
//         })
//         .then((url) => {
//             resolve(url)
//             console.log(url)
//             eventRef.child(this.state.randID).update({
//                 url:url
//             })
//             })
//         .catch((error) => {
//             reject(error)
//         })      
//         })
//     }

//    //Will check for Empty fields. If true save to database 
//    updateData = ()=>{
//     if(this.state.name && this.state.date 
//         && this.state.summary && this.state.speakerName
//         && this.state.speakerProfile && this.state.url){
//         //Save input to database
//         updateEvent(this.state.name, this.state.randID, this.state.date, this.state.location,
//             this.state.speakerName, this.state.speakerProfile, this.state.summary),
//             this.uploadImage();

//         }
//         else {
//             Alert.alert('Status', 'Empty Field(s)!')
//         }
//     }

//     deleteEvent = () => {
//         Alert.alert('Warning',
//             'Delete Event?',[
//             {text: 'Yes', onPress: ()=> 
//             setTimeout(()=>{

//                 questRef.orderByChild('eventUID').equalTo(this.props.eventID)
//                 .on('child_added', (snapshot)=>{
//                     snapshot.ref.remove();
//                 })
//                 let eventQuery = eventRef.child(this.props.eventID)

//                 eventQuery.remove()

//                 Actions.EventTabs();



//                 Alert.alert('Alert','Event Deleted.')
//             },1000)

//             },
//             {text:'No', style: 'cancel'},
//         ],
//         {
//             cancelable:false
//         })

//     }

//     render(){

//         return(
//             <Container>  
//                     <Content padder>
//                         <Card>
//                             <CardItem style={{ backgroundColor:'#e6e6e6'}}>
//                                 <Body>
//                                     <Item style={{borderColor:'transparent'}}fixedLabel last>
//                                         <Icon name="md-finger-print" />
//                                             <Label>Event ID</Label>
//                                         <Text>{this.state.randID}</Text>
//                                     </Item>
//                                 </Body>
//                             </CardItem>
//                         </Card>
//                             <Image
//                                 source={{uri: this.state.url}}
//                                 style={{height: 150, width: null, flex: 1,
//                                     borderTopLeftRadius:10,borderTopRightRadius:10}}
//                             />

//                             <Button block iconLeft
//                             style= {{backgroundColor:'#1B6951'}} 
//                             onPress={this.pickImage}>
//                                 <Icon name="md-image" />
//                                 <Text style={{textAlign:'center'}}>Change Thumbnail</Text>
//                             </Button>

//                             <Card style={{padding:15, borderRadius:10}}>

//                                 <Item floatingLabel style={{paddingBottom:5, paddingTop:5}}>
//                                 <Label style={{color:'#17206e', textAlign:'center'}}>Event Name</Label><Input style={{fontSize:14, textAlign:'center'}}
//                                         placeholder='Update event Name'
//                                         placeholderTextColor = 'rgb(229, 231, 233)' maxLength={25}
//                                         onChangeText={this.setName}
//                                         value={this.state.name}></Input>
//                                 </Item>
//                                 <Item floatingLabel style={{paddingBottom:5, paddingTop:5}}>
//                                     <Label style={{color:'#17206e',paddingTop:10, textAlign:'center'}}>About Event</Label>
//                                 <Input style={{fontSize:14, paddingTop:20, textAlign:'justify'}}
//                                         value={this.state.summary}
//                                         multiline numberOfLines={2}
//                                         placeholder='Update event summary'
//                                         placeholderTextColor = 'rgb(229, 231, 233)'
//                                         onChangeText={this.setSummary}></Input>
//                                 </Item>            

//                                 <Item style={{paddingBottom:5, paddingTop:5}}>
//                                     <Label style={{color:'#17206e',paddingTop:10, textAlign:'center'}}>Event Date</Label>
//                                     <DatePicker
//                                         defaultDate={new Date()}
//                                         minimumDate={new Date()}
//                                         maximumDate={new Date(2020, 12, 31)}
//                                         locale={"en"}
//                                         timeZoneOffsetInMinutes={undefined}
//                                         modalTransparent={false}
//                                         animationType={"fade"}
//                                         androidMode={"default"}
//                                         placeHolderText="Select date"
//                                         textStyle={{ color: "green" }}
//                                         placeHolderTextStyle={{ color: "#d3d3d3" }}
//                                         onDateChange={this.setDate}
//                                         disabled={false}
//                                         />

//                                     <Text style={{fontSize:14}}>{this.state.date}</Text>

//                                 </Item>
//                                 <Item floatingLabel style={{paddingBottom:5, paddingTop:5}}>
//                                     <Label style={{color:'#17206e',paddingTop:10, textAlign:'center'}}>Speaker</Label>
//                                 <Input style={{fontSize:14, paddingTop:20, textAlign:'center'}}
//                                         value={this.state.speakerName}
//                                         onChangeText={this.setSpeakerName}></Input>
//                                 </Item>
//                                 <Item floatingLabel style={{paddingBottom:5, paddingTop:5}}>
//                                     <Label style={{color:'#17206e',paddingTop:10, textAlign:'center'}}>Social Media Profile</Label>
//                                 <Input style={{fontSize:14, paddingTop:20, textAlign:'center'}}
//                                         value={this.state.speakerProfile}
//                                         onChangeText={this.setSpeakerProfile}></Input>
//                                 </Item>


//                             </Card>

//                             <Grid>
//                                 <Col style={{padding:5}}>
//                                     <Button iconLeft block last style={{marginTop: 10,backgroundColor:'green'}} onPress={this.updateData} >
//                                     <Icon name="md-create" />

//                                 <Text style={{fontWeight: "bold"}}>Update</Text>

//                                 </Button>
//                                 </Col>
//                                 <Col style={{padding:5}}>
//                                     <Button iconLeft block last style={{marginTop: 10,backgroundColor:'red'}} onPress={this.deleteEvent} >
//                                         <Icon
//                                             type="MaterialIcons" name="delete-forever"/>

//                                     <Text style={{fontWeight: "bold"}}>Delete</Text>

//                                     </Button>
//                                 </Col>
//                             </Grid>




//         </Content>

//                 </Container>
//         )
//     }
// }

import React, { Component } from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native';
import {
  Container,
  Header,
  Content,
  View,
  Card,
  Right,
  auto,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  List,
  ListItem,
  Separator,
  Footer,
  Switch,
  Button
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';



export default class Profile extends Component {

  static navigationOptions = {
    title: 'Profile',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-person" style={{ color: tintColor }} size={20} />
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

  render() {
    return (
      <Container>

        <ScrollView>
          <Card >
            <CardItem cardBody>
              <Left>
                <Thumbnail large source={require('../../img/kambing.jpg')} style={{ height: 110, width: null, flex: 1 }} />
              </Left>
              <Body>
                <Text>Creative World Industries</Text>
              </Body>
              <Button transparent onPress={() => this.props.navigation.navigate('ViewProfile')} style={{ paddingLeft: 10, padding: 3 }}><Text>View Profile</Text></Button>
            </CardItem>
          </Card>
          {/* <CardItem>   
                     <Text style={{marginTop: 5, marginBottom: 5}}>Creative World Industries</Text>
                </CardItem> */}

          <Card>
            <Container>


              <Content style={{ padding: 15 }}>
                <Separator>
                  <Text style={{ fontSize: 20, justifyContent: 'center' }}>Account Settings</Text>
                </Separator>
                <List style={styles.listitem}>
                  <ListItem onPress={() => this.props.navigation.navigate('Personal')}>
                    <Left><Text>Personal Information</Text></Left>
                    <Right>
                      <Icon active name="md-person" size={30} />
                    </Right>
                  </ListItem>
                  <ListItem onPress={() => this.props.navigation.navigate('Resume')}>
                    <Left><Text>Resume</Text></Left>
                    <Right>
                      <Icon active name="md-briefcase" size={30} />
                    </Right>
                  </ListItem>
                  <ListItem onPress={() => this.props.navigation.navigate('PaymentSetting')}>
                    <Left><Text>Payments</Text></Left>
                    <Right>
                      <Icon active name="md-wallet" size={30} />
                    </Right>
                  </ListItem>
                  <ListItem onPress={() => this.props.navigation.navigate('Privacy')}>
                    <Left><Text>Privacy Settings</Text></Left>
                    <Right>
                      <Icon active name="md-unlock" size={30} />
                    </Right>
                  </ListItem>
                  <ListItem>
                    <Left>
                      <Body>
                        <Text>Print Receipt</Text>
                        <Text note>Toggle to Switch Auto or Manual</Text>
                      </Body>
                    </Left>
                    <Right>
                      <Switch selected={true} />
                    </Right>
                  </ListItem>
                  <ListItem>
                    <Left><Text>Rewards</Text></Left>
                    <Right>
                      <Icon active name="md-cash" size={30} />
                    </Right>
                  </ListItem>
                </List>
                {/* this is for setting multiskill Workforce */}
                <Separator>
                  <Text style={{ fontSize: 20, justifyContent: 'center' }}>Multi-Skills Workforce</Text>
                </Separator>
                <List style={styles.listitem}>
                  <ListItem onPress={() => this.props.navigation.navigate('PersonalSkill')}>
                    <Left><Text>List Your Skills</Text></Left>
                    <Right>
                      <Icon active name="md-person" size={30} />
                    </Right>
                  </ListItem>
                  <ListItem onPress={() => this.props.navigation.navigate('JobType')}>
                    <Left><Text>Job Type</Text></Left>
                    <Right>
                      <Icon active name="md-briefcase" size={30} />
                    </Right>
                  </ListItem>
                  <ListItem onPress={() => this.props.navigation.navigate('WorkSkill')}>
                    <Left><Text>Learn About Multi-Skills Workforce</Text><Text note>Earn Up to RM 3,000 per month</Text></Left>
                    <Right>
                      <Icon active name="md-cash" size={30} />
                    </Right>
                  </ListItem>

                </List>
                <Separator>
                  <Text style={{ fontSize: 20, justifyContent: 'center' }}>Support</Text>
                </Separator>
                <List style={styles.listitem}>
                  <ListItem onPress={() => this.props.navigation.navigate('Support')}>
                    <Left><Text>Safety Centre</Text><Text note>Get the Support you need as well as Labor Union help</Text></Left>
                    <Right>
                      <Icon active name="md-person" size={30} />
                    </Right>
                  </ListItem>
                  <ListItem onPress={() => this.props.navigation.navigate('Contact')}>
                    <Left><Text>Get Help</Text></Left>
                    <Right>
                      <Icon active name="md-briefcase" size={30} />
                    </Right>
                  </ListItem>
                  <ListItem onPress={() => this.props.navigation.navigate('PaymentMethod')}>
                    <Left><Text>Please Give Us Your Feedback</Text></Left>
                    <Right>
                      <Icon active name="md-wallet" size={30} />
                    </Right>
                  </ListItem>
                </List>
                <Separator>
                  <Text style={{ fontSize: 20, justifyContent: 'center' }}>Legal</Text>
                </Separator>
                <List style={styles.listitem}>
                  <ListItem onPress={() => this.props.navigation.navigate('Terms')}>
                    <Left><Text>Terms of Service</Text></Left>
                    <Right>
                      <Icon active name="md-person" size={30} />
                    </Right>
                  </ListItem>
                  <ListItem onPress={() => this.props.navigation.navigate('Privacy')}>
                    <Left><Text>Privacy Policy</Text></Left>
                    <Right>
                      <Icon active name="md-briefcase" size={30} />
                    </Right>
                  </ListItem>
                </List>
                <List>
                  <ListItem onPress={() => this.props.navigation.navigate('Logout')}>
                    <Left><Text>Logout</Text></Left>
                  </ListItem>
                </List>
              </Content>
            </Container>
          </Card>

          <Footer>
            <Content styles={{ justifyContent: 'center' }}>
              <Text>Developed by Ahmad Fakhrul Nizar Bin Ab Ghani</Text>
              <Text>All Right Reserved</Text>
            </Content>
          </Footer>

          {/* <Card style={{height: 200}}>
                <CardItem header bordered>
                    <Text>About Us</Text>
                </CardItem>
                <CardItem cardBody>
                    <Body>
                        <Text>We are system integrator contract companies specialize in the government's and business IT support</Text>
                    </Body>
                </CardItem>
            </Card>
            <Card style={{height: auto}}> 
                <CardItem header bordered>
                    <Text>Notable Project</Text>
                </CardItem>
                <CardItem cardBody>
                    <Content>
                        <Separator>
                            <Text>Government</Text>
                        </Separator>
                        <ListItem>
                            <Text>JKR</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Jabtan Hasil</Text>
                        </ListItem>
                        <ListItem>
                            <Text>SPAD</Text>
                        </ListItem>
                        <ListItem>
                            <Text>HASIL</Text>
                        </ListItem>
                        <Separator bordered>
                            <Text>SME</Text>
                        </Separator>
                        <ListItem>
                            <Text>Kinematics Business Management Firm</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Derren Consulting Firm</Text>
                        </ListItem>
                        <ListItem>
                            <Text>GoRide</Text>
                        </ListItem>
                    </Content>
                </CardItem>
            </Card>
            <Card style={{height: 250}}>
                <CardItem header bordered>
                    <Text>Key Player</Text>
                </CardItem>
                <CardItem cardBody style={{flex:1, flexDirection: 'row', padding: 10, margin: 5, alignContent: 'space-around', justifyContent: 'space-between', alignItems:'center', marginLeft: 5}}>
                              <Thumbnail large source={require('../../img/dude.jpg')} style={{padding: 10}}/>
                              <Thumbnail large source={require('../../img/dude.jpg')} style={{padding: 10}}/>
                              <Thumbnail large source={require('../../img/dude.jpg')} style={{padding: 10}}/>
                              <Thumbnail large source={require('../../img/dude.jpg')} style={{padding: 10}}/>
                              <Thumbnail large source={require('../../img/dude.jpg')} style={{padding: 10}}/>

      
                    </CardItem>
            </Card> */}

        </ScrollView>



      </Container>




    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  listitem: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,

  }

});

