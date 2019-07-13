import React, { Component } from 'react';
import { Image, View, Animated, TouchableOpacity } from 'react-native';

import { IMG } from '../../utils/variables';
import Navigation from '../../services/navigation.service'

export default class SearchButton extends Component {
  onPress = () => {
		this.props.onPress && this.props.onPress();
	};
  
  render() {
    let { style, opacity, oppositeOpacity } = this.props;
		if (!opacity || !oppositeOpacity) {
			opacity = 1;
			oppositeOpacity = 0;
		}
    return (
      <TouchableOpacity onPress={this.onPress}>        
        <Animated.View
					style={[
						style,
						{
							position: 'absolute',
              right: 15,
							opacity: opacity,
						},
					]}
				>
          <Image source={IMG.searchGreen}/>
				</Animated.View>

        <Animated.View
					style={[
						style,
						{
							opacity: oppositeOpacity,
						},
					]}
				>
          {/* change the image for oppositeOpacity */}
					<Image source={IMG.searchGreen} />
				</Animated.View>
      </TouchableOpacity>
    );
  }
}
