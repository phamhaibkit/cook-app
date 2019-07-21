import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image
} from 'react-native';
import { COLOR, CSS, IMG } from '../../utils/variables';
import { LANG } from '../../lang/lang';

const reasonData = [
  { name: 'Thieu dung dan', id: 1 , select: false},
  { name: 'Xau xuc pham nguoi nhin', id: 2, select: false },
  { name: 'Khong thay ngon gi ca', id: 3, select: false },
  { name: 'Cha ra gi',id: 7, select: false },
  { name: 'Khong con gi de dien ta', id: 4, select: false },
  { name: 'Qua chi la tho bao', id: 5, select: false },
  { name: 'Khac', id: 6, select: false }
];
const widthItem = Dimensions.get('window').width;
export default class PageReportRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reason: { name: 'Thieu dung dan', id: 0 },
      data: reasonData
    };
  }

  selectReason = reason => {
    console.log('selectReason==', reason);    
    const { data } = this.state;
    let tempData = data;
    this.handllData(tempData, reason);
  };

  async handllData(tempData, reason){
    await tempData.map((item, index) => {
      if(item.id === reason.id){
        item.select = true;
        return item;
      }else{
        item.select = false;
        return item;
      }
    })
    await this.setState({
      reason: reason,
      data: tempData
    });
    console.log('setState==', reason, tempData);  
  }

  renderItem = (item, index) => {
    const { data } = this.state;
    const backColor = item.select ? 'red' : 'lightgreen';
    return (
      <View
        style={{
          width: widthItem - 30,
          height: 40,
          marginHorizontal: 15,
          marginVertical: 5,
          borderRadius: 5,
          shadowColor: 'grey',
          shadowOffset: {
            width: 0,
            height: 3
          },
          shadowOpacity: 0.29,
          shadowRadius: 4.65,
          elevation: 7,
          backgroundColor: 'white'
        }}
      >
        <TouchableOpacity
          style={{
            padding: 10,
            flex: 1,
            justifyContent: 'center',
            borderRadius: 5,
            backgroundColor: backColor
          }}
          onPress={() => {
            this.selectReason(item);
          }}
        >
          <Text>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const { data } = this.state;
    return (
      <View style={{ marginTop: 10 }}>
        <FlatList
          data={data}
          renderItem={({ item, index }) => this.renderItem(item, index)}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
