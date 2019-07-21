import React, { Component } from 'react';
import { View } from 'react-native';
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
import Advertiment from '../advertiment/advertiment';
import { LANG } from '../../lang/lang';
import styles from './page-home-style';
import { RECIPES, RECIPES_LOVED } from '../../models/data';
import { CSS } from '../../utils/variables';
import { ROUTES } from '../../utils/routes';
import homeService from '../../services/home.service';
import _ from 'lodash';

export default class PageHome extends Component {
  constructor(props) {
		super(props);
		this.state = {
      ...homeService.homeData
		};

	}
  componentDidMount() {
		// this.showLoading();
		this.getHome();
  }

  getHome = () => {
    homeService.getHome().then(() => {
      console.log('AAAAAAAAAAAAAAAAAAAAa');
      const data = _.cloneDeep(homeService.homeData);
      this.setState({
        ...data
      })
    })
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
  };

  gotoDetail = () => {
    navigationService.navigate('ComboDetail');
  }

  render() {
    console.log('Render===', this.state);
    const { trending, recipeHighlight, likedRecipe } = this.state;

    return (
      <ContainerScroll>
        <View style={styles.container}>
          <Trending data={trending}/>
          <ViewMoreHome type={LANG.COLLECTION} viewMore={this.viewMore} />
          <CollectionHome />
          <Advertiment paddingHori={CSS.padding15}/>
          <ViewMoreHome type={LANG.RECIPE_HIGHLIGHT} viewMore={this.viewMore} />
          <RecipeHighlightHome recipes={recipeHighlight} isHorizontal marTop={CSS.padding15}/>
          <ViewMoreHome type={LANG.COMBO} viewMore={this.viewMore} />
          <ComboHome />
          <ViewMoreHome type={LANG.BEST_SELL} viewMore={this.viewMore} />
          <ProductList />
          <Advertiment paddingHori={CSS.padding15}/>
          <ViewMoreHome type={LANG.FOLLOWING_LIST} viewMore={this.viewMore} />
          <FollowingHome />
          <ViewMoreHome type={LANG.LIKED_RECIPE} viewMore={this.viewMore} />
          <RecipeHighlightHome recipes={likedRecipe} isHorizontal marTop={CSS.padding15}/>
          <ViewMoreHome type={LANG.INFO_EVENT} viewMore={this.viewMore} />
          <NewsEvent newsEvent={RECIPES_LOVED} />
        </View>
      </ContainerScroll>
    );
  }
}
