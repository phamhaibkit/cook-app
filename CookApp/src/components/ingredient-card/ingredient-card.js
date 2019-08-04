import React, { Component } from 'react';
import { View, Text } from 'react-native';

import CustomCheckbox from '../custom-checkbox/custom-checkbox';
import IncreaterButtonWithoutNumber from '../increater-button-without-number/increater-button-without-number';
import { CSS } from '../../utils/variables';
import { LANG } from '../../lang/lang';
import { formatNumberWithDot } from '../../utils/general';
import styles from './ingredient-card-style';

export default class  IngredientCard extends Component{
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
      onClickPlus,
      index,
      data,
      hasCheckbox
    } = this.props; 

    let isDisable = amountOfPeople === 1 ? true : false;
    let dataIndex;
    // data.length && (dataIndex = data.length - 1);

    return (
      <View style={true ? [styles.cardBorder, styles.lastCard] : styles.cardBorder}>
        <View style={styles.cardWrap}>
          <View style={{flex: 3, flexDirection: 'row'}}>
            <View style={{flex: 2}}>
              { amountOfPeople && (<Text style={[styles.cardLabel, CSS.fontQuiRegular]}>{LANG.MEAL}:</Text>)}
              { price && (<Text style={[styles.cardLabel, CSS.fontQuiRegular]}>{LANG.ESTIMATE_PRICE}:</Text>)}
            </View>
            <View style={{flex: 2}}>                            
            { amountOfPeople && (<Text style={[styles.cardLabel, CSS.fontQuiMedium]}>{ amountOfPeople }{LANG.SPACE}{LANG.PERSON}</Text>)}
            { price && (<Text style={[styles.cardLabel, CSS.fontQuiMedium]}>{ price && formatNumberWithDot(price) }{LANG.SPACE}{LANG.VIETNAM_DONG}</Text>)}
            </View>
          </View>
          <View style={styles.actionBtnGroup} >
            <IncreaterButtonWithoutNumber btnStyle={{marginRight: 5}} onPress={onClickSubstract} isDisable={false}/>
            <IncreaterButtonWithoutNumber isPlus={true} onPress={onClickPlus}/>     
          </View>
        </View>
      </View>
    );
  }
} 