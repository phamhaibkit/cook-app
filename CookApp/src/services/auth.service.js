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

  loginFacebook = (email, firstName, lastName, facebookId, token) => {
    const url = API.LOGIN_SOCIAL;
    const userName = `${lastName} ${firstName}`;
    const dataLogin = {
      // platform: 'string',
      socialUId: '1',
      fullName: userName,
      accessToken: token,
      refreshToken: 'string',
      email: 'string',
      avatar: `http://graph.facebook.com/${facebookId}/picture?width=500&height=500`
    };

    return HTTPService.post(url, dataLogin)
      .then((data) => {
        // return (this.token = data);
        return Promise.resolve(this.handleSaveInforSuccess(data));
        // return data;
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };

  handleSuccess = (loginData, isFacebook, moreData) => {
    let userInfo = loginData;
    if (isFacebook) {
      userInfo = loginData;
      return this.handleSaveInforSuccess(userInfo);
    }
    return {};
  };

  handleSaveInforSuccess = async (userInfo, token) => {
    this.userInfo = await setUserInfo(userInfo, 'token');
    // accountService.setUserInfoLocal(this.userInfo);
    return Promise.resolve(this.userInfo);
  };

  getToken = (username, password) => {
    const url = API.LOGIN;
    const params = {
      mobile: username,
      password: password,
    };
    return HTTPService.post(url, params)
      .then((data) => {
        // return (this.token = data);
        return Promise.resolve(this.handleSaveInforSuccess(data));
        // return data;
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
    };
    const url = API.REGISTER;
    return HTTPService.post(url, param).then((data) => {
      return Promise.resolve(data);
    })
      .catch((err) => {
        return Promise.reject(err);
      });
  }

  sendOTP = (data) => {
    const url = API.VALIDATE_OTP;
    return HTTPService.post(url, data).then((data) => {
      return Promise.resolve(data);
    })
      .catch((err) => {
        return Promise.reject(err);
      });
  }

  setPassword = (data) => {
    const url = API.SET_PASSWORD;
    return HTTPService.post(url, data).then((data) => {
      return Promise.resolve(data);
    })
      .catch((err) => {
        return Promise.reject(err);
      });
  }

  forgotPassword = (data) => {
    const url = API.FORGOT_PASSWORD;
    return HTTPService.post(url, data).then((data) => {
      return Promise.resolve(data);
    })
      .catch((err) => {
        return Promise.reject(err);
      });
  }
}

export default new AuthService();
