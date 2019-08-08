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
  cartHomeIos: require('../../assets/icons/cart-home-ios.png'),
  arrowRightGreen: require('../../assets/icons/arrow-right-green.png'),
  searchGreen: require('../../assets/icons/search-home.png'),
  sandClokHome: require('../../assets/icons/sand-clock.png'),
  reverseCircle: require('../../assets/icons/reverse-circle.png'),
  dollaHome: require('../../assets/icons/dola-home.png'),
  personHome: require('../../assets/icons/person-home.png'),
  reportHome: require('../../assets/icons/dot-home.png'),
  avatarHome: require('../../assets/icons/avata-home.png'),
  rankHome: require('../../assets/icons/rank-home.png'),
  rankChef: require('../../assets/icons/rank-chef.png'),
  loveHome: require('../../assets/icons/love-home.png'),
  loveActiveHome: require('../../assets/icons/love-active.png'),
  commentHome: require('../../assets/icons/comment-home.png'),
  shareHome: require('../../assets/icons/share-home.png'),
  saveHome: require('../../assets/icons/save.png'),
  saveActiveHome: require('../../assets/icons/save-active.png'),
  userAvatar: require('../../assets/icons/user-avatar.png'),
  camera: require('../../assets/icons/camera.png'),
  male: require('../../assets/icons/male.png'),
  female: require('../../assets/icons/female.png'),
  calendar: require('../../assets/icons/calendar.png'),
  greenBookmarkIcon: require('./../../assets/icons/save.png'),
  recipeIcon: require('./../../assets/icons/recipe-icon-3x.png'),
  whiteBookmarkIcon: require('./../../assets/icons//bookmark-icon-3x.png'),
  calenderHome: require('../../assets/icons/calender-home.png'),
  home: require('../../assets/icons/home.png'),
  homeActive: require('../../assets/icons/home-active.png'),
  recipe: require('../../assets/icons/recipe.png'),
  forgotPassword: require('./../../assets/icons/forgot-password.png'),
  backButton: require('./../../assets/icons/back-button.png'),
  greenBackIcon: require('./../../assets/icons/left-green-arrow.png'),
  whiteBackIcon: require('./../../assets/icons/left-white-arrow.png'),
  recipeActive: require('../../assets/icons/recipe-active.png'),
  store: require('../../assets/icons/store.png'),
  storeActive: require('../../assets/icons/store-active.png'),
  bell: require('../../assets/icons/bell.png'),
  bellActive: require('../../assets/icons/bell-active.png'),
  individual: require('../../assets/icons/individual.png'),
  individualActive: require('../../assets/icons/individual-active.png'),
  upRecipe: require('../../assets/icons/up-recipe.png'),
  recipeSolid: require('../../assets/icons/recipe-solid.png'),
  iconSuccess: require('../../assets/icons/icon-success-modal.png'),
  modalBar: require('../../assets/icons/modalBar.png'),
  reportRecipe: require('../../assets/icons/report-recipe.png'),
  closeReport: require('../../assets/icons/close-report.png'),
  substractSign: require('../../assets/icons/substract-sign.png'),
  plusSign: require('../../assets/icons/plus-sign.png'),
  checkedIcon: require('../../assets/icons/checked-icon.png'),
  starYellow: require('../../assets/icons/star-yellow.png'),
  starGrey: require('../../assets/icons/star-grey.png'),
  borderDot: require('../../assets/icons/border-dot.png'),
  eyeIcon: require('../../assets/icons/eye-view.png'),
  greenCircle: require('../../assets/icons/green-circle.png'),
  num: require('../../assets/icons/num.png'),
  clearInput: require('../../assets/icons/clear-input.png'),
  checkedWhite: require('../../assets/icons/checked-white.png'),
  addImage: require('../../assets/icons/post-image.png'),
  grayCalendar: require('../../assets/icons/calendar-gray.png'),
  categoryChecked: require('../../assets/icons/category-checked.png')
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
  padding10: 10,
  fontBold: 'Nunito-ExtraBold',
  fontNutito: 'Nunito-Regular',
  fontTitle: 'Quicksand-Bold',
  fontText: 'Quicksand-Regular',
  textTitleButton: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 15,
    color: '#FFFFFF'
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    width: '100%',
    height: 40,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  linearGradientButton: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginBottom: 20
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
  fontQuiRegular: {
    fontFamily: 'Quicksand-Regular'
  },
  fontQuiMedium: {
    fontFamily: 'Quicksand-Medium',
  },
  fontQuiBook: {
    fontFamily: 'Quicksand_Book'
  },
  fontQuiLight: {
    fontFamily: 'Quicksand-Light'
  },
  fontQuiBookOblique: {
    fontFamily: 'Quicksand_Book_Oblique'
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  alignItemsCenter: {
    alignItems: 'center'
  },
  textUpperCase: {
    textTransform: 'uppercase'
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
  fontSize30: {
    fontSize: 30,
  },
  fontSize26: {
    fontSize: 26,
  },
  fontSize24: {
    fontSize: 24,
  },
  fontSize20: {
    fontSize: 20,
  },
  fontSize18: {
    fontSize: 18,
  },
  fontSize16: {
    fontSize: 16,
  },
  fontSize15: {
    fontSize: 15,
  },
  fontSize14: {
    fontSize: 14,
  },
  fontSize13: {
    fontSize: 13,
  },
  fontSize12: {
    fontSize: 12,
  },
  fontSize11: {
    fontSize: 11,
  },
  lightBoxShadow: {
    shadowColor: '#123456',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  borderRadius5: {
    borderRadius: 5
  },
  headerMargin: {
    marginTop: 35
  },
  placeholderStyle: {
    fontSize: 14,
    color: '#CECECE'
  },
  searchIconStyle: {
    width: 22,
    height: 22
  },
  backIconStyle: {
    width: 26,
    height: 16
  },
  pendingStatus: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    fontSize: 12,
    borderColor: '#9C9C9C',
    borderWidth: 1,
    borderRadius: 100,
    width: 122,
  },
  pendingText: {
    fontSize: 12,
    color: '#9C9C9C'
  },
  buttonFollow: {
    paddingVertical: 7,
    paddingHorizontal: 7,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 5
  },
  textFollow: {
    color: '#3ABF57',
    fontSize: 12,
    fontFamily: 'Quicksand-Bold'
  },
  borderBottom: {
    borderBottomColor: 'rgba(233, 233, 233, 0.7)',
    borderBottomWidth: 1
  },
  borderTop: {
    borderTopColor: 'rgba(233, 233, 233, 0.7)',
    borderTopWidth: 1
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
  lineHoriColor: '#E9E9E9',
  lightGrayColor: '#C8C8C8',
  gradientBlackTopColor: 'rgba(0, 16, 8, 0)',
  gradientBlackBottomColor: 'rgba(0, 16, 8, 0.65)',
  greenSelling: '#7BCC46',
  madeIn: '#767676',
  oldPrice: '#001D12',
  addCartHome: '#5DC11B',
  borderAddCart: '#E0E0E0',
  blackName: '#001D12',
  dateEvent: '#FF8A00',
  appNameIos: '#06AF48',
  searchBarIos: '#F8F8F8',
  blackReport: '#444444',
  shadowColor: 'rgba(0, 0, 0, 0.1)',
};

export const ACTION = {
  SET_ACCOUNT_INFO: 'SET_ACCOUNT_INFO',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  GET_CART: 'GET_CART'
};

export const CONST = {
  chefRank: 9
}

export const STEPS = {
  INFO: 'info',
  INGREDIENT: 'ingredient',
  PERFORM: 'perform'
}
