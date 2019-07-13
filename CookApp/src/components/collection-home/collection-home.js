/* eslint-disable indent */
import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { Text, View, Image, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import { IMG } from '../../utils/variables';
import styles from './collection-home-style';
import { COLOR, CSS } from '../../utils/variables';
import CollectionItem from '../collection-item/collection-item';
import { COLLECTION_DATA } from '../../models/data';

export default class CollectionHome extends Component {
	constructor(props) {
		super(props);
		this.state = {};
    this.data = COLLECTION_DATA;
	}

	render() {    
		return (
			<View style={styles.container}>
				<FlatList
					data={this.data} 
					renderItem={({ item, index }) => {
						return (
							<CollectionItem item={item} index={index} imgBgWrap={styles.imgBgWrap} blockMargin={styles.blockMargin}/>
						);
					}} 
          keyExtractor={(item, index) => index.toString()}
					horizontal
					showsHorizontalScrollIndicator={false}
				/>
			</View>
		);
	}
}
