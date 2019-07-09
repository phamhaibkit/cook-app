import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Modal, Image, KeyboardAvoidingView, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import OtpInputs from 'react-native-otp-inputs';
import styles from './page-otp-style';
import { LANG } from '../../lang/lang';
import navigationService from '../../services/navigation.service';
import { IMG } from '../../utils/variables';

const TYPE_MODAL = {
	EMAIL: 'email',
	PASSWORD: 'password',
};

class PageOTP extends Component {
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
				<View>
					<Text>Nhập mã OTP đã được gửi đến số điện thoại</Text>
					<Text>0966211551</Text>
				</View>
				<View style={{ paddingHorizontal: 20 }}>
					<OtpInputs inputContainerStyles={{ margin: 0, padding: 0 }} inputStyles={{ borderColor: '#CFF2D7', borderWidth: 2, paddingVertical: 12, paddingHorizontal: 14, borderRadius: 5, margin: 0, padding: 0 }} focusedBorderColor="white" unfocusedBorderColor="white" inputTextErrorColor="red" handleChange={code => console.log(code)} numberOfInputs={6} />
				</View>
				<View>
					<Text>Gửi lại mã trong 0:52</Text>
				</View>
				<View>
					<Text>Đăng ký đồng nghĩa với việc bạn đồng ý với các
Điều khoản sử dụng của chúng tôi</Text>
				</View>
				<LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#3BB556', '#72C91C']} style={styles.linearGradient}>
					<TouchableOpacity style={styles.buttonText} onPress={this.onPressSignin}>
						<Text style={styles.loginText}>{LANG.SIGN_IN_UPTO_CASE}</Text>
					</TouchableOpacity>
				</LinearGradient>
			</View>
			<Image
				source={IMG.signInImage}
				style={styles.image}
			/>
		</ScrollView>;
	}
}

function mapStateToProps(state) {
	return {
		state,
	};
}

export default PageOTP;
