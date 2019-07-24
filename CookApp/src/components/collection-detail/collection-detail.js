import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,
  ScrollView
} from 'react-native';

import { IMG, CSS, COLOR } from '../../utils/variables';
import { RECIPES, SLIDER_IMAGES } from '../../models/data';
import { LANG } from '../../lang/lang';
import styles from './collection-detail-style';
import SwiperImage from '../swiper-image/swiper-image';

export default class CollectionDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.recipes = RECIPES;
  }

  renderFrame = (item, index) => {
    const  recipes  = this.recipes;
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
              {item.key}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.reportView}>
            <Image style={styles.dotImg} source={IMG.reportHome} />
          </TouchableOpacity>
        </View>

        <View style={styles.containerTimePrice}>
          <View style={styles.priceView}>
            <Image style={styles.sandImg} source={IMG.sandClokHome} />
            <Text style={styles.textTime}>{item.duration}</Text>
            <Text style={styles.textTime}>{LANG.MINUTE}</Text>
          </View>
          <View style={styles.lineView}>
            <View style={styles.line} />
          </View>
          <View style={styles.dollaView}>
            <Image style={styles.dollaImg} source={IMG.dollaHome} />
            <Text style={styles.textTime}>{item.price}</Text>
            <Text style={styles.textTime}>{LANG.VIETNAM_DONG}</Text>
          </View>
          <View style={styles.lineView}>
            <View style={styles.line} />
          </View>
          <View style={styles.dollaView}>
            <Image style={styles.personImg} source={IMG.personHome} />
            <Text style={styles.textTime}>{item.quantity}</Text>              
            <Text style={styles.textTime}>{LANG.PERSON}</Text>
          </View>
        </View>

        <View>
          <View style={styles.recipeView}>
            <TouchableWithoutFeedback onPress={this.onPress}>
              <Image style={styles.recipeIMG} source={{ uri: item.link }} />
            </TouchableWithoutFeedback>
          </View>
          <TouchableOpacity style={styles.containerChef}>
            <Image style={styles.avataImg} source={IMG.avatarHome} />
            <Text style={styles.nameChef}>{item.chef}</Text>
            <Image style={styles.rankImg} source={IMG.rankHome} />
          </TouchableOpacity>
        </View>

        <View style={[styles.containerTimePrice, { marginTop: 18 }]}>
          <View style={styles.priceView}>
            <Text style={styles.textTime}>{item.likes}</Text>
            <Text style={[styles.textTime, styles.textLight]}>{LANG.LIKE}</Text>
          </View>
          <View style={styles.lineLikeView}>
            <View style={styles.line} />
          </View>
          <View style={styles.likeView}>
            <Text style={styles.textTime}>{item.comments}</Text>
            <Text style={[styles.textTime, styles.textLight]}>{LANG.COMMENT}</Text>
          </View>
          <View style={styles.lineLikeView}>
            <View style={styles.line} />
          </View>
          <View style={styles.likeView}>
            <Text style={styles.textTime}>{item.shares}</Text>
            <Text style={[styles.textTime, styles.textLight]}>{LANG.SHARE}</Text>
          </View>
          <View style={styles.lineLikeView}>
            <View style={styles.line} />
          </View>
          <View style={styles.likeView}>
            <Text style={styles.textTime}>{item.xem}</Text>
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
    let recipes = this.recipes;
    const { navigation } = this.props;
    const id = navigation.getParam('id', 1);
    return (    
        <ScrollView>
          <SwiperImage height={300} listItems={ SLIDER_IMAGES}/>
          <View style={styles.container}>
            <View style={styles.comboDescriptionWrap}>
              <Text style={[styles.comboTitle, CSS.fontQuiBold]}>Những món ăn giành cho những n gày đầu mùa mưa</Text>
              <Text style={[CSS.fontQuiRegular, ]}>Với những ngày mưa bão như thế này, hãy chế biến các món ăn đơn giản, ấm nóng, đậm đà cho cả nhà thưởng thức.</Text>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <View style={{flexDirection: 'row'}}>
                  <Image source={IMG.saveHome} style={styles.saveImg} />
                  <Text style={{fontSize: 13, color: '#000', marginLeft: 10, lineHeight: 18, fontFamily: CSS.fontText}}>200 {LANG.SAVE}</Text>
                </View>
              </View>
            </View>
            <View style={styles.topRecipes}>
              <Text style={[CSS.fontSize18, CSS.fontQuiBold, { color: COLOR.blackColor }]}>20 { LANG.RECIPE.toUpperCase() }</Text>
              <FlatList
                data={this.recipes}
                scrollEnabled={false}
                renderItem={({ item, index }) => this.renderFrame(item, index)}        
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
        </ScrollView>
    );
  }
}
