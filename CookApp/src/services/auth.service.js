import { AsyncStorage } from 'react-native';
import _ from 'lodash';
import HTTPService from './http.service';
import { API } from './api';

// import { ASYNC_STORAGE } from '../utils/variables';
import { setUserInfo } from '../utils/general';
import accountService from './account.service';

const defaultRegisterData = {
  loading: false,
};

class AuthService {
  constructor() {
    this.resetService();
  }

  resetService = () => {
    this.userInfo = null;
    this.token = null;
    this.registerData = _.cloneDeep(defaultRegisterData);
  };

  manualLogin = (data) => {
    console.log(data, 'data');
    this.getToken(data.email, data.password);
  }

  loginFacebook = (email, firstName, lastName, facebookId) => {
    // const url = API.LOGIN_FACEBOOK;rr
    const params = {
      email,
      firstname: firstName,
      lastname: lastName,
      facebookid: facebookId,
    };
    return this.handleSuccess(params, true, {
      email: params.email,
      password: params.facebookid,
    });
  };

  handleSuccess = (loginData, isFacebook, moreData) => {
    let userInfo = loginData;
    if (isFacebook) {
      userInfo = loginData;
      return this._handleSuccess(userInfo);
    }
    return {};
  };

  _handleSuccess = async (userInfo, token) => {
    this.userInfo = await setUserInfo(userInfo, 'token');
    // accountService.setUserInfoLocal(this.userInfo);
    return Promise.resolve(this.userInfo);
  };

  getToken = (username, password) => {
    const url = API.TOKEN_EMAIL({ username, password });
    const params = {
      username,
      password,
    };
    return HTTPService.get(url)
      .then((data) => {
        return (this.token = data);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };

  getTokenFacebook = (email, fbId) => {
    const url = API.TOKEN_FB;
    const params = {
      email,
      fbId,
    };
    return HTTPService.post(url, params)
      .then((data) => {
        return this.token = data;
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };

  signOut = async () => {
    this.resetService();
    accountService.resetService();
    return Promise.all([
      // AsyncStorage.removeItem(ASYNC_STORAGE.CART_ID),
      // AsyncStorage.removeItem(ASYNC_STORAGE.USER_INFO),
      // AsyncStorage.removeItem(ASYNC_STORAGE.RECENT_SEARCH),
    ]);
  };

  register = (data) => {
    const param = {
      mobile: data.phone,
      fullname: data.name,
      email: data.email,
      gender: 1,
      avatar: '',
      birthday: ''
    };
    const url = API.REGISTER;
    return HTTPService.post(url, param).then((data) => {
      debugger
    })
      .catch((err) => {
        return Promise.reject(err);
      });
  }
}

export default new AuthService();
