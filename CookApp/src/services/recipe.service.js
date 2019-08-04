import HTTPService from './http.service';
import { API } from './api';
import _ from 'lodash';

const recipeHighLightData = {
  loading: true,
  recipes: []
}

const recipeLikedData = {
  loading: true,
  recipes: []
}

const recipeDetail = {
}


class RecipeService {
  constructor() {
    this.resetService();
  }

  resetService = () => {
    this.recipeHighLightData = _.cloneDeep(recipeHighLightData);
    this.recipeLikedData = _.cloneDeep(recipeLikedData);
    this.recipeDetail = _.cloneDeep(recipeDetail);
  };
  
  getRecipeHighLightList = () => {
    // console.log( 'recipeHightLightData' + Date());
    // this.resetService();
    const url = API.GET_RECIPE_HIGHLIGHT_LIST;
    this.recipeHighLightData.loading = true;
    return HTTPService.get(url,null,null)
      .then(data => {
        // console.log( 'recipeHightLightData Done' + Date(), data);
        this.recipeHighLightData = _.cloneDeep({
          recipes: data,
          loading: false,
        });
      })
      .catch(err => {
        return Promise.reject(err);
      })
  }

  getRecipeLikedList = (userId) => {
    // this.resetService();
    const url = API.GET_RECIPE_LIKED(userId);
    this.recipeLikedData.loading = true;
    return HTTPService.get(url,null,null)
      .then(data => {
        // console.log( 'recipeLikedData Done' + Date(), data);
        this.recipeLikedData = _.cloneDeep({
          recipes: data,
          loading: false,
        });
      })
      .catch(err => {
        return Promise.reject(err);
      })
  }

  getRecipeDetail = (id) => {
    this.resetService();
    const url = API.GET_RECIPE_DETAIL(id);

    
    return HTTPService.get(url,null,null)
      .then(data => {   
        console.log(data);         
        this.recipeDetail = _.cloneDeep({
          ...data
        });

        console.log( 'get this.recipeDetail Done ' + JSON.stringify(this.recipeDetail)); 
      })
      .catch(err => {
        return Promise.reject(err);
      })    
  }

}

export default new RecipeService();