import React , { Component }from 'react';
import {StyleSheet, ScrollView, Image, Animated, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { 
  Container,
 Card,
    CardItem,
     Thumbnail, 
     Text, 
     Left,
      Body, 
      Button,
      Right,
      Fab,
      Separator,
      Badge,
      Toast,
     Content} from 'native-base';




export default class Scan extends Component {

  
  static navigationOptions = {
    title: 'Scan',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-barcode" style={{ color: tintColor }} size={20} />
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

//  onlongPress = () => {
//    <Toast.show({
       
//    })></Toast>
//  }

  render(){
   
    return(
      <Container>
        <Content>
            <Button style={{borderRadius: 30, size: 50, justifyContent: 'center', margin: 50}}>
                <Text style={{padding:20, fontSize: 30, fontWeight:'bold'}}>Scan Job</Text>
            </Button>
            <Badge style={{Color: 'white'}} onPress={() =>
                     Toast.show({
                         text: "Scanning nearby area that have open job",
                         buttonText: "Okay",
                         duration: 5000
              })}><Text>i</Text></Badge>
        </Content>
        <Content>
            <Button  onPress={() => this.props.navigation.navigate('QRScanner')} style={{borderRadius: 30, size: 50, justifyContent: 'center'}}>
                <Text style={{padding:20, fontSize: 30, fontWeight:'bold'}}>QR Code Scan</Text>
            </Button>
        </Content>

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