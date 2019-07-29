/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  Share
} from 'react-native';
import { IMG } from '../../utils/variables';
import styles from './news-event-style';
import { LANG } from '../../lang/lang';
import { kFormatter } from '../../utils/general';

export default class NewsEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }

  componentWillReceiveProps(nextProps){
    const newData = nextProps.data;
    newData && newData.map((item, index) => {
      item.isLoved = false;
    })
    this.setState({
      data: nextProps.data
    })
  }

  onLove = (event) => {
    const { data } = this.state;
    data && data.map((item, index) => {
      if (item.eventId === event.eventId) {
        item.isLoved = !item.isLoved;
        return item;
      }
    });
    this.setState({
      data: data
    })
  }

  onShare = () => {
    Share.share(
      {
        title: 'BeChef share',
        urlonShare: 'https://www.google.vn/',
        message: 'Nau An Di Cung',
      },
      {
        // android
        dialogTitle: 'This is BeShef share',
        // ios
        excludedActivityTypes: [
          // 'com.apple.UIKit.activity.PostToFacebook',
          // 'com.apple.UIKit.activity.PostToTwitter',
          // 'com.apple.UIKit.activity.Message',
        ],
      }
    ).then((res) => {
      console.log('DATAATATAATTA', res);
    });
  };

  onPress = () => {
    // console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAA');
    alert('AAAAAAAAAAA');
  };

  renderFrame = (data) => {
    const { isVertical } = this.props;
    return data && data.map((item, index) => {
      const endStyle =
      data.length - 1 === index
        ? [styles.frame, styles.endFrame]
        : styles.frame;
      const iconLove = item.isLoved ? IMG.loveActiveHome : IMG.loveHome;
      return (
        <View style={isVertical ? styles.frameVer : endStyle} key={index} >
          <TouchableWithoutFeedback onPress={this.onPress}>
            <View>
              <View style={isVertical? styles.imageVer : styles.imageView}>
                <Image style={styles.recipeIMG} source={{ uri: item.eventImage }} />
              </View>
              <View style={styles.dateView}>
                <Image source={IMG.calenderHome} style={styles.dateImg} />
                <Text style={styles.dateText}> {LANG.FROM + ' ' + item.fromDate + ' ' + LANG.TO + ' '+ item.toDate} </Text>
              </View>
              <Text numberOfLines={1} style={styles.titleText}>
                {item.eventName}
              </Text>
              <View style={styles.containerTimePrice}>
                <View style={styles.priceView}>
                  <Text style={styles.textTime}>
                    {kFormatter(item.likeCount)}
                    <Text>{LANG.SPACE + LANG.LIKE}</Text>
                  </Text>
                </View>
                <View style={styles.lineLikeView}>
                  <View style={styles.line} />
                </View>
                <View style={styles.likeView}>
                  <Text style={styles.textTime}>
                    {kFormatter(item.evaluateNumber)}
                    <Text>{LANG.SPACE + LANG.COMMENT}</Text>
                  </Text>
                </View>
                <View style={styles.lineLikeView}>
                  <View style={styles.line} />
                </View>
                <View style={styles.likeView}>
                  <Text style={styles.textTime}>
                    {kFormatter(item.shareCount)}
                    <Text>{LANG.SPACE + LANG.SHARE}</Text>
                  </Text>
                </View>
                <View style={styles.lineLikeView}>
                  <View style={styles.line} />
                </View>
                <View style={styles.likeView}>
                  <Text style={styles.textTime}>
                    {kFormatter(item.viewCount)}
                    <Text>{LANG.SPACE + LANG.VIEW}</Text>
                  </Text>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
  
          <View style={styles.lineHori} />
  
          <View style={styles.containerLoveCmt}>
            <TouchableOpacity onPress={() => {this.onLove(item)}}>
              <Image style={styles.loveImg} source={iconLove} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.cmtImg} source={IMG.commentHome} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {this.onShare()}}>
              <Image style={styles.shareImg} source={IMG.shareHome} />
            </TouchableOpacity>
          </View>
        </View>
      )
    })
  };

  render() {
    const { data } = this.state;
    const { isVertical } = this.props;
    const isHorizontal = isVertical ? false : true;
    console.log('EVENTs==', data);
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal = {isHorizontal}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {this.renderFrame(data)}
        </ScrollView>
      </View>
    );
  }
}
