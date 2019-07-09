export const IMG = {
	bookmark: require('../../assets/book-mark.png'),
	logo: require('../../assets/logo.png'),
	tet: require('../../assets/tet.jpg'),
	arrowRight: require('../../assets/icons/arrow-right-3x.png'),
	user: require('../../assets/icons/user.png'),
	clock: require('../../assets/icons/clock.png'),
	cartHome: require('../../assets/icons/cart-home.png'),
	arrowRightGreen: require('../../assets/icons/arrow-right-green.png'),
	searchGreen: require('../../assets/icons/search-home.png'),
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
	padding15: 15,
};

export const COLOR = {
	gradientLeft: '#3BB556',
  gradientRight: '#72C91C',
  redColor: '#FF0000',
  whiteColor: '#FFFFFF',
  greyColor: '#AAAAAA',
  backgroundColor: '#E5E5E5',
};

export const ACTION = {
	SET_ACCOUNT_INFO: 'SET_ACCOUNT_INFO',
};
