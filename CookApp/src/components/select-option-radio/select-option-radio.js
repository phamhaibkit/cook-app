import React, { Component } from 'react';

import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from './select-option-radio-style';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';

export default class SelectOptionRadio extends Component {
	onSelectItem(index, value, type) {
		this.props.onSelectItem && this.props.onSelectItem(value, index);
	}

	renderSelectOption = data => {
		return (
			data &&
			data.map((item, index) => {
				return (
					<RadioButton value={item} style={styles.radioButton} key={index}>
						<Text style={styles.radioText}>{item.name || item.label || item.value}</Text>
					</RadioButton>
				);
			})
		);
	};

	render() {
		const { data, labelLeft, onPressLabelRight, labelRight, type, selectedIndex } = this.props;
		const selectOption = this.renderSelectOption(data);
		return (
			<View style={styles.container}>
				<View style={styles.containerLabel}>
					<Text style={styles.labelText}>{labelLeft}</Text>
					<TouchableOpacity onPress={onPressLabelRight}>
						<Text style={styles.labelRightText}>{labelRight}</Text>
					</TouchableOpacity>
				</View>
				<ScrollView>
					<RadioGroup
						color="#111"
						thickness={1}
						onSelect={(index, value) => this.onSelectItem(index, value, type)}
						selectedIndex={selectedIndex}
						style={styles.radioGroup}
					>
						{selectOption}
					</RadioGroup>
				</ScrollView>
			</View>
		);
	}
}
