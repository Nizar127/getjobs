import React , { Component }from 'react';
import {StyleSheet, ScrollView, Image, Animated, Alert} from 'react-native';
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
     Content} from 'native-base';
import SplashScreen from 'react-native-splash-screen';




export default class Home extends Component {

   constructor() {
     super();
     this.state = {
       show: true,
     };
   }

  componentDidMount(){
    SplashScreen.hide();  
  }

  


  static navigationOptions = {
    title: 'Feed',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-compass" style={{ color: tintColor}} size={20} />
      ),
      headerTitle:{
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
    if(this.state.show == true){
      this.setState({show: false});
    } else {
      this.setState({show: true});
    }
  };

  render(){
   
    return(
      <ScrollView>
      <Container>
        {this.state.show ? (
          <Card style={{height: 20}}>
              <CardItem>
                    <Button transparent style={{fontSize: 20, fontWeight: 'bold', fontFamily: 'Montserrat-Regular'}}>
                        <Text>
                            Your Application Have Been Send!
                        </Text>
                        <Icon name = "md-checkmark-circle" style={{iconSize: 20, backgroundColor: '#3BFD0F'}}/>
                    </Button>
              </CardItem>
          </Card>
        ) : null}
       <Container style={{margin: 4, padding: 2}}> 
        <Content>
        <Separator style={{marginBottom: 10}}>
            <Text style={{alignItems:'center', justifyContent: 'center', fontSize: 20}}>Available Job</Text>
          </Separator>
          <Card>
            <CardItem cardBody bordered button onPress={() => this.props.navigation.navigate('FeedDetail')}>
              <Image source={require('../../img/kambing.jpg')} style={{height: 200, width: null, flex: 1}}/>
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
             <CardItem style={{justifyContent: 'center'}}>
              
                  <Button rounded primary onPress={this.renderSuccess}>
                        <Text>Book Now</Text>
                    </Button>  
                        
              

             </CardItem>

          </Card>
         
         
     

          <Card>
            <CardItem cardBody bordered button onPress={() => this.props.navigation.navigate('FeedDetail')}>
              <Image source={require('../../img/kambing.jpg')} style={{height: 200, width: null, flex: 1}}/>
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
             <CardItem style={{justifyContent: 'center'}}>
              
                  <Button rounded primary onPress={() => this.props.navigation.navigate('JobHome')} >
                        <Text>Book Now</Text>
                    </Button>  
                        
              

             </CardItem>

          </Card>
       
        </Content>

       
      

      </Container>
       



   <Fab style={{backgroundColor: '#f8f8fa', borderColor: '#000000'}} onPress={() => this.props.navigation.navigate('CarouselMap')}>
   
      <Icon android name="md-compass"  style={{color: '#000000'}} />
   </Fab> 

   </Container>
   </ScrollView>

    );
  
    }
}







const Style= StyleSheet.create({

    addButton:{
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