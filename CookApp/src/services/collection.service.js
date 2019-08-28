import HTTPService from './http.service';
import { API } from './api';
import _ from 'lodash';

const collectionHome = {
  loading: true,
  data: []
};
const collectionData = {
  loading: true,
  data: []
};
const collectionDetail = {
  loading: true
};

class CollectionService {
  constructor() {
    this.resetService();
  }

  resetService = () => {
    this.collectionData = _.cloneDeep(collectionData);
    this.collectionDetail = _.cloneDeep(collectionDetail);
    this.collectionHome = _.cloneDeep(collectionHome);
  };

  getCollectionHome = (number) => {
    this.resetService();
    const url = API.GET_COLLECTION_HOME(number);
    this.collectionHome.loading = true;

    return HTTPService.get(url,null,null)
      .then(data => {      
        this.collectionHome = _.cloneDeep({
          data,
          loading: false,
        });

        console.log('api from collection Home: data', data);
      })
      .catch(err => {
        return Promise.reject(err);
      })
  }

  getCollections = () => {
    this.resetService();
    const url = API.GET_COLLECTION_LIST;
    this.collectionData.loading = true;

    return HTTPService.get(url,null,null)
      .then(data => {      
        this.collectionData = _.cloneDeep({
          data,
          loading: false,
        });
      })
      .catch(err => {
        return Promise.reject(err);
      })
  }

  getCollectionDetail = (id) => {
    this.resetService();
    const url = API.GET_COLLECTION_DETAIL(id);
    this.collectionDetail.loading = true;
    
    return HTTPService.get(url,null,null)
      .then(data => {           
        this.collectionDetail = _.cloneDeep({
          ...data,
          loading: false
        });
      })
      .catch(err => {
        return Promise.reject(err);
      })    
  }
}

export default new CollectionService();