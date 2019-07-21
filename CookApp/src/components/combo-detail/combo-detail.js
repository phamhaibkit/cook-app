import React, { Component } from 'react';
import { View, Text, Button, TouchableHighlight, Image } from 'react-native';

import styles from './combo-detail-style';
import { IMG, CSS, COLOR } from '../../utils/variables';
import { formatNumberWithDot, capitalize } from '../../utils/general';
import { COMBO_DETAIL } from '../../models/data';
import SwiperImage from '../swiper-image/swiper-image';
import { ScrollView } from 'react-native-gesture-handler';
import MostSearched from '../most-searched/most-searched';
import CustomCheckbox from '../../components/custom-checkbox/custom-checkbox';
import GradientButton from '../../components/gradient-button/gradient-button';
import IncreaterButtonWithNumber from '../increater-button-with-number/increater-button-with-number';
import IncreaterButtonWithoutNumber from '../increater-button-without-number/increater-button-without-number';
import { LANG } from '../../lang/lang';

function IngredientCard (props)  {
  const { 
    ingredientName, 
    amountOfPeople, 
    price, 
    isChecked,
    onClickCheckBox 
  } = props;
  return (
    <View style={[{paddingVertical: 20}, styles.cardBorder]}>
      <CustomCheckbox 
        style={styles.customCheckBox}
        isChecked={isChecked}
        rightText={ingredientName}
        rightTextStyle={[styles.rightTextCheckbox, CSS.fontQuiBold]}
        onClick={onClickCheckBox}
      />
      <View style={styles.cardWrap}>
        <View style={{flex: 3, flexDirection: 'row'}}>
          <View style={{flex: 3}}>
            <Text style={[styles.cardLabel, CSS.fontQuiRegular]}>{LANG.MEAL}:</Text>
            <Text style={[styles.cardLabel, CSS.fontQuiRegular]}>{LANG.ESTIMATE_PRICE}:</Text>
          </View>
          <View style={{flex: 2}}>                            
            <Text style={[styles.cardLabel, CSS.fontQuiMedium]}>{ amountOfPeople }{LANG.SPACE}{LANG.PERSON}</Text>
            <Text style={[styles.cardLabel, CSS.fontQuiMedium]}>{ formatNumberWithDot(price) }{LANG.SPACE}{LANG.VIETNAM_DONG}</Text>
          </View>
        </View>
        <View style={styles.actionBtnGroup}>
          <IncreaterButtonWithoutNumber btnStyle={{marginRight: 5}} />
          <IncreaterButtonWithoutNumber isPlus={true}/>     
        </View>
      </View>
    </View>
  );
}

export default class ComboDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estimatePrice: 0,
      mealQuantity: 1,
      isSelectAll: true,
      isChecked: true, 
      data: COMBO_DETAIL
    };
  }

  handlePressBuy = () => {
    alert('Mua nguyen lieu');
  };

  render() {
    let recipesDetail = this.state.data;
    
    return (
      <ScrollView>
        <SwiperImage height={300} listItems={ recipesDetail.sliderImages }/>
        
        <View style={styles.container}>
          
          <View style={styles.blockContainer}>
            <View style={[styles.dishInfo, CSS.lightBoxShadow]}>
              <Text style={[styles.comboLabel, CSS.fontQuiMedium]}>
                {LANG.COMBO.name}
              </Text>
              <Text style={[styles.title, CSS.fontQuiBold]}>{ recipesDetail.comboTitle }</Text>
              <View style={[CSS.flexRow, CSS.alignItemsCenter]}>
                <View style={styles.statisticalNumber}>
                  <Text style={styles.numberStyle}>{ recipesDetail.orders }</Text>
                  <Text style={[styles.numberStyle, styles.textLight]}>{LANG.SPACE}{LANG.ORDER_OWNER}</Text>
                </View>
                <View style={styles.seperator}></View>
                <View style={styles.statisticalNumber}>
                  <Text style={styles.numberStyle}> { recipesDetail.views }</Text>
                  <Text style={[styles.numberStyle, styles.textLight]}>{LANG.SPACE}{LANG.VIEW}</Text>
                </View>
              </View>
              <View style={styles.estimatePrice}>
                <View style={{flexDirection: 'row', flex: 1, paddingVertical: 15}}>
                  <View style={styles.w50percentage}>
                    <Text style={[styles.estHighlightText, CSS.fontQuiBold]}> { formatNumberWithDot(335000) } {LANG.VIETNAM_DONG}</Text>
                    <Text style={styles.textDescription}>{ capitalize(LANG.ESTIMATE_PRICE_LOWERCASE) }</Text>
                  </View>
                  <View style={styles.cardSeparator}></View>
                  <View style={styles.w50percentage}>
                    <IncreaterButtonWithNumber
                      currentQuantity={1}   
                      onPressDecreaseButton={()=>{}}
                      onPressIncreaseButton={()=>{}}                   
                    />
                    <Text style={styles.textDescription}>{ LANG.MEAL }</Text>
                  </View> 
                </View>               
                <Text style={[{ textAlign: 'center', backgroundColor: '#EEEEEE', color:'#767676', height: 24 }, CSS.fontQuiMedium]}>{ LANG.OPTIONAL_MEAL }</Text>
              </View>
            </View>
            <View style={styles.promotionInfo}>
              <Text style={[styles.sectionTitle, CSS.fontNuExBold]}>{LANG.PROMOTION_INFO}</Text>
             {
               recipesDetail.promotions && recipesDetail.promotions.map((promotion) => (
                  <Text>{promotion}</Text>
               ))
             }
            </View>
          </View>

          <View style={[styles.ingredients, styles.blockContainer]}>
            <View style={[{flex:1, flexDirection: 'row'}, CSS.justifySpaceBetween,  CSS.alignItemsCenter]}>              
              <Text style={[{height: 35}, styles.sectionTitle, CSS.fontNuExBold, CSS.alignItemsCenter]}>{LANG.INGREDIENT}</Text>
              <GradientButton 
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={[COLOR.gradientLeft, COLOR.gradientRight]}
                buttonLabel={ LANG.BUY_INGREDIENT }
                onPress={ this.handlePressBuy }
              />
            </View>
            
            <Text>{LANG.SELECT_INGREDIENT_FOR_MEAL}</Text>
            
            <View style={styles.selectAll}>
              <CustomCheckbox 
                style={styles.customCheckBox}
                isChecked={this.state.isChecked}
                rightText={LANG.SELECT_ALL}
                onClick={() => { 
                  this.setState({
                    isChecked: !this.state.isChecked
                  })
                }}
              />
              <View style={styles.horizontalSeparator}></View>
              {
                recipesDetail.ingredients && recipesDetail.ingredients.map((ingredient) => (
                  <IngredientCard
                    ingredientName={ingredient.ingredientName}
                    amountOfPeople={ingredient.amountOfPeople}
                    price={ingredient.price}
                    isChecked={this.state.isChecked}
                    onClickCheckBox={()=>{this.setState({isChecked: !this.state.isChecked})}}
                  />
                ))
              }
            </View>
          </View> 
          
          <View style={{ backgroundColor: COLOR.whiteColor }}>
            <MostSearched 
              label={ LANG.COOKING_INSTRUCTIONS } 
              data={recipesDetail.cookingInstructions} 
              subData={true}
            />               
          </View>
        </View>
      </ScrollView>
    );
  }
}
