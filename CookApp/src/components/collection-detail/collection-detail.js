import React, { Component } from 'react';
import _ from 'lodash';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';

import { IMG, CSS, COLOR, CONST } from '../../utils/variables';
import { LANG } from '../../lang/lang';
import styles from './collection-detail-style';
import SwiperImage from '../swiper-image/swiper-image';
import collectionService from '../../services/collection.service';
import { kFormatter, capitalize } from '../../utils/general';
import RecipeHighlightHome from '../recipe-highlight-home/recipe-highlight-home';
import Spinner from '../spinner/spinner';
import { HeaderScroll } from '../dynamic-component/header-scroll/header-scroll';
import recipeService from '../../services/recipe.service';

export default class CollectionDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...collectionService.collectionDetail,
      isSavedByUser: 'false',
      savedCount: 0
    };    
  }

  getCollectionDetail = (id) => { 
    collectionService.getCollectionDetail(id).then(() => {   
      this.setState({
        ...collectionService.collectionDetail
      });
    });
    recipeService.getRecipeLikedList(1).then(() => {
      this.setState({
        recipes: recipeService.recipeLikedData.recipes
      })
    })
  }

  componentDidMount () { 
    const { navigation } = this.props;
    const id = navigation.getParam('id', 1);     
    this.getCollectionDetail(1);
  }

  handleSave = () => {
    let { isSavedByUser, savedCount } = this.state;
    let tempVariable = JSON.parse(isSavedByUser);

    isSavedByUser = !tempVariable;
    savedCount = tempVariable ? savedCount - 1 : savedCount + 1;

    this.setState({
      isSavedByUser,
      savedCount
    })
  }

  render() {
    const { 
      recipes, 
      collectionImages, 
      name, 
      isSavedByUser, 
      description, 
      id, 
      numberRecipe,
      savedCount,
      likeCount,
      loading,
      viewCount
    } = this.state;

    const ads = {};
    const iconSave = JSON.parse(isSavedByUser) ? IMG.saveActiveHome: IMG.saveHome;

    console.log('recipes from collection detail: ' + JSON.stringify(recipes));

    return loading ? (
          <Spinner />
        ) : (  
      <View>
          <HeaderScroll>
          <SwiperImage height={300} listItems={ collectionImages }/>

          <View style={styles.container}>
            <View style={styles.positionView}>
              <View style={styles.comboDescriptionWrap}>
                <Text style={[styles.comboTitle, CSS.fontQuiBold]}>{ name }</Text>
                <Text style={[CSS.fontQuiRegular, ]}>{ description }</Text>
                <View style={[CSS.flexRow, CSS.justifySpaceBetween, CSS.alignItemsCenter, styles.marginTop15]}>
                  <View style={[CSS.flexRow, CSS.alignItemsCenter]}>
                    <View style={styles.likeView}>
                      <Text style={styles.textTime}>{ kFormatter(likeCount) }</Text>
                      <Text style={[styles.textTime, styles.textLight]}>{LANG.LIKE}</Text>
                    </View>
                    <View style={styles.lineLikeView}>
                      <View style={styles.line} />
                    </View>
                    <View style={styles.likeView}>
                      <Text style={styles.textTime}>{ kFormatter(viewCount) }</Text>
                      <Text style={[styles.textTime, styles.textLight]}>{LANG.VIEW}</Text>
                    </View>               
                  </View>

                  <TouchableOpacity 
                    onPress={this.handleSave}
                    style={{paddingVertical: 10, zIndex: 100}}                    
                  >                                                              
                      <View style={[CSS.flexRow, CSS.alignItemsCenter]}>
                      <View><Image source={iconSave} style={styles.saveImg} /></View>
                      <Text style={styles.textTime}>{ kFormatter(savedCount) } {capitalize(LANG.SAVE)}</Text>  
                      </View>                                                         
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={[CSS.fontSize18, CSS.fontQuiBold, { color: COLOR.blackColor }]}>{ numberRecipe } { LANG.RECIPE.toUpperCase() }</Text>
              {
                !!recipes &&
                <RecipeHighlightHome recipes={recipes} isLiked/>  
              }    
            </View>
          </View>
        </HeaderScroll>
      </View>
    );
  }
}
