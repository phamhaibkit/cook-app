import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';

import styles from './swiper-image-style';
import { COLOR } from '../../utils/variables';

export default class SwiperImage extends Component {
  renderSliderItems = () => {
    const { height, listItems } = this.props;
    console.log('dfasjdfljsdlf dfljasdfl ', this.props);
    return (
      listItems &&
      listItems.map((item, index) => (
        <View key={index}>        
          <ImageBackground source={{ uri: item }} style={[styles.slideImg, { height: height }]}>
            <LinearGradient
              colors={[COLOR.gradientBlackTopColor, COLOR.gradientBlackBottomColor]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={[{ height: height }]}
            />
          </ImageBackground>
        </View>
      ))
    );
  }
  render() {    
    const { height } = this.props;    
    const config = {
      showButtons: false,
      paginationStyle: styles.paginationStyle,
      dotStyle: styles.dotStyle,
      activeDotStyle: styles.activeDotStyle
    }
    const sliderItems = this.renderSliderItems();
    return (
      <View style={{ height: height || 300}}>
        <Swiper {...config}>{sliderItems}</Swiper>
      </View>
    );
  }
}
