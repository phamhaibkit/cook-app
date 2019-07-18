import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import CollectionHome from '../collection-home/collection-home';
import ComboHome from '../combo-home/combo-home';
import Trending from '../trending/trending';
import ContainerScroll from '../container-scroll/container-scroll';
import navigationService from '../../services/navigation.service';
import ProductList from '../product-list/product-list';
import ViewMoreHome from '../view-more-home/view-more-home';
import RecipeHighlightHome from '../recipe-highlight-home/recipe-highlight-home';
import FollowingHome from '../following-home/following-home';
import NewsEvent from '../news-event/news-event';
import { LANG } from '../../lang/lang';
import styles from './page-home-style';
import { RECIPES, RECIPES_LOVED } from '../../models/data';

const img = {
  uri:
    'https://image.shutterstock.com/image-photo/mix-fresh-green-fruits-on-260nw-571146373.jpg'
};

export default class PageHome extends Component {
	viewMore = type => {
    if (type == LANG.COLLECTION) { navigationService.navigate('CollectionDetail'); }
    if (type == LANG.COMBO) { navigationService.navigate('ComboList');		}
  };
  
  gotoDetail = () => {
    navigationService.navigate('ComboDetail');
  }

  render() {
    return (
          <ContainerScroll>
            <View style={styles.container}>
              <Trending />
              <ViewMoreHome type={LANG.COLLECTION} viewMore={this.viewMore} />
              <CollectionHome />
              <View style={styles.advertisement}>
                <Image style={styles.adverImg} source={img} resizeMode="cover" />
              </View>
              <ViewMoreHome type={LANG.RECIPE_HIGHLIGHT} viewMore={this.viewMore} />
              <RecipeHighlightHome recipes={RECIPES} isHorizontal/>
              <ViewMoreHome type={LANG.COMBO} viewMore={this.viewMore} />
              <ComboHome />
              <ViewMoreHome type={LANG.BEST_SELL} viewMore={this.viewMore} />
              <ProductList />
              <View style={styles.advertisement}>
                <Image style={styles.adverImg} source={img} resizeMode="cover" />
              </View>
              <ViewMoreHome type={LANG.FOLLOWING_LIST} viewMore={this.viewMore} />
              <FollowingHome />
              <ViewMoreHome type={LANG.LIKED_RECIPE} viewMore={this.viewMore} />
              <RecipeHighlightHome recipes={RECIPES_LOVED}/>
              <ViewMoreHome type={LANG.INFO_EVENT} viewMore={this.viewMore} />
              <NewsEvent newsEvent={RECIPES_LOVED}/>
            </View>
          </ContainerScroll>
    );
  }
}
