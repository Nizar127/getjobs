import React from 'react';
import {StyleSheet, Text, List, View, Slider, ScrollView, Image, Alert} from 'react-native';
import { Container, Tab, Tabs, TabHeading, Card, CardItem, Header, Left, Body, Thumbnail, Right, Button, Icon, Title, Segment, Content, Item} from 'native-base';
import searchDetails from '../tab/searchDetails';
import searchHome from '../tab/searchHome';

export default class SearchDetails extends React.Component {



    render() {
     
      return (
    <Container>
       
        
           <Header hasTabs />
         
             
         
           <Tabs>
   
             <Tab heading={ <TabHeading><Text>Home</Text></TabHeading>}>
               <searchHome/>
             </Tab>
             <Tab heading={ <TabHeading><Text>Job Details</Text></TabHeading>}>    
               <searchDetails/>
             </Tab>
            
           </Tabs>
        


         

        </Container>
      );
    }
  }