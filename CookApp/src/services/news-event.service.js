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
  
  getNewsEventData = (number) => {
    const url = API.GET_NEWS_EVENT(number);
    this.newsEventData.loading = true;
    return HTTPService.get(url)
      .then(data => {
        console.log('SERVICECECECECECEC', data);
        this.newsEventData = _.cloneDeep({
          newsEvents: data,
          loading: false,
        });
      })
      .catch(err => {
        return Promise.reject(err);
      })
  }

}

export default new NewsEventService();