import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { CSS, COLOR, IMG } from '../../utils/variables';
import { LANG_VN } from '../../lang/lang-vn';
import { LANG } from '../../lang/lang';
import { formatNumberWithDot } from '../../utils/general';
import IncreaterButtonWithoutNumber from '../increater-button-without-number/increater-button-without-number';

export default class ListProduct extends Component {
  static propTypes = {
    // prop: PropTypes
  }

  constructor(props) {
    super(props);
    const numPeople = _.get(props, 'recipe.numPeople', 0);
    const price = _.get(props, 'recipe.price', 0);
    const pricePerAmountPeople = price / numPeople;
    this.state = {
      numPeople,
      pricePerAmountPeople,
      price,
      numberCount: 0,
    };
  }

  onClickSubstract = () => {
    const { numPeople, pricePerAmountPeople, numberCount } = this.state;
    if (numPeople > 1) {
      this.setState({
        numPeople: numPeople - 1,
        price: (numPeople - 1) * pricePerAmountPeople,
        numberCount: numberCount - 1,
      });
    }
  }

  onClickPlus = () => {
    const { numPeople, pricePerAmountPeople, numberCount } = this.state;
    this.setState({
      numPeople: numPeople + 1,
      price: (numPeople + 1) * pricePerAmountPeople,
      numberCount: numberCount + 1
    });
  }

  render() {
    const { recipe } = this.props;
    const { numPeople, pricePerAmountPeople, price, numberCount } = this.state;
    return recipe && <View style={[styles.container]}>
      <View style={[CSS.flexRow, CSS.alignItemsCenter, CSS.justifySpaceBetween]}>
        <Text style={[{ color: '#444444' }, CSS.fontSize15, CSS.fontNuExBold]}>{LANG_VN.INGREDIENT}</Text>
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={[{ padding: 10, borderRadius: 5 }]} colors={['#3BB556', '#72C91C']} >
          <TouchableOpacity style={[CSS.alignItemsCenter, CSS.justifyContentCenter]} onPress={this.onPressSignin}>
            <Text style={[CSS.fontSize15, CSS.fontQuiBold, { color: '#FFFFFF' }]}>{LANG_VN.BUY_INGREDIENT}</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <View style={[{ paddingVertical: 20 }]}>
        <View style={styles.cardWrap}>
          <View style={{ flex: 3, flexDirection: 'row' }}>
            <View style={{ flex: 3 }}>
              <Text style={[styles.cardLabel, CSS.fontQuiRegular]}>{LANG.MEAL}:</Text>
              <Text style={[styles.cardLabel, CSS.fontQuiRegular]}>{LANG.ESTIMATE_PRICE}:</Text>
            </View>
            <View style={{ flex: 2 }}>
              <Text style={[styles.cardLabel, CSS.fontQuiMedium]}>{numPeople}{LANG.SPACE}{LANG.PERSON}</Text>
              <Text style={[styles.cardLabel, CSS.fontQuiMedium]}>{formatNumberWithDot(price)}{LANG.SPACE}{LANG.VIETNAM_DONG}</Text>
            </View>
          </View>
          <View style={styles.actionBtnGroup}>
            <IncreaterButtonWithoutNumber onPress={() => this.onClickSubstract()} btnStyle={{ marginRight: 5 }} />
            <IncreaterButtonWithoutNumber isPlus onPress={() => this.onClickPlus()} />
          </View>
        </View>
      </View>
      <View style={[styles.ingrdientList, CSS.flexCol]}>
        {recipe.products && recipe.products.map((item, index) => {
          return <View key={index}>
            <View style={[styles.rowIngredient, CSS.justifySpaceBetween, CSS.flexRow]}>
              <Text style={[{ textDecorationLine: 'underline', color: COLOR.greenColor, textTransform: 'capitalize' }, CSS.fontSize14, CSS.fontQuiMedium]}>{item.name}</Text>
              <Text style={[CSS.fontSize14, CSS.fontQuiRegular, { color: '#001D12' }]}>{parseFloat(item.quality) + numberCount} {item.unit}</Text>
            </View>
            <Image style={{ width: '100%', height: 1 }} source={IMG.borderDot} />
          </View>;
        })}
      </View>
    </View>;
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  cardWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLOR.greenColor,
    borderWidth: 1,
    backgroundColor: 'rgba(58, 191, 87, 0.1)',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginTop: 10,
    borderRadius: 5
  },
  actionBtnGroup: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  rowIngredient: {
    paddingVertical: 15,
  },
});