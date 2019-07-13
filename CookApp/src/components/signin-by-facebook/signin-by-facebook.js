import React, { Component } from 'react';
import { Text, TouchableOpacity, Platform, Modal, View, AsyncStorage } from 'react-native';

// import { FBLogin, FBLoginManager } from 'react-native-facebook-login';
import Icon from 'react-native-vector-icons/FontAwesome';
// FBLoginManager.setLoginBehavior(FBLoginManager.LoginBehaviors.WebView);
// import navigationService from '../../services/navigation.service'
import { connect } from 'react-redux';
import styles from './signin-by-facebook.style';
import navigationService from '../../services/navigation.service';
import { setAccountInfo } from '../../reducers/page-account-info.reducer';
import authService from '../../services/auth.service';

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

	onLoginFbSucess = (user) => {
		this.showLoading();
		if (Platform.OS === 'ios') {
			const api = `https://graph.facebook.com/v3.1/${user.credentials.userId}?fields=name,email,first_name,last_name&access_token=${user.credentials.token}`;
			fetch(api)
				.then(response => response.json())
				.then((responseData) => {
					return this._loginFacebookHandle(
						responseData.email,
						responseData.first_name,
						responseData.last_name,
						responseData.id
					);
				})
				.done();
		} else {
			console.log(user);
			const email = user.profile.email;
			const firstname = user.profile.first_name;
			const lastname = user.profile.last_name;
			const facebookId = user.profile.id;
			return this._loginFacebookHandle(email, firstname, lastname, facebookId);
		}
	};

	_loginFacebookHandle = (email, firstname, lastname, id) => {
		console.log(this.props);
		return authService
			.loginFacebook(email, firstname, lastname, id)
			.then((data) => {
				console.log(data, 'Logged');
				this.timeout = setTimeout(() => this.hideLoading(), 200);
				this.hideLoading();
				this.props.setAccountInfo(data);
				// FBLoginManager.logout(() => {
				// 	console.log('Logout-Facebook');
				// });
				this._retrieveData();
				navigationService.goBack();
			})
			.catch((error) => {
				// FBLoginManager.logout(() => {
				// 	console.log('Logout-Facebook');
				// });
				this.timeout = setTimeout(() => this.hideLoading(), 200);
				console.log('ERRRRR', error);
			});
	};

	_retrieveData = async () => {
		try {
			const value = await AsyncStorage.getItem('userInfo');
			if (value !== null) {
				// We have data!!
			}
		} catch (error) {
			console.log(error, 'error');
		}
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
		
		return (
			<View style={styles.container}>
				<View style={styles.loginFbView}>
					<TouchableOpacity
						style={styles.loginWithFacebook}
						onPress={() => {
							this.fbLogin.login();
						}}
					>
						<Icon name="facebook-f" size={26} color="white" style={styles.iconFacebook}/>
						<Text style={styles.loginWithFacebookText}>Đăng nhập với Facebook</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.buttonLogin}>
					{/* <FBLogin
						style={{ flex: 1 }}
						ref={(fbLogin) => {
							this.fbLogin = fbLogin;
						}}
						permissions={['email', 'user_photos']}
						loginBehavior={FBLoginManager.LoginBehaviors.Native}
						onLogin={(user) => {
							this.onLoginFbSucess(user);
						}}
					/> */}
				</View>
			</View>
		);
	}
}

function mapStateToProps(state) {
	return {};
}
export default connect(
	mapStateToProps,
	{ setAccountInfo }
)(SigninByFacebook);
