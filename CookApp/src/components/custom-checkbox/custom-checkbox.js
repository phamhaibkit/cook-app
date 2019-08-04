import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';

import styles from './custom-checkbox-style';
import { IMG } from '../../utils/variables';

export default class CustomCheckbox extends Component {
    constructor(props) {
		super(props);
    }
    
    shouldComponentUpdate(nextProps) {
		if (this.props.isChecked !== nextProps.isChecked) return true;
		return false;
    }
    
    render() {
        const {
			isChecked,
			onClick,
			style,
			leftText,
			rightText,
			leftTextStyle,
			rightTextStyle,
			checkboxStyle,
		} = this.props;

		const checkedSrc = IMG.checkedIcon;

		return (
			<TouchableWithoutFeedback onPress={onClick}>
				<View style={styles.container}>
					{typeof leftText === 'string' && <Text style={[leftTextStyle, styles.leftTxt]}>{leftText}</Text>}

					<View style={[styles.customCheckBox, style]}>
						{
							isChecked && <Image
									source={checkedSrc}
									style={[styles.checkBox, checkboxStyle]}
							/>
						}
					</View>

					{typeof rightText === 'string' && (
						<Text style={[rightTextStyle, styles.rightTxt]}>{rightText}</Text>
					)}
				</View>
			</TouchableWithoutFeedback>
		);
    }
}
