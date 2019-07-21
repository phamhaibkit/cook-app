import React, { Component } from 'react';
import { Text, View, TouchableOpacity, FlatList, Dimensions, Image } from 'react-native';
import { COLOR, CSS, IMG } from '../../utils/variables';
import { LANG } from '../../lang/lang';

const widthItem = Dimensions.get('window').width;
export default class MostSearched extends Component {
  renderItem = (item, index) => {
    const { subData } = this.props;
    return (
      <View style={{
        width: widthItem - 30,
        height: 70,
        marginHorizontal: 15,
        marginVertical: 5,
        borderRadius: 5,
        shadowColor: 'grey',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        backgroundColor: 'white',
      }} >
        <TouchableOpacity style={{ flexDirection: 'row', padding: 10 }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image source={{ uri: item.link }} style={{ width: 60, height: 50, borderRadius: 5 }} />
          </View>
          <View style={{ marginLeft: 10, justifyContent: 'center' }}>
            <Text style={{ fontFamily: CSS.fontTitle, color: COLOR.blackName, fontSize: 14 }} numberOfLines={1}>{item.title}</Text>
            { subData && 
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Image source={IMG.recipeSolid} style={{ width: 13, height: 10 }} />
              <Text style={{ fontFamily: CSS.fontText, color: COLOR.blackColor, fontSize: 13, marginLeft: 5 }}>{item.chef}</Text>
              <View style={{ marginLeft: 5, justifyContent: 'center' }}>
                <View style={{ height: 11, width: 1, backgroundColor: COLOR.lineColor }} />
              </View>
              <Image source={IMG.sandClokHome} style={{ width: 9, height: 10, marginLeft: 5 }} />
              <Text style={{ fontFamily: CSS.fontText, color: COLOR.blackColor, fontSize: 13, marginLeft: 5 }}>
                {item.time}
                <Text>
                  {LANG.SPACE + LANG.MINUTE.charAt(0).toUpperCase() + LANG.MINUTE.slice(1)}
                </Text>
              </Text>
            </View>
            }
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    const { label, data } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Text style={{
          fontSize: 15,
          fontFamily: CSS.fontBold,
          color: '#444444',
          marginTop: 20,
          marginLeft: 15,
        }}> {label.toUpperCase()} </Text>
        <View style={{ marginTop: 10 }}>
          <FlatList
            data={data}
            renderItem={({ item, index }) => this.renderItem(item, index)}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}