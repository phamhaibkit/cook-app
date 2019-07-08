export const IMG = {
	bookmark: require('../../assets/book-mark.png'),
	logo: require('../../assets/logo.png'),
	tet: require('../../assets/tet.jpg'),
	arrowRight: require('../../assets/icons/arrow-right-3x.png'),
	user: require('../../assets/icons/user.png'),
	clock: require('../../assets/icons/clock.png'),
	cartHome: require('../../assets/icons/cart-home.png'),
	arrowRightGreen: require('../../assets/icons/arrow-right-green.png'),
};

export const ASYNC_STORAGE = {
	INTRO: 'INTRO',
};

export default {
	IMG,
	ASYNC_STORAGE,
	CSS,
	COLOR,
};


export const userDefault = {
	avatar: require('../../assets/tet.jpg'),
	recipeAmount: 3,
	followerAmount: 20,
	description: 'Ai mà biết được đời sẽ ra sao. Nên là, hãy ăn món tráng miệng trước ',
	followingAmount: 50,
	rank: true,
};

export const CSS = {
	iconImage: {
		justifyContent: 'center',
		flex: 1,
		alignItems: 'flex-end',
	},
	padding20: {
		paddingHorizontal: 20,
	},
	_padding: (top, right, bottom, left) => {
		return {
			paddingTop: top,
			paddingRight: right,
			paddingBottom: bottom,
			paddingLeft: left,
		};
	},
	_margin: (top, right, bottom, left) => {
		return {
			marginTop: top,
			marginRight: right,
			marginBottom: bottom,
			marginLeft: left,
		};
	}
};

export const COLOR = {
	headerColor: '#4fd63a',
}

export const ACTION = {
	SET_ACCOUNT_INFO: 'SET_ACCOUNT_INFO',
};