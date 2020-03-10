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
import {addJob} from '../service/DataService'; 


export default class AddJob extends Component {
    constructor() {
        super();
        this.state = {
          jobname: null,
          jobdesc: null,
          worktype: null,
          salary: null,
          peoplenum: null,
          time:0,
          location: null

        };
        this.state = { chosenDate: new Date() };
        this.setDate = this.setDate.bind(this);
      }
  
      setJobName = (value) => {
        this.setState=({jobname:value});
      }

      setJobDesc = (value) => {
        this.setState=({jobdesc:value});
      }

      selectWorkType = (value) => {
        this.setState=({worktype:value});
      }

      setSalary = (value) => {
        this.setState=({salary:value});
      }

      setPeopleNum = (value) => {
        this.setState=({peoplenum:value});
      }

      selectTime = (value) => {
        this.setState=({time:value});
      }

      setDate(newDate) {
        this.setState({ chosenDate: newDate });
      }

      setLocation = (value) => {
        this.setState=({location:value});
      }

      saveData = () =>{
        if(this.state.jobname && this.state.jobdesc && this.state.worktype && this.state.salary && this.state.peoplenum && this.state.chosenDate && this.state.location){
          if(isNaN(this.state.salary)){
            Alert.alert('Status','Invalid Figure!');
          }
           else{
             addJob(this.state.jobname, this.state.jobdesc, this.state.worktype, this.state.salary, this.state.peoplenum, this.state.chosenDate, this.state.location);
           }
        } else{
           Alert.alert('Status','Empty Field(s)!');
        }
      }
  
    render() {
      return (
          <Container>
            <Content padder>
        <Text style={{textAlign: "center", height: 40, fontWeight: "bold", marginTop: 20}}>Details</Text>
        <Form>
        <Item fixedLabel last>
              <Label>Job Name</Label>
              <Input onChangeText={this.setJobName} />
        </Item>
        <Item fixedLabel last>
              <Label>Job Description</Label>
              <Input onChangeText={this.setJobDesc} />
        </Item>
        <Item fixedLabel lasy>
            <Label>WorkType</Label>
            <Input onChangeText={this.selectWorkType} />
        </Item>
        {/* <Item fixedLabel picker last>
          <Label>Work Type</Label>
          <Picker 
          mode="dropdown" 
          iosIcon={<Icon name="ios-arrow-down-outline" />}
          style={{ width: undefined }}
          placeholder="Select Major"
          placeholderStyle={{ color: "#bfc6ea" }}
          placeholderIconColor="#007aff"
          selectedValue={this.state.worktype}
          onValueChange={this.selectWorkType}
          Title="Work Type"
          >
            <Picker.Item label="Urgent" value="Urgent" />
            <Picker.Item label="Contract" value="Contract" />
            <Picker.Item label="Milestones" value="Milestones" />
            <Picker.Item label="Hire As You Need" value="HireNeed" />
          </Picker>
        </Item> */}

        <Item fixedLabel last>
              <Label>Salary</Label>
              <Input onChangeText={this.setSalary} />
        </Item>

        <Item fixedLabel last>
              <Label>Number of People</Label>
              <Input onChangeText={this.setPeopleNum} />
        </Item>

        <DatePicker
            defaultDate={new Date(2019, 4, 4)}
            minimumDate={new Date(2019, 1, 1)}
            maximumDate={new Date(2019, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
            disabled={false}
            />
            <Text>
              Date: {this.state.chosenDate.toString().substr(4, 12)}
            </Text>

            <Item fixedLabel last>
              <Label>Location</Label>
              <Input onChangeText={this.setLocation} />
        </Item>

        </Form>

          <Button block success last style={{marginTop: 50}} onPress={this.saveData}>
            <Text style={{fontWeight: "bold"}}>Hire Now</Text>
          </Button>
        </Content>
            
        <Footer>
          <FooterTab>
          <Button vertical onPress={() => {this.props.navigation.navigate('Feed')}}>
              <Icon name="home" />
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