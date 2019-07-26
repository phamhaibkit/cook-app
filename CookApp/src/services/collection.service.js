import HTTPService from './http.service';
import { API } from './api';
import _ from 'lodash';

const collectionData = [];
const collectionDetail = {};

class CollectionService {
  constructor() {
    this.resetService();
  }

  resetService = () => {
    this.collectionData = _.cloneDeep(collectionData);
    this.collectionDetail = _.cloneDeep(collectionDetail);
  };

  getCollections = () => {
    this.resetService();
    const url = API.GET_COLLECTION_LIST;

    return HTTPService.get(url,null,null)
      .then(data => {      
        this.collectionData = _.cloneDeep([
          ...data
        ]);
      })
      .catch(err => {
        return Promise.reject(err);
      })
  }

  getCollectionDetail = (id) => {
    // this.resetService();
    const url = API.GET_COLLECTION_DETAIL(id);

    
    return HTTPService.get(url,null,null)
      .then(data => {           
        this.collectionDetail = _.cloneDeep({
          ...data
        });
      })
      .catch(err => {
        return Promise.reject(err);
      })    
  }
}

export default new CollectionService();