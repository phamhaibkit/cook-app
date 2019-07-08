import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { IMG } from '../../utils/variables';

export default class CartHome extends Component {
	render() {
		return (
			<TouchableOpacity style={{ flex: 1 }}>
				<View>
					<Image style={{ width: 19, height: 24 }} source={IMG.cartHome} />
				</View>
				<View
					style={{
						position: 'absolute',
						right: -7,
						top: -4,
						backgroundColor: 'red',
						borderRadius: 8,
						width: 16,
						height: 16,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>3</Text>
				</View>
			</TouchableOpacity>
		);
	}
}
