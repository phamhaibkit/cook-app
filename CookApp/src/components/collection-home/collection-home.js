/* eslint-disable indent */
import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { Text, View, Image, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import { IMG } from '../../utils/variables';
import styles from './collection-home-style';
import { COLOR, CSS } from '../../utils/variables';
import CollectionItem from '../collection-item/collection-item';
import { COLLECTION_DATA } from '../../models/data';
import navigationService from '../../services/navigation.service';
import { ROUTES } from '../../utils/routes';

export default class CollectionHome extends Component {
	constructor(props) {
		super(props);
		this.state = {};		
	}

	gotoDetail () {
		navigationService.navigate(ROUTES.collectionDetail.key, { id: index + 1});
	}

	render() { 
		const { data, gotoDetail } = this.props;   
		return (
			<View style={styles.container}>
				<FlatList
					data={data} 
					renderItem={({ item, index }) => {
						return (
							<CollectionItem onPress= { gotoDetail } item={item} index={index} imgBgWrap={styles.imgBgWrap} blockMargin={styles.blockMargin}/>
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
