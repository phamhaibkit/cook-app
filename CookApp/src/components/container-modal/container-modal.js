import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './container-modal-style';

export default class ContainerModal extends Component {
	onPressOuter = () => {
		this.props.closeModal();
	};

	render() {
		return (
			<View style={styles.containerModal}>
				<TouchableWithoutFeedback onPress={this.onPressOuter}>
					<View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'flex-end' }}>
						{this.props.componentInner}
					</View>
				</TouchableWithoutFeedback>
				{this.props.children}
			</View>
		);
	}
}
