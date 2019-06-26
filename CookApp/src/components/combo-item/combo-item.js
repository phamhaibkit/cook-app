import React, { Component } from 'react';
//import react in our code.
import { Text, View, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
//import all the basic component we have used
import styles from './combo-item-style';
import { COMBO_DATA } from '../../models/data';

export default class ComboItem extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.data = COMBO_DATA;
		// this.label = LANG.COLLECTION;
	}

	renderFrame = (item, index) => {
		const endStyle = this.data.length - 1 === index ? [styles.frame, styles.endFrame] : styles.frame;
		let combo;
		switch (item.combo.length) {
			case 2:
				combo = this.render2Item(item);
				break;
			case 3:
				combo = this.render3Item(item);
				break;
			case 4:
				combo = this.render4Item(item);
				break;
			case 5:
				combo = this.render5Item();
				break;
			default:
				break;
		}
		return <TouchableOpacity style={endStyle}>{combo}</TouchableOpacity>;
	};

	render2Item = item => {
		return (
			<View style={styles.container2Item}>
				<View style={styles.container2Img}>
					<ImageBackground style={styles.left2} source={{ uri: item.combo[0].link }} />
					<ImageBackground style={styles.right2} source={{ uri: item.combo[1].link }} />
				</View>
				<Text style={styles.textTitle}>
					{item.combo[0].name} + {item.combo[1].name}
				</Text>
				<Text>
					{item.orders} - {item.views}
				</Text>
			</View>
		);
	};

	render3Item = item => {
		return (
			<View style={styles.container2Item}>
				<View style={styles.container2Img}>
					<ImageBackground style={styles.left3} source={{ uri: item.combo[0].link }} />
					<View style={styles.right3}>
						<ImageBackground style={styles.up3} source={{ uri: item.combo[1].link }} />
						<ImageBackground style={styles.down3} source={{ uri: item.combo[2].link }} />
					</View>
				</View>
				<Text style={styles.textTitle}>
					{item.combo[0].name} + {item.combo[1].name} + {item.combo[2].name}
				</Text>
				<Text>
					{item.orders} - {item.views}
				</Text>
			</View>
		);
	};
	render4Item = item => {
		return (
			<View style={styles.container2Item}>
				<View style={styles.container2Img}>
					<View style={styles.left4}>
						<ImageBackground style={styles.up4} source={{ uri: item.combo[0].link }} />
						<ImageBackground style={styles.down4} source={{ uri: item.combo[1].link }} />
					</View>
					<View style={styles.right4}>
						<ImageBackground style={styles.up4} source={{ uri: item.combo[2].link }} />
						<ImageBackground style={styles.down4} source={{ uri: item.combo[3].link }} />
					</View>
				</View>
				<Text style={styles.textTitle}>
					{item.combo[0].name} + {item.combo[1].name} + {item.combo[2].name} + {item.combo[3].name}
				</Text>
				<Text>
					{item.orders} - {item.views}
				</Text>
			</View>
		);
	};
	render5Item = () => {
		return (
			<View>
				<View>
					<View>
						<Text>AAAAAAAAAAAAAA</Text>
					</View>
					<View>
						<Text>4444444444444444</Text>
					</View>
				</View>
				<View>
					<View>
						<Text>AAAAAAAAAAAAAA</Text>
					</View>
					<View>
						<Text>4444444444444444</Text>
					</View>
					<View>
						<Text>4444444444444444</Text>
					</View>
				</View>
			</View>
		);
	};

	//Detail Screen to show from any Open detail button
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
