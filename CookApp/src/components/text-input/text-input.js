import React, { Component } from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import { IMG, CSS } from '../../utils/variables';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './tex-input-style';

export class TextInputRender extends Component {

	render() {
		const { title, placeholder, value, onChangeText, error, inputErrorStyle, secureTextEntry, styleConfig, icon } = this.props;
		return <View style={styles.inputSection}>
			{title && <Text style={[CSS.fontSize14, { fontFamily: CSS.fontTitle, color: '#444444', marginBottom: 6 }]}>{title}</Text>}
			<View style={styles.SectionStyle}>
				{icon && <View style={styles.ImageStyle}>
					<Image
						source={icon}
						style={styles.image}
						resizeMode="contain"
					/>
				</View>}
				
				<TextInput
					style={[styles.Input, icon ? { paddingLeft: 20 } : '']}
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
