import React, { Component } from 'react';
import { Text, View, Switch } from 'react-native';
import { Image, Divider  } from 'react-native-elements';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import { ScrollView } from 'react-native-gesture-handler';

import styles from './page-combo-buy-ingredients-style';
import { LANG } from '../../lang/lang';
import { CSS, IMG, COLOR } from '../../utils/variables';
import CustomCheckbox from '../../components/custom-checkbox/custom-checkbox';
import GradientButton from '../../components/gradient-button/gradient-button';
import IngredientCard from '../ingredient-card/ingredient-card';
import ProductBlock from '../product-block/product-block';


const  DetailPage = () => (
  <ScrollView>
    <View style={styles.detailPage}>
      <View style={[styles.paddingHorizontal15, styles.paddingVertical20]}>
        <CustomCheckbox 
          style={styles.customCheckBox}
          isChecked={false}
          rightText={LANG.SELECT_ALL}
          onClick={this.handleCheckAll}
        />
      </View>

      <View style={[styles.paddingHorizontal15, styles.paddingVertical20, styles.IngredientSection]}>
        <View style={[CSS.flexRow, CSS.justifySpaceBetween, CSS.alignItemsCenter]}>
          <View style={[CSS.flexRow, CSS.alignItemsCenter, CSS.justifyContentCenter]}>
            <CustomCheckbox 
              style={styles.customCheckBox}
              isChecked={true}
              rightText="Thịt bò xào khoai tây"
              rightTextStyle={[CSS.fontQuiBold, CSS.fontSize20, { color: COLOR.oldPrice }]}
              onClick={this.handleCheckAll}
            />
          </View>
          <Image source={ IMG.arrowCollapseUp } style={{width: 12, height: 6}}/>
        </View>
        <View style={[CSS.flexRow, { paddingLeft: 35}]}>
          <Text style={[CSS.fontQuiMedium]}>Phụ liệu: </Text>
          <Text style={[styles.tags, COLOR.oldPrice]}>Đường</Text>
          <Text style={[styles.tags, COLOR.oldPrice]}>Bột canh Knor</Text>
        </View>

        <IngredientCard
          data={[]}
          hasCheckbox={false}
          isChecked={true}
          amountOfPeople={1}
          onClickCheckBox={() => this.handleRecipeCheck(ingredient)}
          onClickSubstract={() => this.handleIngredientClick(ingredient)}
          onClickPlus={() => this.handleIngredientClick(ingredient, true)}
        />
      </View> 

      <View style={[styles.paddingHorizontal15, styles.paddingVertical20, styles.backgroundWhite]}>
        <View style={[styles.subSelectAll, CSS.flexRow, CSS.alignItemsCenter, CSS.justifySpaceBetween]}>
          <CustomCheckbox 
            style={styles.customCheckBox}
            isChecked={true}
            rightText={LANG.SELECT_ALL}
            onClick={this.handleCheckAll}
          />
          <View style={[CSS.flexRow, CSS.alignItemsCenter]}>
            <Switch
              value={'mua phu lieu'}
            />
            <Text>Mua phụ liệu</Text>
          </View>     
        </View> 
        <ProductBlock />
        <ProductBlock />
        <ProductBlock />  
      </View> 
    </View>
   </ScrollView>
)
export default class PageComboBuyIngredients extends Component {
  render() {
    return (
      <ScrollableTabView
          style={{marginTop: 20, }}
          initialPage={0}
          tabBarUnderlineStyle ={{Color: CSS.greenColor}}
          tabBarActiveTextColor={COLOR.greenColor}
          renderTabBar={() => <ScrollableTabBar />}
        >
          <DetailPage tabLabel='Thịt bò xào khoai tây' />
          <DetailPage tabLabel='Mì udon súp miso và thịt heo' />
          <DetailPage tabLabel='Canh rong biển'/>     
        </ScrollableTabView>
    );
  }
}
