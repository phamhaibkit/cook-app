import React, { Component } from 'react';
import { Text, View, TouchableOpacity,ScrollView } from 'react-native';
import SearchBarInput from '../search-bar-input/search-bar-input';
import MostSearched from '../most-searched/most-searched';
import { LANG } from '../../lang/lang';
import styles from './page-search-recipe-style';
import searchService from '../../services/search.service';
import recipeService from '../../services/recipe.service';
import collectionService from '../../services/collection.service';

export default class PageSearchRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textSearch : '',
      recipes: recipeService.recipeHighLightData.recipes,
      collections: collectionService.collectionData.data
    };
  }

  componentDidMount= () => {
    
  }

  onCancel=() => {
    this.setState({
      textSearch: ''
    });
  }

  onSearch=() => {
    searchService.searchRecipe('bo').then(() => {
      this.setState({
        recipes: searchService.recipeSearchData.recipes,
        collections: searchService.recipeSearchData.recipe_collection
      })
    })
  }

  onChangeText=(textData) => {
    // alert('onChangeText');
    this.setState({
      textSearch: textData
    });
  }

  render() {
    const { recipes, collections} = this.state;
    console.log('ASDDDDDDDDDDS', recipes, collections)
    return (
      <View style={styles.container}>
        <SearchBarInput onSearch={this.onSearch}/>
        <ScrollView style={styles.bodyView}>
          <Text style={styles.bestSellText}>{LANG.BEST_SEARCH}</Text>
          <MostSearched label={LANG.RECIPE} data={recipes} subData={true} />
          <MostSearched label={LANG.COLLECTION.name} data={collections} />
        </ScrollView>
      </View>
    );
  }
}