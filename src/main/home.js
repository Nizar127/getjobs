import React, { Component } from 'react';
import { StyleSheet, Image, Animated, Alert, FlatList, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Header, TabHeading, View, Card, Tab, Form, Item, Input, CardItem, Thumbnail, Text, Left, Body, Button, Right, Fab, Separator, Content } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
import { auth } from '@react-native-firebase/auth';
import PushNotification from 'react-native-push-notification'
import RemotePushController from '../service/RemotePushController';
//import { notificationManager } from '../service/notificationManager'

//what we going to do in this home.js is
//first: get the collection from job_list n display within card with button available
//then: once user click book now, we collect the user information and add into hiring collections
//then we send notification to job_creator regarding the application


export default class Home extends Component {

  constructor() {
    super();
    //this.localNotify = null
    //this.senderID = "407221360370"
    //const UserID = firebase.auth().currentUser.uid;
    this.hireRef = firestore().collection('Hiring');
    this.userRef = firestore().collection('Users');
    this.applyRef = firestore().collection('Job_list');


    this.state = {
      show: true,
      jobs: [],
      job_id: '',
      userID: '',
      applyID: '',
      jobname: '',
      userId: '',
      isVisible: false,
      skills: '',
      experience: '',
      profileImage: '',
      selfdescription: '',
      key: item.key,
      job_seeker_name = '',
      jobCreatorID = '',
      jobCreatorName = '',
      jobDescription = '',
      job_seekerImage = '',
      jobWorkType = '',
      workingLocation = '',
      lat = '',
      lng = '',
      job_seeker_salary = '',
      startDate =''

    };

    PushNotification.configure({

      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        console.log('TOKEN:', token);
      },

      // (required) Called when a remote or local notification is opened or received
      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);
      },

      // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications) 
      senderID: "407221360370",

      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true
      },

      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,

      /**
        * (optional) default: true
        * - Specified if permissions (ios) and token (android and ios) will requested or not,
        * - if not, you must call PushNotificationsHandler.requestPermissions() later
        */
      requestPermissions: true,
    });
  }

  static navigationOptions = {
    title: 'Feed',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-compass" style={{ color: tintColor }} size={20} />
    ),
    headerTitle: {
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
  //show modal
  displayModal(show) {
    this.setState({ isVisible: show })
  }


  componentDidMount() {
    //SplashScreen.hide();
    this.unsubscribe = this.applyRef.onSnapshot(this.getCollection);
    //for notify user
    //this.localNotify = notificationManager
    //this.localNotify.configure(this.onRegister, this.onNotification, this.onOpenNotification, senderID)
    this.checkPermission();
    this.createNotificationListeners();
  }

  componentWillUnmount() {
    this.unsubscribe();
    this.notificationListener();
    this.notificationOpenedListener();
  }


  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      this.getToken();
    } else {
      this.requestPermission();
    }
  }

  //3
  async getToken() {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    if (!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
      if (fcmToken) {
        // user has a device token
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    }
  }

  //2
  async requestPermission() {
    try {
      await firebase.messaging().requestPermission();
      // User has authorised
      this.getToken();
    } catch (error) {
      // User has rejected permissions
      console.log('permission rejected');
    }
  }

  async createNotificationListeners() {
    /*
    * Triggered when a particular notification has been received in foreground
    * */
    this.notificationListener = firebase.notifications().onNotification((notification) => {
      const { title, body } = notification;
      this.sendNotification(title, body);
    });

    /*
    * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
    * */
    this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
      const { title, body } = notificationOpen.notification;
      this.showAlert(title, body);
    });

    /*
    * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
    * */
    const notificationOpen = await firebase.notifications().getInitialNotification();
    if (notificationOpen) {
      const { title, body } = notificationOpen.notification;
      this.showAlert(title, body);
    }
    /*
    * Triggered for data only payload in foreground
    * */
    this.messageListener = firebase.messaging().onMessage((message) => {
      //process data message
      console.log(JSON.stringify(message));
    });
  }


  getCollection = (querySnapshot) => {
    const jobs = [];
    querySnapshot.forEach((res) => {
      const { jobname, uniqueId, jobCreatorName, jobdesc, worktype, lat, lng, url, salary, peoplenum, chosenDate, time, location } = res.data();
      jobs.push({
        key: res.id,
        res,
        jobCreatorName,
        jobname,
        uniqueId,
        jobdesc,
        lat,
        lng,
        url,
        worktype,
        salary,
        peoplenum,
        chosenDate,
        time,
        location
      });
    });
    this.setState({
      jobs,
      isLoading: false
    })
  }

  // getJobCollection = () => {
  //   this.applyRef.doc(id).get().then(doc => {
  //     //var uid = doc.get('uid');
  //     var job_seeker_name = doc.get('username'),
  //     var job_id = doc.get('id'),
  //     var jobCreatorID = doc(id).get('uid'),
  //     var jobCreatorName = doc(id).get('jobCreatorName'),
  //     var jobDescription = doc(id).get('jobdesc'),
  //     var job_seekerImage = doc(id).get('url'),
  //     var jobname = doc(id).get('jobname'),
  //     var jobWorkType = doc(id).get('worktype'),
  //     var workingLocation = doc(id).get('location'),
  //     var lat = doc(id).get('lat'),
  //     var lng = doc(id).get('lng'),
  //     var job_seeker_salary = doc(id).get('salary'),
  //     var startDate = doc(id).get('chosenDate')
  //   })
  // }



  setExperience = (value) => {
    this.setState({ experience: value })
  }

  setSkills = (value) => {
    this.setState({ skills: value })
  }

  setSelfDescription = (value) => {
    this.setState({ selfDescription: value })
  }

  renderSuccess = () => {
    if (this.state.show == true) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  };

  onRegister(token) {
    console.log("[Notification] Registered:", token)
  }

  onNotification(notify) {
    console.log("[Notification] onNotification:", notify)
  }

  onOpenNotification(notify) {
    console.log("[Notification] onOpenNotification:", notify)
    alert("Open Notification" + notify.title)
  }


  sendNotification(title, body) {
    PushNotification.localNotification({
      /* Android Only Properties */
      //id: 0, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
      //ticker: "My Notification Ticker", // (optional)
      //autoCancel: true, // (optional) default: true
      largeIcon: "ic_launcher", // (optional) default: "ic_launcher"
      smallIcon: "ic_notification", // (optional) default: "ic_notification" with fallback for "ic_launcher"
      bigText: "My big text that will be shown when notification is expanded", // (optional) default: "message" prop
      subText: "This is a subText", // (optional) default: none
      color: "red", // (optional) default: system default
      //vibrate: true, // (optional) default: true
      vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
      //tag: "some_tag", // (optional) add tag to message
      //group: "group", // (optional) add group to message
      ongoing: true, // (optional) set whether this is an "ongoing" notification
      priority: "high", // (optional) set notification priority, default: high
      visibility: "private", // (optional) set notification visibility, default: private
      importance: "high", // (optional) set notification importance, default: high
      allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
      ignoreInForeground: false, // (optional) if true, the notification will not be visible when the app is in the foreground (useful for parity with how iOS notifications appear)



      /* iOS and Android properties */
      title: "My Notification Title", // (optional)
      message: "My Notification Message", // (required)
      playSound: false, // (optional) default: true
      soundName: "default", // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
      /// number: 10, // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
      //repeatType: "day", // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
      actions: '["Yes", "No"]', // (Android only) See the doc for notification actions to know more
    });
  }

  sendApplication = (id) => {
    //get id from job list
    let username = auth().currentUser.displayName;

    let dbref = firebase.firestore().collection('Job_list').doc(id).get();
    dbref.then(doc => {
      this.setState({
        ...this.state,
        uid: doc.get('uid'),
        //job_seeker_name: doc.get('username'),
        job_id: doc.get('id'),
        jobCreatorID: doc(id).get('uid'),
        jobCreatorName: doc(id).get('jobCreatorName'),
        jobDescription: doc(id).get('jobdesc'),
        job_seekerImage: doc(id).get('url'),
        jobname: doc(id).get('jobname'),
        jobWorkType: doc(id).get('worktype'),
        workingLocation: doc(id).get('location'),
        lat: doc(id).get('lat'),
        lng: doc(id).get('lng'),
        job_seeker_salary: doc(id).get('salary'),
        startDate: doc(id).get('chosenDate')
      });
    });

    // dbref.onSnapshot(doc => {
    //   this.setState({ 
    //     //doc: doc.id 

    //   });
    // })

    if (this.state.experience && this.state.skills && this.state.selfdescription) {

      this.hireRef.add({
        userID = auth().currentUser,
        job_seeker_name = username,
        jobCreatorID = this.state.job_id,
        jobCreatorName = this.state.job_creator_name,
        jobDescription = this.state.jobDescription,
        job_seekerImage = this.state.job_seekerImage,
        jobName = this.state.jobname,
        job_seekerSalary = this.state.job_seeker_salary,
        jobWorkType = this.state.jobWorkType,
        workingLocation = this.state.workingLocation,
        lat = this.state.lat,
        lng = this.state.lng,
        startDate = this.state.startDate,
        ref_skills: this.state.skills,
        ref_experienece: this.state.experience,
        ref_selfDescribe: this.state.selfdescription


      }).then((res) => {
        this.setState({
          skills: '',
          experience: '',
          selfdescription: '',
        });
        this.props.navigation.navigate('Home');
        //send push notification to job creator
        this.sendNotification();
        //send push notification to job_creator
      })
        .catch((err) => {
          console.error("Error found: ", err);
          // this.setState({
          //   isLoading: false,
          // });
        });
    }
  }





  render() {

    return (
      <ScrollView>
        <Separator>
          <Text style={{ alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>Available Job</Text>
        </Separator>
        <Header>
          <View searchBar style={Style.searchBar}>
            <Item>
              <Icon name="md-search" size={15} />
              <Input placeholder="Find Your Requirement" />
            </Item>
            {/* <Button transparent>
                    <Text>Search</Text>
                </Button> */}
          </View>
        </Header>
        <Container>
          <Content padder>
            <Text style={{ textAlign: "center", height: 40, fontWeight: "bold", marginTop: 20 }}>List of Available Job</Text>
            <Modal
              animationType={"slide"}
              transparent={false}
              visible={this.state.isVisible}
              onRequestClose={() => {
                Alert.alert('Modal has now been closed.');
              }}>

              <Thumbnail
                source={require('../../img/dude.jpg')}
                style={styles.image} />


              <Item fixedLabel last>
                <Label>Please Describe Yourself For This Job</Label>
                <Input onChangeText={this.setSelfDescription} />
              </Item>

              <Item fixedLabel last>
                <Label>Please State Your Related Skills</Label>
                <Input onChangeText={this.setSkills} />
              </Item>

              <Item fixedLabel last>
                <Label>Please State Your Related Experience</Label>
                <Input onChangeText={this.setExperience} />
              </Item>


              <Text
                style={styles.closeText}
                onPress={() => {
                  this.displayModal(!this.state.isVisible);
                }}>Close Modal
                  </Text>

              <Button success style={styles.addButton} onPress={this.sendApplication(item.key)}>
                <Text>Submit</Text>
              </Button>
            </Modal>
            <FlatList
              data={this.state.jobs}

              renderItem={({ item, index }) => {
                return (

                  <Card key={index} onPress={() => this.props.navigation.navigate('FeedDetail', {
                    userkey: item.key
                  })}>
                    <CardItem><Text style={{ fontStyle: 'bold', margin: 10, textAlign: 'center', textColor: 'green' }}>{item.worktype}</Text></CardItem>
                    <CardItem cardBody bordered button>
                      <Image source={{ uri: item.url }} style={{ height: 200, width: null, flex: 1 }} />
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Text>{item.jobname}</Text>
                        <Text note>{item.jobCreatorName}</Text>

                      </Body>
                    </CardItem>
                    <CardItem>
                      <Text>RM  {item.salary}/job</Text>
                    </CardItem>
                    <CardItem style={{ justifyContent: 'center' }}>

                      <Button rounded primary onPress={() => { this.setState({ key: item.key }), this.displayModal(true) }}>
                        <Text>Apply Now</Text>
                      </Button>
                    </CardItem>
                  </Card>

                )
              }}
            />

          </Content>


          <Fab style={{ backgroundColor: '#f8f8fa', borderColor: '#000000' }} onPress={() => this.props.navigation.navigate('CarouselMap')}>

            <Icon android name="md-compass" style={{ color: '#000000' }} />
          </Fab>
          <RemotePushController />
        </Container>
      </ScrollView>

    );

  }
}


const Style = StyleSheet.create({

  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 150,
    backgroundColor: '#E91E63',
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  searchBar: {
    flex: 1,
    justifyContent: 'center',
    padding: 5
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  },
  image: {
    marginTop: 150,
    marginBottom: 10,
    width: '100%',
    height: 350,
  },
  text: {
    fontSize: 24,
    marginBottom: 30,
    padding: 40,
  },
  closeText: {
    fontSize: 24,
    color: '#00479e',
    textAlign: 'center',
  },
  closeButton: {
    display: 'flex',
    height: 60,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF3974',
    shadowColor: '#2AC062',
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 10,
      width: 0
    },
    shadowRadius: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 22,
  },
})


    // const FIREBASE_API_KEY = "AAAAXtBI1vI:APA91bEA2h5OmoeZlmZvl1Ds6WH6l4SLwbH2B-F1iEyCz22EY9vHm81iLk3rXmr9pewd2TqoAp1Mkwd_sRDr9nmokYh8LiPIysJwTzeInzLKUziW2eS7ziY5V31cGFi8CkCRncmL974c";
    // const message = {
    //   registration_ids: [],
    //   notification: {
    //     title: 'Job Application',
    //     imageUrl: this.state.job_seekerImage,
    //     body: this.state.userID,
    //     "vibrate": 1,
    //     "sound": 1,
    //     "show_in_foreground": true,
    //     "priority": "high",
    //     "content_available": true,

    //   }
    // }

    // let headers = new Header({
    //   "Content-Type": "application/json",
    //   "Authorization": "keys" + FIREBASE_API_KEY
    // });

    // let response = await fetch("https://fcm.googleapis.com/fcm/send", { method: "POST", headers, body: JSON.stringify(message) });
    // response = await response.json();
    // console.log(response);

      //   sendApplication = () => {
  // //first, get the document id of particular onpress
  // //assign jobid to job id in state
  // //assign userid to user id in state
  // //send the application to jobcreatorname

  //     let user = firebase.auth().currentUser;
  //     let application = firestore().collection('Job_list').doc();
  //     application.get().then(() => {
  //       data = doc.id
  //     })

  //     getjobref = firestore().collection('Hire');
  //     this.getjobref.add({
  //       uid: uid,
  //       profileImage: profileImage,
  //       jobId: jobId,
  //       jobCreatorName: jobCreatorName,
  //       jobname: jobname,
  //       uniqueId: uniqueId,
  //       jobdesc: jobdesc,
  //       worktype: worktype,
  //       salary: salary,
  //       url: url,
  //       lat: lat,
  //       lng: lng,
  //       peoplenum: peoplenum,
  //       chosenDate: chosenDate,
  //       location: location,
  //     })

  //   }


    // async componentDidMount() {
  //   const enabled = await firebase.messaging().hasPermission();
  //   if (enabled) {
  //     firebase
  //       .messaging()
  //       .getToken()
  //       .then(fcmToken => {
  //         if (fcmToken) {
  //           console.log(fcmToken);
  //           firebase
  //             .collection('Notification' + Math.floor(Math.random() * Math.floor(1000)))
  //             .set({
  //               email: auth().currentUser.email,
  //               notification_token: fcmToken,
  //               created_at: Date.now(),
  //             })
  //             .then(res => {
  //               console.log(res);
  //             });
  //         } else {
  //           alert("user doesn't have a device token yet");
  //         }
  //       });
  //   } else {
  //     alert("no");
  //   }

  //   let fcmToken = await AsyncStorage.getItem('fcmToken');
  //   console.log("Fcmtoken from AsyncStorage: ", fcmToken);
  //   if (!fcmToken) {
  //     fcmToken = await firebase.messaging().getToken();
  //     if (fcmToken) {
  //       console.log("Fcmtoken from firebase:", fcmToken);
  //       await AsyncStorage.setItem('fcmToken', fcmToken);
  //     }
  //   }

  // }


     // userId: firebase.auth().currentUser.uid,
        // job_seeker_name: username,
        // job_id: doc.job,
        // jobCreatorID: this.applyRef.doc(id).where('uid'),
        // job_creator_name: this.applyRef.doc(id).where('jobCreatorName'),
        // jobDescription: this.applyRef.doc(id).where('jobdesc'),
        // job_seekerImage: this.userRef.doc(id).where('profileImage'),
        // jobname: this.applyRef.doc(id).where('jobname'),
        // worktype: this.applyRef.doc(id).where('worktype'),
        // workingLocation: this.applyRef.doc(id).where('location'),
        // lat: this.applyRef.doc(id).where('lat'),
        // lng: this.applyRef.doc(id).where('lng'),
        // workingDate: this.applyRef.doc(id).where('chosenDate'),
        // job_seeker_salary: this.applyRef.doc(id).where('salary'),
        // ref_skills: this.state.skills,
        // ref_experienece: this.state.experience,
        // ref_selfDescribe: this.state.selfdescription