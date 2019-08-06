import React, { Component } from 'react';
import { View, Text, Animated, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import BackButton from '../../back-button/back-button';
import CartHome from '../../cart-home/cart-home';
import { CSS } from '../../../utils/variables';
const HEADER_HEIGHT = 50;
const SWIPER_HEIGHT = 300;
const OVERFLOW_HEIGHT = 90;
export class HeaderScroll extends Component {
  static propTypes = {
    // prop: PropTypes
  }
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
    }
  }

  render() {
    const { scrollY } = this.state;
    const { children, pageName, haveCart } = this.props;
    const onScroll = Animated.event([{
      nativeEvent: {
        contentOffset: {
          y: scrollY
        }
      }
    }]);

    const backgroundColor = scrollY.interpolate({
      inputRange: [0, SWIPER_HEIGHT - HEADER_HEIGHT - OVERFLOW_HEIGHT],
      outputRange: ["transparent", "white"],
      extrapolate: 'clamp',
    });

    const borderBottomWidth = scrollY.interpolate({
      inputRange: [0, SWIPER_HEIGHT - HEADER_HEIGHT - OVERFLOW_HEIGHT],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });
    return (
      <View>
        <Animated.View style={[styles.header, { backgroundColor, borderBottomWidth }, CSS.justifySpaceBetween, CSS.alignItemsCenter]}>
          <BackButton isGreen />
          {pageName && <Text style={[CSS.textAlignCenter, CSS.fontNuExBold, CSS.fontSize16, { color: '#fff', marginLeft: -15 }]}>{pageName}</Text>}
          {haveCart ? <View >
            <CartHome isTransparentHeader />
          </View> : <View style={{ width: 26, height: 26 }} />}
        </Animated.View>
        <ScrollView
          scrollEventThrottle={16}
          {...{ onScroll }}
        >
          {children}
        </ScrollView>
      </View>

    )
  }
}

