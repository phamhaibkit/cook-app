import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { LANG } from '../../lang/lang';
import { IMG } from '../../utils/variables';
import styles from './up-recipe-step2-style';
import DropDown from '../dropdown/dropdown';

let data = [
  {id: 1, name:''},
  {id: 2, name:''},
  {id: 3, name:''},
  {id: 4, name:''}
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
    const indexDelete = data.indexOf(row);
    // const newData = data.filter((item, index) => {
    //   return item.id !== row.id;
    // })
    if( indexDelete !== -1){
      data.splice(indexDelete, 1);
      console.log('ROW-DELETE=', row, data);
    }
    this.setState({
      data: data
    })
  }

  addNewRow = () => {
    const { data } = this.state;
    const lastArrData = data[data.length - 1];
    console.log('ADD-ROW', lastArrData + 1)
    if(lastArrData){
      data.push({id: lastArrData.id + 1});
    }else{
      data.push({id: 1});
    }
    this.setState({
      data: data
    })
  }

  onChangeText = (row, text) => {
    const { data } = this.state;
    console.log('onChangeText=', row, text);
    data.map((item, index) => {
      if(item.id === row.id){
        item.name = text;
      }
    })
    this.setState({
      data: data
    })
  }

  renderIngredient = () => {
    const { data } = this.state;
    console.log('WHAT THE DATA', data);
    return data.map((item, index) => {
      return (
        <View key={index + 1} style={styles.containerFrame}>
          <View style={styles.leftFrame}>
            <View style={[styles.upIngre, styles.borderBottom]}>
              <TextInput 
                style={styles.textInput}
                maxLength={40}
                placeholder='Ten nguyen lieu'
                value={data.name}
                onChangeText={text => {this.onChangeText(item, text)}}
                />
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