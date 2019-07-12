import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Modal, Image, KeyboardAvoidingView, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './page-signup-style';
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

class PageSignUp extends Component {
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
      notMatch: false,
    });
  };

  onSubmitEditing = () => {
    this.onPressSignin();
  };

  render() {
    const { email, password, showModalLoading, notMatch } = this.state;
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
            placeholder="Nhập họ và tên"
            value={email}
            styleConfig={styles.Input}
            icon={IMG.user}
          />
          <TextInputRender
            onChangeText={(value, err) => this.onChangeText(value, err, TYPE_MODAL.PASSWORD)}
            placeholder="Nhập email"
            value={password}
            styleConfig={styles.Input}
            secureTextEntry
            icon={IMG.mail}
          />
          <TextInputRender
            onChangeText={(value, err) => this.onChangeText(value, err, TYPE_MODAL.PASSWORD)}
            placeholder="Nhập số điện thoại"
            value={password}
            styleConfig={styles.Input}
            secureTextEntry
            icon={IMG.phone}
          />
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#3BB556', '#72C91C']} style={CSS.linearGradientButton}>
            <TouchableOpacity style={[CSS.buttonText, CSS.alignItemsCenter, CSS.justifyContentCenter]} onPress={() => navigationService.navigate('OTP')}>
              <Text style={CSS.textTitleButton}>{LANG.SIGN_UP}</Text>
            </TouchableOpacity>
          </LinearGradient>
          <TouchableOpacity style={styles.createNewButton} onPress={() => navigationService.navigate('SignIn')}>
            <Text style={styles.createNewButtonText}>{LANG.RETURN_LOGIN}</Text>
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

export default PageSignUp;
