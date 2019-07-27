import React, { Component } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';

import styles from './swiper-image-style';
import { COLOR } from '../../utils/variables';

export default class SwiperImage extends Component {
  constructor(props) {
    super(props);
  }
  
  renderSliderItems = (height, listItems) => {
    return (
      listItems &&
      listItems.map((item, index) => {
       return (
           <View key={index}>        
            <ImageBackground source={{ uri: item }}style={[styles.slideFullWidth, { height: height }]}>
              <LinearGradient
                colors={[COLOR.gradientBlackTopColor, COLOR.gradientBlackBottomColor]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={[{ height: height }]}
              />
            </ImageBackground>
          </View>
       );
      })
    );
  }

  renderDefaultView = (height) => {
    return (
      <View style={[{height: height || 300}, styles.slideFullWidth]}>
          <LinearGradient
            colors={[COLOR.gradientBlackTopColor, COLOR.gradientBlackBottomColor]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={[{ height: height }]}
          />
      </View>
    );
  }

  render() {    
    const { height, listItems } = this.props;    
    const config = {
      showButtons: false,
      paginationStyle: styles.paginationStyle,
      dotStyle: styles.dotStyle,
      activeDotStyle: styles.activeDotStyle
    }
    const sliderItems = listItems && this.renderSliderItems(height, listItems);

    return (
        sliderItems ?          
        (
          <View style={[{ height: height || 300 }, styles.slideFullWidth]}>
            <Swiper {...config}>{ sliderItems }</Swiper>
          </View>
        )  
        : this.renderDefaultView(height)            
    );
  }
}
