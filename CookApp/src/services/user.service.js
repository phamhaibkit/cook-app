import HTTPService from './http.service';
import { API } from './api';
import _ from 'lodash';

const followerData = {
  loading: true
}


class UserService {
  constructor() {
    this.resetService();
  }

  resetService = () => {
    this.followerData = _.cloneDeep(followerData);
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

}

export default new UserService();