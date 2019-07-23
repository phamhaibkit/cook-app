import HTTPService from './http.service';
import { API } from './api';
import _ from 'lodash';

const homeData = {
  loading: true,
}

class HomeService {
  constructor() {
    this.resetService();
  }

  resetService = () => {
		this.homeData = _.cloneDeep(homeData);
  };
  
  getHome = () => {
    console.log( 'getHome' + Date());
    this.resetService();
    const url = API.GET_HOME;
    this.homeData.loading = true;
    return HTTPService.get(url,null,null)
      .then(data => {
        console.log( 'getHome Done' + Date(), data);
        this.homeData = _.cloneDeep({
          ...data,
          loading: false,
        });
      })
      .catch(err => {
        return Promise.reject(err);
      })
  }
}

export default new HomeService();