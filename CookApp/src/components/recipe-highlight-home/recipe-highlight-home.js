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
import styles from './recipe-highlight-home-style';

export default class RecipeHighlightHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onPress = () => {
    // console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAA');
    alert('AAAAAAAAAAA');
  };

  renderFrame = (item, index) => {
    const { recipes } = this.props;
    const endStyle =
      recipes.length - 1 === index
        ? [styles.frame, styles.endFrame]
        : styles.frame;
    const iconLove = item.isLove ? IMG.loveActiveHome : IMG.loveHome;
    return (
      <View style={endStyle}>
        <View style={styles.containerTitle}>
          <TouchableOpacity style={styles.titleView} onPress={this.onPress}>
            <Text numberOfLines={1} style={styles.titleText}>
              {item.key}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.reportView}>
            <Image style={styles.dotImg} source={IMG.reportHome} />
          </TouchableOpacity>
        </View>

        <View style={styles.containerTimePrice}>
          <View style={styles.priceView}>
            <Image style={styles.sandImg} source={IMG.sandClokHome} />
            <Text style={styles.textTime}>
              {item.duration}
              <Text> phút</Text>
            </Text>
          </View>
          <View style={styles.lineView}>
            <View style={styles.line} />
          </View>
          <View style={styles.dollaView}>
            <Image style={styles.dollaImg} source={IMG.dollaHome} />
            <Text style={styles.textTime}>
              {item.price}
              <Text> đ</Text>
            </Text>
          </View>
          <View style={styles.lineView}>
            <View style={styles.line} />
          </View>
          <View style={styles.dollaView}>
            <Image style={styles.personImg} source={IMG.personHome} />
            <Text style={styles.textTime}>
              {item.quantity}
              <Text> người</Text>
            </Text>
          </View>
        </View>

        <View>
          <View style={styles.recipeView}>
            <TouchableWithoutFeedback onPress={this.onPress}>
              <Image style={styles.recipeIMG} source={{ uri: item.link }} />
            </TouchableWithoutFeedback>
          </View>
          <TouchableOpacity style={styles.containerChef}>
            <Image style={styles.avataImg} source={IMG.avatarHome} />
            <Text style={styles.nameChef}>{item.chef}</Text>
            <Image style={styles.rankImg} source={IMG.rankHome} />
          </TouchableOpacity>
        </View>

        <View style={[styles.containerTimePrice, { marginTop: 18 }]}>
          <View style={styles.priceView}>
            <Text style={styles.textTime}>
              {item.likes}

              <Text style={styles.textLight}> thích</Text>
            </Text>
          </View>
          <View style={styles.lineLikeView}>
            <View style={styles.line} />
          </View>
          <View style={styles.likeView}>
            <Text style={styles.textTime}>
              {item.comments}

              <Text style={styles.textLight}> bình luận</Text>
            </Text>
          </View>
          <View style={styles.lineLikeView}>
            <View style={styles.line} />
          </View>
          <View style={styles.likeView}>
            <Text style={styles.textTime}>
              {item.shares}
              <Text style={styles.textLight}> chia sẻ</Text>
            </Text>
          </View>
          <View style={styles.lineLikeView}>
            <View style={styles.line} />
          </View>
          <View style={styles.likeView}>
            <Text style={styles.textTime}>
              {item.xem}
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
          <TouchableOpacity>
            <Image style={styles.shareImg} source={IMG.shareHome} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveView}>
            <Image style={styles.saveImg} source={IMG.saveHome} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    const { recipes } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={recipes}
          renderItem={({ item, index }) => this.renderFrame(item, index)}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}
