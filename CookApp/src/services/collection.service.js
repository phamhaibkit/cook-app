import HTTPService from './http.service';
import { API } from './api';
import _ from 'lodash';

const collectionData = {
}

class collectionService {
  constructor() {
    this.resetService();
  }

  resetService = () => {
		this.collectionData = _.cloneDeep(collectionData);
  };

  getCollections = () => {
    const url = API.GET_COLLECTION_LIST;

    return HTTPService.get(url,null,null)
      .then(data => {       
        this.collectionData = _.cloneDeep({
          ...data
        });

        console.log( 'getCollectionList ' +  data);
      })
      .catch(err => {
        return Promise.reject(err);
      })
  }

  getCollectionDetail = () => {
    
  }
}

export default new collectionService();