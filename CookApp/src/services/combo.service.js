import HTTPService from './http.service';
import { API } from './api';
import _ from 'lodash';

const comboHome = [];
const comboData = [];
const comboDetailData = {};

class ComboService {
  constructor() {
    this.resetService();
  }

  resetService = () => {
    this.comboHome = _.cloneDeep(comboHome);
    this.comboData = _.cloneDeep(comboData);
    this.comboDetailData = _.cloneDeep(comboDetailData);
  };
  
  getComboHome = (number) => {
    this.resetService();
    const url = API.GET_COMBO_HOME(number);

    return HTTPService.get(url,null,null)
      .then(data => {              
        this.comboHome = _.cloneDeep([
          ...data
        ]);
      })
      .catch(err => {
        return Promise.reject(err);
      })
  }

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