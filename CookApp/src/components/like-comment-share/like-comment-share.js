import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { COLOR, CSS, IMG } from '../../utils/variables';
import { kFormatter } from '../../utils/general';

export class LikeCommentShare extends Component {
  static propTypes = {
    // prop: PropTypes
  }

  render() {
    const {item} = this.props;
    const iconLove = item.isLove ? IMG.loveActiveHome : IMG.loveHome;
    return (
      <View>
        <View style={[styles.containerTimePrice, { marginTop: 18 }]}>
          <View style={styles.priceView}>
            <Text style={styles.textTime}>
              {kFormatter(item.likeTimes)}
              <Text style={styles.textLight}> thích</Text>
            </Text>
          </View>
          <View style={styles.lineLikeView}>
            <View style={styles.line} />
          </View>
          <View style={styles.likeView}>
            <Text style={styles.textTime}>
              {kFormatter(item.numberEvaluate)}
              <Text style={styles.textLight}> bình luận</Text>
            </Text>
          </View>
          <View style={styles.lineLikeView}>
            <View style={styles.line} />
          </View>
          <View style={styles.likeView}>
            <Text style={styles.textTime}>
              {kFormatter(item.shareTimes)}
              <Text style={styles.textLight}> chia sẻ</Text>
            </Text>
          </View>
          <View style={styles.lineLikeView}>
            <View style={styles.line} />
          </View>
          <View style={styles.likeView}>
            <Text style={styles.textTime}>
              {kFormatter(item.viewTimes)}
              <Text style={styles.textLight}> xem</Text>
            </Text>
          </View>
        </View>

        <View style={styles.lineHori} />

        <View style={styles.containerLoveCmt}>
          <TouchableOpacity>
            <Image style={styles.loveImg} source={iconLove} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.cmtImg} source={IMG.commentHome} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onShare}>
            <Image style={styles.shareImg} source={IMG.shareHome} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveView}>
            <Image style={styles.saveImg} source={IMG.saveHome} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const paddingContent = 10;
const styles = StyleSheet.create({
  containerTimePrice: {
    flexDirection: 'row',
    paddingHorizontal: paddingContent,
    marginTop: 5
  },
  priceView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  lineView: {
    marginLeft: paddingContent,
    justifyContent: 'center'
  },
  lineLikeView: {
    marginLeft: 5,
    justifyContent: 'center'
  },
  line: {
    height: 11,
    width: 1,
    backgroundColor: COLOR.lineColor
  },
  dollaView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: paddingContent
  },
  likeView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 2
  },
  sandImg: {
    width: 9,
    height: 10
  },
  dollaImg: {
    width: 6,
    height: 12
  },
  personImg: {
    width: 10,
    height: 10
  },
  textTime: {
    marginLeft: 3,
    fontSize: 13,
    fontFamily: CSS.fontText,
    color: COLOR.blackColor,
    letterSpacing: -0.5
  },
  textLight: {
    color: COLOR.madeIn
  },
  loveImg: {
    width: 23,
    height: 20
  },
  cmtImg: {
    width: 23,
    height: 20,
    marginLeft: 18
  },
  shareImg: {
    width: 24,
    height: 20,
    marginLeft: 18
  },
  saveView: {
    position: 'absolute',
    top: paddingContent,
    right: paddingContent
  },
  saveImg: {
    width: 19,
    height: 20
  },
  containerLoveCmt: {
    flexDirection: 'row',
    padding: paddingContent
  },
});