import HTTPService from './http.service';
import { API } from './api';
import _ from 'lodash';

const homeData = {
  loading: true,
}

const trendingData = {
  loading: true,
}

const adsData = {
  loading: true,
}

class HomeService {
  constructor() {
    this.resetService();
  }

  resetService = () => {
    this.homeData = _.cloneDeep(homeData);
    this.trendingData = _.cloneDeep(trendingData);
    this.adsData = _.cloneDeep(adsData);
  };
  
  getHome = () => {
    // console.log( 'getHome' + Date());
    this.resetService();
    const url = API.GET_HOME;
    this.homeData.loading = true;
    return HTTPService.get(url,null,null)
      .then(data => {
        // console.log( 'getHome Done' + Date(), data);
        this.homeData = _.cloneDeep({
          ...data,
          loading: false,
        });
      })
      .catch(err => {
        return Promise.reject(err);
      })
  };

  getTrending = () => {
    const url = API.GET_TRENDING;
    this.trendingData.loading = true;
    return HTTPService.get(url)
      .then(data => {
        this.trendingData=_.cloneDeep({
          ...data,
          loading: false,
        })
      })
  }

  getAds = () => {
    const url = API.GET_ADS;
    this.adsData.loading = true;
    return HTTPService.get(url)
      .then(data => {
        this.adsData=_.cloneDeep({
          ...data,
          loading: false,
        })
      })
  }

}

export default new HomeService();