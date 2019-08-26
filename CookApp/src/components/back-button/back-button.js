import React, { Component } from 'react';
import { Image, View, Animated, TouchableOpacity } from 'react-native';

import { IMG, CSS } from '../../utils/variables';
import Navigation from '../../services/navigation.service';
import styles from './back-button-style';

export default class BackButton extends Component {
  onPressBackButton = () => {
    Navigation.goBack();
    this.props.onPress && this.props.onPress();
  };

  render() {
    let { style, isGreen } = this.props;

    return (
      <TouchableOpacity style={{ position: 'absolute', zIndex: 1 }} onPress={this.onPressBackButton}>
        <Animated.View
          style={[
            style,
            styles.defaultStyle,
            { minWidth: 26, minHeight: 20 }
          ]}
        >
          {
            isGreen ? (<Image source={IMG.greenBackIcon} style={CSS.backIconStyle} />) : (<Image source={IMG.whiteBackIcon} style={CSS.backIconStyle} />)
          }
        </Animated.View>
      </TouchableOpacity>
    );
  }
}
