import React, { Component } from 'react';
import { View, Text, Button, TouchableHighlight, Image } from 'react-native';
import _ from 'lodash';

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
import  ComboService  from '../../services/combo.service';

class IngredientCard extends Component{
  constructor(props){
    super(props);   
  }

  render(){
    const { 
      ingredientName, 
      amountOfPeople, 
      price, 
      isChecked,
      onClickCheckBox ,
      onClickSubstract,
      onClickPlus
    } = this.props; 

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
            <IncreaterButtonWithoutNumber btnStyle={{marginRight: 5}} onPress={onClickSubstract}/>
            <IncreaterButtonWithoutNumber isPlus={true} onPress={onClickPlus}/>     
          </View>
        </View>
      </View>
    );
  }
}

export default class ComboDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estimatePrice: 0,
      totalPrice: 0,
      mealQuantity: 0,
      isCheckAll: true,
      recipes: [],
      data: {}
    };
  }

  handlePressBuy = () => {
    alert('Mua nguyen lieu');
  };

  getComboDetail = (id) => {
    ComboService.getComboDetail(id).then(() => {
      let data =  {...ComboService.comboDetail};
      this.setState({
        data: data
      });
      this.initData();
    });
  }

  initData = () => {
    if(typeof this.state.data !== {}) {
      const { data } = this.state;
      let totalPrice = this.state.totalPrice;
      
      _.map(data.recipes, (item) => {
        item.isChecked = true;
        item.itemPriceUnit = item.price,
        item.itemNumPeopleUnit = item.numPeople,
        totalPrice += item.price;
      });

      this.setState({
        totalPrice,
        recipes: data.recipes,
        mealQuantity: data.numPeople,
        estimatePrice: totalPrice
      });
    }
  }

  handleCheckAll = () => {
    this.setState({
      isCheckAll:  !this.state.isCheckAll
    })

    const { recipes } = this.state.data;
    recipes.map((item) => {
      item.isChecked = !this.state.isCheckAll;
    });
    this.setState({recipes: recipes});
  }

  handleRecipeCheck = (recipe) => {
    const { recipes } = this.state.data;

    _.find(recipes, (item)=> {
      return item.id === recipe.id;
    }).isChecked = !recipe.isChecked;

    this.setState({recipes: recipes});
  }

  handleDecreaseMeal = () => {
    let { mealQuantity, estimatePrice, totalPrice, recipes } = this.state;

    if( mealQuantity > 1 ) {
      mealQuantity--;
      totalPrice -= estimatePrice;
      _.map(recipes, (item) => {
        item.itemPriceUnit && (item.price = item.itemPriceUnit * mealQuantity);
      })
    }

    this.setState({
      mealQuantity,
      totalPrice,

    });
  }

  handleIncreaseMeal = () => {
    let { mealQuantity, estimatePrice, recipes } = this.state;

    mealQuantity++;

    _.map(recipes, (item) => {
      item.itemPriceUnit && (item.price = item.itemPriceUnit * mealQuantity);
      item.itemNumPeopleUnit && (item.numPeople = item.itemNumPeopleUnit * mealQuantity);
    })

    this.setState({
      mealQuantity,
      recipes,
      totalPrice: mealQuantity * estimatePrice
    });
  }

  handleIncreateIngre = (ingredient) => {
    const { recipes } = this.state.data;

    let clickBtn = _.find(recipes, (item)=> {
      return item.numPeople === ingredient.numPeople;
    });

    clickBtn.numPeople = ingredient.numPeople + 1;
    clickBtn.price = ingredient.price + ingredient.price

    this.setState({recipes: recipes});
  }

  componentDidMount () { 
    const { navigation } = this.props;
    const id = navigation.getParam('id', 1);     
    this.getComboDetail(id);
  }

  render() {
    let { data, mealQuantity, recipes } = this.state;
    
    return (
      <ScrollView>
        <SwiperImage height={300} listItems={ data.comboImage }/>
        
        <View style={styles.container}>
          
          <View style={styles.blockContainer}>
            <View style={[styles.dishInfo, CSS.lightBoxShadow]}>
              <Text style={[styles.comboLabel, CSS.fontQuiMedium]}>
                {LANG.COMBO.name}
              </Text>
              <Text style={[styles.title, CSS.fontQuiBold]}>{ data.name }</Text>
              <View style={[CSS.flexRow, CSS.alignItemsCenter]}>
                <View style={styles.statisticalNumber}>
                  <Text style={styles.numberStyle}>{ data.orderTimes }</Text>
                  <Text style={[styles.numberStyle, styles.textLight]}>{LANG.SPACE}{LANG.ORDER_OWNER}</Text>
                </View>
                <View style={styles.seperator}></View>
                <View style={styles.statisticalNumber}>
                  <Text style={styles.numberStyle}> { data.viewTimes }</Text>
                  <Text style={[styles.numberStyle, styles.textLight]}>{LANG.SPACE}{LANG.VIEW}</Text>
                </View>
              </View>
              <View style={styles.estimatePrice}>
                <View style={{flexDirection: 'row', flex: 1, paddingVertical: 15}}>
                  <View style={styles.w50percentage}>
                    <Text style={[styles.estHighlightText, CSS.fontQuiBold]}> { formatNumberWithDot(this.state.totalPrice) } {LANG.VIETNAM_DONG}</Text>
                    <Text style={styles.textDescription}>{ capitalize(LANG.ESTIMATE_PRICE_LOWERCASE) }</Text>
                  </View>
                  <View style={styles.cardSeparator}></View>
                  <View style={styles.w50percentage}>
                    <IncreaterButtonWithNumber
                      currentQuantity={this.state.mealQuantity}   
                      onPressDecreaseButton={this.handleDecreaseMeal}
                      onPressIncreaseButton={this.handleIncreaseMeal}                   
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
               data.promotion && data.promotion.map((promotion, index) => (
                  <Text key={index}>{promotion}</Text>
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
                isChecked={this.state.isCheckAll}
                rightText={LANG.SELECT_ALL}
                onClick={this.handleCheckAll}
              />
              <View style={styles.horizontalSeparator}></View>
              {
                recipes && recipes.map((ingredient, index) => (
                  <IngredientCard
                    key={index}
                    ingredientName={ingredient.name}
                    amountOfPeople={ingredient.numPeople}
                    price={ingredient.price}
                    isChecked={ingredient.isChecked}
                    onClickCheckBox={() => this.handleRecipeCheck(ingredient)}
                    onClickSubstract={() => this.handleDecreateIngre(ingredient)}
                    onClickPlus={() => this.handleIncreateIngre(ingredient)}

                  />
                ))
              }
            </View>
          </View> 
          
          {/* <View style={{ backgroundColor: COLOR.whiteColor }}>
            <MostSearched 
              label={ LANG.COOKING_INSTRUCTIONS } 
              data={recipesDetail.cookingInstructions} 
              subData={true}
            />               
          </View> */}
        </View>
      </ScrollView>
    );
  }
}
