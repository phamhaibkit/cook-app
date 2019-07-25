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
        numberProduct: state.numberProduct + action.number
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

export function increment(number) {
	return {
		type: ACTION.INCREMENT,
		number,
	};
}

export function decrement(number) {
	return {
    type: ACTION.DECREMENT,
    number,
	};
}

export default {
  cartInfo
}