import { ACTION } from '../utils/variables';

const initialState = {
  numberProduct: ''
};

function cartInfo(state = initialState, action) {
	switch (action.type) {
		case ACTION.GET_CART:
			return {
        ...state,
				...action.data
      };
    case ACTION.INCREMENT:
      return {
        ...state,
        numberProduct: state.numberProduct + 1
			};
		case ACTION.DECREMENT:
			return {
				...state,
				numberProduct: state.numberProduct - 1
			};
		default:
			return state;
	}
}

// ACTION
export function getCart(data) {
	return {
		type: ACTION.GET_CART,
		data
	};
}

export function increment() {
	return {
		type: ACTION.INCREMENT,
	};
}

export function decrement() {
	return {
    type: ACTION.DECREMENT,
	};
}

export default {
  cartInfo
}