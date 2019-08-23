import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
  // Image
} from 'react-native';
import { Image } from 'react-native-elements';
import styles from './product-list-style';
import { LANG } from '../../lang/lang';
import { getCurrencyStr } from '../../utils/general';
import PlusSubsNumber from '../plus-subs-number/plus-subs-number';
import { connect } from 'react-redux';
import { increment, decrement } from '../../reducers/cart.reducer';
import cartSerice from '../../services/cart.service';
import productService from '../../services/product.service';
import Advertiment from '../advertiment/advertiment';
import homeService from '../../services/home.service';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      ads: homeService.adsData,
    }
  }

  componentWillMount() {
    productService.getBestSellerProduct().then(() => {
      const products = productService.bestSellerProduct.products;
      products.map((item) => {
        item.showAddCart = true;
        item.number = 1;
      });
      this.setState({
        data: products
      })
    })
  }

  showAddNum = (product, index) => {
    const { data } = this.state;
    data && data.map((item, index) => {
      if (item.productId === product.productId) {
        item.number = 1;
        cartSerice.addToCart(product.productId, item.number).then(() => {
          // console.log('ADD_TO_CART RESPONSE = ', cartSerice.addCartdata);
          this.props.increment();
        })
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
    data && data.map((item, index) => {
      if (item.productId === product.productId) {
        item.number++;
        cartSerice.addToCart(product.productId, item.number).then(() => {
          // console.log('ADD_TO_CART RESPONSE = ', cartSerice.addCartdata);
          this.props.increment();
        })
        return item;
      }
    });
    this.setState({
      data: data
    })
  }

  decrementCart = (product) => {
    const { data } = this.state;
    data && data.map((item, index) => {
      if (item.productId === product.productId) {
        item.number--;
        cartSerice.addToCart(product.productId, item.number).then(() => {
          // console.log('ADD_TO_CART RESPONSE = ', cartSerice.addCartdata);
          this.props.decrement();
        })
        if (item.number == 0) {
          item.showAddCart = true;
          return item;
        }
        return item;
      }
    });
    this.setState({
      data: data
    })
  }

  onPress = (item) => {
    alert(item.productName);
  };

  renderFrame = (item, index) => {
    const { data } = this.state;
    const endStyle = data && data.length - 1 === index || (data && data.length - 1) / 2 === index
      ? [styles.frame, styles.endFrame]
      : styles.frame;
    return (
      <View style={endStyle}>
        <TouchableWithoutFeedback onPress={() => this.onPress(item)} style={{ zIndex: 2 }}>
          <View>
            <View style={styles.imgView}>
              <Image style={styles.img} source={{ uri: item.productImage }} />
            </View>
            <ImageBackground
              style={styles.guarantImg}
              source={{ uri: 'https://www.laghim.vn/templates/laghim/images/vietgap.png' }}
            />
            <View style={styles.titleView}>
              <Text numberOfLines={3} style={styles.title}>
                {item.productName}
              </Text>
            </View>
            <View>
              <Text style={styles.madeIn}>{item.origin}</Text>
              <View style={styles.priceView}>
                <Text style={styles.newPrice}>{getCurrencyStr(item.newPrice)}</Text>
                <Text style={styles.unitText}>{'/ ' + item.quality}</Text>
              </View>
              <Text style={styles.oldPrice}>{getCurrencyStr(item.oldPrice)}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        {item.showAddCart ? (
          <TouchableOpacity style={styles.addCart} onPress={() => this.showAddNum(item, index)}>
            <Text style={styles.addCartText}>{LANG.ADD_CART}</Text>
          </TouchableOpacity>
        ) : (
            <View style={styles.quantityView}>
              <PlusSubsNumber number={item.number} incrementCart={() => this.incrementCart(item)} decrementCart={() => this.decrementCart(item)} />
            </View>
          )}
        <View style={styles.containerDiscount}>
          <View style={styles.discount}>
            <Text style={styles.discountText}>-{item.discount * 100 + '%'}</Text>
          </View>
          <View style={styles.selling}>
            <Text style={styles.discountText}>{LANG.HOT_SELLIING}</Text>
          </View>
        </View>

      </View>
    );
  };

  renderUpdown = (productData) => {
    return (
      <FlatList
          contentContainerStyle={{
            alignSelf: 'flex-start'
          }}
          numColumns={2}
          data={productData}
          renderItem={({ item, index }) => this.renderFrame(item, index)}
          keyExtractor={(item, index) => index.toString()}
        />
    )
  }

  render() {
    const { data, ads } = this.state;
    const upData = data.splice(0, 4);
    return (
      <View style={styles.container}>
        {this.renderUpdown(upData)}
        <View style={styles.adsView}>
          <Advertiment data={ads} marginTop={10}/>
        </View>
        {this.renderUpdown(data)}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps, { increment, decrement })(ProductList);