import React, {Component} from 'react';
import {StyleSheet, ScrollView, Image, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
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
    Tabs,
    Tab,
    TabHeading,
    Button } from 'native-base';
import  ActionSheet from 'react-native-actionsheet';
import { TouchableOpacity } from 'react-native-gesture-handler';
import JobComplete from './jobComplete';
import OnGoingJob from './OnGoingJob';
import AvailabiltyView from './availabilityView';


// var BUTTONS = [
//   { text: "Urgent", icon: "american-football", iconColor: "#2c8ef4" },
//   { text: "Part Time", icon: "analytics", iconColor: "#f42ced" },
//   { text: "Contract", icon: "aperture", iconColor: "#ea943b" },
//   { text: "Per KPI", icon: "aperture", iconColor: "#ea943b" },
//   { text: "Hire As You Need", icon: "aperture", iconColor: "#ea943b" },
// ];

const options = ['Urgent', 'Part-Time', 'Contract', 'Per Milestone', 'Hire-As-You-Need' ];
const title = 'Please Pick Your Work Requirement';

export default class UserProfile extends Component {
  
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

    constructor(props){
      super(props);
      

      showActionSheet = () => {
        this.ActionSheet.show()
      }

      handlePress = (buttonIndex) => {
        this.setState({selected:buttonIndex})
      }
    }
  
    render() {
      return (
          <Container>
             <ScrollView>
            <Card style={{alignItems: 'center', justifyContent: 'center', height: 400, width: null}} >
                <CardItem>
                   
                    <Text style={{justifyContent:'center', marginTop: 20}}>
                        Profile
                    </Text>
                    <Right style={{ marginTop: 20}}>
                      <Button success onPress={() => this.showActionSheet}><Text>REQUEST</Text></Button>
                      <ActionSheet 
                         ref={o => {this.ActionSheet = o}}
                         title={title}
                         options={options}
                         onPress={this.handlePress}
                      />
                      
                        
               
                        {/* <Button success onPress={() =>
                          ActionSheet.show(
                          {
                              options: BUTTONS,
                           title: "Please Pick Your Work Requirement"
                         },
                           buttonIndex => {

                              this.setState({ clicked: BUTTONS[buttonIndex] });
                           }
                        )}>
                            <Text>REQUEST</Text>
                        </Button> */}

                    </Right>
                </CardItem>
                <CardItem style={{marginTop: 5}} >
                     <Thumbnail large source={require('../../../img/kambing.jpg')} style={{height: 90, alignSelf: 'center'}}/>
                     <Right><Text style={{color: 'green', marginStart: 10, marginEnd: 5}}>90% Job Rate</Text></Right>
                     </CardItem>
                     <CardItem>
                       <Text>James Corden</Text>
                    </CardItem>
                    <CardItem>
                       <Text note><Icon name="md-pin" size={30}/> Kuala Terengganu, Malaysia</Text>
                     </CardItem>
                     <CardItem style={{justifyContent: 'center', margin: 30}}>
                     <Button rounded 
                      onPress={() => this.props.navigation.navigate('Calendar')}
                     style={{
                         backgroundColor: '#f5f5f5',
                         color: 'black',
                          fontSize: 10, 
                          shadowColor: 'black', 
                           shadowOpacity: 0.3}}
                          >
                               <Text style={{color: 'black'}}>
                                  View Availability
                               </Text>
                               
                           </Button>
                </CardItem> 
            </Card>
        <ScrollView>
            <View style={{marginTop: 20, flex:1, flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch'}}>
                  <Tabs>
                      <Tab heading={ <TabHeading style={{justifyContent: 'space-between'}}><Text> Job Complete</Text></TabHeading>}>
                         <JobComplete/>
                      </Tab>
                      <Tab heading={ <TabHeading><Text> OnGoing Job</Text></TabHeading>}>
                        <OnGoingJob />
                      </Tab>
                      <Tab heading={ <TabHeading><Text>Availabilty</Text></TabHeading>}>
                        <AvailabiltyView />
                      </Tab>
                  </Tabs>
                 
               
            </View>
          </ScrollView>      
        
       
            

            </ScrollView>


            
         </Container>
 

  
      );
    }
  }
  
  