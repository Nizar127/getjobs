import React from 'react';
import {StyleSheet, Text,  ScrollView, Image, Alert} from 'react-native';
import { Container, CheckBox, Header, Left, Body, Thumbnail, Right, Button, Icon, Title, List, ListItem, Content, Item} from 'native-base';


export default class JobType extends React.Component {



    render() {
     
      return (
  
        <Container>
            <Header>
              <Left>
                <Button transparent onPress={()=> this.props.navigation.goBack()}>
                    <Icon name='arrow-back' size={40}/>         
                </Button>
              </Left>
             <Body>
               <Title>Job Type</Title>
             </Body>
         
            </Header>

            <Container>
                <Text>Job Preference</Text>
            <Content>
          <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text>Contract</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} />
            <Body>
              <Text>Remote Work</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} color="green"/>
            <Body>
              <Text>Freelance</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} color="green"/>
            <Body>
              <Text>Part-Time</Text>
            </Body>
          </ListItem>
        </Content>
            </Container>
        </Container>
      );
    }
  }