import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from './tex-input-style';

export class TextInputRender extends Component {

	render() {
		const { title, placeholder, value, onChangeText, error, inputErrorStyle, secureTextEntry } = this.props;
		return <View style={{ flex: 1, marginBottom: 20 }}>
			<Text style={styles.inputLabel}>{title}</Text>
			<TextInput
				secureTextEntry={secureTextEntry}
				onChangeText={onChangeText}
				placeholder={placeholder}
				style={[[styles.input, inputErrorStyle, { marginBottom: 0 }, error ? { borderColor: '#ff2e2e' } : '']]}
			/>
		</View>;
	}
}

export default TextInputRender;
