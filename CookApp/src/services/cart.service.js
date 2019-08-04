import HTTPService from './http.service';
import { API } from './api';
import _ from 'lodash';

const cartNumber = {
  loading: true
}

const addCartdata = {
  loading: false
}


class CartService {
  constructor() {
    this.resetService();
  }

  resetService = () => {
    this.cartNumber = _.cloneDeep(cartNumber);
    this.addCartdata = _.cloneDeep(addCartdata);
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

  addToCart = (id, quantity) => {
    const url = API.ADD_TO_CART;
    const params = {
      productId: id,
      quality: quantity
    };
    console.log('DATA ADD CART=', params);
    this.addCartdata.loading = true;
    return HTTPService.post(url,params,null)
      .then(data => {
        this.addCartdata = _.cloneDeep({
          carts: data,
          loading: false,
        });
      })
      .catch(err => {
        return Promise.reject(err);
      })
  }

}

export default new CartService();