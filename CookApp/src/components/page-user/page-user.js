
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, AsyncStorage, Image } from 'react-native';
// import styles from './page-user-style';
// import { Avatar } from 'react-native-elements';
import { LANG } from '../../lang/lang';
import Avatar from '../avatar/avatar';
import { IMG, CSS } from '../../utils/variables';

export default class PageUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {}
		};
	}

	componentWillMount() {
		const user = this.retrieveData();
	}

	retrieveData = async () => {
		try {
			await AsyncStorage.getItem('userInfo').then((value) => {
				const user = JSON.parse(value);
				this.setState({
					user,
				});
			});
		} catch (error) {
			console.log(error, 'error');
		}
	};

	render() {
		const { user } = this.state;
		console.log(user, 'user');
		const nameUser = `${user.firstname} ${user.lastname}`;
		return (
			<ScrollView style={styles.container}>
				<View style={[styles.topPageContainer, CSS.padding20]}>
					<View>
						<Avatar style={styles.avatar} user={user} size={80} />
					</View>
					<View style={styles.inforUser}>
						<View>
							<Text style={styles.userName}>{nameUser}</Text>
						</View>
						<View style={styles.aboutUser}>
							<Text>{`3 ${LANG.RECIPE} `}</Text>
							<Text>{`20 ${LANG.FOLLOWER}`}</Text>
						</View>
					</View>
					<View style={CSS.iconImage}>
						<Image source={IMG.arrowRight} style={styles.arrowRightImg} resizeMode="contain" />
					</View>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	topPageContainer: {
		paddingVertical: 20,
		backgroundColor: '#f0f0f0',
		flexDirection: 'row',
		// justifyContent:'space-around'
	},
	inforUser: {
		flexDirection: 'column',
		paddingHorizontal: 20,
		alignItems: 'flex-start',
		justifyContent: 'space-around'
	},
	avatar: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	userName: {
		fontSize: 23,
		fontWeight: 'bold',
		color: 'black',
	},
	aboutUser: {
		flexDirection: 'row'
	},
	arrowRightImg: {
		width: 18,
		// height: 20,
	}
});
