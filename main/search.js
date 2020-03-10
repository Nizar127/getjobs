import React, {Component} from 'react';
import {StyleSheet, Dimensions, Image, Animated} from 'react-native';
import { 
  Container,
  Header, 
  Item, 
  View, 
  Input, 
  Tab,
  TabHeading,
  Tabs,
  Card, 
  Badge, 
  CardItem, 
  Thumbnail,
  Text, 
  Left, 
  Body, 
  Icon, 
  List,
  Content,
  Button, 
  Right,
  ListItem,
  DeckSwiper,
  Separator} from 'native-base';
  import ContractJob from '../tab/ContractJob';
  import UrgentJob from '../tab/UrgentJob';
  import WorkRate from '../tab/WorkRate';
import { ScrollView } from 'react-native-gesture-handler';

let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height
const cards = [
  {
    id: 1,
    text: 'Card One',
    name: 'One',
    image: require('../img/kambing.jpg'),
  },
  {
    id: 2,
    text: 'Card Two',
    name: 'Two',
    image: require('../img/kambing2.png'),
  },
  {
    id: 3,
    text: 'Card Three',
    name: 'Three',
    image: require('../img/kambing3.png'),
  },
  
];


export default class Search extends Component {
  
    static navigationOptions = {
      title: 'Search',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="search" style={{ color: tintColor }} />
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
  
    render() {
      return (
      <Container>
        <Tabs>
              <Tab heading={ <TabHeading><Text> Urgent Job</Text></TabHeading>}>
                         <UrgentJob/>
                      </Tab>
                      <Tab heading={ <TabHeading><Text>Contract Job</Text></TabHeading>}>
                        <ContractJob />
                      </Tab>
                      <Tab heading={ <TabHeading><Text>Work Rate</Text></TabHeading>}>
                        <WorkRate/>
                      </Tab>
                  </Tabs>
        {/* <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header> */}
{/*            
            <View style={{flex:1, flexDirection: 'column', marginBottom: 10}}>
              <DeckSwiper
                ref={(c) => this._deckSwiper = c}
                dataSource={cards}
                renderEmpty={() =>
                  <View style={{ alignSelf: "center" }}>
                    <Text>Over</Text>
                  </View>
                }
                renderItem={item =>
                  <Card style={{ elevation: 3, marginTop:20, maxHeight: 130}}>
                    <CardItem>
                      <Left>
                        <Thumbnail source={item.image} />
                        <Body>
                          <Text>{item.text}</Text>
                          <Text note>NativeBase</Text>
                        </Body>
                      </Left>
                    </CardItem>
                    <CardItem cardBody>
                      <Image style={{ height: 130, flex: 1 }} source={item.image} />
                    </CardItem>
                    <CardItem>
                      <Icon name="heart" style={{ color: '#ED4A6A' }} />
                      <Text>{item.name}</Text>
                    </CardItem>
                  </Card>
                 
                
                }
              />
    
            </View>
     */}
            {/* <View style={{flex:1, flexDirection: 'row', position: 'absolute', bottom: 30, left: 0, right: 0, justifyContent: 'space-between'}}>
                <Button style={{marginLeft: 2, padding:2}} iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
                  <Icon name="arrow-back"/>
                  <Text>Dislike</Text>
                </Button>
                <Button style={{marginRight: 2, padding:2}} iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
                 
                  <Text style={{right: 2}}> Like</Text> 
                  <Icon name="arrow-forward" style={{left: 4}}/>
                </Button>
    
            </View> */}
    
            {/* <View style={StyleSheet.absoluteFill}
              pointerEvents={this.state.activeImage ? "auto" : "none"}
            >
              <View style={{ flex: 2, zIndex: 1001 }} ref={(view) => (this.viewImage = view)}>
                <Animated.Image
                  source={this.state.activeImage ? this.state.activeImage.src : null}
                  style={[{ resizeMode: 'cover', top: 0, left: 0, height: null, width: null }, activeImageStyle]}
                >
                </Animated.Image>
                <TouchableWithoutFeedback onPress={() => this.closeImage()}>
                  <Animated.View style={[{ position: 'absolute', top: 30, right: 30 }, animatedCrossOpacity]}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>X</Text>
                  </Animated.View>
                </TouchableWithoutFeedback>
              </View>
              <Animated.View style={[{ flex: 1, zIndex: 1000, backgroundColor: 'white', padding: 20, paddingTop: 50 }, animatedContentStyle]}>
                <Text style={{ fontSize: 24, paddingBottom: 10 }}>Unsure Programmer</Text>
                <Text>Eiusmod consectetur cupidatat dolor Lorem excepteur excepteur. Nostrud sint officia consectetur eu pariatur laboris est velit. Laborum non cupidatat qui ut sit dolore proident.</Text>
              </Animated.View>
            </View>
    
    
    
        
    
            {/* <View style={{flex:1, marginTop: 50}}>
            <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
              <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
                <Icon name="arrow-back" />
                <Text>Swipe Left</Text>
              </Button>
              <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
                <Icon name="arrow-forward" />
                <Text>Swipe Right</Text>
              </Button>
            </View>
            </View> */}

                
          {/* <View style={{flexDirection: 'row'}}>
            <Button style={{flex:3,alignItems: 'center', justifyContent: 'center', margin: 20, padding: 8}}  onPress={() => this.props.navigation.navigate('HireProgress')}>
                <Text>Saved</Text>
            </Button>
            <Button style={{flex:3,alignItems: 'center', justifyContent: 'center', margin: 20, padding: 8}} success onPress={() => this.props.navigation.navigate('HireProgress')}>
                <Text>Apply</Text>
            </Button>
            </View>   */}
           
          </Container>
        //  {/* <Button success rounded><Text>Dude</Text></Button> */}
        
      

      

      );
    }
  }
  