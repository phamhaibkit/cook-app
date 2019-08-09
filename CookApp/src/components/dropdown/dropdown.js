import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { LANG } from '../../lang/lang';
import { IMG } from '../../utils/variables';
import PopupSelectOptionRadio from '../popup-select-option-radio/popup-select-option-radio';

export default class DropDown extends Component {
  constructor(props){
    super(props);
    const { data } = this.props;
    this.state = {  
      choosedItem: data && data[0],
      showChoise: false
    };
  }

  onPress = () => {
    this.setState({
      showChoise: true
    })
  }

  onSelectItem = (value, index) => {
    const { slectedItem } = this.props;
    this.setState({
      choosedItem: value
    });
    slectedItem && slectedItem(value);
  };


  closeChoise = () => {
    this.setState({
      showChoise: false
    })
  }
  
  render() {
    const { showChoise, choosedItem } = this.state;
    const { data, label } = this.props;
    return (
      <View >      
        <TouchableOpacity onPress={this.onPress} style={{paddingHorizontal: 15,justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}}>
          <Text >{ choosedItem && choosedItem.label || choosedItem && choosedItem.value}</Text>
          <Image source={IMG.arrowDownGreen} style={{width: 10, height: 6}}></Image>
        </TouchableOpacity>
        <PopupSelectOptionRadio
            isShow={showChoise}
            data={data}
            labelLeft={label}
            onSelectItem={(value, index) => this.onSelectItem(value, index)}
            selectedIndex={choosedItem && choosedItem.index}
            onCloseModal={this.closeChoise}
          />
      </View>
    );
  }
}