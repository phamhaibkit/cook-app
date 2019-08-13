import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, Image, TouchableOpacity, StyleSheet, Platform, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { HeaderScroll } from '../dynamic-component/header-scroll/header-scroll';
import ImageProfile from '../image-profile/image-profile';
import { CSS, IMG } from '../../utils/variables';
import TextInputRender from '../text-input/text-input';
import recipeService from '../../services/recipe.service';

const { width, height } = Dimensions.get('window');
export default class PageViewComment extends Component {
  static propTypes = {
    // prop: PropTypes
  }

  state = {
    comment: '',
    recipeDetail: {},
  };

  componentDidMount() {
    const recipeDetail = { ...recipeService.recipeDetail };
    this.setState({
      recipeDetail
    });
  }

  render() {
    // const { recipe } = this.props;
    const { comment, recipeDetail } = this.state;
    const comments = _.get(recipeDetail, 'comments', []);
    let padding = 0;
    if (Platform.OS !== 'ios') {
      padding = -500;
    }
    console.log(recipeDetail, 'recipeDetail');
    console.log(comments, 'comments');
    return (
      <KeyboardAvoidingView style={[{ flexGrow: 1, flex: 1 }, CSS.flexCol, CSS.justifySpaceBetween]} behavior="padding" keyboardVerticalOffset={padding}>
        <HeaderScroll colorDefault="#fff" colorPageName="#000" borderWidthDefault={1} pageName="Bình luận">
          <View style={styles.container}>
            {comments.length > 0 && comments.map((item, index) => {
              console.log(index);
              return <View key={index} style={[styles.rowCommentRate]}>
                <View style={[CSS.flexRow, { flex: 1 }]}>
                  {item && <ImageProfile user={item} widthImage={42} />}
                  <Image resizeMode="contain" style={{ height: 20, width: 10, marginLeft: 10, marginRight: -2.5, marginTop: 8, zIndex: 1 }} source={IMG.num} />
                  <View style={[CSS.flexCol, CSS.justifySpaceBetween, styles.commentRow]}>
                    <View style={[CSS.flexRow, CSS.justifySpaceBetween]}>
                      <Text style={[CSS.fontQuiBold, CSS.fontSize14, { color: '#000' }]}>{item.commentator || ''}</Text>
                      <Text style={[CSS.fontQuiRegular, CSS.fontSize13, { color: '#767676' }]}>{item.time || ''}</Text>
                    </View>
                    <Text style={{ marginTop: 10 }}>{item.comment || ''}</Text>
                  </View>
                </View>
              </View>;
            })}

          </View>
        </HeaderScroll>
        <View style={[CSS.flexRow, CSS.alignItemsCenter, { paddingHorizontal: 15, marginBottom: 20 }]}>
          <View style={{ flex: 1 }}>
            <TextInputRender
              onChangeText={(value, err) => this.onChangeText(value, err, 'comment')
              }
              noMargin
              placeholder="Nhập bình luận"
              value={comment} />
          </View>
          <TouchableOpacity>
            <Text style={[CSS.fontQuiBold, CSS.fontSize15, { color: '#3ABF57', marginLeft: 5 }]}>Gửi</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    marginHorizontal: 15,
    flex: 1
    // height: height,
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
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});