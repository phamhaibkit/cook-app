import React, { Component } from 'react';
import { View, Text, FlatList, ImageBackground, TouchableOpacity } from 'react-native';

import styles from './combo-list-style';
import { COMBO_DATA } from '../../models/data';

export default class ComboList extends Component {
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
		return <View style={endStyle}>{combo}</View>;
	};

	render2or4Item = (item, is4) => {
		let titleText = item.combo[0].name + ' + ' + item.combo[1].name;
		const addTitle = is4 ? ' + ' + item.combo[2].name + ' + ' + item.combo[3].name : '';
		titleText = titleText + addTitle;
		const imgLeftStyle = is4 ? styles.img4LeftUp : styles.img2LeftView;
		const imgRightStyle = is4 ? styles.img4RighttUp : styles.img2RightView;
		return (
			<View style={{ height: '100%', width: '100%' }}>
				<View style={styles.container2Item}>
					<View style={styles.containerWhite}>
						<TouchableOpacity>
							<Text style={styles.textTitle} numberOfLines={2}>
								{titleText}
							</Text>
						</TouchableOpacity>
						<View style={styles.lineHori} />
						<Text style={styles.ordersText}>
							{item.orders} - {item.views}
						</Text>
					</View>
				</View>
				<View style={styles.container2Img}>
					<View style={[styles.containerImg, { flexDirection: 'row' }]}>
						<View >
							<ImageBackground style={imgLeftStyle} source={{ uri: item.combo[0].link }} />
							{is4 && (
								<ImageBackground style={styles.img4LeftDown} source={{ uri: item.combo[2].link }} />
							)}
						</View>
						<View >
							<ImageBackground style={imgRightStyle} source={{ uri: item.combo[1].link }} />
							{is4 && (
								<ImageBackground style={[styles.img4LeftDown, { marginLeft: 4 }]} source={{ uri: item.combo[3].link }} />
							)}
						</View>
					</View>
				</View>
			</View>
		);
	};

	render3or5Item = (item, is5) => {
		let titleText = item.combo[0].name + ' + ' + item.combo[1].name + ' + ' + item.combo[2].name;
		const addTitle = is5 ? ' + ' + item.combo[3].name + ' + ' + item.combo[4].name : '';
		titleText = titleText + addTitle;
		const imgUpStyle = is5 ? styles.imgUp5 : styles.imgUp3;
		const imgDownStyle = is5 ? styles.imgDown5 : styles.imgDown3;
		return (
			<View style={{ height: '100%', width: '100%' }}>
				<View style={styles.container2Item}>
					<View style={styles.containerWhite}>
						<TouchableOpacity>
							<Text style={styles.textTitle} numberOfLines={2}>
								{titleText}
							</Text>
						</TouchableOpacity>
						<View style={styles.lineHori} />
						<Text style={styles.ordersText}>
							{item.orders} - {item.views}
						</Text>
					</View>
				</View>
				<View style={styles.container2Img}>
					<View style={styles.containerImg}>
						<ImageBackground style={styles.imgLeftView} source={{ uri: item.combo[0].link }} />
						<View style={styles.imgRightView}>
							<View style={{ flexDirection: 'row', width: 163, height: 70 }}>
								<ImageBackground style={imgUpStyle} source={{ uri: item.combo[1].link }} />
								{is5 && (
									<ImageBackground style={styles.imgRightUp5} source={{ uri: item.combo[3].link }} />
								)}
							</View>
							<View style={{ flexDirection: 'row', width: 163, height: 70 }}>
								<ImageBackground style={imgDownStyle} source={{ uri: item.combo[2].link }} />
								{is5 && (
									<ImageBackground
										style={styles.imgRightDown5}
										source={{ uri: item.combo[4].link }}
									/>
								)}
							</View>
						</View>
					</View>
				</View>
			</View>
		);
	};

	render() {
		return (
			<View style={styles.container}>
				<FlatList
					data={this.data}
					renderItem={({ item, index }) => this.renderFrame(item, index)}
					showsVerticalScrollIndicator={false}
					keyExtractor={(item, index) => index.toString()}
				/>
			</View>
		);
	}
}
