import HTTPService from './http.service';
import { API } from './api';
import _ from 'lodash';

const comboData = [];
const comboDetailData = {};

class ComboService {
  constructor() {
    this.resetService();
  }

  resetService = () => {
    this.comboData = _.cloneDeep(comboData);
    this.comboDetailData = _.cloneDeep(comboDetailData);
  };

  getCombo = () => {
    this.resetService();
    const url = API.GET_COMBO_LIST;

    return HTTPService.get(url,null,null)
      .then(data => {              
        this.comboData = _.cloneDeep([
          ...data
        ]);
      })
      .catch(err => {
        return Promise.reject(err);
      })
  }

  getComboDetail = (id) => {
    this.resetService();
    const url = API.GET_COMBO_DETAIL(id);

    return HTTPService.get(url,null,null)
      .then(data => {            
        this.comboDetailData = _.cloneDeep({
          ...data
        });       
      })
      .catch(err => {
        return Promise.reject(err);
      })    
  }
}

export default new ComboService();