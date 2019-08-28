import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Share } from 'react-native';
import { COLOR, CSS, IMG } from '../../utils/variables';
import { kFormatter } from '../../utils/general';
import { LANG } from '../../lang/lang';

export default class LikeCommentShare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/destructuring-assignment
      item: this.props.item
    };
  }

  static propTypes = {
    // prop: PropTypes
  }

  onLove = (item) => {
    const { onLove } = this.props;
    if (item.isLiked) {
      // eslint-disable-next-line no-unused-expressions
      item.likedCount = item.likedCount ? item.likedCount - 1 : 0;
    } else {
      item.likedCount = item.likedCount ? item.likedCount + 1 : 1;
    }
    console.log(item);
    item.isLiked = !item.isLiked;

    this.setState({
      item: item
    });
    onLove && onLove(item);
  }

  onComment = (item) => {
    const { onComment } = this.props;
    onComment && onComment(item);
  }

  onShare = (item) => {
    const { onShare } = this.props;
    console.log('Share Share = ', item);
    Share.share(
      {
        title: 'BeChef share',
        urlonShare: item.recipeImage,
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
      console.log('Share result = ', res);
      onShare && onShare(item);
    });
  }

  onSave = (item) => {
    const { onSave } = this.props;
    if (item.isSaved) {
      // eslint-disable-next-line no-unused-expressions
      item.saveCount = item.saveCount ? item.saveCount - 1 : 0;
    } else {
      item.saveCount = item.saveCount ? item.saveCount + 1 : 1;
    }
    item.isSaved = !item.isSaved;
    this.setState({
      item: item
    });
    // eslint-disable-next-line no-unused-expressions
    onSave && onSave(item);
  }


  render() {
    const { notSave, notMarginTop, showValueSaved } = this.props;
    const { item } = this.state;
    const iconLove = item && item.isLiked ? IMG.loveActiveHome : IMG.loveHome;
    const iconSave = item.isSaved ? IMG.saveActiveHome : IMG.saveHome;
    const topAmount = notMarginTop ? 0 : 18;
    return (
      <View>
        <View style={[styles.containerTimePrice, { marginTop: topAmount }]}>
          <View style={styles.priceView}>
            <Text style={styles.textTime}>
              {kFormatter(item.likedCount || 0)}
              <Text style={styles.textLight}> {LANG.LIKE}</Text>
            </Text>
          </View>
          <View style={styles.lineLikeView}>
            <View style={styles.line} />
          </View>
          <View style={styles.likeView}>
            <Text style={styles.textTime}>
              {kFormatter(item.commentCount || 0)}
              <Text style={styles.textLight}> {LANG.COMMENT}</Text>
            </Text>
          </View>
          <View style={styles.lineLikeView}>
            <View style={styles.line} />
          </View>
          <View style={styles.likeView}>
            <Text style={styles.textTime}>
              {kFormatter(item.sharedCount || 0)}
              <Text style={styles.textLight}> {LANG.SHARE}</Text>
            </Text>
          </View>
          <View style={styles.lineLikeView}>
            <View style={styles.line} />
          </View>
          <View style={styles.likeView}>
            <Text style={styles.textTime}>
              {kFormatter(item.viewCount || 0)}
              <Text style={styles.textLight}> {LANG.VIEW}</Text>
            </Text>
          </View>
        </View>

        <View style={styles.lineHori} />

        <View style={styles.containerLoveCmt}>
          <TouchableOpacity onPress={() => this.onLove(item)}>
            <Image style={styles.loveImg} source={iconLove} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onComment(item)}>
            <Image style={styles.cmtImg} source={IMG.commentHome} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onShare(item)}>
            <Image style={styles.shareImg} source={IMG.shareHome} />
          </TouchableOpacity>
          {
            !notSave && (
              <TouchableOpacity style={[styles.saveView, CSS.flexRow]} onPress={() => this.onSave(item)}>
                <Image style={styles.saveImg} source={iconSave} />
                {showValueSaved && <Text style={[CSS.fontQuiRegular, CSS.fontSize13]}>  {kFormatter(item.savedCount || 0)} Lưu lại</Text>}
              </TouchableOpacity>
            )
          }

        </View>
      </View>
    );
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
  lineHori: {
    height: 1,
    backgroundColor: COLOR.lineHoriColor,
    marginTop: 10
  },
});