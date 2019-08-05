import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import CollectionHome from '../collection-home/collection-home';
import ComboHome from '../combo-home/combo-home';
import ViewMoreHome from '../view-more-home/view-more-home';
import RecipeHighlightHome from '../recipe-highlight-home/recipe-highlight-home';
import Advertiment from '../advertiment/advertiment';
import CategoryRecipe from '../category-recipe/category-recipe';
import SearchBarHeader from '../search-bar/search-bar';
import { LANG } from '../../lang/lang';
import styles from './page-recipe-style';
import { IMG, CSS, COLOR } from '../../utils/variables';
import navigationService from '../../services/navigation.service';
import recipeService from '../../services/recipe.service';
import homeService from '../../services/home.service';
import collectionService from '../../services/collection.service';
import comboService from '../../services/combo.service';
import { ROUTES } from '../../utils/routes';

export default class PageRecipe extends Component {
  constructor(props){
    super(props);
    this.state= {
      isFocus: false,
      recipeHighLights: recipeService.recipeHighLightData,
      ads: homeService.adsData,
      collections: collectionService.collectionData.data,
      combos: comboService.comboData
    }
  }

  componentDidMount(){
    this.getRecipeHighLights();
    // this.getAds();
  }

  getRecipeHighLights = () => {
    recipeService.getRecipeHighLightList().then(() => {
      this.setState({
        recipeHighLights: recipeService.recipeHighLightData
      })
    })
  }

  getAds = () => {
    homeService.getAds().then(() => {
      this.setState({
        ads: homeService.adsData
      })
    })
  }

  upRecipe = () => {
    navigationService.navigate(ROUTES.postRecipe.key);
  }

  onPressSearch = () => {
    navigationService.navigate('PageSearchRecipe');
  }

  viewMore = (type) => {
    switch (type) {
    case LANG.COLLECTION:
      navigationService.navigate(ROUTES.collectionList.key);
      break;
    case LANG.COMBO:
      navigationService.navigate(ROUTES.comboList.key);
      break;
    case LANG.RECIPE_HIGHLIGHT:
      navigationService.navigate(ROUTES.recipeHighlightList.key);
      break;
    default:
      break;
    }
  }

  render() {
    const { recipeHighLights, ads, collections, combos } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.containerSearch}>
          <SearchBarHeader onPress={this.onPressSearch}/>
        </View>
        <ScrollView>
          <TouchableOpacity style={styles.upRecipeView} onPress={this.upRecipe}>
            <Image source={IMG.upRecipe} style={styles.upImg}></Image>
            <Text style={styles.upText}>{LANG.UP_RECIPE}</Text>
          </TouchableOpacity>
          <View style={styles.containerCate}>
            <CategoryRecipe />
          </View>
          <View style={styles.containerRecipe}>
            <ViewMoreHome type={LANG.RECIPE_HIGHLIGHT} viewMore={this.viewMore} notMarginTop={true} />
            <RecipeHighlightHome 
              recipes={recipeHighLights.recipes}
              isHorizontal
              marTop={CSS.padding15} 
            />
            <Advertiment paddingHori={CSS.padding15} data={ads} marginTop={30}/>
            <ViewMoreHome type={LANG.COLLECTION} viewMore={this.viewMore} />
            <CollectionHome data={collections} marTop={CSS.padding15}/>
            <ViewMoreHome type={LANG.COMBO} viewMore={this.viewMore} />
            <ComboHome data={combos} marTop={CSS.padding15}/>
          </View>
        </ScrollView>
      </View>
    );
  }
}
