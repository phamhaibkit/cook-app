import HTTPService from './http.service';
import { API } from './api';
import _ from 'lodash';

const comboData = [];
const comboDetail = {};

class ComboService {
  constructor() {
    this.resetService();
  }

  resetService = () => {
    this.comboData = _.cloneDeep(comboData);
    this.comboDetail = _.cloneDeep(comboDetail);
  };

  getCombo = () => {
    this.resetService();
    const url = API.GET_COMBO_LIST;

    return HTTPService.get(url,null,null)
      .then(data => {           
        console.log( 'get comboList Done' +  JSON.stringify(data));    
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
    console.log('?id= ', url);

    
    return HTTPService.get(url,null,null)
      .then(data => {            
        this.comboDetail = _.cloneDeep({
          ...data
        });

        console.log( 'get this.comboDetail Done ' + JSON.stringify(this.comboDetail)); 
      })
      .catch(err => {
        return Promise.reject(err);
      })    
  }
}

export default new ComboService();