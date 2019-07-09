import React, { Component } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import navigationService from '../../services/navigation.service';
import { LANG } from '../../lang/lang';
import { IMG, COLOR, CSS } from '../../utils/variables';

export default class SearchBarHeader extends Component {
	render() {
		return (
			<TouchableOpacity
				style={{
					height: 40,
					flexDirection: 'row',
					paddingHorizontal: CSS.padding15,
					borderRadius: 4,
					alignItems: 'center',
					backgroundColor: COLOR.whiteColor,
					justifyContent: 'space-between',
				}}
				onPress={() => navigationService.navigate('Search', { name: 'HaiPham' })}
			>
				<Text style={{ color: COLOR.greyColor }}>{LANG.SEARCH}</Text>
				<Image source={IMG.searchGreen} />
			</TouchableOpacity>
		);
	}
}
