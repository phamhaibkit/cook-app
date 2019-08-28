import _ from 'lodash';
import moment from 'moment';
import { LANG } from '../lang/lang';
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

  getRecipeHighLightList = (number) => {
    const url = API.GET_RECIPE_HIGHLIGHT_LIST(number);
    this.recipeHighLightData.loading = true;
    return HTTPService.get(url)
      .then((data) => {
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
    const url = API.GET_RECIPE_SUGGEST_LIST(userId);
    this.recipeSuggestData.loading = true;
    return HTTPService.get(url, null, null)
      .then((data) => {
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
    const url = API.GET_RECIPE_OTHER_LIST;
    this.recipeOtherData.loading = true;
    return HTTPService.get(url, null, null)
      .then((data) => {
        this.recipeOtherData = _.cloneDeep({
          recipes: data,
          loading: false,
        });
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  }

  getRecipeLikedList = (page, size) => {
    const url = API.GET_RECIPE_LIKED(page, size);
    this.recipeLikedData.loading = true;
    return HTTPService.get(url)
      .then((data) => {
        console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', data)
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
    const url = API.COMMENT_RECIPE;
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
        this.categoryData = _.cloneDeep({
          category: data,
          loading: false,
        });
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  }

  reportRecipe = (id, content) => {
    const url = API.REPORT_RECIPE;
    const params = {
      id: id,
      reportContent: content
    };
    return HTTPService.post(url, params, null, null, null)
      .then((data) => {
        console.log('DATA RESPONSE==', data);
        return Promise.resolve(data);
      }).catch((err) => {
        return Promise.reject(err);
      });
  }

  upOrSaveDraftRecipe = (recipeData, isUp) => {
    const url = isUp ? API.UP_RECIPE : API.SAVE_DRAFT_RECIPE;
    if(!recipeData.name){
      recipeData.name = LANG.NAME_FOOD;
    }
    const params = {
      name: recipeData.name,
      description: recipeData.description,
      status: recipeData.status || 0,
      price: recipeData.price || 0,
      timeExecute: recipeData.timeExecute,
      numPeople: recipeData.numPeople | 1,
      recipeImgs: recipeData.recipeImgs || [],
      calo: recipeData.calo || 0,
      owner: recipeData.owner || {},
      categories: recipeData.categories || [],
      products: recipeData.products || [],
      steps: recipeData.steps || [
        { stepNumber: 1, stepDetail: 'Describe Step', stepImages: []},
      ]
    };
    console.log('DATA-SEND', params);
    return HTTPService.post(url, params, null, null, null)
      .then((data) => {
        console.log('DATA RESPONSE==', data);
        return Promise.resolve(data);
      }).catch((err) => {
        return Promise.reject(err);
      });
  }
}

export default new RecipeService();