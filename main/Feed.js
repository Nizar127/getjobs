import React , { Component }from 'react';
import {StyleSheet, ScrollView, Image, Animated, Alert} from 'react-native';
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
      Icon, 
      Button,
      Right,
      Fab,
      Separator,
     Content} from 'native-base';




export default class Feed extends Component {

  
  static navigationOptions = {
    title: 'Feed',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="paper" style={{ color: tintColor }} />
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

  render(){
   
    return(
      <Container>
      <ScrollView>
           <Container> 
        <Content>
        <Separator style={{marginBottom: 10}}>
            <Text style={{alignItems:'center', justifyContent: 'center', fontSize: 20}}>Available Job</Text>
          </Separator>
          <Card>
            <CardItem cardBody bordered button onPress={() => this.props.navigation.navigate('FeedDetail')}>
              <Image source={require('../img/kambing.jpg')} style={{height: 200, width: null, flex: 1}}/>
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
      </ScrollView>


   {/* <Fab style={{backgroundColor: '#66cd00'}} onPress={() => this.props.navigation.navigate('addjob')}>
   
      <Icon name="add" />
   </Fab> */}

   </Container>
   

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