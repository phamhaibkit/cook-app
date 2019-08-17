import React, { Component } from 'react';
import { View, Text, Animated, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import BackButton from '../../back-button/back-button';
import CartHome from '../../cart-home/cart-home';
import { CSS } from '../../../utils/variables';
import { BottomActionModal } from '../../modal/bottom-action-modal';
import navigationService from '../../../services/navigation.service';
import { ROUTES } from '../../../utils/routes';

const HEADER_HEIGHT = 50;
const SWIPER_HEIGHT = 300;
const OVERFLOW_HEIGHT = 90;
let scrollViewBottom;
export class HeaderScroll extends Component {
  static propTypes = {
    // prop: PropTypes
    onRef: PropTypes.any,
  }

  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
      isModalVisible: false
    };
  }

  scrollToBottom = () => {
    this.setState({
      isModalVisible: false,
    }, () => {
      console.log(scrollViewBottom, 'scrollViewBottom');
      this.scrollView.scrollToEnd();
    });
  }

  openReportBar = () => {
    this.setState({
      isModalVisible: true
    });
  }

  closeReport = (action) => {
    const { recipe } = this.props;
    console.log(action);

    this.setState({
      isModalVisible: false
    });
    if (action === 'report') {
      navigationService.navigate(ROUTES.pageReportRecipe.key, { recipe });
    }
  }

  render() {
    const { scrollY, isModalVisible } = this.state;
    const { children, pageName, haveCart, colorDefault, borderWidthDefault, haveMore, isWhite, colorPageName, colorBorderDefault } = this.props;
    const onScroll = Animated.event([{
      nativeEvent: {
        contentOffset: {
          y: scrollY
        }
      }
    }]);
    const defaultInputRange = [0, SWIPER_HEIGHT - HEADER_HEIGHT - OVERFLOW_HEIGHT];

    const backgroundColor = scrollY.interpolate({
      inputRange: defaultInputRange,
      outputRange: [colorDefault || 'transparent', 'white'],
      extrapolate: 'clamp',
    });
    const color = scrollY.interpolate({
      inputRange: defaultInputRange,
      outputRange: [colorDefault || 'white', 'black'],
      extrapolate: 'clamp',
    });

    const borderBottomWidth = scrollY.interpolate({
      inputRange: defaultInputRange,
      outputRange: [borderWidthDefault || 0, 1],
      extrapolate: 'clamp',
    });
    const borderBottomColor = scrollY.interpolate({
      inputRange: defaultInputRange,
      outputRange: [colorBorderDefault || 'transparent', '#D2D2D2'],
      extrapolate: 'clamp',
    });

    return (
      <View>
        <BottomActionModal isModalVisible={isModalVisible} closeReport={action => this.closeReport(action)} />
        <Animated.View style={[{ backgroundColor, borderBottomWidth, borderBottomColor }, { position: 'absolute', width: '100%', zIndex: 1, paddingRight: 15, paddingVertical: 10 }, CSS.justifySpaceBetween, CSS.alignItemsCenter, CSS.flexRow]}>
          <BackButton isGreen={!isWhite} />
          {pageName && <Text style={[CSS.textAlignCenter, CSS.fontNuExBold, CSS.fontSize16, { color: colorPageName || '#fff' }]}>{pageName}</Text>}
          <View style={[{ minWidth: 26, height: 26 }, CSS.flexRow, CSS.justifySpaceBetween, CSS.alignItemsCenter]}>
            {haveCart ? <View><CartHome borderBottomWidth isTransparentHeader /></View> : <View />}
            {haveMore && <TouchableOpacity onPress={() => this.openReportBar()}><Animated.Text style={[{ color }, { fontSize: 26, paddingLeft: 10, marginTop: -8 }, CSS.fontNuExBold]}>...</Animated.Text></TouchableOpacity>}
          </View>
        </Animated.View>
        <ScrollView
          onContentSizeChange={(contentWidth, contentHeight) => {
            scrollViewBottom = contentHeight;
          }}
          scrollEventThrottle={16}
          {...{ onScroll }}
          // eslint-disable-next-line no-return-assign
          ref={scrollView => this.scrollView = scrollView}
        >
          {children}
        </ScrollView>
      </View>
    );
  }
}
