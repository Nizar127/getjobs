import React, {Component} from 'react';
import {StyleSheet, ScrollView, Dimensions, Image} from 'react-native';
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
    Button } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
const { width } = Dimensions.get("window");


export default class FeedDetail extends Component {
  
    // static navigationOptions = {
    //   title: 'Profile',
    //     tabBarIcon: ({ tintColor }) => (
    //       <Icon name="person" style={{ color: tintColor }} />
    //     ),
    //     headerTitle:{
    //        title: 'GET-THE-JOB'
    //     },
    //   headerStyle: {
    //   backgroundColor: '#f45fff',
    // },
    //   headerTintColor: '#fff',
    //   headerTitleStyle: {
    //       fontWeight: 'bold',
    //   },
    // }
  
    render() {
      return (
          <Container>

         <ScrollView>   
             <Card >
             <CardItem cardBody>
                <Image source={require('../../img/kambing.jpg')} style={{height: 200, width: null, flex: 1}}/>
              
            </CardItem>
            <CardItem>
               <Body>
                 <Text>Creative World Industries</Text>
                </Body>
            </CardItem>
                 {/* <CardItem>   
                     <Text style={{marginTop: 5, marginBottom: 5}}>Creative World Industries</Text>
                </CardItem> */}
                
            </Card>
        
            <Card style={{height: 200}}>
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
                <ScrollView horizontal={true}>
                            <CardItem cardBody style={{flex:1, flexDirection: 'row', padding: 10, margin: 5, alignContent: 'space-around', justifyContent: 'space-between', alignItems:'center', marginLeft: 5}}>
                                       <Thumbnail large source={require('../../img/dude.jpg')} style={{padding: 10}}/>
                                       <Thumbnail large source={require('../../img/dude.jpg')} style={{padding: 10}}/>
                                       <Thumbnail large source={require('../../img/dude.jpg')} style={{padding: 10}}/>
                                       <Thumbnail large source={require('../../img/dude.jpg')} style={{padding: 10}}/>
                                       <Thumbnail large source={require('../../img/dude.jpg')} style={{padding: 10}}/>
         
               
                             </CardItem>
                </ScrollView>
 
            </Card>

            </ScrollView>
             <Card style={{width: width, height: 60, padding: 10, justifyContent:'center', borderColor: 'grey'}}>
                <CardItem>
                    <Left>
                        <Text>RM 500</Text><Text>/</Text><Text>day</Text>
                    </Left>
                    <Right>
                        <Button danger style={{borderRadius: 12}}><Text>Apply</Text></Button>
                    </Right>
                </CardItem>
             </Card>

            
         </Container>
           


  
      );
    }
  }
  

 