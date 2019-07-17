import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
  Image
} from 'react-native';
import styles from './category-recipe-style';
import { RECIPE_CATEGORY } from '../../models/data';
import { LANG_VN } from '../../lang/lang-vn';

export default class CategoryRecipe extends Component {
  constructor(props) {
    super(props);
    this.listData = RECIPE_CATEGORY;
  }

  onPress = () => {
    alert('9999999999999');
  };

  renderFrame = (item, index) => {
    const endStyle =
      this.listData.length - 1 === index ||
      (this.listData.length - 1) / 2 === index
        ? [styles.frame, styles.endFrame]
        : styles.frame;
    return (
      <View style={endStyle}>
        <TouchableWithoutFeedback onPress={this.onPress} style={{ zIndex: 2 }}>
          <View style={styles.containerTouch}>
            <Image style={styles.imgCate} source={{ uri: item.link }}></Image>
            <Text style={styles.cateText}>{item.title}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  };

  render() {
    const numCols =
      this.listData.length % 2 === 0
        ? this.listData.length / 2
        : (this.listData.length + 1) / 2;
    return (
      <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FlatList
            contentContainerStyle={{
              alignSelf: 'flex-start'
            }}
            numColumns={numCols}
            data={this.listData}
            renderItem={({ item, index }) => this.renderFrame(item, index)}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
      </View>
    );
  }
}
