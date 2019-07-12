import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './product-list-style';
import { PRODUCT_DATA } from '../../models/data';

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.listData = PRODUCT_DATA;
  }
  renderFrame = (item, index) => {
    const endStyle =
      this.listData.length - 1 === index || (this.listData.length - 1) / 2 === index
        ? [styles.frame, styles.endFrame]
        : styles.frame;
    return (
      <View style={endStyle}>
        <TouchableOpacity style={styles.containerTouch}>
          <ImageBackground style={styles.img} source={{ uri: item.img }} borderRadius={4}>
            <View style={styles.containerDiscount}>
              <View style={styles.discount}>
                <Text style={styles.discountText}>-{item.discount}</Text>
              </View>
              <View style={styles.selling}>
                <Text style={styles.discountText}>{item.selling}</Text>
              </View>
            </View>
          </ImageBackground>
          <ImageBackground style={styles.guarantImg} source={{ uri: item.guarant }} />
          <View style={styles.titleView}>
            <Text numberOfLines={2} style={styles.title}>{item.name}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.containerDown}>
          <Text style={styles.madeIn}>{item.madeIn}</Text>
          <View style={styles.priceView}>
            <Text style={styles.newPrice}>{item.newPrice}</Text>
            <Text style={styles.oldPrice}>{item.oldPrice}</Text>
          </View>
          <TouchableOpacity style={styles.addCart}>
            <Text style={styles.addCartText}>Them vao gio hang</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    const numCols = this.listData.length % 2 === 0 ? this.listData.length / 2 : (this.listData.length + 1) / 2;
    return (
      <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FlatList
            contentContainerStyle={{
              alignSelf: 'flex-start',
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
