/* eslint-disable indent */
import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { Text, View, Image, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import { IMG } from '../../utils/variables';
import styles from './collection-item-style';
import { COLOR, CSS } from '../../utils/variables';

class CollectionItem extends Component {
  render() {
    let { item, imgBgWrap, blockMargin } = this.props;
    
    return (
       <View style={[styles.blockContainer, CSS.lightBoxShadow, CSS.borderRadius5, blockMargin]}>
        <TouchableOpacity>
          <ImageBackground style={[imgBgWrap, CSS.borderRadius5]} source={ item.link }>
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
                <Text style={[styles.collectionTitle, CSS.fontTitle, CSS.fontQuiBold]}>{item.title}</Text>
              </View>
              <View style={[styles.statisticalWrap, CSS.alignItemsCenter]}>
                <View style={[CSS.flexRow, CSS.alignItemsCenter]}>
                  <Image style={styles.recipeIcon} source={IMG.recipeIcon}/>
                  <Text style={[styles.statisticalNumber, CSS.fontQuiRegular]}>{item.recipes}</Text>
                </View>
                <View style={styles.separator} />
                <View style={[CSS.flexRow, CSS.alignItemsCenter]}>
                  <Image style={styles.smallSaveIcon} source={IMG.whiteBookmarkIcon}/>
                  <Text style={[styles.statisticalNumber, CSS.fontQuiRegular]}>{item.saves}</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }
};

export default CollectionItem;