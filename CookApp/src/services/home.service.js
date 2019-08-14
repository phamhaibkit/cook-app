import HTTPService from './http.service';
import { API } from './api';
import _ from 'lodash';
import moment from 'moment';

const trendingData = {
  loading: true,
};

const adsData = {
  loading: true,
};

class HomeService {
  constructor() {
    this.resetService();
  }

  resetService = () => {
    this.trendingData = _.cloneDeep(trendingData);
    this.adsData = _.cloneDeep(adsData);
  };

  getTrendings = () => {
    const url = API.GET_TRENDING;
    this.trendingData.loading = true;
    return HTTPService.get(url)
      .then((data) => {
        this.trendingData = _.cloneDeep({
          trendings:data,
          loading: false,
        });
      })
      .catch((err) => {
        return Promise.reject(err);
      })
  }

  getAds = () => {
    const url = API.GET_ADS;
    this.adsData.loading = true;
    return HTTPService.get(url)
      .then((data) => {
        this.adsData = _.cloneDeep({
          ...data,
          loading: false,
        })
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  }

  likeEvent = (eventId) => {
    const url = API.LIKE_EVENT(eventId);
    this.likedEventsData.loading = true;
    return HTTPService.post(url)
      .then((data) => {
        return Promise.resolve(data);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  }

  likeRecipe = (recipeId) => {
    const url = API.LIKE_RECIPE(recipeId);
    this.likedRecipeData.loading = true;
    return HTTPService.post(url)
      .then((data) => {
        return Promise.resolve(data);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  }

  shareEvent = (eventId) => {
    const url = API.SHARE_EVENT(eventId);
    this.shareEventData = true;
    return HTTPService.post(url)
      .then((data) => {
        return Promise.resolve(data);
      })
      .catch((err) => {
        return Promise.reject(err);
      })
  }

  shareRecipe = (recipeId) => {
    const url = API.SHARE_RECIPE(recipeId);
    this.shareRecipeData.loading = true;
    return HTTPService.post(url)
      .then((data) => {
        return Promise.resolve(data);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  }

  commentEvent = (eventId, comment) => {
    const url = API.COMMENT_EVENT;
    let dateTime = new Date();
    dateTime = moment(dateTime).format("YYYY-MM-DD HH:mm:ss");
    const params = {
      eventId: eventId,
      time: dateTime,
      comment: comment
    };
    return HTTPService.post(url, params)
      .then((data) => {
        return Promise.resolve(data);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  }

  commentRecipe = (recipeId, comment) => {
    const url = API.COMMENT_RECIPE;
    let dateTime = new Date();
    dateTime = moment(dateTime).format("YYYY-MM-DD HH:mm:ss");
    const params = {
      recipeId: recipeId,
      time: dateTime,
      comment: comment
    };
    return HTTPService.post(url, params)
      .then((data) => {
        return Promise.resolve(data);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  }
}

export default new HomeService();