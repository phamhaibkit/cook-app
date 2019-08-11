import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { LANG } from '../../lang/lang';
import { IMG } from '../../utils/variables';
import styles from './up-recipe-step3-style';

let data = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4}
]

export default class UpRecipeStep3 extends Component {
  constructor(props){
    super(props);
    this.state= {
      data : data,
      images: [ {}, {}, {}, {}]
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

  renderImage = () => {
    const { images } = this.state;
    return images.map((item, index) => {
      return (
        <View key={index}>
          <TouchableOpacity style={styles.imgBtn}>
            <Image source={IMG.addImage} style={styles.postImg}></Image>
          </TouchableOpacity>  
        </View>
      )
    });
  }

  renderStep = () => {
    const { data } = this.state;
    return data.map((item, index) => {
      return (
        <View key={index}>
          <View style={styles.containerFrame}>
            <Text style={styles.stepTxt}>{LANG.STEP + ' ' +(index + 1)}</Text>
            <View style={styles.imagesView}>
              {this.renderImage()}
            </View>
            <View style={styles.textInput}>
              <TextInput placeholder={LANG.INPUT_DESCRIPTION_1} editable={true} multiline={true} numberOfLines={4} />
            </View>
          </View>
          <View style={styles.deleteView}>
            <TouchableOpacity onPress={() => this.deleteRow(item)}>
              <Image source={IMG.clearInput} style={styles.deleteImg}/>
            </TouchableOpacity>
          </View>
        </View>
      )
    });
  }
  
  render() {
    return (
      <View style={styles.container}>      
        {this.renderStep()}
        <TouchableOpacity style={styles.upRecipeView} onPress={this.addNewRow}>
            <Image source={IMG.addIngredient} style={styles.upImg}></Image>
            <Text style={styles.upText}>{LANG.ADD_STEP}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}