import HTTPService from './http.service';
import { API } from './api';
import _ from 'lodash';

const followerData = {
  loading: true
}

const userDraftRecipe = {
  loading: true
}
class UserService {
  constructor() {
    this.resetService();
  }

  resetService = () => {
    this.followerData = _.cloneDeep(followerData);
    this.userDraftRecipe = _.cloneDeep(userDraftRecipe);
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
    this.getUserDraftRecipe.loading = true;

    return HTTPService.get(url,null,null)
      .then(data => {
        this.userDraftRecipe = _.cloneDeep({
          draftRecipe: data,
          loading: false,
        });
      })
      .catch(err => {
        return Promise.reject(err);
      })
  }

}

export default new UserService();