/* eslint-env es6 */
const HOST = '45.122.222.214:8181';

export const API = {
  GET_HOME: HOST + '/home?usr=1',

  // collection
  GET_COLLECTION_LIST: HOST + '/recipe-collection/all',
  GET_COLLECTION_DETAIL: id => HOST + '/recipe-collection/' + id,

  //combo
  GET_COMBO_LIST: HOST + '/recipe-combo/all',
  GET_COMBO_DETAIL: id => HOST + '/recipe-combo/' + id,  
};