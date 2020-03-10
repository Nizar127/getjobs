import React, {Component} from 'react';
import {StyleSheet, ScrollView, Image, Animated} from 'react-native';
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
    Icon, 
    List,
    ListItem,
    Separator,
    Tabs,
    Tab,
    TabHeading,
    ActionSheet,
    Button } from 'native-base';

  import AvailabiltyView from '../screen/availabilityView';
  //import JobComplete from '../screen/jobComplete';
  import OnGoingJob from '../screen/OnGoingJob';



export default class JobOpen extends React.Component {

  static navigationOptions = {
    title: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="person" style={{ color: tintColor }} />
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
        <ScrollView>
       <Card style={{alignItems: 'center', justifyContent: 'center', height: 400, width: auto}} >
           <CardItem>
              
               <Text style={{justifyContent:'center', marginTop: 20}}>
                   Profile
               </Text>
               <Right style={{ marginTop: 20}}>
                   
                       <Text style={{color:'green'}}>JOB OPEN</Text>
                   

               </Right>
           </CardItem>
           <CardItem style={{marginTop: 5}} >
                <Thumbnail large source={require('../img/kambing.jpg')} style={{marginStart: 50}}/>
                <Right><Text style={{color: 'green', marginStart: 10, marginEnd: 5}}>90% Job Rate</Text></Right>
                </CardItem>
                <CardItem>
                  <Text>James Corden</Text>
               </CardItem>
               <CardItem>
                  <Text note><Icon name="pin"/> Kuala Terengganu, Malaysia</Text>
                </CardItem>
                <CardItem style={{justifyContent: 'center', margin: 30}}>
                <Button rounded 
                 onPress={() => this.props.navigation.navigate('JobHome')} 
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
    <Card style={{flex:1, marginBottom:10, marginTop:5}}>
       <Card style={{flex:3, margin:10, height: 30, width: 200, borderColor: 'black'}}>
            <CardItem>
                <Text style>URGENT</Text>              
            </CardItem>
        </Card> 
        <Card style={{flex:3, margin:10, height: 30, width: 200, borderColor: 'black'}}>
            <CardItem>
                <Text>PART TIME</Text>              
            </CardItem>
        </Card> 
        <Card style={{flex:3, margin:10, height: 30, width: 200, borderColor: 'black'}}>
            <CardItem>
                <Text>AVERAGE</Text>              
            </CardItem>
        </Card> 
  
       </Card>
   <ScrollView>
       <View style={{marginTop: 20, flex:1, flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch'}}>
             <Tabs>
         
                 <Tab heading={ <TabHeading><Text> OnGoing Job</Text></TabHeading>}>
                   <OnGoingJob />
                 </Tab>
                 <Tab heading={ <TabHeading><Text>Applicants</Text></TabHeading>}>
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

