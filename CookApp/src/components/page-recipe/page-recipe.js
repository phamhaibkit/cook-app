import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SearchBarHeader from '../search-bar/search-bar';
import CollectionHome from '../collection-home/collection-home';
import ComboHome from '../combo-home/combo-home';
import ViewMoreHome from '../view-more-home/view-more-home';
import RecipeHighlightHome from '../recipe-highlight-home/recipe-highlight-home';
import CategoryRecipe from '../category-recipe/category-recipe';
import { LANG } from '../../lang/lang';
import { RECIPES } from '../../models/data';
import styles from './page-recipe-style';
import { IMG, COLOR } from '../../utils/variables';
import navigationService from '../../services/navigation.service';
import { ROUTES } from '../../utils/routes';

const img = {
  uri:
    'https://image.shutterstock.com/image-photo/mix-fresh-green-fruits-on-260nw-571146373.jpg'
};

export default class PageRecipe extends Component {

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
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.contanerSearch}>
          <SearchBarHeader onPress={this.onPressSearch} />
        </View>
        <ScrollView>
          <TouchableOpacity style={styles.upRecipeView}>
            <Image source={IMG.upRecipe} style={styles.upImg}></Image>
            <Text style={styles.upText}>{LANG.UP_RECIPE}</Text>
          </TouchableOpacity>
          <View>
            <CategoryRecipe />
          </View>
          <LinearGradient
            colors={[COLOR.whiteColor, COLOR.searchBarIos, COLOR.backgroundColor]}
            style={styles.gradienView}
          />
          <View style={styles.container}>
            <ViewMoreHome type={LANG.RECIPE_HIGHLIGHT} viewMore={this.viewMore} notMarginTop={true} />
            <RecipeHighlightHome recipes={RECIPES} isHorizontal />
            <View style={styles.advertisement}>
              <Image style={styles.adverImg} source={img} resizeMode="cover" />
            </View>
            <ViewMoreHome type={LANG.COLLECTION} viewMore={this.viewMore} />
            <CollectionHome />
            <ViewMoreHome type={LANG.COMBO} viewMore={this.viewMore} />
            <ComboHome />
          </View>
        </ScrollView>
      </View>
    );
  }
}
