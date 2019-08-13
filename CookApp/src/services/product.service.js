import HTTPService from './http.service';
import { API } from './api';
import _ from 'lodash';

const bestSellerProduct = {
  loading: true
};


class ProductService {
  constructor() {
    this.resetService();
  }

  resetService = () => {
    this.bestSellerProduct = _.cloneDeep(bestSellerProduct);
  };

  getBestSellerProduct = () => {
    const url = API.GET_BEST_SELLER_PRODUCT;
    this.bestSellerProduct.loading = true;
    return HTTPService.get(url, null, null)
      .then((data) => {
        this.bestSellerProduct = _.cloneDeep({
          loading: false,
          products: data,
        });
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  }

}

export default new ProductService();