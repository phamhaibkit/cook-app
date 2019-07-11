/* eslint-env es6 */
export const IMG = {
  bookmark: require('../../assets/book-mark.png'),
  logo: require('../../assets/logo.png'),
  arrowRight: require('../../assets/icons/arrow-right-3x.png'),
  user: require('../../assets/icons/user.png'),
  clock: require('../../assets/icons/clock.png'),
  signInImage: require('../../assets/icons/sign-in-image.png'),
  phone: require('../../assets/icons/phone.png'),
  mail: require('../../assets/icons/mail.png'),
  cartHome: require('../../assets/icons/cart-home.png'),
  arrowRightGreen: require('../../assets/icons/arrow-right-green.png'),
  searchGreen: require('../../assets/icons/search-home.png'),
  sandClokHome: require('../../assets/icons/sand-clock.png'),
  reverseCircle: require('../../assets/icons/reverse-circle.png'),
  dollaHome: require('../../assets/icons/dola-home.png'),
  personHome: require('../../assets/icons/person-home.png'),
  reportHome: require('../../assets/icons/dot-home.png'),
  avatarHome: require('../../assets/icons/avata-home.png'),
  rankHome: require('../../assets/icons/rank-home.png'),
  loveHome: require('../../assets/icons/love-home.png'),
  commentHome: require('../../assets/icons/comment-home.png'),
  shareHome: require('../../assets/icons/share-home.png'),
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
  fontTitle: 'Quicksand-Bold',
  fontText: 'Quicksand-Regular',
  textTitleButton: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 15,
    color: '#FFFFFF'
  },
  dFlex: {
    flex: 1,
  },
  fontNuBlack: {
    fontFamily: 'Nunito-Black'
  },
  fontNuExBold: {
    fontFamily: 'Nunito-ExtraBold'
  },
  fontQuiBold: {
    fontFamily: 'Quicksand-Bold'
  },
  fontQuiBook: {
    fontFamily: 'Quicksand_Book'
  },
  fontQuiLight: {
    fontFamily: 'Quicksand_Light'
  },
  fontQuiBookOblique: {
    fontFamily: 'Quicksand_Book_Oblique'
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
    fontFamily: 'Quicksand-Bold'
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
    lightBoxShadow: '0px 3px 40px rgba(0, 0, 0, 0.1)',
    borderRadius5: {
    	borderRadius: 5
    }
};

export const COLOR = {
  gradientLeft: '#3BB556',
  gradientRight: '#72C91C',
  redColor: '#FF0000',
  whiteColor: '#FFFFFF',
  greyColor: '#AAAAAA',
  backgroundColor: '#E5E5E5',
  greenColor: '#3ABF57',
  blackColor: '#000000',
  lineColor: '#D3D3D3',
  lineHoriColor: '#E9E9E9'
	gradientBlackTopColor:'rgba(0, 16, 8, 0)',
	gradientBlackBottomColor:'rgba(0, 16, 8, 0.65)',
};

export const ACTION = {
  SET_ACCOUNT_INFO: 'SET_ACCOUNT_INFO',
};
