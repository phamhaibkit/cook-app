import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import navigationService from '../../services/navigation.service';
import { LANG } from '../../lang/lang';
import { COLOR } from '../../utils/variables';

export default class SearchBarHeader extends Component {
	render() {
		return (
			<View style={{ flex: 1, padding: 2 }}>
				<TouchableOpacity
					style={{
						flexDirection: 'row',
						paddingHorizontal: 10,
						borderRadius: 4,
						alignItems: 'center',
						backgroundColor: 'white',
            flex: 1,
            justifyContent: 'space-between'
					}}
					onPress={() => navigationService.navigate('Search', { name: 'HaiPham' })}
				>
					<Text>{LANG.SEARCH}</Text>
					<Icon name="search" size={18} color={COLOR.headerColor} />
				</TouchableOpacity>
			</View>
		);
	}
}
