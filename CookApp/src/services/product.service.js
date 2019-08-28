import HTTPService from './http.service';
import { API } from './api';
import _ from 'lodash';

const bestSellerProduct = {
  loading: true
};

const productList = {
  loading: true
};

class ProductService {
  constructor() {
    this.resetService();
  }

  resetService = () => {
    this.bestSellerProduct = _.cloneDeep(bestSellerProduct);
    this.productList = _.cloneDeep(productList);
  };

  getBestSellerProduct = (page, size) => {
    const url = API.GET_BEST_SELLER_PRODUCT(page, size);
    this.bestSellerProduct.loading = true;
    return HTTPService.get(url)
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

  getProductList = (page, size) => {
    const url = API.GET_BEST_SELLER_PRODUCT(page, size);
    this.productList.loading = true;
    return HTTPService.get(url)
      .then((data) => {
        this.productList = _.cloneDeep({
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