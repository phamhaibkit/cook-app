import HTTPService from './http.service';
import { API } from './api';
import _ from 'lodash';

const followerData = {
  loading: true
}

const userDraftRecipes = {
  loading: true
}

const userDraftOrders = {
  loading: true
}

const waitingReviewRecipes = {
  loading: true
}

const userRejectRecipes = {
  loading: true
}

class UserService {
  constructor() {
    this.resetService();
  }

  resetService = () => {
    this.followerData = _.cloneDeep(followerData);
    this.userDraftRecipes = _.cloneDeep(userDraftRecipes);
    this.userDraftOrders = _.cloneDeep(userDraftOrders);
    this.waitingReviewRecipes = _.cloneDeep(waitingReviewRecipes);
    this.userRejectRecipes = _.cloneDeep(userRejectRecipes);
  };
  
  getFollowerData = (userId) => {
    const url = API.GET_FOLLOWER(userId);
    this.followerData.loading = true;
    return HTTPService.get(url,null,null)
      .then(data => {
        this.followerData = _.cloneDeep({
          followers: data,
          loading: false,
        });
      })
      .catch(err => {
        return Promise.reject(err);
      })
  }

  getUserDraftRecipe = (userId) => {
    const url = API.USER_DRAFT_RECIPE(userId);
    this.userDraftRecipes.loading = true;

    return HTTPService.get(url,null,null)
      .then(data => {
        this.userDraftRecipes = _.cloneDeep({
          draftRecipes: data,
          loading: false,
        });
      })
      .catch(err => {
        return Promise.reject(err);
      })
  }

  getUserDraftOrders = (userId) => {
    const url = API.USER_DRAFT_ORDERS(userId);
    this.userDraftOrders.loading = true;

    return HTTPService.get(url,null,null)
      .then(data => {
        this.userDraftOrders = _.cloneDeep({
          draftOrders: data,
          loading: false,
        });
      })
      .catch(err => {
        return Promise.reject(err);
      })
  }

  getWaitingReviewRecipes = (userId) => {
    const url = API.USER_WAITING_REVIEW_RECIPES(userId);
    this.waitingReviewRecipes.loading = true;

    return HTTPService.get(url,null,null)
      .then(data => {
        this.waitingReviewRecipes = _.cloneDeep({
          waitingReviewRecipes: data,
          loading: false,
        });
      })
      .catch(err => {
        return Promise.reject(err);
      })
  }

  getUserRejectRecipes = (userId) => {
    const url = API.USER_REJECT_RECIPES(userId);
    this.userRejectRecipes.loading = true;

    return HTTPService.get(url,null,null)
      .then(data => {
        this.userRejectRecipes = _.cloneDeep({
          userRejectRecipes: data,
          loading: false,
        });
      })
      .catch(err => {
        return Promise.reject(err);
      })
  }
}

export default new UserService();