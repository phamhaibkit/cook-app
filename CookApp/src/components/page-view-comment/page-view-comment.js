import React, { Component } from 'react';
import { View, AsyncStorage, Text, KeyboardAvoidingView, Image, TouchableOpacity, StyleSheet, Platform, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';
import moment from 'moment';
import { HeaderScroll } from '../dynamic-component/header-scroll/header-scroll';
import ImageProfile from '../image-profile/image-profile';
import { CSS, IMG } from '../../utils/variables';
import TextInputRender from '../text-input/text-input';
import recipeService from '../../services/recipe.service';
import { ASYNC_STORAGE } from '../../utils/general';


const comments = [
  {
    commentator: 'Nguyễn Thị A',
    commentId: 1,
    comment: 'Bước 2 chưa đúng lắm nhe bạn',
    avatar: 'http://vanhienblog.info/wp-content/uploads/2019/02/anh-gai-xinh-dep-hot-girl-1-00-600x445.jpg',
    time: '16/07/2019 10:20:45'
  },
  {
    commentator: 'Lê Huỳnh T',
    commentId: 2,
    comment: 'Mua cá lóc đồng hay lóc nuôi',
    avatar: 'https://cdn.24h.com.vn/upload/2-2019/images/2019-04-19/1555668648-429-ppppppppppp-1555668639-width650height813.jpg',
    time: '16/07/2019 10:20:45'
  },
  {
    commentator: 'Lê Huỳnh T',
    commentId: 2,
    comment: 'Mua cá lóc đồng hay lóc nuôi',
    avatar: 'https://cdn.24h.com.vn/upload/2-2019/images/2019-04-19/1555668648-429-ppppppppppp-1555668639-width650height813.jpg',
    time: '16/07/2019 10:20:45'
  },
  {
    commentator: 'Lê Huỳnh T',
    commentId: 2,
    comment: 'Mua cá lóc đồng hay lóc nuôi',
    avatar: 'https://cdn.24h.com.vn/upload/2-2019/images/2019-04-19/1555668648-429-ppppppppppp-1555668639-width650height813.jpg',
    time: '16/07/2019 10:20:45'
  },
  {
    commentator: 'Lê Huỳnh T',
    commentId: 2,
    comment: 'Mua cá lóc đồng hay lóc nuôi',
    avatar: 'https://cdn.24h.com.vn/upload/2-2019/images/2019-04-19/1555668648-429-ppppppppppp-1555668639-width650height813.jpg',
    time: '16/07/2019 10:20:45'
  },
  {
    commentator: 'Lê Huỳnh T',
    commentId: 2,
    comment: 'Mua cá lóc đồng hay lóc nuôi',
    avatar: 'https://cdn.24h.com.vn/upload/2-2019/images/2019-04-19/1555668648-429-ppppppppppp-1555668639-width650height813.jpg',
    time: '16/07/2019 10:20:45'
  },
  {
    commentator: 'Lê Huỳnh T',
    commentId: 2,
    comment: 'Mua cá lóc đồng hay lóc nuôi',
    avatar: 'https://cdn.24h.com.vn/upload/2-2019/images/2019-04-19/1555668648-429-ppppppppppp-1555668639-width650height813.jpg',
    time: '16/07/2019 10:20:45'
  },
  {
    commentator: 'Lê Huỳnh T',
    commentId: 2,
    comment: 'Mua cá lóc đồng hay lóc nuôi',
    avatar: 'https://cdn.24h.com.vn/upload/2-2019/images/2019-04-19/1555668648-429-ppppppppppp-1555668639-width650height813.jpg',
    time: '16/07/2019 10:20:45'
  },
  {
    commentator: 'Lê Huỳnh T',
    commentId: 2,
    comment: 'Mua cá lóc đồng hay lóc nuôi',
    avatar: 'https://cdn.24h.com.vn/upload/2-2019/images/2019-04-19/1555668648-429-ppppppppppp-1555668639-width650height813.jpg',
    time: '16/07/2019 10:20:45'
  },
];
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
    this.setStorage();
    const recipeDetail = { ...recipeService.recipeDetail };
    this.setState({
      recipeDetail
    });
  }

  setStorage = async () => {
    try {
      const userInfo = {
        name: 'Sonny Tran',
        avatar: '',
        id: '1'
      };
      AsyncStorage.setItem(ASYNC_STORAGE.USER_INFO, JSON.stringify(userInfo)).then((e) => {
        this.retrieveData();
      });
    } catch (error) {
      console.log(error, 'error');
    }
  };


  retrieveData = async () => {
    try {
      let user = await AsyncStorage.getItem('userInfo');
      if (user !== null) {
        // We have data!!
        user = JSON.parse(user);
        this.setState({
          user,
        });
      }
    } catch (error) {
      console.log(error, 'error');
    }
  };

  sendComment = () => {
    const { comment, number, recipeDetail, user } = this.state;
    console.log(comment);
    const params = {
      id: recipeDetail.id,
      number: number,
      comment,
    };
    recipeService.sendRecipeComment(params).then((res) => {
      console.log(res, 'successful');
      let dateTime = new Date();
      dateTime = moment(dateTime).format('YYYY-MM-DD HH:mm:ss');
      const commentator = _.get(user, 'name', '');
      console.log(commentator, 'commentator');
      comments.push({
        commentator,
        comment: comment,
        avatar: _.get(user, 'avatar'),
        time: 'now'
      });
      this.setState({
        comment: ''
      }, () => this.child.scrollToBottom());
    });
  }

  onChangeText = (value) => {
    this.setState({
      comment: value
    });
  };

  render() {
    // const { recipe } = this.props;
    const { comment, recipeDetail } = this.state;
    // const comments = _.get(recipeDetail, 'comments', []);
    let padding = 0;
    if (Platform.OS !== 'ios') {
      padding = -480;
    }
    console.log(recipeDetail, 'recipeDetail');
    console.log(comments, 'comments');
    return (
      <KeyboardAvoidingView style={[{ flexGrow: 1, flex: 1 }, CSS.flexCol, CSS.justifySpaceBetween]} behavior="padding" keyboardVerticalOffset={padding}>
        <HeaderScroll ref={(child) => { this.child = child; }} colorBorderDefault="#D2D2D2" colorDefault="#fff" colorPageName="#000" borderWidthDefault={1} pageName="Bình luận">
          <View style={styles.container}>
            {comments.length > 0 && comments.map((item, index) => {
              item.name = item.commentator;
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
        <View style={[CSS.flexRow, CSS.alignItemsCenter,
        { paddingHorizontal: 15, position: 'absolute', bottom: 0, backgroundColor: 'white', borderBottomColor: '#E9E9E9', borderTopColor: '#E9E9E9', borderWidth: 1, paddingVertical: 10, borderLeftWidth: 0, borderRightWidth: 0 }]}>
          <View style={{ flex: 1 }}>
            <TextInputRender
              onChangeText={(value, err) => this.onChangeText(value, err, 'comment')
              }
              initValue={comment}
              noMargin
              placeholder="Nhập bình luận"
              value={comment} />
          </View>
          <TouchableOpacity onPress={() => this.sendComment()}>
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
    flex: 1,
    marginBottom: 200,
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