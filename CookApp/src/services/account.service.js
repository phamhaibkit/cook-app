import HTTPService from './http.service';
import { API } from '../utils/variables';
import { setUserInfo, getUserInfo, setDefaultShipping } from '../utils/general';

import _ from 'lodash';
import httpService from './http.service';

const defaultUserInfo = {
	loading: false,
	gender: 0,
	addresses: [],
	userName: '',
	userNameBrief: '',
	phone_number: '',
	email: '',
	dob: '',
	token: null,
};

class AccountService {
	constructor() {
		this.resetService();
	}

	resetService = () => {
		this.userInfo = _.cloneDeep(defaultUserInfo);
	};

	setUserInfoLocal = userInfo => {
		console.log('setUserInfoLocal', userInfo);
		this.userInfo = userInfo;
	};

	getUserInfoLocal = async () => {
		const userInfo = await getUserInfo();
		if (userInfo) {
			this.userInfo = userInfo;
		}
		return userInfo;
	};

	getAccountInfo = async () => {
		const userInfo = await getUserInfo();
		if (!userInfo || !userInfo.token) {
			return Promise.resolve();
		}
		this.userInfo = userInfo;

		// console.log('du lieu gia');
		// return this.userInfo;

		const token = _.cloneDeep(this.userInfo.token);
		const url = API.ACCOUNT_INFO;
		this.userInfo.loading = true;
		return httpService
			.get(url, null, token)
			.then(res => {
				return this.handleSuccess(res, token);
			})
			.catch(err => {
				this.userInfo.loading = false;
				console.log('this.userInfo err', err);
				return Promise.reject(err);
			});
	};

	updateInfo = async data => {
		if (!this.userInfo || !this.userInfo.token) {
			return Promise.resolve();
		}
		const token = _.cloneDeep(this.userInfo.token);
		const url = API.UPDATE_INFO;
		const params = {
			customer: data,
		};
		this.userInfo.loading = true;
		console.log('senddddddddddddddd', params, JSON.stringify(params));
		return HTTPService.put(url, params, null, token)
			.then(res => {
				return this.handleSuccess(res, token);
			})
			.catch(err => {
				this.userInfo.loading = false;
				return Promise.reject(err);
			});
	};

	handleSuccess = (data, token) => {
		return setUserInfo(data, token)
			.then(userInfo => {
				return (this.userInfo = _.cloneDeep({
					...userInfo,
					loading: false,
				}));
			})
			.catch(e => {
				console.log('e', e);
				this.userInfo.loading = false;
				return Promise.reject(e);
			});
	};

	updateAddress = address => {
		const accountInfo = this.userInfo;
		const newAccountInfo = {
			addresses: address,
			id: accountInfo.id,
			group_id: accountInfo.group_id,
			email: accountInfo.email,
			firstname: accountInfo.firstname,
			lastname: accountInfo.lastname,
			store_id: accountInfo.store_id,
			website_id: accountInfo.website_id,
		};

		return this.updateInfo(newAccountInfo);
	};

	setDefaultShippingAddress = index => {
		const shippingAddress = this.userInfo.addresses;
		const newAddress = _.cloneDeep(shippingAddress);
		for (let i = 0; i < newAddress.length; i++) {
			if (i === index) {
				newAddress[i].default_shipping = true;
			} else {
				newAddress[i].default_shipping = false;
			}
		}
		return this.updateAddress(newAddress);
	};

	deleteAddress = index => {
		const shippingAddress = this.userInfo.addresses;
		const newAddress = _.cloneDeep(shippingAddress);
		newAddress.splice(index, 1);
		return this.updateAddress(newAddress);
	};

	editOrAddAddress = async (currentAddresses, data) => {
		if (!this.userInfo || !this.userInfo.token) {
			return;
		}
		if (!data || _.isEmpty(data)) {
			return;
		}
		const { city, district, ward, lastname, firstname, phone, email, address, id } = data;
		const sendData = {
			city: city.name,
			country_id: city.country_id,
			default_shipping: data.default_shipping || false,
			default_billing: false,
			// default_billing: data.default_billing || false,
			district: district.name,
			extension_attributes: {
				district_id: district.id,
				email_address: email,
				ward_id: ward.id,
			},
			firstname: firstname,
			lastname: lastname,
			postcode: '70000',
			region_id: city.id,
			street: [address],
			telephone: phone,
			ward: ward.name,
		};

		let newAddress = _.cloneDeep(currentAddresses);

		if (id) {
			sendData.id = id;
			const oldItemIndex = _.findIndex(newAddress, {
				id: id,
			});
			if (oldItemIndex > -1) {
				newAddress[oldItemIndex] = sendData;
			}
		} else {
			newAddress.push(sendData);
		}

		if (sendData.default_shipping) {
			newAddress = setDefaultShipping(newAddress, sendData.id);
		}

		return this.updateAddress(newAddress);
	};
}

export default new AccountService();
