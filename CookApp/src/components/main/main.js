import React, { Component } from 'react';
import { Text, View, Image, AsyncStorage, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import styles from './main-style';
import PageHome from '../page-home/page-home';
import PageDetail from '../page-detail/page-detail';
import PageProfile from '../page-profile/page-profile';
import PageSearch from '../page-search/page-search';
import PageStore from '../page-store/page-store';
import { ASYNC_STORAGE } from '../../utils/variables';
import navigationService from '../../services/navigation.service';
import PageRecipe from '../page-recipe/page-recipe';
import PageNoti from '../page-noti/page-noti';
import PageUser from '../page-user/page-user';
import SignIn from '../page-signin/page-signin';

const HomeStack = createStackNavigator({
	//Defination of Navigaton from home screen
	Home: {
		screen: PageHome,
		navigationOptions: {
			header: null,
		},
	},
	Details: { screen: PageDetail },
	Search: { screen: PageSearch },
	SignIn: {
		screen: SignIn,
		navigationOptions: {
			header: null,
			tabBarVisible: false,
			gesturesEnabled: false,
		},
	},

});

HomeStack.navigationOptions = ({ navigation }) => {
	let tabBarVisible = true;
	if (navigation.state.index > 0) {
		tabBarVisible = false;
	}

	return {
		tabBarVisible,
	};
};

const StoreStack = createStackNavigator({
	Store: {
		screen: PageStore,
		navigationOptions: {
			header: null,
			// gesturesEnabled: true,

		},
	},
	Details: { screen: PageDetail },
	Profile: { screen: PageProfile },
});
const RecipeStack = createStackNavigator({
	Recipe: { screen: PageRecipe },
});

const NotiStack = createStackNavigator({
	Noti: { screen: PageNoti },
});

const UserStack = createStackNavigator({
	User: {
		screen: PageUser,
		navigationOptions: {
			header: null,
		},
	},
});

const bottomTabNav = createBottomTabNavigator(
	{
		Home: { screen: HomeStack },
		Store: { screen: StoreStack },
		Recipe: { screen: RecipeStack },
		Notification: { screen: NotiStack },
		User: { screen: UserStack },
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, horizontal, tintColor }) => {
				const { routeName } = navigation.state;
				// let IconComponent = Ionicons;
				let IconComponent = Icon;
				let iconName;
				switch (routeName) {
					case 'Home':
						iconName = `home-outline`;
						break;
					case 'Store':
						iconName = `store`;
						break;
					case 'Recipe':
						iconName = `chef-hat`;
						break;
					case 'Notification':
						iconName = `bell-outline`;
						break;
					case 'User':
						iconName = `account-circle-outline`;
						break;
				}

				return <IconComponent name={iconName} size={25} color={tintColor} />;
			},
		}),
		tabBarOptions: {
			activeTintColor: 'black',
			inactiveTintColor: '#e4e4e4',
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
		text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
		image: require('../../../assets/3.jpg'),
		backgroundColor: '#22bcb5',
	},
];

export class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showRealApp: false,
			isLoad: true,
		};
	}

	componentWillMount = async () => {
		const isReal = await this.showRealApp();
		this.setState({
			showRealApp: isReal,
			isLoad: false,
		});
	};

	_renderItem = (item) => {
		return (
			<View style={[styles.mainContent, { backgroundColor: item.backgroundColor }]}>
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
			return <AppIntroSlider renderItem={this._renderItem} slides={slides} onDone={this._onDone} />;
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
