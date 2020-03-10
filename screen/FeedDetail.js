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




export default class FeedDetail extends Component {

  


  render(){
   
    return(
      <Container>
      <Header>
            <View style={{marginTop:25, marginEnd: 350}}>
                <Icon style={{color:'white'}} name="md-menu" onPress={()=>this.props.navigation.openDrawer()}/>
             </View>
        </Header>
        <Content>
        
       
          <Card style={{marginTop: 20}}>
            <CardItem cardBody style={{height:400, width: null,}} onPress={() => this.props.navigation.navigate('FeedDetail')}>
              <Image source={require('../img/kambing.jpg')} style={{ flex: 1}}/>
            </CardItem>
            </Card>
            </Content>
     <ScrollView>
         <Content>
          <Card>
            <CardItem>
            <Body>
                  <Text>Catering Services</Text>
                  <Text note>Global Ventures Industies</Text>
                
              </Body>
              <Right>
                  <Button onPress={() => Alert.alert('You are now a followers')} style={{height: 25, marginEnd: 30, borderRadius: 20, backgroundColor: 'white'}}><Text style={{color: 'blue'}}>Follow</Text></Button>
                  <Icon name="share" />
              </Right>
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

       

      </ScrollView>


  

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