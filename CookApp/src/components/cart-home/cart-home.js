import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, Platform } from 'react-native';
import { IMG, COLOR } from '../../utils/variables';
import { connect } from 'react-redux';

class CartHome extends Component {
  constructor(props) {
    super(props);
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    const { count,  isTransparentHeader, isChangeCartColor} = this.props;
    const cartImg = Platform.OS === 'ios' || isChangeCartColor === true ? IMG.cartHomeIos : IMG.cartHome;
    const cartNum = (Platform.OS === 'ios' || isTransparentHeader) ? COLOR.appNameIos : COLOR.redColor;
    
    return (
      <TouchableOpacity style={{ flex: 1 }}>
        <View>
          <Image style={{ width: 26, height: 26 }} source={cartImg} />
        </View>
        {count > 0 && (
          <View
            style={{
              position: 'absolute',
              right: -5,
              top: 0,
              backgroundColor: cartNum,
              borderRadius: 8,
              width: 18,
              height: 18,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 2,
              borderColor: COLOR.whiteColor,
            }}
          >
            <Text
              style={{
                color: COLOR.whiteColor,
                fontSize: 10,
                fontWeight: 'bold'
              }}
            >
              {count}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.cartInfo.numberProduct
  };
}

export default connect(mapStateToProps)(CartHome);
