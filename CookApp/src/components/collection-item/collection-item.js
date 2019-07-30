/* eslint-disable indent */
import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { Text, View, Image, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import { IMG } from '../../utils/variables';
import styles from './collection-item-style';
import { COLOR, CSS } from '../../utils/variables';
import { LANG } from '../../lang/lang';
import navigationService from '../../services/navigation.service';
import { ROUTES } from '../../utils/routes';
import Advertiment from '../advertiment/advertiment';
import { kFormatter, capitalize } from '../../utils/general';

class CollectionItem extends Component {
  handlePress = () => {  
    const { item } = this.props;
    navigationService.navigate(ROUTES.collectionDetail.key, { id: item.id });
  }
  
  render() {
    let { 
      item, 
      imgBgWrap, 
      blockMargin, 
      ads, 
      isVertical
    } = this.props;
 
    return (
       <View>
         <View style={[styles.blockContainer, CSS.borderRadius5, blockMargin]} >
          <TouchableWithoutFeedback onPress={ this.handlePress }>
            <View>
              <ImageBackground style={[imgBgWrap, CSS.borderRadius5]} source={{ uri: item.collectionImages[0] }}>
                <LinearGradient
                  colors={[COLOR.gradientBlackTopColor, COLOR.gradientBlackBottomColor]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  style={[imgBgWrap, CSS.borderRadius5]}
                />            
              </ImageBackground>
              <View style={[imgBgWrap,{ marginTop: -imgBgWrap.height}]}>
                <View style={isVertical ? [styles.saveCollection, styles.saveCollectionVer] : [styles.saveCollection, styles.saveCollectionHor]}>
                  <Image style={styles.saveIcon} source={IMG.greenBookmarkIcon}/>
                </View>
                <View style={styles.blockContentWrap}>
                  <View>
                    <Text style={[styles.collectionTitle, CSS.fontTitle, CSS.fontQuiBold]}>{item.name}</Text>
                  </View>
                  <View style={[styles.statisticalWrap, CSS.alignItemsCenter]}>
                    <View style={[CSS.flexRow, CSS.alignItemsCenter, CSS.justifyContentCenter]}>
                      <Image style={styles.recipeIcon} source={IMG.recipeIcon}/>
                      <Text style={[styles.statisticalNumber, CSS.fontQuiRegular]}>{ kFormatter(item.numberRecipe) } {LANG.RECIPE}</Text>
                    </View>
                    <View style={styles.separator} />
                    <View style={[CSS.flexRow, CSS.alignItemsCenter, CSS.justifyContentCenter]}>
                      <Image style={styles.smallSaveIcon} source={IMG.whiteBookmarkIcon}/>
                      <Text style={[styles.statisticalNumber, CSS.fontQuiRegular]}>{ kFormatter(item.savedCount) } {capitalize(LANG.SAVE)}</Text>
                    </View>
                    {
                      isVertical &&
                      <React.Fragment>
                        <View style={styles.separator} />
                        <View style={[CSS.flexRow, CSS.alignItemsCenter, CSS.justifyContentCenter]}>
                          <Image style={styles.eyeIcon} source={IMG.eyeIcon}/>
                          <Text style={[styles.statisticalNumber, CSS.fontQuiRegular]}>{ kFormatter(item.viewCount) } {LANG.VIEW}</Text>
                        </View>
                      </React.Fragment>
                    }
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
        
        <View>
          {
            isVertical && (item.id + 1) % 3 === 0 && (<Advertiment data={ads} marginTop={15}/>)     
          }
        </View>
       </View>
    );
  }
};

export default CollectionItem;