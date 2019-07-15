import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, Platform } from 'react-native';
import { IMG, COLOR } from '../../utils/variables';

export default class CartHome extends Component {
	render() {
		const cartImg = Platform.OS === 'ios' ? IMG.cartHomeIos : IMG.cartHome;
		const cartNum = Platform.OS === 'ios' ? COLOR.appNameIos : COLOR.redColor;
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
						backgroundColor: cartNum,
						borderRadius: 8,
						width: 18,
						height: 18,
						alignItems: 'center',
						justifyContent: 'center',
						borderWidth: 2,
						borderColor: COLOR.whiteColor
					}}
				>
					<Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>3</Text>
				</View>
			</TouchableOpacity>
		);
	}
}
