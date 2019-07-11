/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Modal, Image, KeyboardAvoidingView, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import OtpInputs from 'react-native-otp-inputs';
import styles from './page-otp-style';
import { LANG } from '../../lang/lang';
import navigationService from '../../services/navigation.service';
import { IMG, CSS } from '../../utils/variables';
import PageConfirmPassword from '../page-password-confirm/page-password-confirm';

const TYPE_MODAL = {
  EMAIL: 'email',
  PASSWORD: 'password',
};


class PageOTP extends Component {

  static navigationOptions = {
    title: 'Xác Thực',
    headerTitleStyle: {
      textAlign: 'center',
      flex: 1,
      marginLeft: -36,
      fontSize: 16,
      fontFamily: 'Nunito',
    },
  }

  constructor(props, context) {
    super(props, context);
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    this.state = {
      [TYPE_MODAL.EMAIL]: {
        value: '',
        err: '',
      },
      [TYPE_MODAL.PASSWORD]: {
        value: '',
        err: '',
      },
      time: {},
      seconds: 59
    };
  }

  componentDidMount() {
    const { seconds } = this.state;
    const timeLeftVar = this.secondsToTime(seconds);
    this.setState({ time: timeLeftVar });
    this.startTimer();
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
    });
  };

  onSubmitEditing = () => {
    this.onPressSignin();
  };

  secondsToTime = (secs) => {
    const hours = Math.floor(secs / (60 * 60));

    const divisorForMinutes = secs % (60 * 60);
    const minutes = Math.floor(divisorForMinutes / 60);

    const divisorForSeconds = divisorForMinutes % 60;
    const seconds = Math.ceil(divisorForSeconds);

    const obj = {
      h: hours,
      m: minutes,
      s: seconds
    };
    return obj;
  }


  startTimer() {
    const { seconds } = this.state;
    if (this.timer === 0 && seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let { seconds } = this.state;
    seconds -= 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds,
    });

    // Check if we're at zero.
    if (seconds === 0) {
      clearInterval(this.timer);
    }
  }

  onPressConfirm = () => {
    const params = {
      pageName: LANG.SET_TUP_PASSWORD,
      pageKey: 'setPassword'
    };
    navigationService.navigate('ConfirmPassword', params);
  }

  render() {
    const { time } = this.state;
    // return <KeyboardAvoidingView behavior="position" style={{ flex: 1 }}>
    return <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={[styles.container]}>
        <View style={[styles.phoneInfor, CSS.justifyContentCenter, CSS.alignItemsCenter]}>
          <Text style={[styles.inputInform, { fontFamily: CSS.fontText }, CSS.fontSize14]}>
            Nhập mã OTP đã được gửi đến số điện thoại</Text>
          <Text style={[styles.inputInform, { fontFamily: CSS.fontTitle }, CSS.fontSize14]}>
            0966211551</Text>
        </View>
        <View style={styles.otpInput}>
          <OtpInputs
            inputContainerStyles={{ margin: 0, padding: 0 }}
            inputStyles={CSS.otpInputStyle}
            focusedBorderColor="white"
            unfocusedBorderColor="white"
            inputTextErrorColor="red"
            handleChange={code => console.log(code)}
            numberOfInputs={6} />
        </View>
        {time.s !== 0 && <View style={[styles.sendCode, CSS.justifyContentCenter, CSS.alignItemsCenter]}>
          <Text style={[styles.sendCodeDuring, { fontFamily: CSS.fontText }, CSS.fontSize14]}>{LANG.SEND_CODE_DURING} <Text>{`0:${time.s}`}</Text></Text>
        </View>}
        {time.s === 0 && <View style={[CSS.justifyContentCenter, CSS.alignItemsCenter]}>
          <View style={[styles.reSendCode, CSS.textAlignCenter, CSS.flexRow, CSS.alignItemsCenter]}>
            <Image source={IMG.reverseCircle} style={styles.arrowRightImg} resizeMode="contain" />
            <Text style={[
              styles.reSendCodeDuring,
              CSS.fontSize15]
            }>
              {LANG.RE_SEND_CODE_DURING}</Text>
          </View>

        </View>}
        <View style={[styles.agreeOtP, CSS.justifyContentCenter, CSS.alignItemsCenter]}>
          <Text style={[CSS.textAlignCenter, styles.color767676, CSS.fontSize12,
          { fontFamily: CSS.fontText }]}
          >
            Đăng ký đồng nghĩa với việc bạn
					đồng ý với các của chúng tôi<Text> Điều khoản sử dụng</Text>của chúng tôi</Text>
        </View>
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#3BB556', '#72C91C']} style={CSS.linearGradientButton}>
          <TouchableOpacity style={[CSS.buttonText, { width: '100%', height: 40 }, CSS.alignItemsCenter, CSS.justifyContentCenter]} onPress={this.onPressConfirm}>
            <Text style={CSS.textTitleButton}>{LANG.CONFIRM}</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <Image
        source={IMG.signInImage}
        style={styles.image}
      />
    </ScrollView >;
  }
}

function mapStateToProps(state) {
  return {
    state,
  };
}

export default PageOTP;
