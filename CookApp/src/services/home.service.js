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

const likedEventsData = {
  loading: true
}

const likedRecipeData = {
  loading: true
}

const shareEventData = {
  loading: true
}

const shareRecipeData = {
  loading: true
}


class HomeService {
  constructor() {
    this.resetService();
  }

  resetService = () => {
    this.homeData = _.cloneDeep(homeData);
    this.trendingData = _.cloneDeep(trendingData);
    this.adsData = _.cloneDeep(adsData);
    this.likedEventsData = _.cloneDeep(likedEventsData);
    this.likedRecipeData = _.cloneDeep(likedRecipeData);
    this.shareEventData = _.cloneDeep(shareEventData);
    this.shareRecipeData = _.cloneDeep(shareRecipeData);
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

  getTrendings = () => {
    const url = API.GET_TRENDING;
    this.trendingData.loading = true;
    return HTTPService.get(url)
      .then(data => {
        this.trendingData=_.cloneDeep({
          trendings:data,
          loading: false,
        })
      })
      .catch(err => {
        return Promise.reject(err);
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
      .catch(err => {
        return Promise.reject(err);
      })
  }

  likeEvent = (eventId) => {
    const url = API.LIKE_EVENT(eventId);
    this.likedEventsData.loading = true;
    return HTTPService.post(url)
      .then(data => {
        this.likedEventsData = _.cloneDeep({
          likedEvents: data,
          loading: false
        })
      })
      .catch(err => {
        return Promise.reject(err);
      })
  }

  likeRecipe = (recipeId) => {
    const url = API.LIKE_RECIPE(recipeId);
    this.likedRecipeData.loading = true;
    return HTTPService.post(url)
      .then(data => {
        this.likedRecipeData = _.cloneDeep({
          likedRecipes: data,
          loading: false
        })
      })
      .catch(err => {
        return Promise.reject(err);
      })
  }

  shareEvent = (eventId) => {
    const url = API.SHARE_EVENT(eventId);
    this.shareEventData = true;
    return HTTPService.post(url)
      .then(data => {
        this.shareEventData = _.cloneDeep({
          loading: false
        })
      })
      .catch(err => {
        return Promise.reject(err);
      })
  }

  shareRecipe = (recipeId) => {
    const url = API.SHARE_RECIPE(recipeId);
    this.shareRecipeData.loading = true;
    return HTTPService.post(url)
      .then(data => {
        this.shareRecipeData = _.cloneDeep({
          loading: false
        })
      })
      .catch(err => {
        return Promise.reject(err);
      })
  }

}

export default new HomeService();