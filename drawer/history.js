import React from 'react';
import {StyleSheet, Text, List, View, Slider, ScrollView, Image, Alert} from 'react-native';
import { Container, Card, CardItem, Header, Left, Body, Thumbnail, Right, Button, Icon, Title, Segment, Content, Item} from 'native-base';


export default class History extends React.Component {



    render() {
     
      return (
  
     
        <Container> 
           <Header />
            <Content >
              <Container>
                <Card>
                  <Content>
                   <Card>
                      <CardItem header bordered>
                        <Text>January</Text>
                      </CardItem>
                      <CardItem footer bordered>
                        <Text>15 December</Text>
                       </CardItem>
               
                   </Card>
              
       
                </Content>
             </Card>
        
           </Container>
            
     
          </Content>
          </Container>
      
      );
    }
  }