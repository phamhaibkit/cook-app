import React, { Component } from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import { IMG } from '../../utils/variables';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './tex-input-style';

export class TextInputRender extends Component {

	render() {
		const { title, placeholder, value, onChangeText, error, inputErrorStyle, secureTextEntry, styleConfig, icon } = this.props;
		return <View style={styles.inputSection}>
			<View style={styles.SectionStyle}>
				<View style={styles.ImageStyle}>
					<Image
						source={icon}
						style={styles.image}
					/>
				</View>

				<TextInput
					style={styles.Input}
					secureTextEntry={secureTextEntry}
					placeholder={placeholder}
					underlineColorAndroid="transparent"
					onChangeText={onChangeText}
					placeholderTextColor="#CECECE"
				/>
			</View>
		</View>;
	}
}

export default TextInputRender;
