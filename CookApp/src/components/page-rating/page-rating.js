import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions, KeyboardAvoidingView, TextInput, Keyboard, Platform, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { HeaderScroll } from '../dynamic-component/header-scroll/header-scroll';
import SwiperImage from '../swiper-image/swiper-image';
import { CSS, IMG } from '../../utils/variables';
import { LANG_VN } from '../../lang/lang-vn';
import recipeService from '../../services/recipe.service';

const { height, width } = Dimensions.get('window');
export default class RatingPage extends Component {
  static propTypes = {
    // prop: PropTypes
  }

  constructor(props) {
    super(props);
    this.state = {
      recipe: {},
      rateText: '',
      comment: '',
      imageHeader: [
        'https://daubepgiadinh.vn/wp-content/uploads/2017/01/canh-chua-bong-dien-dien-600x400.jpg'
      ]
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    const recipe = navigation.getParam('recipe', {});
    console.log(recipe);
    this.setState({
      recipe,
      number: 0
    });
  }

  renderStar = (number) => {
    const star = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= number; i++) {
      const starYellow = <TouchableOpacity key={i} onPress={() => this.handleRating(i)}><Image style={styles.imageStar} source={IMG.starYellow} /></TouchableOpacity>;
      star.push(starYellow);
    }
    // eslint-disable-next-line no-plusplus
    for (let j = number; j < 5; j++) {
      const starGray = <TouchableOpacity key={j + 1} onPress={() => this.handleRating(j + 1)} ><Image style={styles.imageStar} source={IMG.starGrey} /></TouchableOpacity>;
      star.push(starGray);
    }

    return star.map((item) => {
      return (item);
    });
  }

  handleRating = (number) => {
    console.log(number);
    let rateText = '';
    switch (number) {
    case 1:
      rateText = 'Rất tệ';
      break;
    case 2:
      rateText = 'Tệ';
      break;
    case 3:
      rateText = 'Bình thường';
      break;
    case 4:
      rateText = 'Tuyệt vời';
      break;
    case 5:
      rateText = 'Xuất sắc';
      break;
    default:
      break;
    }
    console.log(rateText, 'rateText');
    this.setState({
      number,
      rateText
    });
  }

  onChangeText = (value) => {
    this.setState({
      comment: value
    });
  };

  onPressSendRate = () => {
    const { comment, number, recipe } = this.state;
    console.log(comment);
    const params = {
      id: recipe.id,
      number: number,
      comment,
    };
    recipeService.sendRecipeRating(params).then((res) => {
      console.log(res, 'successful');
    });
  }

  render() {
    const { imageHeader, recipe, number, rateText } = this.state;

    let padding = 0;
    if (Platform.OS !== 'ios') {
      padding = -500;
    }
    return (
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={padding}>
        <HeaderScroll pageName="Đánh giá">
          <SwiperImage height={300} listItems={recipe.recipeImg} />
          <View style={[styles.container]}>
            <View style={[{ marginTop: -90, alignItems: 'center' }]}>
              <View style={[styles.recipeRating, CSS.lightBoxShadow, CSS.justifyContentCenter]}>
                {recipe && <Text style={[CSS.textAlignCenter, CSS.fontQuiBold, CSS.fontSize26, { color: '#001D12', marginTop: 22, marginBottom: 20 }]}>{recipe.name}</Text>}
                <View style={[CSS.flexRow, CSS.justifyContentCenter, CSS.alignItemsCenter]}>
                  {this.renderStar(number)}
                </View>
                <Text style={[CSS.fontSize14, CSS.fontQuiRegular, CSS.textAlignCenter, { marginTop: 10, marginBottom: 20 }]}>{rateText}</Text>
                <View style={[{ borderWidth: 1, borderRadius: 5, borderColor: '#D2D2D2', padding: 10 }]}>
                  <TextInput
                    style={[styles.Input, CSS.fontQuiRegular]}

                    placeholder="Viết đánh giá"
                    underlineColorAndroid="transparent"
                    onChangeText={this.onChangeText}
                    placeholderTextColor="#CECECE"
                    placeholderStyle={CSS.placeholderStyle}
                    multiline
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={{ paddingHorizontal: 10, marginBottom: 20 }}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={[{ padding: 10, borderRadius: 5, marginTop: 30 }]} colors={['#3BB556', '#72C91C']} >
              <TouchableOpacity style={[CSS.alignItemsCenter, CSS.justifyContentCenter]} onPress={this.onPressSendRate}>
                <Text style={[CSS.fontSize15, CSS.fontQuiBold, { color: '#FFFFFF' }]}>{LANG_VN.SEND_RATING_COMMENT}</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>

        </HeaderScroll>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Input: {
    flex: 1,
    color: 'black',
    fontSize: 14,
    height: 139,
  },
  recipeRating: {
    width: width - 30,
    borderRadius: 5,
    padding: 15,
    backgroundColor: '#ffffff'
  },
  imageStar: {
    width: 33,
    height: 31,
    marginRight: 1
  },
});
