import React, {Component} from 'react';
import {View, Text, Stylesheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';  
import { 
  Container, 
  Header,
   Left,
    Body,
    Right, 
    Button, 
     Title, 
     Segment, 
     Card,
     CardItem,
     Item,
     Thumbnail,
     Content} from 'native-base';



export default class Manage extends Component{

  static navigationOptions = {
    title: 'Manage',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-briefcase" style={{ color: tintColor }} />
      ),
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
            
            <Content>
                <Card style={{flex: 1, flexDirection:'column', alignItems:'center'}}>
                  <CardItem>
                  <Item success>
                  <Icon name='checkmark-circle'/>

                    </Item>
                      <Left>
                          <Thumbnail source={require('../../img/dude.jpg')}/>
                          <Body>
                              <Text>Waiter Panorama Signature</Text>
                              <Text note style={{flex:1, flexDirection: 'row', justifyContent: 'space-evenly'}}>We looking for people to work starting at 7 PM until 12 AM</Text>
                              <Icon name='calendar'/><Text note style={{flex:1, flexDirection: 'row', justifyContent:'space-around'}}>15hb January</Text>
                          </Body>
                      </Left>
               
                  </CardItem>
                  </Card>
                <Card>
                <CardItem bordered button onPress={() => Alert.alert("Job Done!!")}>
                    <Left>
                        <Thumbnail source={require('../../img/dude.jpg')}/>
                    </Left>
                    <Body>
                        <Text>Monica</Text>
                        <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                        <Icon name='calendar'/><Text note style={{flex:1, flexDirection: 'row',justifyContent:'space-evenly'}}></Text>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Text>View</Text>
                        </Button>
                    </Right>
                </CardItem>
                </Card>

            </Content>

        </Container>
        );
      }
}