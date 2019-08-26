/* eslint-env es6 */
// const HOST = 'http://www.api.bechef.vn';
const HOST = '45.122.222.214:8181';


export const API = {
  GET_HOME: `${HOST}/home?usr=1`,

  // cart
  GET_NUMBER_CART: userId => `${HOST}/cart/number-of-product?usr=${userId}`,
  ADD_TO_CART : `${HOST}/cart/add`,

  // trending
  GET_TRENDING: `${HOST}/trend/all`,

  // ads
  GET_ADS: `${HOST}/ads?position=1`,

  // collection
  GET_COLLECTION_LIST: HOST + '/recipe-collection/all',
  GET_COLLECTION_DETAIL: id => HOST + '/recipe-collection?id=' + id,

  //combo
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
  GET_RECIPE_HIGHLIGHT_LIST: HOST + '/recipe/highlight-recipe/all',

  //recipe liked
  GET_RECIPE_LIKED: id => HOST + '/recipe/favorite-recipe?usr=' + id,

  //best-product
  GET_BEST_SELLER_PRODUCT: HOST + '/product/best-seller/all',

  //follower
  GET_FOLLOWER: userId =>  HOST + '/user/follower/all?usr=' + userId,

  //liked-recipe
  GET_LIKED_RECIPE: userId => HOST + '/recipe/favorite-recipe?usr=' + userId,

  //news-event
  GET_NEWS_EVENT : HOST + '/event/all',

  //search recipe
  SEARCH_RECIPE: text => HOST + '/recipe/search?name=' + text,
  MOST_SEARCH: HOST + '/recipe/search/trending',
  //// recipe detail
  GET_RECIPE_DETAIL: id => HOST + '/recipe/' + id,

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
};