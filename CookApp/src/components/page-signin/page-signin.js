import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Modal, Image, KeyboardAvoidingView, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './page-signin-style';
import { LANG } from '../../lang/lang';

// import { connect } from 'react-redux';

import navigationService from '../../services/navigation.service';

import SigninByFacebook from '../signin-by-facebook/signin-by-facebook';
import TextInputRender from '../text-input/text-input';
import { IMG, CSS } from '../../utils/variables';

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

  render() {
    let { email, password, showModalLoading, notMatch } = this.state;
    // return <KeyboardAvoidingView behavior="position" style={{ flex: 1 }}>
    return <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={[styles.container]}>
        <View style={styles.loginPage}>
          <View style={styles.headerLayoutLogin}>
            <View style={styles.logo}>
              <Text style={[styles.nameApp, CSS.fontNuBlack]}>{LANG.APP_NAME}</Text>
            </View>
            <View style={styles.title}>
              <Text style={[styles.titleText, CSS.fontNuExBold]}>{LANG.LOGIN_TITLE}</Text>
            </View>
          </View>
          <TextInputRender
            onChangeText={(value, err) => this.onChangeText(value, err, TYPE_MODAL.EMAIL)}
            placeholder="Số điện thoại/Email"
            value={email}
            icon={IMG.user}
          />
          <TextInputRender
            onChangeText={(value, err) => this.onChangeText(value, err, TYPE_MODAL.PASSWORD)}
            placeholder="Mật khẩu"
            value={password}
            secureTextEntry
            icon={IMG.clock}
          />

          <TouchableOpacity style={styles.forgotButton} onPress={() => navigationService.navigate('ForgotPassword')}>
            <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>
          </TouchableOpacity>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#3BB556', '#72C91C']} style={CSS.linearGradientButton}>
            <TouchableOpacity style={[CSS.buttonText, CSS.alignItemsCenter, CSS.justifyContentCenter]} onPress={this.onPressSignin}>
              <Text style={CSS.textTitleButton}>{LANG.SIGN_IN_UPTO_CASE}</Text>
            </TouchableOpacity>
          </LinearGradient>
          <SigninByFacebook style={styles.loginFacebookSection} goto={'User'} />
          <TouchableOpacity style={styles.createNewButton} onPress={() => navigationService.navigate('SignUp')}>
            <Text style={styles.createNewButtonText}>Đăng ký tài khoản</Text>
          </TouchableOpacity>

        </View>

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

export default PageSignin;
