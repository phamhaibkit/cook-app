/* eslint-disable indent */
import React, { Component } from 'react';

import { View, FlatList } from 'react-native';
import styles from './collection-home-style';
import CollectionItem from '../collection-item/collection-item';

export default class CollectionHome extends Component {
	constructor(props) {
		super(props);		
	}

	renderItem = ({ item, index }) => (<CollectionItem item={item} isLastCard={index === (this.props.data.length - 1)} imgBgWrap={styles.imgBgWrap} blockMargin={styles.blockMargin}/>);

	render() { 
		const { data, marTop } = this.props;   
		return (
			<View style={[styles.container, { marginTop: marTop }]}>
				{
					data && 
					<FlatList
						data={data} 
						renderItem={this.renderItem}
						keyExtractor={(item) => item.id.toString()}
						horizontal
						showsHorizontalScrollIndicator={false}
						removeClippedSubviews 
					/>
				}
			</View>
		);	
	}
}
