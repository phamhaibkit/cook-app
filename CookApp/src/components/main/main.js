import React, { Component } from 'react';
import { Text, View, Image, AsyncStorage } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';

import styles from './main-style';
import BackButton from '../back-button/back-button';
import SearchButton from '../search-button/search-button';
import PageHome from '../page-home/page-home';
import PageDetail from '../page-detail/page-detail';
import PageProfile from '../page-profile/page-profile';
import PageSearch from '../page-search/page-search';
import PageStore from '../page-store/page-store';
import { ASYNC_STORAGE, IMG } from '../../utils/variables';
import navigationService from '../../services/navigation.service';
import PageRecipe from '../page-recipe/page-recipe';
import PageNoti from '../page-noti/page-noti';
import PageUser from '../page-user/page-user';
import SignIn from '../page-signin/page-signin';
import SignUp from '../page-signup/page-signup';
import PageOTP from '../page-otp/page-otp';
import PageConfirmPassword from '../page-password-confirm/page-password-confirm';
import PageInforUser from '../page-infor-user/page-infor-user';
import IconWithNumber from '../icon-with-number/icon-with-number';
import ForgotPasswordPage from '../forgot-password/forgot-password';
import CollectionList from '../collection-list/collection-list';
import ComboList from '../combo-list/combo-list';


const HomeStack = createStackNavigator({
  // Defination of Navigaton from home screen
  Home: {
    screen: PageHome,
    navigationOptions: {
      header: null
    }
  },
  Details: { screen: PageDetail },
  Search: { screen: PageSearch },
  CollectionList: { 
    screen: CollectionList,
    navigationOptions: {      
      title: 'Bộ Sưu Tập',
      headerTitleStyle: styles.headerTitleStyle,
      headerLeft: <BackButton />,
      headerRight: <SearchButton />,
      headerTitleContainerStyle: styles.headerTitleContainerStyle
    }
  },
  ComboList: { 
    screen: ComboList,
    navigationOptions: {      
      title: 'Combo món',
      headerTitleStyle: styles.headerTitleStyle,
      headerLeft:  <BackButton />,
      headerRight: <SearchButton />,
      headerTitleContainerStyle: styles.headerTitleContainerStyle 
    }
  }
});

const StoreStack = createStackNavigator({
  Store: {
    screen: PageStore,
    navigationOptions: {
      header: null
      // gesturesEnabled: true,
    }
  },
  Details: { screen: PageDetail },
  Profile: { screen: PageProfile }
});
const RecipeStack = createStackNavigator({
  Recipe: { screen: PageRecipe }
});

const NotiStack = createStackNavigator({
  Noti: { screen: PageNoti }
});

const UserStack = createStackNavigator({
  User: {
    screen: PageUser,
    navigationOptions: {
      header: null
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      header: null,
      tabBarVisible: false,
      gesturesEnabled: false
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      header: null,
      tabBarVisible: false,
      gesturesEnabled: false
    }
  },
  OTP: {
    title: 'Xác thực',
    screen: PageOTP,
    navigationOptions: {
      tabBarVisible: false,
      gesturesEnabled: false
    }
  },
  ConfirmPassword: {
    screen: PageConfirmPassword,
    navigationOptions: {
      header: null
    }
  },
  InforUser: {
    screen: PageInforUser,
    navigationOptions: {
      header: null
    }
  },
  ForgotPassword: {
    title: 'Quên mật khẩu',
    screen: ForgotPasswordPage,
    navigationOptions: {
      tabBarVisible: false,
      gesturesEnabled: false,
    },
  }
});

const SignInStack = createStackNavigator({
  ForgotPassword: {
    title: 'Quên mật khẩu',
    screen: ForgotPasswordPage,
    navigationOptions: {
      tabBarVisible: false,
      gesturesEnabled: false,
    },
  }
});

UserStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
};
const bottomTabNav = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Store: { screen: StoreStack },
    Recipe: { screen: RecipeStack },
    Notification: { screen: NotiStack },
    User: { screen: UserStack }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconImg;
        let iconStyle;
        let number = 0;
        // eslint-disable-next-line default-case
        switch (routeName) {
        case 'Home':
          iconImg = focused ? IMG.homeActive : IMG.home;
          iconStyle = styles.home;
          break;
        case 'Store':
          iconImg = focused ? IMG.storeActive : IMG.store;
          iconStyle = styles.store;
          break;
        case 'Recipe':
          iconImg = focused ? IMG.recipeActive : IMG.recipe;
          iconStyle = styles.recipe;
          break;
        case 'Notification':
          number = 3;
          iconImg = (focused || number > 0) ? IMG.bellActive : IMG.bell;
          iconStyle = styles.bell;
          break;
        case 'User':
          iconImg = focused ? IMG.individualActive : IMG.individual;
          iconStyle = styles.individual;
          break;
        }

        return <IconWithNumber iconImg={iconImg} iconStyle={iconStyle} number={number}/>;
      }
    }),
    tabBarOptions: {
      activeTintColor: '#3ABF57',
      inactiveTintColor: '#767676',
    }
  }
);

const AppContainer = createAppContainer(bottomTabNav);

const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../../../assets/1.jpg'),
    backgroundColor: '#59b2ab'
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff',
    // image: require('../../../assets/2.jpg'),
    backgroundColor: '#febe29'
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    // image: require('../../../assets/3.jpg'),
    backgroundColor: '#22bcb5'
  }
];

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
      isLoad: true
    };
  }

  componentWillMount = async () => {
    const isReal = await this.showRealApp();
    this.setState({
      showRealApp: isReal,
      isLoad: false
    });
  };

  _renderItem = (item) => {
    return (
      <View
        style={[styles.mainContent, { backgroundColor: item.backgroundColor }]}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  _onDone = () => {
    AsyncStorage.setItem(ASYNC_STORAGE.INTRO, 'true');
    this.setState({ showRealApp: true });
  };

  showRealApp = async () => {
    const isIntro = await AsyncStorage.getItem(ASYNC_STORAGE.INTRO);
    if (!isIntro) {
      return false;
    }
    if (isIntro !== 'true') {
      return false;
    } else {
      return true;
    }
  };

  render() {
    const { showRealApp, isLoad } = this.state;
    if (!showRealApp && !isLoad) {
      return (
        <AppIntroSlider
          renderItem={this._renderItem}
          slides={slides}
          onDone={this._onDone}
        />
      );
    } else {
      return (
        <AppContainer
          ref={(navigatorRef) => {
            navigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      );
    }
  }
}
