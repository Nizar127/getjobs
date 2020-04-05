import React, {Component, useState} from 'react';
import {View, Platform, Text, StyleSheet, Alert, LayoutAnimation, UIManager} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';  
import { 
  Container, 
  Header,
   Left,
    Body,
    Right, 
    Button, 
     Title, 
     Card,
     CardItem,
     Item,
     Thumbnail,
     auto,
     List,
     ListItem,  
     Content} from 'native-base';




const Manage = () =>{
  const [expanded, setExpanded] = useState(false);


  navigationOptions = {
    title: 'Manage',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-briefcase" style={{ color: tintColor }} size={20} />
      ),
    headerStyle: {
    backgroundColor: '#f45fff',
  },

    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
 
  }
  
  // constructor(){
  //   super();

  //   this.state = { expanded: false}

    // if (Platform.os === 'android'){
    //   UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    // }

    // if (Platform.OS === "android") {
    //   UIManager.setLayoutAnimationEnabledExperimental &&
    //     UIManager.setLayoutAnimationEnabledExperimental(true);
    //   LayoutAnimation.spring();
    // }

    if (
      Platform.OS === "android" &&
      UIManager.setLayoutAnimationEnabledExperimental
    ) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    // listItemView = () =>{
    //   LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    //   this.setState({ expanded: !this.state.expanded });
    // }
    
  //}
 
    // render() {  
     

        return (
            <Container>
            
            <Content>
                <Card style={{flex: 1, flexDirection:'column', alignItems:'center'}}>
                  {/* This is testing for expand cardview on press */}
                  <CardItem button onPress={()=>{LayoutAnimation.configureNext(LayoutAnimation.Presets.spring); setExpanded(!expanded);}}>
                  {/* <CardItem activeOpacity={0.8} bordered button onPress={this.listItemView}> */}
                  {/* <Item success>
                  <Icon name='checkmark-circle'/>

                    </Item> */}
                      <Left onPress={()=>{expanded ? "collapse" : "expand"}}>
                          <Thumbnail source={require('../../img/dude.jpg')}/>
                          <Body> 
                              <Text>Waiter Panorama Signature</Text>
                              <Text note style={{flex:1, flexDirection: 'row', justifyContent: 'space-evenly'}}>We looking for people to work starting at 7 PM until 12 AM</Text>
                              <Icon name='md-calendar'/><Text note style={{flex:1, flexDirection: 'row', justifyContent:'space-around'}}>15hb January</Text>
                          </Body>
                      </Left>
                      <Right>
                          {/* <Text note style={{fontStyle:'bold', backgroundColor:'#3BFD0F', fontSize:'20'}}>Contract</Text> */}
                          <Button transparent success>
                            <Text>Contract</Text>
                          </Button>
                      </Right>
                  </CardItem>
                  </Card>
                  {/* <Container style={{height: this.state.expanded ? null : 0, overflow: 'hidden'}}> */}
                  {expanded && (
                         <Container> 
                  <Content>
          <List >
            <ListItem avatar style={styles.listitem}>
              <Left>
                 <Thumbnail source={require('../../img/coding.jpg')} style={{padding: 10}}/>
              </Left>
              <Body>
                <Text>Android Front-End Developer for Car Feature on GetFar App</Text>
                <Text>GetFar, Inc. </Text>
                <Text note>Developed Basic UI/UX for the System</Text>
              </Body>
              <Right>
                  <Icon name="md-checkmark-circle" size={50} />
                  <Icon name="md-close-circle" size={50} />
              </Right>
            </ListItem>
            <ListItem avatar style={styles.listitem}>
              <Left>
                 <Thumbnail source={require('../../img/coding.jpg')} style={{padding: 10}}/>
              </Left>
              <Body>
              <Text>Android Back-End Developer for Foot Massage System on ForRest App</Text>
                <Text>ForRest, Inc. </Text>
                <Text note>Developed Basic Database Integration for the System</Text>
              </Body>
              <Right>
                  <Icon name="md-checkmark-circle" size={50} />
                  <Icon name="md-close-circle" size={50} />
              </Right>
            </ListItem>
            <ListItem avatar style={styles.listitem}>
              <Left>
                 <Thumbnail source={require('../../img/coding.jpg')} style={{padding: 10}}/>
              </Left>
              <Body>
                <Text>Android Front-End Developer for Foot Massage System on GetMusic App</Text>
                <Text>GetMusic, Inc. </Text>
                <Text note>Developed Basic UI/UX for the System</Text>
              </Body>
              <Right>
                  <Icon name="md-checkmark-circle" size={50} />
                  <Icon name="md-close-circle" size={50} />
              </Right>
            </ListItem>
            <ListItem avatar style={styles.listitem}>
              <Left>
                 <Thumbnail source={require('../../img/coding.jpg')} style={{padding: 10}}/>
              </Left>
              <Body>
                <Text>Web App Front-End Developer for Car Feature on GetFar App</Text>
                <Text>GetFar, Inc. </Text>
                <Text note>Developed Basic UI/UX for the System in Web Application</Text>
              </Body>
              <Right>
                  <Icon name="md-checkmark-circle" size={50} />
                  <Icon name="md-close-circle" size={50} />
              </Right>
            </ListItem>
          </List>
        </Content>
                  </Container>
                  )}

                <Card>
                <CardItem bordered button onPress={() => Alert.alert("Job Done!!")}>
                    <Left>
                        <Thumbnail source={require('../../img/dude.jpg')}/>
                    </Left>
                    <Body>
                        <Text>Monica</Text>
                        <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                        <Icon name='md-calendar' size={20}/><Text note style={{flex:1, flexDirection: 'row',justifyContent:'space-evenly'}}></Text>
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
     // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom:10,
    width: 150,
    height: auto
  },
 listitem: {
     fontFamily: 'Montserrat-Regular'
     
 }

});

export default Manage;