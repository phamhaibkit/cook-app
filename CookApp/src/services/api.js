/* eslint-env es6 */
const HOST = 'http://www.api.bechef.vn';
// const HOST = '45.122.222.214:8181';


export const API = {

  // cart
  GET_NUMBER_CART: userId => `${HOST}/cart/number-of-product?usr=${userId}`,
  ADD_TO_CART : `${HOST}/cart/add`,

  // trending
  GET_TRENDING: `${HOST}/trending/home`,

  // ads
  GET_ADS: position => HOST + '/get-ads?position=' + position,

  // collection
  GET_COLLECTION_HOME: number => HOST + '/recipe-collection/hot/?top=' + number,
  GET_COLLECTION_LIST: HOST + '/recipe-collection/all',
  GET_COLLECTION_DETAIL: id => HOST + '/recipe-collection?id=' + id,

  //combo
  GET_COMBO_HOME: number => HOST + '/recipe-combo/hot?top=' + number,
  GET_COMBO_LIST: HOST + '/recipe-combo/all',
  GET_COMBO_DETAIL: id => HOST + '/recipe-combo?id=' + id,  

  //recipe
  GET_RECIPE_SUGGEST_LIST: id=> HOST + '/recipe/suggestion-recipe?usr=' + id,
  GET_RECIPE_OTHER_LIST: HOST + '/recipe/other-recipe?recipe=10',
  GET_CATEGORY: HOST + '/recipe-catalog/all',
  REPORT_RECIPE: HOST + '/recipe/report',
  UP_RECIPE: HOST + '/recipe/recipe',
  SAVE_DRAFT_RECIPE: HOST + '/recipe/draft',

  //recipe highlight
  GET_RECIPE_HIGHLIGHT_LIST: number => HOST + '/recipe/highlight?top=' + number,

  //recipe liked
  GET_RECIPE_LIKED: (page, size) => HOST + '/favorite-recipe?page=' + page + '&pageSize=' + size,

  //best-product
  GET_BEST_SELLER_PRODUCT: (page, size) => HOST + '/product/best-seller?page=' + page + '&pageSize=' + size,
  GET_PRODUCT_LIST: (page, size) => HOST + '/product/list?page=' + page + '&pageSize=' + size,

  //follower
  GET_FOLLOWER: userId =>  HOST + '/user/follower/all?usr=' + userId,

  //news-event
  GET_NEWS_EVENT : number => HOST + '/news-event/hot?top=' + number,

  //search recipe
  SEARCH_RECIPE: text => HOST + '/recipe/search?name=' + text,
  MOST_SEARCH: HOST + '/recipe/search/trending',
  //// recipe detail
  GET_RECIPE_DETAIL: id => HOST + '/recipe/detail/info?recipeId=' + id,

  // home functions
  LIKE_EVENT : eventId => HOST + '/like/event?id=' + eventId,
  LIKE_RECIPE : recipeId => HOST + '/like/recipe?id=' + recipeId,
  COMMENT_EVENT: HOST + '/comment/event',
  COMMENT_RECIPE: HOST + '/comment/recipe',
  SHARE_RECIPE : recipeId => HOST + '/share/recipe?id=' + recipeId,
  SHARE_EVENT : eventId => HOST + '/share/event?id=' + eventId,
  TOKEN_EMAIL : data => HOST + '/login?user=' + data.username +  '&&password=' + data.password,
  SEND_RATING_COMMENT: `${HOST}/evaluate/recipe`,

  // user
  USER_DRAFT_RECIPE: userId => `${HOST}/recipe/draft?usr=${userId}`,
  USER_DRAFT_ORDERS: userId => `${HOST}/bill/draft?usr=${userId}`,
  USER_WAITING_REVIEW_RECIPES: userId => `${HOST}/recipe/pending?usr=${userId}`,
  USER_REJECT_RECIPES: userId => `${HOST}/recipe/reject?usr=${userId}`,

  REGISTER: `${HOST}/authen/register`,
  LOGIN: `${HOST}/authen/login`,
  LOGIN_SOCIAL: `${HOST}/authen/login/social`,
  VALIDATE_OTP: `${HOST}/authen/validate-otp`,
  SET_PASSWORD: `${HOST}/authen/set-password`,
  FORGOT_PASSWORD: `${HOST}/authen/forgot-password`
};