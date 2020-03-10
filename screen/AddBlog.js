import React, {Component} from 'react';
import {StyleSheet, ScrollView, Image, TextInput, Alert} from 'react-native';
import { 
    Container, 
    Header, 
    Content, 
    View, 
    Form,
    Item, 
    Input, 
    Label,
    Card,  
    Right, 
    auto, 
    CardItem,
    Thumbnail, 
    Text, 
   Picker,
   DatePicker,
   Footer,
   Icon,
   FooterTab,
    Button } from 'native-base';
// import {addJob} from '../service/DataService'; 


export default class AddBlog extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //       blogname: null,
    //       blogdesc: null

    //     };
    //   }
  
    //   setBlogName = (value) => {
    //     this.setState=({jobname:value});
    //   }

    //   setBlogDesc = (value) => {
    //     this.setState=({blogdesc:value});
    //   }

    //   saveData = () =>{
    //     if(this.state.blogname && this.state.blogdesc){
    //       if(isNaN(this.state.salary)){
    //         Alert.alert('Status','Invalid Figure!');
    //       }
    //        else{
    //          addBlog(this.state.blogname, this.state.blogdesc);
    //        }
    //     } else{
    //        Alert.alert('Status','Empty Field(s)!');
    //     }
    //   }
  
    render() {
      return (
          <Container>
            <Content padder>
        <Text style={{textAlign: "center", height: 40, fontWeight: "bold", marginTop: 20}}>Details</Text>
        <Form>
        <Item fixedLabel last>
              <Label>Title</Label>
              <Input />
        </Item>
        <Item fixedLabel last>
              <Label>What Do You Have to Say</Label>
              <Input/>
        </Item>
      
        </Form>

          <Button block success last style={{marginTop: 50}}>
            <Text style={{fontWeight: "bold"}}>Post Now</Text>
          </Button>
        </Content>
            
        <Footer>
          <FooterTab>
          <Button vertical onPress={() => this.props.navigation.navigate('blog')}>
              <Icon name="journal" />
              <Text>Home</Text>
            </Button>
          </FooterTab>
        </Footer>
         </Container>

            
      );
    }
  }
  
  const styles = StyleSheet.create({
    button: {
      backgroundColor: 'white',
      height: 70,
      marginHorizontal: 20,
      borderRadius: 35,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 5,
      shadowOffset: {width: 2, height: 2},
      shadowColor: 'black',
      shadowOpacity: 0.2
    },
    textInput:{
      height: 50,
     borderRadius: 25,
       borderWidth: 0.5,
      marginHorizontal: 20,
      paddingLeft: 10,
      marginVertical: 5,
      borderColor:'rgba(0,0,0,0.2)'
  },
  })