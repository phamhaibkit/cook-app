import HTTPService from './http.service';
import { API } from './api';
import _ from 'lodash';

const recipeSearchData = {
  loading: true,
}

class SearchService {
  constructor() {
    this.resetService();
  }

  resetService = () => {
    this.recipeSearchData = _.cloneDeep(recipeSearchData);
  };
  
  searchRecipe = (text) => {
    const url = API.SEARCH_RECIPE(text);
    this.searchRecipe.loading = true;
    return HTTPService.get(url, null, null)
      .then(data => {
        this.recipeSearchData = _.cloneDeep({
          ...data,
          loading: false
        })
      })
  }
}

export default new SearchService();