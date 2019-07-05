import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { IMG } from '../../utils/variables';

export default class CartHome extends Component {
	render() {
		return (
			<TouchableOpacity style={{ flex: 1 }}>
				<View>
					<Image style={{ width: 19, height: 24 }} source={IMG.cart} />
				</View>
				<View
					style={{
						position: 'absolute',
						right: -5,
						top: -3,
						backgroundColor: 'red',
						padding: 2,
						borderRadius: 8,
						width: 16,
						height: 16,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Text style={{ color: 'white', fontSize: 8, fontWeight: 'bold' }}>3</Text>
				</View>
			</TouchableOpacity>
		);
	}
}
