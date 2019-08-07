import React, { Component } from 'react';
import { View, Text, Animated, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import BackButton from '../../back-button/back-button';
import CartHome from '../../cart-home/cart-home';
import { CSS } from '../../../utils/variables';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BottomActionModal } from '../../modal/bottom-action-modal';
import navigationService from '../../../services/navigation.service';
import { ROUTES } from '../../../utils/routes';
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
      isModalVisible: false
    }
  }

  openReportBar = () => {
    this.setState({
      isModalVisible: true
    })
  }

  closeReport = (action) => {
    const { recipe } = this.props;
    console.log(action)
    this.setState({
      isModalVisible: false
    })
    navigationService.navigate(ROUTES.pageReportRecipe.key, { recipe })
  }



  render() {
    const { scrollY, isModalVisible } = this.state;
    const { children, pageName, haveCart, colorDefault, borderWidthDefault, haveMore, isWhite } = this.props;
    const onScroll = Animated.event([{
      nativeEvent: {
        contentOffset: {
          y: scrollY
        }
      }
    }]);

    const backgroundColor = scrollY.interpolate({
      inputRange: [0, SWIPER_HEIGHT - HEADER_HEIGHT - OVERFLOW_HEIGHT],
      outputRange: [colorDefault ? colorDefault : "transparent", "white"],
      extrapolate: 'clamp',
    });
    const color = scrollY.interpolate({
      inputRange: [0, SWIPER_HEIGHT - HEADER_HEIGHT - OVERFLOW_HEIGHT],
      outputRange: [colorDefault ? colorDefault : "white", "black"],
      extrapolate: 'clamp',
    });

    const borderBottomWidth = scrollY.interpolate({
      inputRange: [0, SWIPER_HEIGHT - HEADER_HEIGHT - OVERFLOW_HEIGHT],
      outputRange: [borderWidthDefault ? borderWidthDefault : 0, 1],
      extrapolate: 'clamp',
    });
    return (
      <View>
        <BottomActionModal isModalVisible={isModalVisible} closeReport={(action) => this.closeReport(action)}></BottomActionModal>
        <Animated.View style={[styles.header, { backgroundColor, borderBottomWidth }, CSS.justifySpaceBetween, CSS.alignItemsCenter]}>
          <BackButton isGreen={isWhite ? false: true}  />
          {pageName && <Text style={[CSS.textAlignCenter, CSS.fontNuExBold, CSS.fontSize16, { color: '#fff', marginLeft: -15 }]}>{pageName}</Text>}
          <View style={[{ minWidth: 26, height: 26 }, CSS.flexRow, CSS.justifySpaceBetween, CSS.alignItemsCenter]}>
            {haveCart ? <View><CartHome isTransparentHeader /></View> : <View />}
            {haveMore ? <TouchableOpacity onPress={() => this.openReportBar()}><Animated.Text style={[{ color }, { fontSize: 26, paddingLeft: 10 ,marginTop: -8 }, CSS.fontNuExBold]}>...</Animated.Text></TouchableOpacity> : <View />}
          </View>
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

