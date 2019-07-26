/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback
} from 'react-native';
import { IMG } from '../../utils/variables';
import styles from './news-event-style';
import { LANG } from '../../lang/lang';
import { kFormatter } from '../../utils/general';

export default class NewsEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onPress = () => {
    // console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAA');
    alert('AAAAAAAAAAA');
  };

  renderFrame = (item, index) => {
    const { data } = this.props;
    const endStyle =
      data.length - 1 === index
        ? [styles.frame, styles.endFrame]
        : styles.frame;
    const iconLove = item.isLove ? IMG.loveActiveHome : IMG.loveHome;
    return (
      <View style={endStyle}>
        <TouchableWithoutFeedback onPress={this.onPress}>
          <View>
            <View style={styles.recipeView}>
              <Image style={styles.recipeIMG} source={{ uri: item.eventImage }} />
            </View>
            <View style={styles.dateView}>
              <Image source={IMG.calenderHome} style={styles.dateImg} />
              <Text style={styles.dateText}> {item.fromDate + ' ' + item.toDate} </Text>
            </View>
            <Text numberOfLines={1} style={styles.titleText}>
              {item.eventName}
            </Text>
            <View style={styles.containerTimePrice}>
              <View style={styles.priceView}>
                <Text style={styles.textTime}>
                  {kFormatter(item.likeTimes)}
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
                  {kFormatter(item.shareTimes)}
                  <Text>{LANG.SPACE + LANG.SHARE}</Text>
                </Text>
              </View>
              <View style={styles.lineLikeView}>
                <View style={styles.line} />
              </View>
              <View style={styles.likeView}>
                <Text style={styles.textTime}>
                  {kFormatter(item.viewTimes)}
                  <Text>{LANG.SPACE + LANG.VIEW}</Text>
                </Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.lineHori} />

        <View style={styles.containerLoveCmt}>
          <TouchableOpacity>
            <Image style={styles.loveImg} source={iconLove} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.cmtImg} source={IMG.commentHome} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.shareImg} source={IMG.shareHome} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    const { data } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item, index }) => this.renderFrame(item, index)}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
