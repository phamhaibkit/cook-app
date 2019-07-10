export const IMG = {
	bookmark: require('../../assets/book-mark.png'),
	logo: require('../../assets/logo.png'),
	tet: require('../../assets/tet.jpg'),
	arrowRight: require('../../assets/icons/arrow-right-3x.png'),
	user: require('../../assets/icons/user.png'),
	clock: require('../../assets/icons/clock.png'),
	signInImage: require('../../assets/icons/sign-in-image.png'),
	phone: require('../../assets/icons/phone.png'),
	mail: require('../../assets/icons/mail.png'),
	cartHome: require('../../assets/icons/cart-home.png'),
	arrowRightGreen: require('../../assets/icons/arrow-right-green.png'),
	searchGreen: require('../../assets/icons/search-home.png'),
	reverseCircle: require('../../assets/icons/reverse-circle.png'),
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
	fontBold: 'Nunito-ExtraBold',
	fontTitle: 'Quicksand_Bold',
	fontText: 'Quicksand_Book',
	textTitleButton: {
		fontFamily: 'Quicksand_Bold',
		fontSize: 15,
		color: '#FFFFFF'
	},
	dFlex: {
		flex: 1,
	},
	justifyContentCenter: {
		justifyContent: 'center',
	},
	alignItemsCenter: {
		alignItems: 'center'
	},
	textAlignCenter: {
		textAlign: 'center'
	},
	flexRow: {
		flexDirection: 'row',
	},
	flexCol: {
		flexDirection: 'column',
	},
	otpInputStyle: {
		borderColor: '#CFF2D7',
		borderWidth: 2,
		paddingVertical: 12,
		// paddingHorizontal: 14,
		borderRadius: 5,
		margin: 0,
		padding: 0,
		fontSize: 24,
		height: 56,
		width: 43,
		fontFamily: 'Quicksand_Bold'
	},
	fontSize24: {
		fontSize: 24,
	},
	fontSize15: {
		fontSize: 15,
	},
	fontSize14: {
		fontSize: 14,
	},
	fontSize12: {
		fontSize: 12,
	},
	fontSize11: {
		fontSize: 11,
	},
};

export const COLOR = {
	gradientLeft: '#3BB556',
	gradientRight: '#72C91C',
	redColor: '#FF0000',
	whiteColor: '#FFFFFF',
	greyColor: '#AAAAAA',
	backgroundColor: '#E5E5E5',
	greenColor: '#3ABF57'
};

export const ACTION = {
	SET_ACCOUNT_INFO: 'SET_ACCOUNT_INFO',
};
