import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import _ from 'lodash';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { CSS, IMG } from '../../utils/variables';
import TextInputRender from '../text-input/text-input';
import Header from '../header/header';
import navigationService from '../../services/navigation.service';
import { HeaderScroll } from '../dynamic-component/header-scroll/header-scroll';
import { validateForm } from './validation';
import authService from '../../services/auth.service';
import { handleError } from '../../utils/general';
import ErrorModalComponent from '../modal/errorModal';

export default class ForgotPasswordPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  // static navigationOptions = {
  //   title: "Quên mật khẩu",
  //   // headerLeft: <Icon
  //   //   name="arrow-left"
  //   //    />,
  //   headerLeft: (
  //     <TouchableOpacity
  //       style={{ paddingLeft: 15 }}
  //       onPress={() => navigationService.goBack()}
  //     >
  //       <Image source={IMG.backButton} />
  //     </TouchableOpacity>
  //   ),
  //   headerTitleStyle: {
  //     flex: 1,
  //     fontSize: 16,
  //     fontFamily: "Nunito-ExtraBold"
  //   },
  //   headerTitleContainerStyle: { justifyContent: "center", flex: 1 },
  //   headerStyle: {
  //     elevation: 0,
  //     shadowOpacity: 0
  //   }
  // };

  // static navigationOptions = {
  //   headerTitle: <Header />,
  //   headerTitleStyle: {
  //   },
  //
  // }

  static propTypes = {};

  onChangeText = (value, err, type) => {
    this.setState({
      [type]: value
    });
  };

  onPressContinue = () => {
    const isInvalidName = validateForm(this.state);
    if (isInvalidName) {
      const content = {
        message: isInvalidName,
        title: 'Lỗi'
      };
      this.setState({
        showErrorMessage: content,
      });
    } else {
      const { email } = this.state;
      const data = {
        mobileOrEmail: email,
      };
      authService.forgotPassword(data).then((res) => {
        console.log(res, 'res');
        navigationService.navigate('OTP', { infor: res });
      }, (error) => {
        const content = {
          message: handleError(error),
          title: 'Lỗi'
        };
        this.setState({
          showErrorMessage: content,
        });
      });
    }
  }

  closeErrorModal = () => {
    this.setState({
      showErrorMessage: false,
    });
  }

  render() {
    const { email, showErrorMessage } = this.state;
    return (
      <KeyboardAvoidingView style={{ flexGrow: 1 }} behavior="padding" keyboardVerticalOffset={0}>
        {showErrorMessage && <ErrorModalComponent onBackdropPress={this.closeErrorModal} content={showErrorMessage} />}
        <HeaderScroll style={{ zIndex: 1 }} ref={(child) => { this.child = child; }} colorBorderDefault="#D2D2D2" colorDefault="#fff" colorPageName="#000" borderWidthDefault={0} pageName="Quên mật khẩu">
          <View style={[styles.container, { position: 'relative' }]}>
            <View style={styles.contentPage}>
              <View
                style={[
                  CSS.justifyContentCenter,
                  { marginTop: 68 },
                  CSS.alignItemsCenter
                ]}
              >
                <Image source={IMG.forgotPassword} />
              </View>
              <Text
                style={[
                  CSS.textAlignCenter,
                  CSS.fontSize14,
                  CSS.fontQuiRegular,
                  styles.text
                ]}
              >
                Nhập số điện thoại hoặc email đã đăng ký
              </Text>
              <TextInputRender
                onChangeText={(value, err) => this.onChangeText(value, err, 'email')
                }
                placeholder="Số điện thoại"
                value={email}
                styleConfig={styles.Input}
              />
            </View>

            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={['#3BB556', '#72C91C']}
              style={[
                CSS.linearGradientButton,
                CSS.justifyContentCenter,
                CSS.alignItemsCenter,
                CSS.textAlignCenter,
                styles.button
              ]}
            >
              <KeyboardAvoidingView behavior="padding">
                <TouchableOpacity
                  style={[
                    CSS.buttonText,
                    CSS.alignItemsCenter,
                    CSS.justifyContentCenter
                  ]}
                  onPress={this.onPressContinue}
                >
                  <Text style={CSS.textTitleButton}>Tiếp tục</Text>
                </TouchableOpacity>
              </KeyboardAvoidingView>
            </LinearGradient>
          </View>
        </HeaderScroll>
      </KeyboardAvoidingView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    display: 'flex',
    flex: 1,
    // height: '100%',
    alignItems: 'stretch',
    // justifyContent: 'center',
    justifyContent: 'space-between'
  },
  text: {
    marginTop: 54,
    marginBottom: 20
  },
  contentPage: {
    // justifyContent: 'center',
  },
  button: {
    // marginTop: 100
    // left: 30,
    // right: 30,
    // bottom: 0,
    // marginLeft: "auto",
    // marginRight: "auto",
    // position: "absolute"
  }
});
