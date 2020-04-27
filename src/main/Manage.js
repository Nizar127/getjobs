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
     Input,
     CardItem,
     Item,
     Thumbnail,
     auto,
     List,
     ListItem,  
     Content} from 'native-base';




     export default class Manage extends Component {



  static navigationOptions = {
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
  



    // listItemView = () =>{
    //   LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    //   this.setState({ expanded: !this.state.expanded });
    // }
    
  //}
 
    render() {  
     

        return (
        <Container>
            {/* <Content> */}
              <View searchBar style={styles.searchBar}>
                <Item>
                  <Icon name="md-search" size={15} />
                  <Input placeholder="Find Your Requirement" />
                </Item>
                {/* <Button transparent>
                    <Text>Search</Text>
                </Button> */}
              </View>
            {/* </Content> */}
          
              <View style={styles.card}>
                <Card style={styles.carditem}>
                    <CardItem button onPress={() => this.props.navigation.navigate('NewJob')}>
                        <Text style={styles.CardText}>New Job</Text>
                    </CardItem>
                </Card>
                <Card style={styles.carditem}>
                    <CardItem button onPress={() => this.props.navigation.navigate('ProgressBar')}>
                        <Text style={styles.CardText}>Progress</Text>
                    </CardItem>
                </Card>
                </View>
                <View  style={styles.card}>
                <Card style={styles.carditem}>
                  <CardItem button onPress={() => this.props.navigation.navigate('TaskList')}>
                        <Text style={styles.CardText}>Task List</Text>
                    </CardItem>
                </Card>
                <Card style={styles.carditem}> 
                <CardItem button onPress={() => this.props.navigation.navigate('Collab')}>
                        <Text style={styles.CardText}>Collaboration</Text>
                    </CardItem>
                </Card>
                </View>
            
                
        </Container>
        );
      }
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
searchBar: {
  flex:1,
  justifyContent: 'center',
  opacity: 1.0,
  padding: 5
},
card:{
  marginBottom: 32,
    //marginTop: 16,
    //margin: 10,
   // alignItems: 'center'
   flexDirection: 'row',
   padding: 8,
   justifyContent: 'center',
  alignContent: 'space-around',
  position: 'relative'
   
},
CardText:{
  justifyContent: 'center',
  padding: 13,
  alignContent: 'center'
},
carditem:{
  height: 100,
  width: 150,

}

});

