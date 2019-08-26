import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Modal, Image, KeyboardAvoidingView, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import _ from 'lodash';
import styles from './page-signup-style';
import { LANG } from '../../lang/lang';

// import { connect } from 'react-redux';

import navigationService from '../../services/navigation.service';

import SigninByFacebook from '../signin-by-facebook/signin-by-facebook';
import TextInputRender from '../text-input/text-input';
import { IMG, CSS } from '../../utils/variables';
import { validateEmail, requireField, validateForm } from './validation';
import ErrorModalComponent from '../modal/errorModal';
import authService from '../../services/auth.service';
// import { validateEmail } from './validation';

const TYPE_MODAL = {
  EMAIL: 'email',
  PASSWORD: 'password',
};

class PageSignUp extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      email: '',
      name: '',
      showModalLoading: false,
      notMatch: false,
    };
  }

  onChangeText = (value, err, type) => {
    this.setState({
      [type]: value,
    });
  };

  onSubmitEditing = () => {
    const { email, name, phone } = this.state;
    // console.log(validateEmail(email));
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
      authService.register(this.state).then((res)=> {

      }, error => console.log(error));
    }
  };

  closeErrorModal = () => {
    this.setState({
      showErrorMessage: false
    });
  }

  render() {
    const { email, name, phone, showErrorMessage } = this.state;
    // return <KeyboardAvoidingView behavior="position" style={{ flex: 1 }}>
    return <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {showErrorMessage && <ErrorModalComponent onBackdropPress={this.closeErrorModal} content={showErrorMessage} />}
      <View style={[styles.container]}>
        <View style={styles.loginPage}>
          <View style={styles.headerLayoutLogin}>
            <View style={styles.logo}>
              <Text style={styles.nameApp}>{LANG.APP_NAME}</Text>
            </View>
            <View style={styles.title}>
              <Text style={styles.titleText}>{LANG.SIGN_UP}</Text>
            </View>
          </View>
          <TextInputRender
            onChangeText={(value, err) => this.onChangeText(value, err, 'name')}
            placeholder="Nhập họ và tên"
            value={name}
            icon={IMG.user}
          />
          <TextInputRender
            onChangeText={(value, err) => this.onChangeText(value, err, 'email')}
            placeholder="Nhập email"
            value={email}
            icon={IMG.mail}
          />
          <TextInputRender
            onChangeText={(value, err) => this.onChangeText(value, err, 'phone')}
            placeholder="Nhập số điện thoại"
            value={phone}
            icon={IMG.phone}
          />
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#3BB556', '#72C91C']} style={CSS.linearGradientButton}>
            <TouchableOpacity style={[CSS.buttonText, CSS.alignItemsCenter, CSS.justifyContentCenter]} onPress={() => this.onSubmitEditing()}>
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
