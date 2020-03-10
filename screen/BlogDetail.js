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




export default class BlogDetail extends Component {

  


  render(){
   
    return(
      <Container>
      <ScrollView>
           <Container> 
        <Content>
        <Separator style={{marginBottom: 10}}>
            <Left><Icon name = "arrow-back" onPress={() => this.props.navigation.goBack()}/></Left>
            <Text style={{alignItems:'center', justifyContent: 'center', fontSize: 20}}>Blog Details</Text>
          </Separator>
          <Card>
            <CardItem cardBody>
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
              
                 <Button danger onPress={() => this.props.navigation.goBack()} >
                        <Text>Go Back</Text>
                 </Button>  

                  <Button primary onPress={() => this.props.navigation.navigate('JobHome')} >
                        <Text>Book Place</Text>
                  </Button>  
                        
              </CardItem>
            </Card>
         
        </Content>

       
      </Container>
      </ScrollView>
    </Container>
    );
  
    }
}
