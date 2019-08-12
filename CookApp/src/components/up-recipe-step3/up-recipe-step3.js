import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { LANG } from '../../lang/lang';
import { IMG } from '../../utils/variables';
import styles from './up-recipe-step3-style';

let data = [
  {id: 1, show: true},
  {id: 2, show: true},
  {id: 3, show: true},
  {id: 4, show: true}
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
    data.map((item, index) => {
      if(item.id === row.id){
        item.show = false
      }
    })
    console.log('ROW-DELETE=', row, data);
    this.setState({
      data: data
    })
  }

  addNewRow = () => {
    const { data } = this.state;
    const lastArrData = data[data.length - 1];
    console.log('ADD-ROW', lastArrData)
    if(lastArrData){
      data.push({id: lastArrData.id + 1, show: true});
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
    let num = 0;
    return data.map((item, index) => {
      item.show ? num++ : num; 
      return (
        <View key={index}>
          {item.show &&
            <View >
              <View style={styles.containerFrame}>
                <Text style={styles.stepTxt}>{LANG.STEP + ' ' + num}</Text>
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
          }
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