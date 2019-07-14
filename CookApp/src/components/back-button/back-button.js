import React, { Component } from 'react';
import { Image, View, Animated, TouchableOpacity } from 'react-native';

import { IMG, CSS } from '../../utils/variables';
import Navigation from '../../services/navigation.service'

export default class BackButton extends Component {
  onPressBackButton = () => {
		Navigation.goBack();
		this.props.onPress && this.props.onPress();
  };
  
  render() {
    let { style, opacity, oppositeOpacity } = this.props;
		if (!opacity || !oppositeOpacity) {
			opacity = 1;
			oppositeOpacity = 0;
		}
    return (
      <TouchableOpacity onPress={this.onPressBackButton}>        
        <Animated.View
					style={[
						style,
						{
							position: 'absolute',
              left: 15,
							opacity: opacity,
						},
					]}
				>
          <Image source={IMG.greenBackIcon} style={CSS.backIconStyle}/>
				</Animated.View>

        <Animated.View
					style={[
						style,
						{
							opacity: oppositeOpacity,
						},
					]}
				>
					<Image source={IMG.whiteBackIcon} style={CSS.backIconStyle}/>
				</Animated.View>
      </TouchableOpacity>
    );
  }
}
