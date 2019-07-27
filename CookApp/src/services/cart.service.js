import HTTPService from './http.service';
import { API } from './api';
import _ from 'lodash';

const cartNumber = {
  loading: true
}


class CartService {
  constructor() {
    this.resetService();
    this.cartNumber = cartNumber;
  }

  resetService = () => {
    // this.recipeHightLightData = _.cloneDeep(recipeHightLightData);
  };
  
  getCartNum = (userId) => {
    const url = API.GET_NUMBER_CART(userId);
    this.cartNumber.loading = true;
    return HTTPService.get(url,null,null)
      .then(data => {
        this.cartNumber = _.cloneDeep({
          ...data,
          loading: false,
        });
      })
      .catch(err => {
        return Promise.reject(err);
      })
  }

}

export default new CartService();