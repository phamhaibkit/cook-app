import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Modal, Image, KeyboardAvoidingView } from 'react-native';

import styles from './page-signin-style';
import { LANG } from '../../lang/lang';

// import { connect } from 'react-redux';

import navigationService from '../../services/navigation.service';

import SigninByFacebook from '../signin-by-facebook/signin-by-facebook';
import TextInputRender from '../text-input/text-input';
import { IMG } from '../../utils/variables';

const TYPE_MODAL = {
	EMAIL: 'email',
	PASSWORD: 'password',
};

class PageSignin extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			[TYPE_MODAL.EMAIL]: {
				value: '',
				err: '',
			},
			[TYPE_MODAL.PASSWORD]: {
				value: '',
				err: '',
			},
			showModalLoading: false,
			notMatch: false,
		};
	}


	/**
	 * On get value for textinput
	 */
	onChangeText = (value, err, type) => {
		this.setState({
			[type]: {
				value,
				err,
			},
			notMatch: false,
		});
	};

	onSubmitEditing = () => {
		this.onPressSignin();
	};

	render() {
		let { email, password, showModalLoading, notMatch } = this.state;
		// return <KeyboardAvoidingView behavior="position" style={{ flex: 1 }}>
		return <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
			<View style={[styles.container]}>
				<View style={styles.loginPage}>
					<View style={styles.headerLayoutLogin}>
						<View style={styles.logo}>
							<Text style={styles.nameApp}>{LANG.APP_NAME}</Text>
						</View>
						<View style={styles.title}>
							<Text style={styles.titleText}>{LANG.LOGIN_TITLE}</Text>
						</View>
					</View>
					<TextInputRender
						onChangeText={(value, err) => this.onChangeText(value, err, TYPE_MODAL.EMAIL)}
						title="User Name"
						placeholder="User Name"
						value={email}
						styleConfig={styles.Input}
					/>
					<TextInputRender
						onChangeText={(value, err) => this.onChangeText(value, err, TYPE_MODAL.PASSWORD)}
						title="Password"
						placeholder="Password"
						value={password}
						styleConfig={styles.Input}
						secureTextEntry
					/>

					<TouchableOpacity style={styles.forgotButton} onPress={this.onPressSignin}>
						<Text style={styles.forgotPassword}>Quên mật khẩu</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.loginButton} onPress={this.onPressSignin}>
						<Text style={styles.loginText}>{LANG.SIGN_IN_UPTO_CASE}</Text>
					</TouchableOpacity>
					<View style={styles.paddingVertical}><Text>Or</Text></View>
					<SigninByFacebook style={{ flex: 1, display: 'flex' }} />
				</View>
			</View>
		</ScrollView>;
	}
}

function mapStateToProps(state) {
	return {
		state,
	};
}

export default PageSignin;
