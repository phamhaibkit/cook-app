import React, { Component } from 'react';
import _ from 'lodash';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,
  ScrollView
} from 'react-native';

import { IMG, CSS, COLOR, CONST } from '../../utils/variables';
import { LANG } from '../../lang/lang';
import styles from './collection-detail-style';
import SwiperImage from '../swiper-image/swiper-image';
import CollectionService from '../../services/collection.service';
import { kFormatter } from '../../utils/general';
import RecipeHighlightHome from '../recipe-highlight-home/recipe-highlight-home';

export default class CollectionDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...CollectionService.collectionDetail
    };    
  }

  getCollectionDetail = (id) => { 
    CollectionService.getCollectionDetail(id).then(() => {   
      console.log('promise getCollectionDetail resolve');
      let data =  {...CollectionService.collectionDetail};
      this.setState({
        ...data
      });
    });
  }

  componentDidMount () { 
    const { navigation } = this.props;
    const id = navigation.getParam('id', 1);     
    this.getCollectionDetail(id);
  }

  renderFrame = (item, index) => {
    const  { recipes }  = this.state;
    const endStyle =
      recipes.length - 1 === index
        ? [styles.frame, styles.endFrame]
        : styles.frame;
    const iconLove = item.isLove ? IMG.loveActiveHome : IMG.loveHome;
    return (
      <View style={endStyle}>
        <View style={styles.containerTitle}>
          <TouchableOpacity style={styles.titleView} onPress={this.onPress}>
            <Text numberOfLines={1} style={styles.titleText}>
              { item.name }
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.reportView}>
            <Image style={styles.dotImg} source={IMG.reportHome} />
          </TouchableOpacity>
        </View>

        <View style={styles.containerTimePrice}>
          <View style={styles.priceView}>
            <Image style={styles.sandImg} source={IMG.sandClokHome} />
            <Text style={styles.textTime}>{ item.timeExecute }</Text>
            <Text style={styles.textTime}>{LANG.MINUTE}</Text>
          </View>
          <View style={styles.lineView}>
            <View style={styles.line} />
          </View>
          <View style={styles.dollaView}>
            <Image style={styles.dollaImg} source={IMG.dollaHome} />
            <Text style={styles.textTime}>{ item.price }</Text>
            <Text style={styles.textTime}>{LANG.VIETNAM_DONG}</Text>
          </View>
          <View style={styles.lineView}>
            <View style={styles.line} />
          </View>
          <View style={styles.dollaView}>
            <Image style={styles.personImg} source={IMG.personHome} />
            <Text style={styles.textTime}>{ item.numPeople }</Text>              
            <Text style={styles.textTime}>{LANG.PERSON}</Text>
          </View>
        </View>

        <View>
          <View style={styles.recipeView}>
            <TouchableWithoutFeedback onPress={this.onPress}>
              <Image style={styles.recipeIMG} source={{ uri: item.recipeImage }} />
            </TouchableWithoutFeedback>
          </View>
          <TouchableOpacity style={styles.containerChef}>
            <Image style={styles.avataImg} source={{ uri: item.owner.avatar }} />
            <Text style={styles.nameChef}>{ item.owner.name }</Text>
            {
              item.owner.rank > CONST.chefRank && (<Image style={styles.rankImg} source={IMG.rankHome} />)
            }
          </TouchableOpacity>
        </View>

        <View style={[styles.containerTimePrice, { marginTop: 18 }]}>
          <View style={styles.priceView}>
            <Text style={styles.textTime}>{ item.likeTimes }</Text>
            <Text style={[styles.textTime, styles.textLight]}>{LANG.LIKE}</Text>
          </View>
          <View style={styles.lineLikeView}>
            <View style={styles.line} />
          </View>
          <View style={styles.likeView}>
            <Text style={styles.textTime}>{ item.numberEvaluate }</Text>
            <Text style={[styles.textTime, styles.textLight]}>{LANG.COMMENT}</Text>
          </View>
          <View style={styles.lineLikeView}>
            <View style={styles.line} />
          </View>
          <View style={styles.likeView}>
            <Text style={styles.textTime}>{ item.shareTimes }</Text>
            <Text style={[styles.textTime, styles.textLight]}>{LANG.SHARE}</Text>
          </View>
          <View style={styles.lineLikeView}>
            <View style={styles.line} />
          </View>
          <View style={styles.likeView}>
            <Text style={styles.textTime}>{ kFormatter(item.viewTimes) }</Text>
            <Text style={[styles.textTime, styles.textLight]}>{LANG.VIEW}</Text>
          </View>
        </View>

        <View style={styles.lineHori} />

        <View style={styles.containerLoveCmt}>
          <TouchableOpacity>
            <Image style={styles.loveImg} source={iconLove} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.cmtImg} source={IMG.commentHome} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.shareImg} source={IMG.shareHome} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveView}>
            <Image style={styles.saveImg} source={IMG.saveHome} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

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
      viewCount
    } = this.state;

    const ads = {};

    return (    
        <ScrollView>
          <SwiperImage height={300} listItems={ collectionImages }/>

          <View style={styles.container}>
            <View style={styles.positionView}>
              <View style={styles.comboDescriptionWrap}>
                <Text style={[styles.comboTitle, CSS.fontQuiBold]}>{ name }</Text>
                <Text style={[CSS.fontQuiRegular, ]}>{ description }</Text>
                <View style={[CSS.flexRow, CSS.justifySpaceBetween, CSS.alignItemsCenter, styles.marginTop15]}>
                  <View style={[CSS.flexRow, CSS.alignItemsCenter]}>
                    <View style={styles.likeView}>
                      <Text style={styles.textTime}>{ likeCount }</Text>
                      <Text style={[styles.textTime, styles.textLight]}>{LANG.LIKE}</Text>
                    </View>
                    <View style={styles.lineLikeView}>
                      <View style={styles.line} />
                    </View>
                    <View style={styles.likeView}>
                      <Text style={styles.textTime}>{ viewCount }</Text>
                      <Text style={[styles.textTime, styles.textLight]}>{LANG.VIEW}</Text>
                    </View>               
                </View>

                  <View style={[CSS.flexRow, CSS.alignItemsCenter]}>
                    <Image source={IMG.saveHome} style={styles.saveImg} />
                    <Text style={styles.textTime}>{ savedCount } {LANG.SAVE}</Text>
                  </View>
                </View>
              </View>
              
              <View style={styles.topRecipes}>
                <Text style={[CSS.fontSize18, CSS.fontQuiBold, { color: COLOR.blackColor }]}>{ numberRecipe } { LANG.RECIPE.toUpperCase() }</Text>
                <RecipeHighlightHome
                  recipes={recipes}
                  ads={ads}
                />
              </View>
            </View>
          </View>
        </ScrollView>
    );
  }
}
