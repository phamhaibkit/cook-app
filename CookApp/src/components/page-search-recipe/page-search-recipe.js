import React, { Component } from 'react';
import { Text, View, TouchableOpacity,ScrollView } from 'react-native';
import SearchBarInput from '../search-bar-input/search-bar-input';
import MostSearched from '../most-searched/most-searched';
import { LANG } from '../../lang/lang';
import styles from './page-search-recipe-style';
import searchService from '../../services/search.service';
import Spinner from '../spinner/spinner';
import navigationService from '../../services/navigation.service';
import { ROUTES } from '../../utils/routes';

export default class PageSearchRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textSearch : '',
      recipes: [],
      collections: [],
      showMost: true
    };
  }

  componentDidMount() {
    searchService.mostSearch().then(() => {
      this.setState({
        recipes: searchService.recipeSearchData.recipes,
        collections: searchService.recipeSearchData.recipe_collection
      });
    })
  }

  onCancel=() => {
    this.setState({
      textSearch: ''
    });
  }

  onSearch=(text) => {
    searchService.searchRecipe(text).then(() => {
      this.setState({
        recipes: searchService.recipeSearchData.recipes,
        collections: searchService.recipeSearchData.recipe_collection,
        showMost: false
      });
    });
  }

  onChangeText=(text) => {
    this.setState({
      textSearch: text
    });
  }

  onPressRecipe = (recipe) => {
    navigationService.navigate(ROUTES.recipeDetail.key,  { id: recipe.id});
  }

  onPressCollection = (collections) => {
    console.log('collections====', collections);
    navigationService.navigate(ROUTES.collectionDetail.key,  { id: collections.id});
  }

  render() {
    const { recipes, collections, textSearch, showMost } = this.state;
    return (
      <View style={styles.container}>
        <SearchBarInput onSearch={this.onSearch} onChangeText={this.onChangeText} textData={textSearch}/>
        <ScrollView style={styles.bodyView}>
          {searchService.recipeSearchData.loading ? <Spinner /> : (
            <View>
              { showMost && <Text style={styles.bestSellText}>{LANG.BEST_SEARCH}</Text> }
              <MostSearched label={LANG.RECIPE} data={recipes} subData={true} onPress={this.onPressRecipe}/>
              <MostSearched label={LANG.COLLECTION.name} data={collections} onPress={this.onPressCollection}/>
          </View>
          )}
        </ScrollView>
      </View>
    );
  }
}