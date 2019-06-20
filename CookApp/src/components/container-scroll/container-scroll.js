import React, { Component } from 'react';
import { Text, View, Image, ScrollView, Animated } from 'react-native';

import SearchBarHeader from '../search-bar/search-bar';
import IMG from '../../utils/variables';

HEADER_MAX_HEIGHT = 180;
HEADER_MIN_HEIGHT = 50;
PROFILE_IMAGE_MAX_HEIGHT = 80;
PROFILE_IMAGE_MIN_HEIGHT = 40;

export default class ContainerScroll extends Component {

  constructor(props){
    super(props)
    this.state= {
      scrollY: new Animated.Value(0)
    }
  }
	render() {

    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp'
    })

    // const profileImageHeight = this.state.scrollY.interpolate({
    //   inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    //   outputRange: [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT],
    //   extrapolate: 'clamp'
    // })

    // const profileImageMarginTop = this.state.scrollY.interpolate({
    //   inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    //   outputRange: [HEADER_MAX_HEIGHT - (PROFILE_IMAGE_MAX_HEIGHT/2), HEADER_MAX_HEIGHT + 5],
    //   extrapolate: 'clamp'
    // })

    const headerZindex = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [1,2],
      extrapolate: 'clamp'
    })

    // const headerTitleBottom= this.state.scrollY.interpolate({
    //   inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    //   outputRange: [-20,1],
    //   extrapolate: 'clamp'
    // })

		return (
			<View style={{flex: 1}}>
        <Animated.View style={{
          position:'absolute',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: 'transparent',
          height: headerHeight,
          zIndex: headerZindex,
          alignItems: 'center'
        }}>
          <Animated.View style={{
            position: 'absolute', bottom: 0, width: '100%',justifyContent: 'center', height: 54}}>
            <SearchBarHeader navigation={this.props.navigation}></SearchBarHeader>
          </Animated.View>
        </Animated.View>
        <ScrollView style={{flex: 1}}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
          )}
        >

          <View style={{height: HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT, justifyContent: 'center', flex: 1}}>
            <Image source={IMG.tet} style={{flex: 1,width: null}}></Image>
          </View>

          <View style={{marginTop: HEADER_MIN_HEIGHT}}>
            {this.props.children}
          </View>

        </ScrollView>
			</View>
		);
	}
}
