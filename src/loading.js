// import React, { Component } from 'react';
// import { Alert, StatusBar, ImageBackground} from 'react-native';
// import { Container, Content, Spinner, Text, Grid, Col, Row } from 'native-base'
// import { app } from '.././config/db';
// import SplashScreen from 'react-native-splash-screen';

// export default class Loading extends Component {
 
//     componentDidMount(){
//         SplashScreen.hide();
//         app.auth().onAuthStateChanged(user=>{

//             setTimeout(() => {
//                 if(user){
//                     Alert.alert('Status','You are logged in.')
//                     this.props.navigation.navigate('home');
//                 }
//                 else {
//                     this.props.navigation.navigate('login');
//                 }
//             }, 10);
            
//         })
//     }
    
    
//     render(){
//         return (
//             <Container style={{backgroundColor:'#FFF'}}>
//                 <StatusBar backgroundColor="#052bfb"/>
                
//                 <Grid>
//                     <Row size={30} backgroundColor={"#1B58FF"}></Row>
//                     <Row size={40} backgroundColor={"#1B58FF"}>
//                         <ImageBackground source={require('./img/icon.png')} style={{width:'100%',
//                          height:'100%'}}></ImageBackground></Row>
//                     <Row size={30} backgroundColor={"#1B58FF"}>
//                      <Col style={{marginTop:-50}}><Spinner /></Col></Row>
//                 </Grid>
                
//             </Container>
//         )
//     }
// }