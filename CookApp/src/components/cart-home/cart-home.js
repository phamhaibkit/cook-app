import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, Platform } from 'react-native';
import { IMG, COLOR } from '../../utils/variables';

export default class CartHome extends Component {
	render() {
		const cartImg = Platform.OS === 'ios' ? IMG.cartHomeIos : IMG.cartHome;
		return (
			<TouchableOpacity style={{ flex: 1 }}>
				<View>
					<Image style={{ width: 26, height: 26 }} source={cartImg} />
				</View>
				<View
					style={{
						position: 'absolute',
						right: -5,
						top: 0,
						backgroundColor: COLOR.redColor,
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
