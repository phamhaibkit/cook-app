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
    const { newsEvent } = this.props;
    const endStyle =
      newsEvent.length - 1 === index
        ? [styles.frame, styles.endFrame]
        : styles.frame;
    const iconLove = item.isLove ? IMG.loveActiveHome : IMG.loveHome;
    return (
      <View style={endStyle}>
        <TouchableWithoutFeedback onPress={this.onPress}>
          <View>
            <View style={styles.recipeView}>
              <Image style={styles.recipeIMG} source={{ uri: item.link }} />
            </View>
            <View style={styles.dateView}>
              <Image source={IMG.calenderHome} style={styles.dateImg} />
              <Text style={styles.dateText}> Tu 17/05/2019 den 24/05/2019</Text>
            </View>
            <Text numberOfLines={1} style={styles.titleText}>
              {item.key}
            </Text>
            <View style={styles.containerTimePrice}>
              <View style={styles.priceView}>
                <Text style={styles.textTime}>498 thich</Text>
              </View>
              <View style={styles.lineLikeView}>
                <View style={styles.line} />
              </View>
              <View style={styles.likeView}>
                <Text style={styles.textTime}>200 binh luan</Text>
              </View>
              <View style={styles.lineLikeView}>
                <View style={styles.line} />
              </View>
              <View style={styles.likeView}>
                <Text style={styles.textTime}>200 chia se</Text>
              </View>
              <View style={styles.lineLikeView}>
                <View style={styles.line} />
              </View>
              <View style={styles.likeView}>
                <Text style={styles.textTime}>1k5 xem</Text>
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
    const { newsEvent } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={newsEvent}
          renderItem={({ item, index }) => this.renderFrame(item, index)}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}
