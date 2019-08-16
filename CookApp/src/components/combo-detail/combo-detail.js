import React, { Component } from 'react';
import { View, Text, Button, TouchableHighlight, Image, Animated } from 'react-native';
import _ from 'lodash';

import styles from './combo-detail-style';
import { IMG, CSS, COLOR } from '../../utils/variables';
import { formatNumberWithDot, capitalize } from '../../utils/general';
import SwiperImage from '../swiper-image/swiper-image';
import { ScrollView } from 'react-native-gesture-handler';
import MostSearched from '../most-searched/most-searched';
import CustomCheckbox from '../../components/custom-checkbox/custom-checkbox';
import GradientButton from '../../components/gradient-button/gradient-button';
import IncreaterButtonWithNumber from '../increater-button-with-number/increater-button-with-number';
import IncreaterButtonWithoutNumber from '../increater-button-without-number/increater-button-without-number';
import BackButton from '../back-button/back-button';
import CartHome from '../../components/cart-home/cart-home';
import { LANG } from '../../lang/lang';
import comboService from '../../services/combo.service';
import { HeaderScroll } from '../dynamic-component/header-scroll/header-scroll';

const HEADER_HEIGHT = 50;
const SWIPER_HEIGHT = 300;
const OVERFLOW_HEIGHT = 90;

class IngredientCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      ingredientName,
      amountOfPeople,
      price,
      isChecked,
      onClickCheckBox,
      onClickSubstract,
      onClickPlus,
      index,
      data
    } = this.props;

    let isDisable = amountOfPeople === 1 ? true : false;
    let dataIndex = data.length - 1;

    return (
      <View style={styles.cardBorder}>
        <CustomCheckbox
          style={styles.customCheckBox}
          isChecked={isChecked}
          rightText={ingredientName}
          rightTextStyle={[styles.rightTextCheckbox, CSS.fontQuiBold]}
          onClick={onClickCheckBox}
        />
        <View style={styles.cardWrap}>
          <View style={{ flex: 3, flexDirection: 'row' }}>
            <View style={{ flex: 2 }}>
              <Text style={[styles.cardLabel, CSS.fontQuiRegular]}>{LANG.MEAL}:</Text>
              <Text style={[styles.cardLabel, CSS.fontQuiRegular]}>{LANG.ESTIMATE_PRICE}:</Text>
            </View>
            <View style={{ flex: 2 }}>
              <Text style={[styles.cardLabel, CSS.fontQuiMedium]}>{amountOfPeople}{LANG.SPACE}{LANG.PERSON}</Text>
              <Text style={[styles.cardLabel, CSS.fontQuiMedium]}>{formatNumberWithDot(price)}{LANG.SPACE}{LANG.VIETNAM_DONG}</Text>
            </View>
          </View>
          <View style={styles.actionBtnGroup}>
            <IncreaterButtonWithoutNumber btnStyle={{ marginRight: 5 }} onPress={onClickSubstract} isDisable={isDisable} />
            <IncreaterButtonWithoutNumber isPlus={true} onPress={onClickPlus} />
          </View>
        </View>
        {!(dataIndex === index) &&
          <Image 
            style={[CSS.w100, { height: 1, marginTop: 20, marginBottom: 15 }]} 
            source={IMG.borderDot}
            resizeMode="repeat"
          />
        }         
      </View>      
    );
  }
}

