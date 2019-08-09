import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { LANG } from '../../lang/lang';
import { IMG } from '../../utils/variables';
import styles from './up-recipe-step2-style';
import DropDown from '../dropdown/dropdown';

let data = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4}
]

const units = [{
  value: 'gram', index: 0
}, {
  value: 'muỗng', index: 1
}, {
  value: 'ml', index: 2
}, {
  value: 'quả', index: 3
}]
export default class UpRecipeStep2 extends Component {
  constructor(props){
    super(props);
    this.state= {
      data : data
    }
  }

  slectedMeal = (value) => {
    const { slectedMeal } = this.props;
    slectedMeal && slectedMeal(value);
  }

  deleteRow = (row) => {
    const { data } = this.state;
    const newData = data.filter((item, index) => {
      return item.id !== row.id;
    })
    console.log('ROW-DELETE=', row, newData);
    this.setState({
      data: newData
    })
  }

  addNewRow = () => {
    const { data } = this.state;
    const lastArrData = data[data.length - 1];
    console.log('ADD-ROW', lastArrData)
    if(lastArrData){
      data.push({id: lastArrData.id + 1});
    }else{
      data.push({id: 1});
    }
    this.setState({
      data: data
    })
  }

  renderIngredient = () => {
    const { data } = this.state;
    return data.map((item, index) => {
      return (
        <View key={index} style={styles.containerFrame}>
          <View style={styles.leftFrame}>
            <View style={[styles.upIngre, styles.borderBottom]}>
              <TextInput style={styles.textInput} maxLength={40} placeholder='Ten nguyen lieu'/>
            </View>
            <View style={styles.upIngre}>
              <View style={[styles.leftIngre, styles.borderRight]}>
                <TextInput style={styles.textInput} maxLength={40} placeholder='So luong'/>
              </View>
              <View style={styles.leftIngre}>
                <DropDown 
                  label={LANG.MEAL}
                  data={units}
                  slectedItem={this.slectedMeal}
                />
              </View>
            </View>
          </View>
          <View style={styles.rightFrame}>
            <TouchableOpacity onPress={() => this.deleteRow(item)}>
              <Image source={IMG.clearInput} style={styles.deleteImg}/>
            </TouchableOpacity>
          </View>
        </View>
      )
    });
  }
  
  render() {
    const { dataMeal } = this.props;
    return (
      <View style={styles.container}>      
        <Text style={styles.titleTxt}>{LANG.MEAL}</Text>
        <View style={styles.dropView}>
          <DropDown 
            label={LANG.MEAL}
            data={dataMeal}
            slectedItem={this.slectedMeal}
          />
        </View>
        <Text style={styles.titleTxt}>{LANG.INGREDIENT_1}</Text>
        {this.renderIngredient()}
        <TouchableOpacity style={styles.upRecipeView} onPress={this.addNewRow}>
            <Image source={IMG.addIngredient} style={styles.upImg}></Image>
            <Text style={styles.upText}>{LANG.ADD_INGREDIENT}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}