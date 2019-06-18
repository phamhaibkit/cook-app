import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';

import styles from './trending-style';
export default class Trending extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.data = [
			{ key: 'Sản phẩm khuyến mãi '},
			{ key: 'Bán chạy'},
      { key: 'Mâm cơm việt'},
      { key: 'BST hot'},
      { key: 'Công thức'},
      { key: 'Tốp thành viên'},
      { key: 'Điểm hoạt động'},
      { key: 'CCC '},
			{ key: 'DDD '},
    ];
    this.label = "Bộ Sưu Tập";
  }
  
  onPress = () => {
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAA');
  }

	renderFrame = (item, index) => {
		const endStyle = this.data.length - 1 === index ? [styles.frame, styles.endFrame] : styles.frame;
		return (
			<TouchableOpacity style={endStyle}>
        <View style={styles.square}></View>
        <View style={styles.containerText}>
					<Text style={styles.text}>{item.key}</Text>
        </View>
				{/* <View style={styles.containerContent}>
					<View style={styles.tile}>
						<View style={styles.left}>
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
				</View> */}
			</TouchableOpacity>
		);
	};

	render() {
		return (
			<View style={styles.container}>
				<FlatList data={this.data} renderItem={({ item, index }) => this.renderFrame(item, index)} horizontal showsHorizontalScrollIndicator={false}/>
			</View>
		);
	}
}
