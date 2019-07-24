/* eslint-disable indent */
import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { Text, View, Image, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import { IMG } from '../../utils/variables';
import styles from './collection-item-style';
import { COLOR, CSS } from '../../utils/variables';
import { LANG } from '../../lang/lang';

class CollectionItem extends Component {
  render() {
    let { item, imgBgWrap, blockMargin, onPress } = this.props;
 
    return (
       <View style={[styles.blockContainer, CSS.lightBoxShadow, CSS.borderRadius5, blockMargin]} onPress={() => alert('Pressed!')} >
        <TouchableWithoutFeedback style={{flex: 1, zIndex: 10}}>
          <ImageBackground style={[imgBgWrap, CSS.borderRadius5]} source={{ uri: item.collectionImage }}>
            <LinearGradient
              colors={[COLOR.gradientBlackTopColor, COLOR.gradientBlackBottomColor]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={[imgBgWrap, CSS.borderRadius5]}
            />
            <View style={styles.saveCollection}>
              <Image style={styles.saveIcon} source={IMG.greenBookmarkIcon}/>
            </View>
            <View style={styles.blockContentWrap}>
              <View>
                <Text style={[styles.collectionTitle, CSS.fontTitle, CSS.fontQuiBold]}>{item.name}</Text>
              </View>
              <View style={[styles.statisticalWrap, CSS.alignItemsCenter]}>
                <View style={[CSS.flexRow, CSS.alignItemsCenter]}>
                  <Image style={styles.recipeIcon} source={IMG.recipeIcon}/>
                  <Text style={[styles.statisticalNumber, CSS.fontQuiRegular]}>{item.recipeNumber} {LANG.RECIPE}</Text>
                </View>
                <View style={styles.separator} />
                <View style={[CSS.flexRow, CSS.alignItemsCenter]}>
                  <Image style={styles.smallSaveIcon} source={IMG.whiteBookmarkIcon}/>
                  <Text style={[styles.statisticalNumber, CSS.fontQuiRegular]}>{item.likeNumber} {LANG.SAVE}</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </TouchableWithoutFeedback>
      </View>
    );
  }
};

export default CollectionItem;