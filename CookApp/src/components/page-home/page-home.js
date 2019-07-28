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
import { getCart} from '../../reducers/cart.reducer';
import homeService from '../../services/home.service';
import cartSerice from '../../services/cart.service';
import collectionSerice from '../../services/collection.service';
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
      collections: collectionSerice.collectionData,
      ads: homeService.adsData,
      recipeHighLights: recipeService.recipeHightLightData,
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
    this.getLikedRecipes(1);
    this.getNewsEvents();
    this.getCart(1);
  }

  getCart = (userId) => {
    cartSerice.getCartNum(userId).then(() => {
      console.log('CARTCART==', cartSerice.cartNumber);
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
    collectionSerice.getCollections().then(() => {
      this.setState({
        collections: collectionSerice.collectionData
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
    recipeService.getRecipeHightLightList().then(() => {
      this.setState({
        recipeHighLights: recipeService.recipeHightLightData
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

  getLikedRecipes = (userId) => {
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

  viewMore = type => {
    switch (type) {
      case LANG.COLLECTION:
        navigationService.navigate(ROUTES.collectionList.key);
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
   alert('alert');
  };

  render() {
    const { trendings, collections, ads, recipeHighLights, combos, products, followers, likeRecipes, newsEvents } = this.state;
    return trendings.loading ? (
      <Spinner />
    ) : (
      <ContainerScroll>
        <View style={styles.container}>
          <Trending data={trendings.trendings} />
          <ViewMoreHome type={LANG.COLLECTION} viewMore={this.viewMore} />
          <CollectionHome 
            data={collections}
            marTop={CSS.padding15}
          />
          <Advertiment paddingHori={CSS.padding15} data={ads}/>
          <ViewMoreHome type={LANG.RECIPE_HIGHLIGHT} viewMore={this.viewMore} />
          <RecipeHighlightHome
            recipes={recipeHighLights.recipes}
            isHorizontal
            isHome
            marTop={CSS.padding15}
          />
          <ViewMoreHome type={LANG.COMBO} viewMore={this.viewMore} />
          <ComboHome 
            data={combos}
            marTop={CSS.padding15}
          />
          <ViewMoreHome type={LANG.BEST_SELL} viewMore={this.viewMore} />
          <ProductListHome data={products.products}/>
          <Advertiment paddingHori={CSS.padding15} data={ads}/>
          <ViewMoreHome type={LANG.FOLLOWING_LIST} viewMore={this.viewMore} />
          <FollowingHome data={followers.followers}/>
          <ViewMoreHome type={LANG.LIKED_RECIPE} viewMore={this.viewMore} />
          <RecipeHighlightHome
            recipes={likeRecipes.recipes}
            isHorizontal
            isHome
            isLiked
            marTop={CSS.padding15}
          />
          <ViewMoreHome type={LANG.INFO_EVENT} viewMore={this.viewMore} />
          <NewsEvent data={newsEvents.newsEvents} />
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
