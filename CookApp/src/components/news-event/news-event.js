/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import Advertiment from '../advertiment/advertiment';
import LikeCommentShare from '../like-comment-share/like-comment-share';
import { IMG } from '../../utils/variables';
import styles from './news-event-style';
import { LANG } from '../../lang/lang';
import homeService from '../../services/home.service';

export default class NewsEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      ads: homeService.adsData,
    };
  }

  componentWillReceiveProps(nextProps) {
    const newData = nextProps.data;
    newData && newData.map((item, index) => {
      item.isLoved = false;
    })
    this.setState({
      data: nextProps.data
    })
  }

  onLove = (item) => {
    console.log('onLove=', item);
  }

  onShare = (item) => {
    console.log('onShare=', item);
  };

  onPress = () => {
    // console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAA');
  };

  renderFrame = (data) => {
    const { ads } = this.state;
    const { isVertical } = this.props;
    return data && data.map((item, index) => {
      const endStyle =
        data.length - 1 === index
          ? [styles.frame, styles.endFrame]
          : styles.frame;
      return (
        <View style={{ flex: 1 }} key={index}>
          <View style={isVertical ? styles.frameVer : endStyle} >
            <TouchableWithoutFeedback onPress={this.onPress} >
              <View>
                <View style={isVertical ? styles.imageVer : styles.imageView}>
                  <Image style={styles.recipeIMG} source={{ uri: item.eventImage }} />
                </View>
                <View style={styles.dateView}>
                  <Image source={IMG.calenderHome} style={styles.dateImg} />
                  <Text style={styles.dateText}> {LANG.FROM + ' ' + item.fromDate + ' ' + LANG.TO + ' ' + item.toDate} </Text>
                </View>
                <Text numberOfLines={1} style={styles.titleText}>
                  {item.eventName}
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <LikeCommentShare item={item} notMarginTop notSave />
          </View>
          {/* {isVertical && (index + 1) % 2 === 0 && <Advertiment data={ads} marginTop={20}/>} */}
        </View>
      )
    })
  };

  render() {
    const { data } = this.state;
    const { isVertical } = this.props;
    const isHorizontal = isVertical ? false : true;
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal={isHorizontal}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {this.renderFrame(data)}
        </ScrollView>
      </View>
    );
  }
}
