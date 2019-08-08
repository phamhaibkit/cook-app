import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';
import * as Progress from 'react-native-progress';
import { connect } from 'react-redux';
import _ from 'lodash';
import { CSS, IMG } from '../../utils/variables';
import LinearGradient from 'react-native-linear-gradient';
import { LANG_VN } from '../../lang/lang-vn';
import { HeaderScroll } from '../dynamic-component/header-scroll/header-scroll';
import recipeService from '../../services/recipe.service';
import ImageProfile from '../image-profile/image-profile';
import navigationService from '../../services/navigation.service';


export default class PageViewRating extends Component {
  static propTypes = {
  }

  state = {
    recipeDetail: {}
  }

  componentDidMount() {
    const recipeDetail = { ...recipeService.recipeDetail };
    this.setState({
      recipeDetail
    })
  }

  renderProgress = (starDetail) => {
    const progress = []
    for (let j = 0; j <= 4; j++) {
      const row = <View key={j} style={[CSS.flexRow, CSS.justifySpaceBetween, CSS.alignItemsCenter, styles.rowRate]}>
        <Text style={[CSS.fontQuiMedium, CSS.fontSize13, styles.colorTextDark]}>{5 - j} </Text>
        <Image style={[styles.imageStar, { marginRight: 5 }]} source={IMG.starYellow}></Image>
        <Progress.Bar progress={starDetail[j] / 100} borderColor={'white'} unfilledColor={'rgba(58, 191, 87, 0.1)'} width={160} color={'#3ABF57'} />
        <Text style={[CSS.fontQuiRegular, CSS.fontSize13, styles.colorTextDark]}> {starDetail[j]}%</Text>
      </View>
      progress.push(row);
    }
    return progress
  }

  renderStar = (number) => {
    const star = [];

    for (let i = 1; i <= number; i++) {
      const starYellow = <Image key={i} style={styles.imageStar} source={IMG.starYellow}></Image>
      star.push(starYellow);
    }
    for (let j = number; j < 5; j++) {
      const starGray = <Image key={j + 1} style={styles.imageStar} source={IMG.starGrey}></Image>
      star.push(starGray);
    }

    return star.map(item => {
      return (item)
    })
  }

  onPressWritingRate = () => {
    const { recipeId, recipeDetail } = this.state;
    navigationService.navigate(ROUTES.recipeRating.key, { recipe: recipeDetail })
  }

  renderRate = (evaluations) => {
    const arrayOfComment = _.get(evaluations, 'evaluationDetail', []);
    const starPercentArray = _.get(evaluations, 'starDetail', []);
    const commentNumber = _.get(evaluations, 'total', 0)
    return evaluations && <View>
      <View style={[styles.contentRate, CSS.flexRow, CSS.justifySpaceBetween]}>
        <View style={[styles.boxRate, CSS.alignItemsCenter, CSS.justifyContentCenter]}>
          <Text style={[CSS.fontSize30, CSS.fontQuiBold, styles.colorTextDark]}>4.7<Text style={[CSS.fontSize18, CSS.fontQuiLight]}>/ 5</Text></Text>
          <View style={[CSS.flexRow, CSS.alignItemsCenter, CSS.justifyContentCenter, { marginTop: 5, marginBottom: 10 }]}>
            {this.renderStar(3)}
          </View>
          <Text style={[CSS.fontQuiRegular, CSS.fontSize12, { color: '#767676' }]}>{commentNumber} {LANG_VN.RATE}</Text>
        </View>
        <View style={[styles.detailRate]}>
          {evaluations && starPercentArray && this.renderProgress(starPercentArray)}
        </View>
      </View>
      <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={[{ padding: 10, borderRadius: 5, marginTop: 30 }]} colors={['#3BB556', '#72C91C']} >
        <TouchableOpacity style={[CSS.alignItemsCenter, CSS.justifyContentCenter]} onPress={this.onPressWritingRate}>
          <Text style={[CSS.fontSize15, CSS.fontQuiBold, { color: '#FFFFFF' }]}>{LANG_VN.WRITE_COMMENT}</Text>
        </TouchableOpacity>
      </LinearGradient>
      <View style={[CSS.borderBottom, { marginTop: 22, marginBottom: 20 }]}></View>
      <View style={styles.commentRate}>
        {evaluations && this.renderRowCommentRate(arrayOfComment)}
      </View>
    </View>
  }

  renderRowCommentRate = (evaluationDetail) => {
    return <View>
      
      <Text style={[CSS.fontSize16, CSS.fontQuiBold]}>Các đánh giá</Text>
      {evaluationDetail.map((item, index) => {
      return <View key={index} style={[styles.rowCommentRate, index !== evaluationDetail.length - 1 ? CSS.borderBottom : {}]}>
        <View style={[CSS.flexRow, { flex: 1 }]}>
          <ImageProfile user={item} widthImage={42}></ImageProfile>
          <View style={[CSS.flexCol, CSS.justifySpaceBetween, { flex: 1, paddingLeft: 10 }, styles.arrowLeft]}>
            <View style={[CSS.flexRow, CSS.justifySpaceBetween]}>
              <Text style={[CSS.fontQuiBold, CSS.fontSize14, { color: '#000' }]}>{item.evaluator}</Text>
              <Text style={[CSS.fontQuiRegular, CSS.fontSize13, { color: '#767676' }]}>{item.time}</Text>
            </View>
            <View style={[CSS.flexRow, CSS.alignItemsCenter, { paddingVertical: 8 }]}>
              {this.renderStar(item.star)}
            </View>
            <Text>{item.comment}</Text>
          </View>
        </View>
      </View>
    })}
    </View>
    
  }

  render() {
    const { recipeDetail } = this.state;
    return (
      <HeaderScroll colorDefault="#fff" pageName={'Các đánh giá'} colorPageName="#000" borderWidthDefault={1}>
        <View style={styles.container}>
          {recipeDetail && this.renderRate(recipeDetail.evaluations)}
        </View>
      </HeaderScroll>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
    marginHorizontal: 15
  },
  imageStar: {
    width: 14,
    height: 14,
    marginRight: 1
  },
  boxRate: {
    width: 110,
    height: 110,
    borderColor: '#E0E0E0',
    borderWidth: 2,
    borderRadius: 15,
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  detailRate: {
    alignItems: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  rowCommentRate: {
    paddingBottom: 15,
    paddingTop: 15
  },
  commentRow: {
    flex: 1,
    paddingLeft: 10,
    backgroundColor: '#FAFAFA',
    borderColor: '#E9E9E9',
    borderWidth: 1,
    borderRadius: 5,
    // paddingHorizontal: 15,
    paddingVertical: 10,
  },
})