import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';

import styles from './main-style';
import PageHome from '../page-home/page-home';
import PageSetting from '../page-setting/page-setting';
import PageDetail from '../page-detail/page-detail';
import PageProfile from '../page-profile/page-profile';
import PageSearch from '../page-search/page-search';
import {ASYNC_STORAGE} from '../../utils/variables';

const HomeStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: { screen: PageHome,
      navigationOptions: {
        header: null
      }
    },
    Details: { screen: PageDetail },
    Search: { screen: PageSearch,
      navigationOptions: {
        title: 'Search',
      }
    }
  },
  {
    //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      // header: null,
      // headerStyle: {
      //   backgroundColor: '#42f44b',
      // },
      // headerTintColor: '#FFFFFF',
      // title: 'Home',
      //Header title
    },
  }
);
const SettingsStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Settings: { screen: PageSetting },
    Details: { screen: PageDetail },
    Profile: { screen: PageProfile },
  },
  {
    //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      header: null,
      // headerStyle: {
      //   backgroundColor: '#42f44b',
      // },
      // headerTintColor: '#FFFFFF',
      // title: 'Settings',
      //Header title
    },
  }
);
const bottomTabNav = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Settings: { screen: SettingsStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    },
  }
);

const AppContainer = createAppContainer(bottomTabNav);

const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../../../assets/1.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../../../assets/2.jpg'),
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('../../../assets/3.jpg'),
    backgroundColor: '#22bcb5',
  }
];

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
      isLoad: true
    }
  }

  componentWillMount = async () => {
    const isReal = await this.showRealApp();
    this.setState({
      showRealApp: isReal,
      isLoad: false
    })
  }


  _renderItem = (item) => {
    return (
      <View style={[styles.mainContent, { backgroundColor: item.backgroundColor }]}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }
  _onDone = () => {
    AsyncStorage.setItem(ASYNC_STORAGE.INTRO, 'true');
    this.setState({ showRealApp: true });
  }

  showRealApp = async () => {
    const isIntro = await AsyncStorage.getItem(ASYNC_STORAGE.INTRO);
    if(!isIntro) {
      return false;
    };
    if(isIntro !== 'true'){
      return false;
    }else{
      return true;
    }
  }

  render() {
    const {showRealApp, isLoad } = this.state;
    if (!showRealApp && !isLoad) {
      return <AppIntroSlider renderItem={this._renderItem} slides={slides} onDone={this._onDone}/>
    }
    else {
      return <AppContainer></AppContainer>
    }
  }


}