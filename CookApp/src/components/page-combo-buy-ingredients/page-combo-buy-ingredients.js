import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { Image, Badge } from 'react-native-elements';
import { connect } from 'react-redux';

import { COLOR, CSS } from '../../utils/variables';
import { LANG } from '../../lang/lang';
import styles from './page-combo-buy-ingredients-style';
import CustomCheckBox from '../custom-checkbox/custom-checkbox';
import IncreaterButtonWithNumber from '../increater-button-with-number/increater-button-with-number';


class IngredientProduct extends Component {}
onPress = () => {

}

handleMealClick = (isPlus) => {

}

export class PageComboBuyIngredients extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View style={[CSS.flexRow, { alignItems: 'flex-start' }]}>
          <CustomCheckBox 
            style={styles.customCheckBox} 
            isChecked={true}
          />
          <View style={[CSS.flexRow]}>
            <View style={styles.imgIngredients}>
              <ImageBackground 
                source={{ uri: 'https://rauxanhcasach.vn/wp-content/uploads/2016/09/rau-c%E1%BB%A7-qu%E1%BA%A3.jpg' }}                
                style={styles.imgIngredientsWrap}
              >
                <Image style={styles.img} source={{ uri: 'https://www.laghim.vn/templates/laghim/images/vietgap.png' }} />
                <Badge 
                  value="- 30%" 
                  textStyle={styles.badgeText}
                  badgeStyle={[styles.badgeStyleRed, styles.badgeStyle]} 
                  containerStyle={styles.discountBadgeContainer}
                />
              </ImageBackground>
            </View>
            <View>
              <View style={[CSS.flexRow, CSS.alignItemsCenter]}>
                <Badge 
                  value={LANG.SUB_INGREDIENT} 
                  textStyle={styles.badgeText}
                  badgeStyle={[styles.badgeStyleYellow, styles.badgeStyle]} 
                  containerStyle={styles.subIngredient}                  
                />
                <Text style={[CSS.fontQuiBold, CSS.fontSize14, { color: COLOR.greenColor, textDecorationLine: 'underline' }]}>
                  Gói mì udon tươi SAMLIP - Gói 200G                
                </Text>
              </View>            
              <Text style={[CSS.fontQuiMedium, CSS.fontSize14, { color: COLOR.madeIn }]}>Mỹ</Text>
              <Text style={[CSS.fontQuiBold, CSS.fontSize18, { color: COLOR.priceProductColor }]}>
                10.000đ
                <Text style={[CSS.fontQuiLight, CSS.fontSize12, { color: COLOR.madeIn }]}>/ 100g</Text>
              </Text>
              <Text style={[styles.initialPrice, CSS.fontQuiRegular]}>185.000đ</Text>
              <IncreaterButtonWithNumber
                currentQuantity={1}   
                onPressDecreaseButton={() => this.handleMealClick()}
                onPressIncreaseButton={() => this.handleMealClick(true)}                   
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(PageComboBuyIngredients)
