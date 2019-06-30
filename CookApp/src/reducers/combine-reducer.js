import { combineReducers } from 'redux';

import pageAccountInfo from './page-account-info.reducer';

// listen for the action type of 'RESET'
const reducer = combineReducers({
	...pageAccountInfo,
});
export default reducer;
