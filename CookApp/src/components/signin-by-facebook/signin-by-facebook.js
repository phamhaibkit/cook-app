import React, { Component } from 'react';
import { Text, TouchableOpacity, Platform, Modal, View } from 'react-native';

import { FBLogin, FBLoginManager } from 'react-native-facebook-login';
// FBLoginManager.setLoginBehavior(FBLoginManager.LoginBehaviors.WebView);
// import navigationService from '../../services/navigation.service'
import styles from './signin-by-facebook.style';
import navigationService from '../../services/navigation.service';

class SigninByFacebook extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModalLoading: false,
		};
	}

	componentWillUnmount() {
		if (this.timeout) {
			clearTimeout(this.timeout);
		}
	}

	onLoginFbSucess = user => {
		this.showLoading();
		if (Platform.OS === 'ios') {
			const api =
				'https://graph.facebook.com/v3.1/' +
				user.credentials.userId +
				'?fields=name,email,first_name,last_name&access_token=' +
				user.credentials.token;
			fetch(api)
				.then(response => response.json())
				.then(responseData => {
					return this._loginFacebookHandle(
						responseData.email,
						responseData.first_name,
						responseData.last_name,
						responseData.id
					);
				})
				.done();
		} else {
			const email = user.profile.email;
			const firstname = user.profile.first_name;
			const lastname = user.profile.last_name;
			const facebookId = user.profile.id;
			return this._loginFacebookHandle(email, firstname, lastname, facebookId);
		}
	};

	_loginFacebookHandle = (email, firstname, lastname, id) => {
		console.log(this.props)
		// return authService
		// 	.loginFacebook(email, firstname, lastname, id)
		// 	.then(data => {
		// 		this.timeout = setTimeout(() => this.hideLoading(), 200);
		// 		this.hideLoading();
		// 		this.props.setAccountInfo(data);
		// 		FBLoginManager.logout(() => {
		// 			console.log('Logout-Facebook');
		// 		});
		// 		navigationService.goBack();
		// 	})
		// 	.catch(error => {
		// 		FBLoginManager.logout(() => {
		// 			console.log('Logout-Facebook');
		// 		});
		// 		this.timeout = setTimeout(() => this.hideLoading(), 200);
		// 		console.log('ERRRRR', error);
		// 	});
		// navigationService.goBack();
		navigationService.navigate('Details');
	};

	showLoading = () => {
		this.setState({
			...this.state,
			showModalLoading: true,
		});
	};

	hideLoading = () => {
		this.setState({
			...this.state,
			showModalLoading: false,
		});
	};

	render() {
		const { showModalLoading } = this.state;
		console.log('aaaa');
		return (
			<View style={styles.container}>
				<View style={styles.textLogin}>
					<Text style={styles.loginWithFacebookText}>AAAAAAAAA</Text>
				</View>
				<View style={styles.buttonLogin}>
					<FBLogin
						buttonView={
							<TouchableOpacity
								style={styles.loginWithFacebook}
								onPress={() => {
									this.fbLogin.login();
								}}
							>
								<Text style={styles.loginWithFacebookText}>Facebook</Text>
							</TouchableOpacity>
						}
						ref={fbLogin => {
							this.fbLogin = fbLogin;
						}}
						permissions={['email']}
						loginBehavior={FBLoginManager.LoginBehaviors.Native}
						onLogin={user => {
							this.onLoginFbSucess(user);
						}}
					/>
				</View>

			</View>
		);
	}
}

export default SigninByFacebook;