export default class ComboDetail extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
      estimatePrice: 0,
      totalPrice: 0,
      mealQuantity: 1,
      isCheckAll: true,
      recipes: [],
      data: {}
    };
  }

  handlePressBuy = () => {
    alert('Mua nguyen lieu');
  };

  getComboDetail = (id) => {
    comboService.getComboDetail(id).then(() => {
      let data = { ...comboService.comboDetailData };
      this.setState({
        data: data
      });
      this.initData();
    });
  }

  initData = () => {
    if (typeof this.state.data !== {}) {
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
        estimatePrice: totalPrice
      });
    }
  }

  handleCheckAll = () => {
    const { recipes } = this.state.data;

    this.setState({
      isCheckAll: !this.state.isCheckAll
    })

    recipes.map((item) => {
      item.isChecked = !this.state.isCheckAll;
    });
    this.setState({ recipes: recipes });
  }

  handleAllIngreUncheck = () => {
    const { recipes } = this.state;

    let item = _.find(recipes, (item) => {
      return item.isChecked === true;
    });

    if (item) return;

    this.setState({
      isCheckAll: false
    });
  }

  handleRecipeCheck = (recipe) => {
    const { recipes } = this.state.data;
    const { isCheckAll } = this.state;

    _.find(recipes, (item) => {
      return item.id === recipe.id;
    }).isChecked = !recipe.isChecked;

    this.setState({ recipes: recipes });
    this.handleAllIngreUncheck();
  }

  handleMealClick = (isPlus) => {
    let {
      mealQuantity,
      estimatePrice,
      totalPrice,
      recipes
    } = this.state;

    if (isPlus) {
      mealQuantity++;
      _.map(recipes, (item) => {
        item.itemPriceUnit && (item.price += item.itemPriceUnit);
        item.itemNumPeopleUnit && (item.numPeople += item.itemNumPeopleUnit);
      })

      totalPrice = mealQuantity * estimatePrice
    } else {
      if (mealQuantity > 1) {
        mealQuantity--;
        totalPrice -= estimatePrice;
        _.map(recipes, (item) => {
          item.itemPriceUnit && (
            item.price = item.itemPriceUnit * mealQuantity,
            item.numPeople = item.numPeople - 1
          );
        })
      }
    }

    this.setState({
      mealQuantity,
      recipes,
      totalPrice
    });
  }

  handleIngredientClick = (ingredient, isPlus) => {
    const { recipes } = this.state;

    let clickedIngredient = _.find(recipes, (item) => {
      return item.id === ingredient.id;
    });

    if (isPlus) {
      clickedIngredient.numPeople = ingredient.numPeople + clickedIngredient.itemNumPeopleUnit;
      clickedIngredient.price = ingredient.price + clickedIngredient.itemPriceUnit;
    } else {
      if (clickedIngredient.numPeople > 1) {
        clickedIngredient.numPeople = ingredient.numPeople - clickedIngredient.itemNumPeopleUnit;
        clickedIngredient.price = ingredient.price - clickedIngredient.itemPriceUnit;
      }
    }

    this.setState({
      recipes
    });
  }

  componentDidMount() {
    const { navigation } = this.props;
    const id = navigation.getParam('id', 1);
    this.getComboDetail(id);
  }

  render() {
    let { data, mealQuantity, recipes, scrollY } = this.state;
    const onScroll = Animated.event([{
      nativeEvent: {
        contentOffset: {
          y: scrollY
        }
      }
    }]);

    const backgroundColor = scrollY.interpolate({
      inputRange: [0, SWIPER_HEIGHT - HEADER_HEIGHT - OVERFLOW_HEIGHT],
      outputRange: ["transparent", "white"],
      extrapolate: 'clamp',
    });

    const borderBottomWidth = scrollY.interpolate({
      inputRange: [0, SWIPER_HEIGHT - HEADER_HEIGHT - OVERFLOW_HEIGHT],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });


    return (
      <View>
        <HeaderScroll haveCart>
          <SwiperImage height={SWIPER_HEIGHT} listItems={data.comboImage} />

          <View style={styles.container}>

            <View style={[styles.blockContainer, styles.backgroundWhite]}>
              <View style={styles.topStyle}>
                <View style={[styles.dishInfo, CSS.lightBoxShadow]}>
                  <Text style={[styles.comboLabel, CSS.fontQuiMedium]}>
                    {LANG.COMBO.name}
                  </Text>
                  <Text style={[styles.title, CSS.fontQuiBold]}>{data.name}</Text>
                  <View style={[CSS.flexRow, CSS.alignItemsCenter]}>
                    <View style={styles.statisticalNumber}>
                      <Text style={styles.numberStyle}>
                        {data.orderCount}
                        <Text style={styles.textLight}>{LANG.SPACE}{LANG.ORDER_OWNER}</Text>
                      </Text>

                    </View>
                    <View style={styles.seperator}></View>
                    <View style={styles.statisticalNumber}>
                      <Text style={styles.numberStyle}>
                        {data.viewCount}
                        <Text style={styles.textLight}>{LANG.SPACE}{LANG.VIEW}</Text>
                      </Text>
                    </View>
                  </View>
                  <View style={styles.estimatePrice}>
                    <View style={[CSS.dFlex, CSS.flexRow, { paddingVertical: 15 }]}>
                      <View style={styles.w50percentage}>
                        <Text style={[styles.estHighlightText, CSS.fontQuiBold]}> {formatNumberWithDot(this.state.totalPrice)} {LANG.VIETNAM_DONG}</Text>
                        <Text style={[styles.textDescription, CSS.fontQuiRegular, CSS.textAlignCenter]}>{capitalize(LANG.ESTIMATE_PRICE_LOWERCASE)}</Text>
                      </View>
                      <View style={styles.cardSeparator}></View>
                      <View style={styles.w50percentage}>
                        <IncreaterButtonWithNumber
                          currentQuantity={this.state.mealQuantity}
                          onPressDecreaseButton={() => this.handleMealClick()}
                          onPressIncreaseButton={() => this.handleMealClick(true)}
                        />
                        <Text style={[styles.textDescription, CSS.fontQuiRegular, CSS.textAlignCenter]}>{LANG.MEAL}</Text>
                      </View>
                    </View>
                    <Text style={[styles.optional, CSS.fontQuiMedium, CSS.textAlignCenter]}>{LANG.OPTIONAL_MEAL}</Text>
                  </View>
                </View>
                <View style={styles.promotionInfo}>
                  <Text style={[styles.sectionTitle, CSS.fontNuExBold]}>{LANG.PROMOTION_INFO}</Text>
                  {
                    data.promotion && data.promotion.map((promotion, index) => (
                      <Text style={[styles.textDescription, CSS.fontQuiRegular]} key={index}>{promotion}</Text>
                    ))
                  }
                </View>
              </View>
            </View>

            <View style={[styles.ingredients, styles.blockContainer, styles.backgroundWhite]}>
              <View style={[CSS.flexRow, CSS.dFlex, CSS.justifySpaceBetween, CSS.alignItemsCenter, {marginBottom: 15}]}>
                <Text style={[styles.sectionTitle, CSS.fontNuExBold, CSS.alignItemsCenter]}>{LANG.INGREDIENT}</Text>
                <GradientButton
                  label={LANG.BUY_INGREDIENT}
                  onPress={this.handlePressBuy}
                  style={{paddingHorizontal: 9, height: 35, overflow: 'hidden'}}
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
                      index={index}
                      data={recipes}
                      ingredientName={ingredient.name}
                      amountOfPeople={ingredient.numPeople}
                      price={ingredient.price}
                      isChecked={ingredient.isChecked}
                      onClickCheckBox={() => this.handleRecipeCheck(ingredient)}
                      onClickSubstract={() => this.handleIngredientClick(ingredient)}
                      onClickPlus={() => this.handleIngredientClick(ingredient, true)}
                    />
                  ))
                }
              </View>
            </View>

            <View style={[{ backgroundColor: COLOR.whiteColor }, styles.cookIntroductions]}>
              <MostSearched
                label={LANG.COOKING_INSTRUCTIONS}
                data={this.state.recipes}
                subData={true}
              />
            </View>
          </View>
        </HeaderScroll>
      </View>
    );
  }
}
