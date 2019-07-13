import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback
} from 'react-native';
import styles from './product-list-style';
import { PRODUCT_DATA } from '../../models/data';
import { LANG_VN } from '../../lang/lang-vn';

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.listData = PRODUCT_DATA;
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
            <ImageBackground
              style={styles.img}
              source={{ uri: item.img }}
              borderRadius={4}
            />
            <ImageBackground
              style={styles.guarantImg}
              source={{ uri: item.guarant }}
            />
            <View style={styles.titleView}>
              <Text numberOfLines={2} style={styles.title}>
                {item.name}
              </Text>
            </View>
            <View style={styles.containerDown}>
              <Text style={styles.madeIn}>{item.madeIn}</Text>
              <View style={styles.priceView}>
                <Text style={styles.newPrice}>{item.newPrice}</Text>
                <Text style={styles.oldPrice}>{item.oldPrice}</Text>
              </View>
              <TouchableOpacity style={styles.addCart}>
                <Text style={styles.addCartText}>{LANG_VN.ADD_TO_CART}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.containerDiscount}>
              <View style={styles.discount}>
                <Text style={styles.discountText}>-{item.discount}</Text>
              </View>
              <View style={styles.selling}>
                <Text style={styles.discountText}>{item.selling}</Text>
              </View>
            </View>
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
