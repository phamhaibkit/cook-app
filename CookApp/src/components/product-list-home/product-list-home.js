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
import styles from './product-list-home-style';
import { LANG } from '../../lang/lang';
import { getCurrencyStr } from '../../utils/general';
import PlusSubsNumber from '../plus-subs-number/plus-subs-number';
import { connect } from 'react-redux';
import { increment, decrement } from '../../reducers/cart.reducer';
import cartSerice from '../../services/cart.service';

class ProductListHome extends Component {
  constructor(props) {
    super(props);
    const {data} = this.props;
    this.numCols;
    this.state = {
      data: data
    }
  }

  componentWillReceiveProps(nextProps){
    const newData = nextProps.data;
    newData && newData.map((item, index) => {
      item.showAddCart = true;
      item.number = 1;
    });
    this.numCols = newData.length % 2 === 0
        ? newData.length / 2
        : (newData.length + 1) / 2;
    this.setState({
      data : newData
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

  decrementCart= (product) => {
    const { data } = this.state;
    data && data.map((item, index) => {
      if (item.productId === product.productId) {
        item.number--;
        cartSerice.addToCart(product.productId, item.number).then(() => {
          // console.log('ADD_TO_CART RESPONSE = ', cartSerice.addCartdata);
          this.props.decrement();
        })
        if(item.number == 0){
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

  onPress = () => {
    alert('9999999999999');
  };

  renderFrame = (item, index) => {
    const { data } = this.state;
    const endStyle = data && data.length - 1 === index || (data && data.length - 1) / 2 === index
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
                <Text style={styles.unitText}>{'/ ' + item.quality}</Text>
              </View>
              <Text style={styles.oldPrice}>{getCurrencyStr(item.oldPrice)}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        {item.showAddCart ? (
          <TouchableOpacity style={styles.addCart} onPress={() =>this.showAddNum(item, index)}>
            <Text style={styles.addCartText}>{LANG.ADD_TO_CART}</Text>
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
            <Text style={styles.discountText}>{LANG.HOT_SELLIING}</Text>
          </View>
        </View>

      </View>
    );
  };

  render() {
    const { data } = this.state;
    return (
      <View style={styles.container}>
      {this.numCols &&
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FlatList
            contentContainerStyle={{
              alignSelf: 'flex-start'
            }}
            numColumns={this.numCols}
            data={data}
            renderItem={({ item, index }) => this.renderFrame(item, index)}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
      }
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
  }
}

export default connect (mapStateToProps, {increment, decrement})(ProductListHome);