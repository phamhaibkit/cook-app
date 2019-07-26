/* eslint-env es6 */
const HOST = '45.122.222.214:8181';

export const API = {
  GET_HOME: HOST + '/home?usr=1',

  // collection
  GET_COLLECTION_LIST: HOST + '/recipe-collection/all',
  GET_COLLECTION_DETAIL: id => HOST + '/recipe-collection?id=' + id,

  //combo
  GET_COMBO_LIST: HOST + '/recipe-combo/all',
  GET_COMBO_DETAIL: id => HOST + '/recipe-combo?id=' + id,  
  
  //recipe highlight
  GET_RECIPE_HIGHLIGHT_LIST: HOST + '/recipe/highlight-recipe/all',
  GET_RECIPE_LIKED: id => HOST + '/recipe/favorite-recipe?usr=' + id
};