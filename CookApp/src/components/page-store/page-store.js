import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import SearchBarHeader from '../search-bar/search-bar';
import CartHome from '../cart-home/cart-home';
import ProductList from '../product-list/product-list';
import styles from './page-store-style';
import { LANG } from '../../lang/lang';

const trendings = [ 
  {id: 1, name: 'Gia vị'},
  {id: 2, name: 'Thịt Bò'},
  {id: 3, name: 'Gia Heo'},
  {id: 4, name: 'Thịt Gà'},
  {id: 5, name: 'Hải Sản'},
  {id: 6, name: 'Rau Củ Quả'},
  {id: 7, name: 'Đồ Đóng Hộp'},
  {id: 8, name: 'Thực Phẩm Khô'},
  {id: 9, name: 'Thực Phẩm Chay'},
]
export default class PageStore extends Component {

  onPressSearch = () => {
    alert('Search Product');
  }

  onPressTrend = (trend) => {
    alert(trend.name);
  }

  renderTrending = (trendings) => {
    return trendings.map((item, index) => (
      // <View key={index} style={styles.containerTrend}>
        <TouchableOpacity key={index} style={styles.trendButton} onPress={() => this.onPressTrend(item)}>
          <Text style={styles.trendText}>{item && item.name}</Text>
        </TouchableOpacity>
      // </View>
    ))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <View style={styles.containerSearch}>
            <SearchBarHeader onPress={this.onPressSearch}/>
          </View>
          <View style={styles.cartButton}>
            <CartHome isTransparentHeader isChangeCartColor={true} />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.trendLabelText}>{LANG.TRENDING}</Text>
          <View style={styles.containerTrend}>
            {this.renderTrending(trendings)}
          </View>
        <ProductList />
        </ScrollView>
      </View>
    );
  }
}