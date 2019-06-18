import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import IMG from '../../utils/variables';

import styles from './recipe-item-style';
export default class RecipeItem extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.data = [
			{ key: 'Những món ăn giành cho những ngày đầu mùa mưa', recipes: '20 công thức', saves: '200 lưu lại' },
			{ key: 'Những món ăn giành cho những người thất tình', recipes: '20 công thức', saves: '200 lưu lại' },
      { key: 'Cay và nóng là 2 món được ưa thích', recipes: '20 công thức', saves: '200 lưu lại' },
      { key: 'Neu nhu mot ngay em khong giong', recipes: '20 công thức', saves: '200 lưu lại' },
			{ key: 'Tai sao ma do ta khong do nang vay', recipes: '20 công thức', saves: '200 lưu lại' },
		];
	}

	renderFrame = (item, index) => {
		const endStyle = this.data.length - 1 === index ? [styles.frame, styles.endFrame] : styles.frame;
		return (
			<View style={endStyle}>
        <View style={styles.emptyContent}></View>
				<View style={styles.containerContent}>
					<View style={styles.tile}>
						<View style={styles.left}>
							<Text style={styles.titleText}>{item.key}</Text>
						</View>
						<View style={styles.right}>
							<Image source= {IMG.bookmark} style={styles.image}></Image>
						</View>
					</View>
					<View style={styles.bottom}>
						<Text style={styles.normalText}>
							{item.recipes} - {item.saves}
						</Text>
					</View>
				</View>
			</View>
		);
	};

	render() {
		return (
			<View style={styles.container}>
				<FlatList data={this.data} renderItem={({ item, index }) => this.renderFrame(item, index)} horizontal />
			</View>
		);
	}
}
