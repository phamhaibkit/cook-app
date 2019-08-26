import React, { Component } from 'react';
import { Text, TouchableOpacity, Platform, Modal, View, AsyncStorage } from 'react-native';

import { FBLogin, FBLoginManager } from 'react-native-facebook-login';
import Icon from 'react-native-vector-icons/FontAwesome';
// FBLoginManager.setLoginBehavior(FBLoginManager.LoginBehaviors.WebView);
// import navigationService from '../../services/navigation.service'
import { connect } from 'react-redux';
import styles from './signin-by-facebook.style';
import navigationService from '../../services/navigation.service';
import { setAccountInfo } from '../../reducers/page-account-info.reducer';
import authService from '../../services/auth.service';
import { StackActions, NavigationActions } from 'react-navigation';

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
          return this.loginFacebookHandle(
            responseData.email,
            responseData.first_name,
            responseData.last_name,
            responseData.id
          );
        })
        .done();
    } else {
      const { email } = user.profile;
      const firstname = user.profile.first_name;
      const lastname = user.profile.last_name;
      const facebookId = user.profile.id;
      return this.loginFacebookHandle(email, firstname, lastname, facebookId);
    }
  };

  loginFacebookHandle = (email, firstname, lastname, id) => {
    const { getLoginFaceBookInfor, goto, navigation } = this.props;
    return authService
      .loginFacebook(email, firstname, lastname, id)
      .then((data) => {
        // debugger
        console.log(data, 'Logged');
        this.timeout = setTimeout(() => this.hideLoading(), 200);
        this.hideLoading();
        this.props.setAccountInfo(data);
        // FBLoginManager.logout(() => {
        // 	console.log('Logout-Facebook');
        // });
        this.retrieveData();
        if (goto) {
          const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'User' })],
          });
          navigation.dispatch(resetAction);
          navigationService.navigate('Home');
        }
        if (getLoginFaceBookInfor) {
          const objectFaceBookInfor = {
            email,
            firstname,
            lastname,
            facebookid: id
          };
          this.props.getLoginFaceBookInfor(objectFaceBookInfor);
        }
        // navigationService.goBack();
      })
      .catch((error) => {
        // FBLoginManager.logout(() => {
        // 	console.log('Logout-Facebook');
        // });
        this.timeout = setTimeout(() => this.hideLoading(), 200);
        console.log('ERRRRR', error);
      });
  };

  retrieveData = async () => {
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
    const { titleButton } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.loginFbView}>
          <TouchableOpacity
            style={styles.loginWithFacebook}
            onPress={() => {
              FBLoginManager.loginWithPermissions(['email', 'user_friends'], (error, data) => {
                if (!error) {
                  this.onLoginFbSucess(data);
                } else {
                  console.log('Error: ', error);
                }
              });
              FBLoginManager.getCredentials((err, data) => {
                console.log(data, 'data');
              });
            }}
          >
            <Icon name="facebook-f" size={26} color="white" style={styles.iconFacebook} />
            <Text style={styles.loginWithFacebookText}>{titleButton || 'Đăng nhập với Facebook'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonLogin}>
          <FBLogin
            style={{ flex: 1 }}
            ref={(fbLogin) => {
              this.fbLogin = fbLogin;
            }}
            permissions={['email']}
            loginBehavior={FBLoginManager.LoginBehaviors.Native}
          // onLogin={(user) => {
          //   this.onLoginFbSucess(user);
          // }}
          />
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
