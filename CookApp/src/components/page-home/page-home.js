import React, { Component } from 'react';
import { View } from 'react-native';
import CollectionHome from '../collection-home/collection-home';
import ComboHome from '../combo-home/combo-home';
import Trending from '../trending/trending';
import ContainerScroll from '../container-scroll/container-scroll';
import navigationService from '../../services/navigation.service';
import ProductListHome from '../product-list-home/product-list-home';
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
import { connect } from 'react-redux';
import { getCart } from '../../reducers/cart.reducer';
import homeService from '../../services/home.service';
import cartSerice from '../../services/cart.service';
import collectionService from '../../services/collection.service';
import comboService from '../../services/combo.service';
import productService from '../../services/product.service';
import recipeService from '../../services/recipe.service';
import userService from '../../services/user.service';
import newsEventService from '../../services/news-event.service';

class PageHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trendings: homeService.trendingData,
      collections: collectionService.collectionData,
      ads: homeService.adsData,
      recipeHighLights: recipeService.recipeHighLightData,
      combos: comboService.comboData,
      products: productService.bestSellerProduct,
      followers: userService.followerData,
      likeRecipes: recipeService.recipeLikedData,
      newsEvents: newsEventService.newsEventData
    };
  }

  componentDidMount() {
    this.getTrendings();
    this.getCollections();
    this.getAds();
    this.getRecipeHighLights();
    this.getCombos();
    this.getBestSellProducts();
    this.getFollowers(1);
    this.getRecipeLikedList(1);
    this.getNewsEvents();
    this.getCart(1);
  }

  getCart = (userId) => {
    cartSerice.getCartNum(userId).then(() => {
      this.props.getCart(cartSerice.cartNumber);
    })
  }

  getTrendings = () => {
    homeService.getTrendings().then(() => {
      this.setState({
        trendings: homeService.trendingData
      })
    })
  }

  getCollections = () => {
    collectionService.getCollections().then(() => {
      this.setState({
        collections: collectionService.collectionData.data
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

  getRecipeHighLights = () => {
    recipeService.getRecipeHighLightList().then(() => {
      this.setState({
        recipeHighLights: recipeService.recipeHighLightData
      })
    })
  }

  getCombos = () => {
    comboService.getCombo().then(() => {
      this.setState({
        combos: comboService.comboData
      })
    })
  }

  getBestSellProducts = () => {
    productService.getBestSellerProduct().then(() => {
      this.setState({
        products: productService.bestSellerProduct
      })
    })
  }

  getFollowers = (userId) => {
    userService.getFollowerData(userId).then(() => {
      this.setState({
        followers: userService.followerData
      })
    })
  }

  getRecipeLikedList = (userId) => {
    recipeService.getRecipeLikedList(userId).then(() => {
      this.setState({
        likeRecipes: recipeService.recipeLikedData
      })
    })
  }

  getNewsEvents = () => {
    newsEventService.getNewsEventData().then(() => {
      this.setState({
        newsEvents: newsEventService.newsEventData
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
      case LANG.BEST_SELL:
        navigationService.navigate('Store');
        break;
      case LANG.FOLLOWING_LIST:
        alert('Ongoing');
        break;
      case LANG.LIKED_RECIPE:
        navigationService.navigate(ROUTES.recipeLikedList.key);
        break;
      case LANG.INFO_EVENT:
        navigationService.navigate(ROUTES.newsEventList.key);
        break;
      default:
        break;
    }
  };

  render() {
    const { trendings, collections, ads, recipeHighLights, combos, products, followers, likeRecipes, newsEvents } = this.state;
    return (
      <ContainerScroll enableScroll={!trendings.loading && !collections.loading && !combos.loading && !products.loading && !followers.loading && !likeRecipes.loading && !newsEvents.loading}>
        <View style={styles.container}>
          {trendings.loading ? <Spinner /> : <Trending data={trendings.trendings} />}
          <ViewMoreHome type={LANG.COLLECTION} viewMore={this.viewMore} />
          {collections.loading ? <Spinner /> : (
            <CollectionHome
              data={collections}
              marTop={CSS.padding15}
            />
          )}
          <Advertiment paddingHori={CSS.padding15} data={ads} marginTop={30} />
          <ViewMoreHome type={LANG.RECIPE_HIGHLIGHT} viewMore={this.viewMore} />
          {recipeHighLights.loading ? <Spinner /> : (
            <RecipeHighlightHome
              recipes={recipeHighLights.recipes}
              isHorizontal
              marTop={CSS.padding15}
            />
          )}
          <ViewMoreHome type={LANG.COMBO} viewMore={this.viewMore} />
          {combos.loading ? <Spinner /> : (
            <ComboHome
              data={combos}
              marTop={CSS.padding15}
            />
          )}
          <ViewMoreHome type={LANG.BEST_SELL} viewMore={this.viewMore} />
          {/* { products.loading ? <Spinner /> : ( */}
          <ProductListHome data={products.products} />
          {/* )} */}
          <Advertiment paddingHori={CSS.padding15} data={ads} marginTop={30} />
          <ViewMoreHome type={LANG.FOLLOWING_LIST} viewMore={this.viewMore} />
          {followers.loading ? <Spinner /> : (
            <FollowingHome data={followers.followers} />
          )}
          <ViewMoreHome type={LANG.LIKED_RECIPE} viewMore={this.viewMore} />
          {likeRecipes.loading ? <Spinner /> : (
            <RecipeHighlightHome
              recipes={likeRecipes.recipes}
              isHorizontal
              isLiked
              marTop={CSS.padding15}
            />
          )}
          <ViewMoreHome type={LANG.INFO_EVENT} viewMore={this.viewMore} />
          {newsEvents.loading ? <Spinner /> : (
            <NewsEvent data={newsEvents.newsEvents} />
          )}
        </View>
      </ContainerScroll>
    );
  }
}


function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps, { getCart })(PageHome);