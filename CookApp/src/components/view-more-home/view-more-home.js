/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LANG } from '../../lang/lang';
import { IMG, CSS, COLOR } from '../../utils/variables';

export default class ViewMoreHome extends Component {
	render() {
		const { type, viewMore } = this.props;
		return (
			<View style={styles.containerlabel}>
				<Text style={styles.labelText}>{type && type.name}</Text>
				<TouchableOpacity
					style={styles.textButton}
					onPress={() => {
						viewMore(type);
					}}
				>
					<Text style={styles.moreText}>{LANG.VIEW_MORE}</Text>
					<Image style={styles.img} source={IMG.arrowRightGreen} />
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	containerlabel: {
		width: '100%',
		paddingHorizontal: CSS.padding15,
		marginTop: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	labelText: {
		fontSize: 15,
		color: '#444444',
		fontFamily: CSS.fontBold,
		lineHeight: 20,
	},
	moreText: {
		color: COLOR.greenColor,
		fontFamily: CSS.fontTitle,
		fontSize: 13,
		lineHeight: 18,
	},
	textButton: {
		justifyContent: 'center',
		flexDirection: 'row',
		alignItems: 'center',
	},
	img: {
		width: 12,
		height: 7,
		marginLeft: 3,
	},
});
