import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './tex-input-style';

export class TextInputRender extends Component {

	render() {
		const { title, placeholder, value, onChangeText, error, inputErrorStyle, secureTextEntry, styleConfig } = this.props;
		return <View style={styles.searchSection}>
			{/* <Text style={styles.inputLabel}>{title}</Text> */}
			<Icon style={styles.searchIcon} name="ios-search" size={20} color="#000" />
			<TextInput
				secureTextEntry={secureTextEntry}
				onChangeText={onChangeText}
				placeholder={placeholder}
				style={[styleConfig, styles.input, [error ? { borderColor: '#ff2e2e' } : '']]}
			/>
		</View>;
	}
}

export default TextInputRender;
