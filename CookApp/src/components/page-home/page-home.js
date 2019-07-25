import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
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
import Spinner from '../spinner/spinner';
import { LANG } from '../../lang/lang';
import styles from './page-home-style';
import { CSS } from '../../utils/variables';
import { ROUTES } from '../../utils/routes';
import homeService from '../../services/home.service';
import { connect } from 'react-redux';
import { getCart} from '../../reducers/cart.reducer';

class PageHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...homeService.homeData
    };
  }
  componentDidMount() {
    this.getHome();
  }

  getHome = () => {
    homeService.getHome().then(() => {
      this.props.getCart(homeService.homeData.cart);
      this.setState({
        ...homeService.homeData
      });
    });
  };

  viewMore = type => {
    switch (type) {
      case LANG.COLLECTION:
        navigationService.navigate(ROUTES.recipeDetail.key, {data: this.state.recipeCollection});
        break;
      case LANG.COMBO:
        navigationService.navigate(ROUTES.comboList.key);
        break;
      case LANG.RECIPE_HIGHLIGHT:
        navigationService.navigate(ROUTES.recipeHighlightList.key, {isHightLight: true});
        break;
      case LANG.LIKED_RECIPE:
        navigationService.navigate(ROUTES.recipeLikedList.key, {isLiked: true});
        break;
      default:
        break;
    }
  };

  gotoDetail = () => {
    navigationService.navigate('ComboDetail');
  };

  render() {
    console.log('Render===', this.state);
    const { loading, trending, recipeHighlight, likedRecipe, recipeCollection, recipeCombo, mostBuy, followedPeople, events, adsBanner } = this.state;

    return loading ? (
      <Spinner />
    ) : (
      <ContainerScroll>
        <View style={styles.container}>
          <Trending data={trending} />
          <ViewMoreHome type={LANG.COLLECTION} viewMore={this.viewMore} />
          <CollectionHome data={recipeCollection}/>
          <Advertiment paddingHori={CSS.padding15} data={adsBanner}/>
          <ViewMoreHome type={LANG.RECIPE_HIGHLIGHT} viewMore={this.viewMore} />
          <RecipeHighlightHome
            recipes={recipeHighlight}
            isHorizontal
            isHome
            marTop={CSS.padding15}
          />
          <ViewMoreHome type={LANG.COMBO} viewMore={this.viewMore} />
          <ComboHome data={recipeCombo} />
          <ViewMoreHome type={LANG.BEST_SELL} viewMore={this.viewMore} />
          <ProductList data={mostBuy}/>
          <Advertiment paddingHori={CSS.padding15} data={adsBanner}/>
          <ViewMoreHome type={LANG.FOLLOWING_LIST} viewMore={this.viewMore} />
          <FollowingHome data={followedPeople}/>
          <ViewMoreHome type={LANG.LIKED_RECIPE} viewMore={this.viewMore} />
          <RecipeHighlightHome
            recipes={likedRecipe}
            isHorizontal
            isHome
            isLove
            marTop={CSS.padding15}
          />
          <ViewMoreHome type={LANG.INFO_EVENT} viewMore={this.viewMore} />
          <NewsEvent data={events} />
        </View>
      </ContainerScroll>
    );
  }
}


function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps, {getCart})(PageHome);
