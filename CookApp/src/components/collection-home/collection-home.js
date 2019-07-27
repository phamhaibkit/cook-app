/* eslint-disable indent */
import React, { Component } from 'react';

import { View, FlatList } from 'react-native';
import styles from './collection-home-style';
import CollectionItem from '../collection-item/collection-item';

export default class CollectionHome extends Component {
	constructor(props) {
		super(props);
		this.state = {};		
	}

	render() { 
		const { data, marTop } = this.props;   
		return (
			<View style={[styles.container, { marginTop: marTop }]}>
				<FlatList
					data={data} 
					renderItem={({ item, index }) => {
						return (
							<CollectionItem item={item} imgBgWrap={styles.imgBgWrap} blockMargin={styles.blockMargin}/>
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
