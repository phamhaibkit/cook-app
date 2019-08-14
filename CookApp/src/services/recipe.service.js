import _ from 'lodash';
import moment from 'moment';
import HTTPService from './http.service';
import { API } from './api';


const recipeHighLightData = {
  loading: true,
  recipes: []
};

const recipeLikedData = {
  loading: true,
  recipes: []
};

const recipeSuggestData = {
  loading: true,
  recipes: []
};

const recipeOtherData = {
  loading: true,
  recipes: []
};

const recipeDetail = {
};

const categoryData = {
  loading: true,
  category: []
};


class RecipeService {
  constructor() {
    this.resetService();
  }

  resetService = () => {
    this.recipeHighLightData = _.cloneDeep(recipeHighLightData);
    this.recipeLikedData = _.cloneDeep(recipeLikedData);
    this.recipeDetail = _.cloneDeep(recipeDetail);
    this.recipeSuggestData = _.cloneDeep(recipeSuggestData);
    this.recipeOtherData = _.cloneDeep(recipeOtherData);
    this.categoryData = _.cloneDeep(categoryData);
  };

  getRecipeHighLightList = () => {
    // console.log( 'recipeHightLightData' + Date());
    // this.resetService();
    const url = API.GET_RECIPE_HIGHLIGHT_LIST;
    this.recipeHighLightData.loading = true;
    return HTTPService.get(url, null, null)
      .then((data) => {
        // console.log( 'recipeHightLightData Done' + Date(), data);
        this.recipeHighLightData = _.cloneDeep({
          recipes: data,
          loading: false,
        });
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  }

  getRecipeSuggestList = (userId) => {
    // console.log( 'recipeHightLightData' + Date());
    // this.resetService();
    const url = API.GET_RECIPE_SUGGEST_LIST(userId);
    this.recipeSuggestData.loading = true;
    return HTTPService.get(url, null, null)
      .then((data) => {
        // console.log( 'recipeHightLightData Done' + Date(), data);
        this.recipeSuggestData = _.cloneDeep({
          recipes: data,
          loading: false,
        });
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  }

  getRecipeOtherList = (userId) => {
    // console.log( 'recipeHightLightData' + Date());
    // this.resetService();
    const url = API.GET_RECIPE_OTHER_LIST;
    this.recipeOtherData.loading = true;
    return HTTPService.get(url, null, null)
      .then((data) => {
        // console.log( 'recipeHightLightData Done' + Date(), data);
        this.recipeOtherData = _.cloneDeep({
          recipes: data,
          loading: false,
        });
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  }

  getRecipeLikedList = (userId) => {
    // this.resetService();
    const url = API.GET_RECIPE_LIKED(userId);
    this.recipeLikedData.loading = true;
    return HTTPService.get(url, null, null)
      .then((data) => {
        // console.log( 'recipeLikedData Done' + Date(), data);
        this.recipeLikedData = _.cloneDeep({
          recipes: data,
          loading: false,
        });
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  }

  getRecipeDetail = (id) => {
    this.resetService();
    const url = API.GET_RECIPE_DETAIL(id);

    return HTTPService.get(url, null, null)
      .then((data) => {
        console.log(data);
        this.recipeDetail = _.cloneDeep({
          ...data
        });

        console.log('get this.recipeDetail Done ' + JSON.stringify(this.recipeDetail));
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  }

  sendRecipeRating = (data) => {
    let dateTime = new Date();
    dateTime = moment(dateTime).format('YYYY-MM-DD HH:mm:ss');
    console.log(dateTime, 'dateTime');
    this.resetService();
    const params = {
      recipeId: data.id,
      star: data.number,
      time: dateTime,
      comment: data.comment
    };
    console.log(params, 'params');
    const url = API.SEND_RATING_COMMENT;
    return HTTPService.post(url, params)
      .then((data) => {
        console.log(data, '$sasdsad');
        return Promise.resolve(data);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  }

  sendRecipeComment = (data) => {
    let dateTime = new Date();
    dateTime = moment(dateTime).format('YYYY-MM-DD HH:mm:ss');
    this.resetService();
    const params = {
      recipeId: data.id,
      time: dateTime,
      comment: data.comment
    };
    console.log(params, 'params');
    const url = API.SEND_COMMENT_COMMENT;
    return HTTPService.post(url, params)
      .then((data) => {
        console.log(data, '$sasdsad');
        return Promise.resolve(data);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  }


  getCategory = () => {
    const url = API.GET_CATEGORY;
    this.categoryData.loading = true;
    return HTTPService.get(url, null, null)
      .then((data) => {
        // console.log( 'recipeHightLightData Done' + Date(), data);
        this.categoryData = _.cloneDeep({
          category: data,
          loading: false,
        });
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  }

}

export default new RecipeService();