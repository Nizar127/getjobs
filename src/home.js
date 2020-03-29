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
import SplashScreen from 'react-native-splash-screen';

     //once onpresx..change the shape the to just one shape and badge success and disappear
     let randomHex = () => {
      let letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }

export default class Feed extends Component {

  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this);

    this.state = {
        backgroundColor: randomHex()
    };

}
onClick() {
  console.log('clicked ');
  this.setState({backgroundColor: randomHex()}); 
}

componentDidMount(){
  SplashScreen.hide()
}
  
//   static navigationOptions = {
//     title: 'Feed',
//       tabBarIcon: ({ tintColor }) => (
//         <Icon name="paper" style={{ color: tintColor }} />
//       ),
//       headerTitle:{
//          title: 'GET-THE-JOB'
//       },
//     headerStyle: {
//     backgroundColor: '#f45fff',
//   },
//     headerTintColor: '#fff',
//     headerTitleStyle: {
//         fontWeight: 'bold',
//     },
//   }



// render() {

//   if (!this.state.loaded) {
//     return this.renderLoadingView();
//   }

//   return (
//     <Container style={styles.container}>
//       <Header
//         style={{ backgroundColor: "#fff" }}
//         androidStatusBarColor="#f05423"
//         iosBarStyle="light-content">

//       <Left>
//         <Button
//           transparent
//           onPress={() => this.props.navigation.navigate("DrawerOpen")}
//         >
//           <Icon name="ios-menu" style={{color: 'black'}} />
//         </Button>
//       </Left>
//       <Body> 
//         <Image source={logo} style={styles.headerLogo} />
//       </Body>
//       <Right />

//     </Header>

//     <Content padder>

//       <ListView
//         dataSource={this.state.dataSource}
//         renderRow={this.renderNews}
//         style={styles.listView}
//       />

//     </Content>
//   </Container>
//   );
// }

// renderLoadingView() {
//   return (
//     <View style={styles.loading}>
//       <Text>
//         Loading news...
//       </Text>
//     </View>
//   );
// }

// renderNews(news) {
//   return (
//     <Card>
//       <CardItem button onPress={()=> this._OnButtonPress(news.id)}>
//         <Left>
//           <Body>
//             <Text style={styles.cardText}>{news.title}</Text>
//           </Body>
//         </Left>
//       </CardItem>
//       <CardItem>
//         <Left>
//             <Icon style={styles.icon} name="chatbubbles" />
//             <Text>{news.comments} comments</Text>
//         </Left>
//         <Right>
//           <Text>{news.published}</Text>
//         </Right>
//       </CardItem>
//     </Card>
//   );
// }
// }


// constructor() {
//   super();
//   this.state = {
//     show: true,
//   };
// }

// ShowHideComponent = () => {
//   if (this.state.show == true) {
//     this.setState({ show: false });
//   } else {
//     this.setState({ show: true });
//   }
// };

// render() {
//   return (
//     <View style={styles.MainContainer}>
//       {/*Here we will return the view when state is true 
//       and will return false if state is false*/}
//       {this.state.show ? (
//         <Image
//           source={{
//             uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
//           }}
//           style={{ width: 100, height: 100 }}
//         />
//       ) : null}
//       <Button title="Hide/Show Component" onPress={this.ShowHideComponent} />
//     </View>
//   );

  render(){
   
    return(
      <Container>
      <ScrollView>
       <Container style={{margin: 4, padding: 2}}> 
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
              
                  <Button rounded primary  onPress={ this.onClick } >
                        <Text>Book Now</Text>
                    </Button>  
                        
              

             </CardItem>

          </Card>
         
         
          
        </Content>

       
      </Container>
      <Container style={{margin: 4, padding: 2}}> 

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



   <Fab style={{backgroundColor: '#f8f8fa', borderColor: '#000000'}} onPress={() => this.props.navigation.navigate('CarouselMap')}>
   
      <Icon name="add" style={{color: '#000000'}} />
   </Fab> 

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