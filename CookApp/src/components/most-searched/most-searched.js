import React, { Component } from 'react';
import { Text, View, TouchableOpacity, FlatList, Dimensions, Image } from 'react-native';
import { LANG } from '../../lang/lang';
import { COLOR, CSS, IMG } from '../../utils/variables';
import ElevatedView from 'react-native-elevated-view';

const widthItem = Dimensions.get('window').width;
export default class MostSearched extends Component {
  constructor(props) {
    super(props);
    this.data = [
      { id: 1, title: 'Thit bo chien', chef: 'Hoang Kieu Nga', time: 60, link: 'https://toinayangi.vn/wp-content/uploads/2014/11/thit-bo-xao-can-toi-tay-2.jpg' },
      { id: 2, title: 'Thit bo xao khoai', chef: 'Binh Tang', time: 60, link: 'https://toinayangi.vn/wp-content/uploads/2014/11/thit-bo-xao-can-toi-tay-2.jpg' },
      { id: 3, title: 'Thit bo xao xa ot', chef: 'Trung Lu', time: 60, link: 'https://toinayangi.vn/wp-content/uploads/2014/11/thit-bo-xao-can-toi-tay-2.jpg' }
    ];
  }

  renderItem = (item, index) => {
    return (
      <ElevatedView elevation={10} style={{ width: widthItem - 30, height: 70, marginHorizontal: 15, marginVertical: 10, marginRight: 15, borderRadius: 5 }} >
        <TouchableOpacity style={{ flexDirection: 'row', padding: 10 }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image source={{ uri: item.link }} style={{ width: 60, height: 50, borderRadius: 5 }} />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text>{item.title}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Text>{item.chef}</Text>
              <Image source={IMG.recipeSolid} style={{ width: 13, height: 10 }} />
              <Text>{item.time}</Text>
              <Image source={IMG.sandClokHome} style={{ width: 9, height: 10 }} />
            </View>
          </View>
        </TouchableOpacity>
      </ElevatedView>
    )
  }

  render() {
    const { label } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Text style={{
          fontSize: 15,
          fontFamily: CSS.fontBold,
          color: '#444444',
          marginTop: 20,
          marginLeft: 15,
        }}> {label.toUpperCase()} </Text>
        <FlatList
          data={this.data}
          renderItem={({ item, index }) => this.renderItem(item, index)}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}