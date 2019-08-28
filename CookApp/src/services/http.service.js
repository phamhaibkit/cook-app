import axios from 'axios';
import _ from 'lodash';

// import { TEST } from '../utils/variables';

const CancelToken = axios.CancelToken;

const TEST = true;

export const DEFAULT_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMDk4OTIzNDEyMyIsInVzZXJfaWQiOiIzMjQ0MjgiLCJtb2JpbGUiOiIwOTg5MjM0MTIzIiwiZGlzbGF5X25hbWUiOiIxMjMxMjMiLCJleHAiOjE1Njc2MDU3OTYsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0Mzg3LyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0Mzg3LyJ9.dpSofmylgJKFbHBvSL5qweba1IFBlKt0w3dAErBB9YI";
const configObj = {
	baseURL: TEST ? 'http://' : 'https://',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		Authorization: 'Bearer ' + DEFAULT_TOKEN,
	},
};

class HTTPService {
	constructor() {
		this.client = axios.create(configObj);
	}

	get = (url, cancelRequest, token) => {
		console.log('url get', url);
		const newConfigObj = _.cloneDeep(configObj);
		let client = _.cloneDeep(this.client);
		if (token) {
			newConfigObj.headers.Authorization = 'Bearer ' + token;

			newConfigObj.headers.Authorization = 'Bearer ' + token;
			client = axios.create(newConfigObj);
		}

		return client
			.get(url, {
				cancelToken: new CancelToken(function executor(c) {
					// An executor function receives a cancel function as a parameter
					if (cancelRequest) {
						cancelRequest = c;
					}
				}),
			})
			.then(res => {
				return res.data;
			})
			.catch(this.handlerError);
	};

	post = (url, data, cancelRequest, token, customHeader) => {
		console.log('url post', url);

		const newConfigObj = _.cloneDeep(configObj);
		let client = _.cloneDeep(this.client);
		if (customHeader) {
			delete newConfigObj.headers.Authorization;
			newConfigObj.headers = {
				...newConfigObj.headers,
				...customHeader,
			};
			client = axios.create(newConfigObj);
		} else {
			if (token) {
				newConfigObj.headers.Authorization = 'Bearer ' + token;
				client = axios.create(newConfigObj);
			}
		}

		return client
			.post(url, data, {
				cancelToken: new CancelToken(function executor(c) {
					// An executor function receives a cancel function as a parameter
					if (cancelRequest) {
						cancelRequest = c;
					}
				}),
			})
			.then(res => res.data)
			.catch(this.handlerError);
	};

	put = (url, data, cancelRequest, token) => {
		console.log('url put', url);

		const newConfigObj = _.cloneDeep(configObj);
		let client = _.cloneDeep(this.client);
		if (token) {
			newConfigObj.headers.Authorization = 'Bearer ' + token;
			client = axios.create(newConfigObj);
		}

		return client
			.put(url, data, {
				cancelToken: new CancelToken(function executor(c) {
					// An executor function receives a cancel function as a parameter
					if (cancelRequest) {
						cancelRequest = c;
					}
				}),
			})
			.then(res => {
				return res.data;
			})
			.catch(this.handlerError);
	};

	delete = (url, data, cancelRequest, token) => {
		console.log('url delete', url);

		const newConfigObj = _.cloneDeep(configObj);
		let client = _.cloneDeep(this.client);
		if (token) {
			newConfigObj.headers.Authorization = 'Bearer ' + token;
			client = axios.create(newConfigObj);
		}
		return client
			.delete(url, data, {
				cancelToken: new CancelToken(function executor(c) {
					// An executor function receives a cancel function as a parameter
					if (cancelRequest) {
						cancelRequest = c;
					}
				}),
			})
			.then(res => res.data)
			.catch(this.handlerError);
	};

	handlerError = error => {
		console.log('ERIRROIOROR', error.response, error.request);
		let result = {};
		if (error.response) {
			result = error.response;
		} else if (error.request && error.request.status > 0) {
			result = error.request;
		} else {
			result = {
				status: 503,
			};
		}
		return Promise.reject(result);
	};
}

export default new HTTPService();
