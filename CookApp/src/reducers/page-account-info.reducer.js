import { ACTION } from '../utils/variables';
// REDUCER

const userInfo = {
	firstname: '',
	lastname: '',
	userNameBrief: '',
	phone_number: '',
	email: '',
	dob: '',
	gender: 0,
	token: null,
	addresses: [],
};
function accountInfo(state = userInfo, action) {
	switch (action.type) {
		case ACTION.SET_ACCOUNT_INFO:
			return {
				...state,
				...action.data,
			};
		case ACTION.DELETE_ACCOUNT_INFO:
			return userInfo;
		default:
			return state;
	}
}

// ACTION
export function setAccountInfo(userData) {
	return {
		type: ACTION.SET_ACCOUNT_INFO,
		data: userData,
	};
}

export function deleteAccountInfo() {
	return {
		type: ACTION.DELETE_ACCOUNT_INFO,
	};
}

export default {
	accountInfo,
};
