import React from 'react';
import {StyleSheet, Text, List, View, Slider, ScrollView, Image, Alert} from 'react-native';
import { Container, Tab, Tabs, TabHeading, Fab, Card, CardItem, Header, Left, Body, Thumbnail, Right, Button, Icon, Title, Segment, Content, Item} from 'native-base';
import JobDescription from '../tab/jobDescription' ;
import JobOpen from '../tab/jobDetails';

export default class JobHome extends React.Component {



    render() {
     
      return (
    <Container>
       
   
         
           <Tabs style={{fontColor: '#0000ff',backgroundColor: '#dcedc1'}}>
   
             <Tab heading={ <TabHeading><Text style={{color:'white'}}>Overview</Text></TabHeading>}>
               <JobDescription/>
             </Tab>
             <Tab heading={ <TabHeading><Text style={{color: 'white'}}>Job Details</Text></TabHeading>}>    
               <JobOpen/>
             </Tab>
            
           </Tabs>
        


         

        </Container>
      );
    }
  }