import React from 'react';
import {StyleSheet, Text, List, View, Slider, ScrollView, Image, Alert} from 'react-native';
import { 
  Container, 
  Card,
  CardItem,
  Separator,
  Header, 
  Left, 
  Body, 
  Thumbnail,
  Right,
  Button, 
  Icon, 
  Title, 
  Content, 
  Item} from 'native-base';


export default class Notification extends React.Component {



    render() {
     return(
       <View>
           <Header>
           <View style={{marginTop:25, marginEnd: 350}}>
             <Icon style={{color:'white'}} name="md-menu" onPress={()=>this.props.navigation.openDrawer()}/>
         </View>
           </Header>
           <ScrollView>
           <Separator>
              <Text style={{alignItems:'center', justifyContent: 'center', fontSize: 20}}>Notification</Text>           
          </Separator>
           </ScrollView>
           <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
              <Text>Notification</Text>
           </View>
       </View>  
     );
      
    }
  }