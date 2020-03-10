import React from 'react';
import {StyleSheet, Text, List, View, Slider, ScrollView, Image, Alert} from 'react-native';
import { Container, Card, CardItem, Header, Left, Body, Thumbnail, Right, Button, Icon, Separator, Content, Item} from 'native-base';


export default class Blog extends React.Component {



    render() {
     
      return (
  
  <Container> 
          
        <Header>
           <View style={{marginTop:25, marginEnd: 350}}>
              <Icon style={{color:'white'}} name="md-menu" onPress={()=>this.props.navigation.openDrawer()}/>
           </View>
       </Header>
          
        <Content style={{marginTop: 10}}>
        <Separator style={{marginBottom: 10}}>
            <Left>
              <Icon name="md-menu" onPress={() => this.props.navigation.goBack()}/>
            </Left>
            <Text style={{justifyContent: 'center', fontSize: 20}}>Available Job</Text>

            </Separator>
            
          <ScrollView style={{flex:1}}>
            <Card>
              <CardItem>
                 <Right>
                    <Button success onPress={() => this.props.navigation.navigate('AddBlog')}><Text>Post A Blog</Text></Button>
                </Right>
              </CardItem>
            </Card>
           
          
          <Card style={{marginTop: 30}}> 
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
              
                  <Button style={{width: 80, height: 50}} rounded primary onPress={() => this.props.navigation.navigate('BlogDetail')} >
                        <Text style={{padding:5, color:'white'}}>Book Now</Text>
                    </Button>  
                        
              

             </CardItem>

          </Card> 
          
          </ScrollView>
          </Content>
          
       
        </Container>
      );
    }
  }