import { combineReducers } from 'redux';

import pageAccountInfo from './page-account-info.reducer';
import pageCartInfo from './cart.reducer';

// listen for the action type of 'RESET'
const reducer = combineReducers({
  ...pageAccountInfo,
  ...pageCartInfo
});
export default reducer;
