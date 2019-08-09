import React, { Component } from 'react';

import { View, Text, TouchableOpacity, Image, Modal } from 'react-native';
import styles from './popup-select-option-radio-style';
import SelectOptionRadio from '../select-option-radio/select-option-radio';
import ContainerModal from '../container-modal/container-modal';

export default class PopupSelectOptionRadio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isShow: this.props.isShow,
		};
	}

	closeModal = () => {
		this.setState({
			isShow: false,
		});
		this.props.onCloseModal && this.props.onCloseModal();
	};

	componentWillReceiveProps(nextProps) {
		this.setState({
			isShow: nextProps.isShow,
		});
	}

	onSelectItem = (item, index) => {
		this.props.onSelectItem && this.props.onSelectItem(item, index);
		this.closeModal();
	};

	render() {
		const { data, labelLeft, labelRight, type, selectedIndex, onPressLabelRight } = this.props;
		return (
			<Modal
				animationType="slide"
				visible={this.state.isShow}
				transparent={true}
				onRequestClose={this.closeModal}
			>
				<ContainerModal closeModal={this.closeModal}>
					<View style={styles.modal}>
						<SelectOptionRadio
							data={data}
							labelLeft={labelLeft}
							labelRight={labelRight}
							type={type}
							onSelectItem={this.onSelectItem}
							selectedIndex={selectedIndex}
							onPressLabelRight={onPressLabelRight}
						/>
					</View>
				</ContainerModal>
			</Modal>
		);
	}
}
