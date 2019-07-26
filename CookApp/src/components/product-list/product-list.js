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
import styles from './product-list-style';
import { LANG_VN } from '../../lang/lang-vn';
import { getCurrencyStr } from '../../utils/general';
import PlusSubsNumber from '../plus-subs-number/plus-subs-number';
import { connect } from 'react-redux';
import { increment, decrement } from '../../reducers/cart.reducer';

class ProductList extends Component {
  constructor(props) {
    super(props);
    const {data} = this.props;
    data.map((item, index) => {
      item.showAddCart = true;
      item.number = 1;
    });

    this.state = {
      data: data
    }
  }

  showAddNum = (product, index) => {
    const { data } = this.state;
    data.map((item, index) => {
      if (item.productId === product.productId) {
        item.showAddCart = false;
        return item;
      }
    });
    this.setState({
      data: data
    })
  }

  incrementCart = (product) => {
    const { data } = this.state;
    data.map((item, index) => {
      if (item.productId === product.productId) {
        item.number++;
        this.props.increment();
        return item;
      }
    });
    this.setState({
      data: data
    })
  }

  decrementCart= (product) => {
    const { data } = this.state;
    data.map((item, index) => {
      if (item.productId === product.productId) {
        if(item.number == 1){
          item.showAddCart = true;
          return item;
        }
        item.number--;
        this.props.decrement();
        return item;
      }
    });
    this.setState({
      data: data
    })
  }

  onPress = () => {
    alert('9999999999999');
  };

  renderFrame = (item, index) => {
    const { data } = this.state;
    const endStyle = data && data.length - 1 === index || (data.length - 1) / 2 === index
      ? [styles.frame, styles.endFrame]
      : styles.frame;
    return (
      <View style={endStyle}>
        <TouchableWithoutFeedback onPress={this.onPress} style={{ zIndex: 2 }}>
          <View style={styles.containerTouch}>
            <View style={styles.imgView}>
              <Image style={styles.img} source={{ uri: item.productImage }} />
            </View>
            <ImageBackground
              style={styles.guarantImg}
              source={{ uri: 'https://www.laghim.vn/templates/laghim/images/vietgap.png' }}
            />
            <View style={styles.titleView}>
              <Text numberOfLines={2} style={styles.title}>
                {item.productName}
              </Text>
            </View>
            <View style={styles.containerDown}>
              <Text style={styles.madeIn}>{item.origin}</Text>
              <View style={styles.priceView}>
                <Text style={styles.newPrice}>{getCurrencyStr(item.newPrice)}</Text>
                <Text style={styles.unitText}>/100g</Text>
              </View>
              <Text style={styles.oldPrice}>{getCurrencyStr(item.oldPrice)}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        {item.showAddCart ? (
          <TouchableOpacity style={styles.addCart} onPress={() =>this.showAddNum(item, index)}>
            <Text style={styles.addCartText}>{LANG_VN.ADD_TO_CART}</Text>
          </TouchableOpacity>
        ) : (
          <View style={{paddingLeft: 10}}>
            <PlusSubsNumber number={item.number} incrementCart={() => this.incrementCart(item)} decrementCart={() => this.decrementCart(item)}/>
          </View>
        )}
        <View style={styles.containerDiscount}>
          <View style={styles.discount}>
            <Text style={styles.discountText}>-{item.discount * 100 + '%'}</Text>
          </View>
          <View style={styles.selling}>
            <Text style={styles.discountText}>bán chạy</Text>
          </View>
        </View>

      </View>
    );
  };

  render() {
    const { data } = this.state;
    const numCols =
      data && data.length % 2 === 0
        ? data.length / 2
        : (data.length + 1) / 2;
    return (
      <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FlatList
            contentContainerStyle={{
              alignSelf: 'flex-start'
            }}
            numColumns={numCols}
            data={data}
            renderItem={({ item, index }) => this.renderFrame(item, index)}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
  }
}

export default connect (mapStateToProps, {increment, decrement})(ProductList);