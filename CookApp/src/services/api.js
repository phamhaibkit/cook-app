/* eslint-env es6 */
const HOST = '45.122.222.214:8181';

export const API = {
  GET_HOME: HOST + '/home?usr=1',

  //cart
  GET_NUMBER_CART: userId => HOST + '/cart/number-of-product?usr=' + userId,

  //trending
  GET_TRENDING: HOST + '/trend/all',

  //ads
  GET_ADS: HOST + '/ads?position=1',

  // collection
  GET_COLLECTION_LIST: HOST + '/recipe-collection/all',
  GET_COLLECTION_DETAIL: id => HOST + '/recipe-collection?id=' + id,

  //combo
  GET_COMBO_LIST: HOST + '/recipe-combo/all',
  GET_COMBO_DETAIL: id => HOST + '/recipe-combo?id=' + id,  
  
  //recipe highlight
  GET_RECIPE_HIGHLIGHT_LIST: HOST + '/recipe/highlight-recipe/all',

  //recipe liked
  GET_RECIPE_LIKED: id => HOST + '/recipe/favorite-recipe?usr=' + id,

  //best-product
  GET_BEST_SELLER_PRODUCT: HOST + '/product/best-seller/all',

  //follower
  GET_FOLLOWER: userId =>  HOST + '/user/follower/all?usr=' + userId,

  //liked-recipe
  GET_LIKED_RECIPE: userId => HOST + 'recipe/favorite-recipe?usr=' + userId,

  //news-event
  GET_NEWS_EVENT : HOST + '/event/all',

  //search recipe
  SEARCH_RECIPE: text => HOST + '/recipe/search?name=' + text,

  GET_RECIPE_DETAIL: id => HOST + '/recipe/' + id

};