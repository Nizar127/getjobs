import React, {Component} from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { createSwitchNavigator,createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import Home from './src/main/home'
import CarouselMap from './src/main/CarouselMap';
import Search from './src/main/search';
import Manage from './src/main/Manage';
import Calendar from './src/main/Calendar';
import Profile from './src/main/profile';
import Scan from './src/main/Scan';
import QRScanner from './src/screen/Scanner/QRScanner';
import ProgressBar from './src/screen/Manage/ProgressBar';
import Collab from './src/screen/Manage/Collab';
import TaskList from './src/screen/Manage/TaskList';
import NewJob from './src/screen/Manage/NewJob';

import Notification from './src/screen/drawer/notifications';
import Payment from './src/screen/drawer/payment';
import Account from './src/screen/drawer/account_settings';
//import Inbox from './src/screen/drawer/Inbox';
import FeedDetail from './src/main/FeedDetail';
import AvailabilityView from './src/screen/user_profile/availabilityView';
import JobComplete from './src/screen/user_profile/jobComplete';
import OnGoingJob from './src/screen/user_profile/OnGoingJob';
import UserProfile from './src/screen/user_profile/UserProfile';
import Icon from 'react-native-vector-icons/Ionicons';

import ProgressList from './src/screen/Progress/ProgressList';
import Personal from './src/screen/account/Personal';
import PersonalSkill from './src/screen/account/PersonalSkill';
import Contact from './src/screen/account/Contact';
import JobType from './src/screen/account/JobType';
import Privacy from './src/screen/account/Privacy';
import Resume from './src/screen/account/Resume';
import WorkSkill from './src/screen/account/WorkSkill';
import Support from './src/screen/account/Support';
import PaymentSetting from './src/screen/account/PaymentSetting';
import Reward from './src/screen/account/Reward';

// const AppStack = createStackNavigator({
//   Home: Home,
//   CarouselMap: CarouselMap
// });

// export default createAppContainer(AppStack);

// componentDidMount() {
//   SplashScreen.hide()
// }




const DashboardTabNavigator = createBottomTabNavigator(
  {
    Home: Home,
    //Search: Search,
    Scan:Scan,
    Manage: Manage,
    Calendar: Calendar,
    Profile: Profile
  },
  
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    }
  }
);
const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator,
    CarouselMap: CarouselMap,
    FeedDetail:FeedDetail,
    ProgressList: ProgressList,
    AvailabilityView: AvailabilityView,
    OnGoingJob: OnGoingJob,
    JobComplete: JobComplete,
    UserProfile: UserProfile,
    Personal:Personal,
    WorkSkill:WorkSkill,
    PaymentSetting:PaymentSetting,
    Contact:Contact,
    Reward:Reward,
    JobType:JobType,
    Privacy:Privacy,
    PersonalSkill:PersonalSkill,
    Support:Support,
    Resume:Resume,
    QRScanner:QRScanner,
    NewJob:NewJob,
    TaskList:TaskList,
    ProgressBar:ProgressBar,
    Collab:Collab
    // PaymentDetails:PaymentDetails,
    // SearchDetails: SearchDetails,
    // JobHome: JobHome,
    // AddBlog: AddBlog,
    // BlogDetail: BlogDetail,
    // FeedDetail: FeedDetail,
    // ViewCalendar: ViewCalendar
    // OnGoingJob: OnGoingJob,
    // AvailabilityView: AvailabilityView,
    // JobComplete: JobComplete,
    // AddJob: AddJob,
    // JobHome: JobHome
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: () =>
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        
      };
    }
  }
);

const CustomDrawerContentComponent = (props) => (
  <SafeAreaView style={{flex: 1}}>
  <View style={{ height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
      <Image source={require('./img/dude.jpg')} style={{height: 120, width: 120, borderRadius: 60}}/>
  </View>
  <View style={{justifyContent: 'center', alignItems:'center', fontSize: 20, fontWeight: 'bold'}}>
    <Text style={{justifyContent: 'center', alignItems:'center', fontSize: 20, fontWeight: 'bold'}}>
      Hamzah
    </Text>
  </View>
  <View>
    <DrawerItems {...props}/>
  </View>
</SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStackNavigator
  },
  Notification:{
    screen: Notification
  },
  Payment:{
    screen: Payment
  },
  // Messaging:{
  //   screen: Inbox
  // },
  Settings: {
    screen: Account
  },
  

},
{
  contentComponent: CustomDrawerContentComponent
});



const AppSwitchNavigator = createSwitchNavigator({
   //Login: { screen: Login},
  //Welcome: { screen: WelcomeScreen },
  Dashboard: { screen: AppDrawerNavigator }
});

export default AppContainer = createAppContainer(AppSwitchNavigator);