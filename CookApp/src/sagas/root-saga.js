import { all, takeLatest } from 'redux-saga/effects';

/* Action types */

export default function* rootSaga() {
	yield all([
		// takeLatest(BrandTypes.GET_BRAND_REQUEST, getBrandSaga),
		// takeLatest(BrandProductsTypes.GET_BRAND_PRODUCTS_REQUEST, getBrandProductsSaga),
	]);
}
