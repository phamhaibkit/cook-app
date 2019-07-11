import React, { Component } from 'react';
import { Text, View, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import styles from './combo-item-style';
import { COMBO_DATA } from '../../models/data';
import { COLOR, CSS } from '../../utils/variables';

export default class ComboItem extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.data = COMBO_DATA;
	}

	renderFrame = (item, index) => {
		const endStyle = this.data.length - 1 === index ? [styles.frame, styles.endFrame] : styles.frame;
		let combo;
		switch (item.combo.length) {
			case 2:
				combo = this.render2or4Item(item, false);
				break;
			case 3:
				combo = this.render3or5Item(item, false);
				break;
			case 4:
				combo = this.render2or4Item(item, true);
				break;
			case 5:
				combo = this.render3or5Item(item, true);
				break;
			default:
				break;
		}
		return <TouchableOpacity style={[endStyle, CSS.lightBoxShadow, CSS.borderRadius5]}>{combo}</TouchableOpacity>;
	};

	render2or4Item = (item, is4) => {
		return (
			<View style={styles.container2Item}>
				<View style={styles.container2Img}>
					<ImageBackground style={styles.left2} source={{ uri: item.combo[0].link }} />
					<ImageBackground style={styles.right2} source={{ uri: item.combo[1].link }} />
				</View>
				{is4 && (
					<View style={styles.container2Img}>
						<ImageBackground style={styles.left4} source={{ uri: item.combo[2].link }} />
						<ImageBackground style={styles.right4} source={{ uri: item.combo[3].link }} />
					</View>
				)}
				<Text style={styles.textTitle}>
					{item.combo[0].name} + {item.combo[1].name} + {is4 && item.combo[2].name} +{' '}
					{is4 && item.combo[3].name}
				</Text>
				<Text>
					{item.orders} - {item.views}
				</Text>
			</View>
		);
	};

	render3or5Item = (item, is5) => {
		return (
			<View style={[styles.container2Item, { backgroundColor: 'white', padding: 10}]}>
				<View style={styles.container2Img}>
					<ImageBackground style={styles.left3} source={{ uri: item.combo[0].link }} />
					<View style={styles.right3}>
						<View style={styles.container2Img}>
							<ImageBackground style={styles.up3} source={{ uri: item.combo[1].link }} />
							{is5 && <ImageBackground style={styles.up5} source={{ uri: item.combo[3].link }} />}
						</View>
						<View style={styles.container2Img}>
							<ImageBackground style={styles.down3} source={{ uri: item.combo[2].link }} />
							{is5 && <ImageBackground style={styles.down5} source={{ uri: item.combo[4].link }} />}
						</View>
					</View>
				</View>
				<Text style={styles.textTitle}>
					{item.combo[0].name} + {item.combo[1].name}+ {is5 && item.combo[3].name} + {item.combo[2].name} +{' '}
					{is5 && item.combo[4].name}
				</Text>
				<Text>
					{item.orders} - {item.views}
				</Text>
			</View>
		);
	};

	render() {
		return (
			<View style={styles.container}>
				<FlatList
					data={this.data}
					renderItem={({ item, index }) => this.renderFrame(item, index)}
					horizontal
					showsHorizontalScrollIndicator={false}
					keyExtractor={(item, index) => index.toString()}
				/>
			</View>
		);
	}
}
