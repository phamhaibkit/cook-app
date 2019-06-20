import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class SearchBarHeader extends Component {
  constructor( props){
    super(props);
  }
  
	render() {
		return (
				<TouchableOpacity 
          style={{flexDirection: 'row', padding: 5, borderWidth: 2, borderRadius: 4, borderColor:'grey', backgroundColor: 'white', alignItems: 'center', marginHorizontal: 3}}
          onPress={() => this.props.navigation.navigate('Search')}
          >
          <Icon name="search" size={24} color="grey" />
          <Text>Nấu gì hôm nay ...</Text>
        </TouchableOpacity>
		);
	}
}
