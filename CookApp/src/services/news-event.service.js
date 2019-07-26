import HTTPService from './http.service';
import { API } from './api';
import _ from 'lodash';

const newsEventData = {
  loading: true
}


class NewsEventService {
  constructor() {
    this.resetService();
  }

  resetService = () => {
    this.newsEventData = _.cloneDeep(newsEventData);
  };
  
  getNewsEventData = () => {
    const url = API.GET_FOLLOWER;
    this.newsEventData.loading = true;
    return HTTPService.get(url,null,null)
      .then(data => {
        this.newsEventData = _.cloneDeep({
          ...data,
          loading: false,
        });
      })
      .catch(err => {
        return Promise.reject(err);
      })
  }

}

export default new NewsEventService();