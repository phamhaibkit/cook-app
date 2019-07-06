import { AsyncStorage } from 'react-native';
import HTTPService from './http.service';
import { API } from '../utils/variables';

// import { ASYNC_STORAGE } from '../utils/variables';
import { setUserInfo } from '../utils/general';
import _ from 'lodash';
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
		const url = API.TOKEN_EMAIL;
		const params = {
			username,
			password,
		};
		return HTTPService.post(url, params)
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
}

export default new AuthService();