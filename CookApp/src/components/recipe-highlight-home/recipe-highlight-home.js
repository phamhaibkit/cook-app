import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { IMG } from '../../utils/variables';
import styles from './recipe-highlight-home-style';

export default class RecipeHighlightHome extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.data = [
			{
				key: 'Mỳ Udon Súp Miso và Thịt Heo Cay',
				recipes: '20 công thức',
				saves: '200 lưu lại',
				link:
					'https://www.bbcgoodfood.com/sites/default/files/editor_files/2018/12/lahpet_stuffed-aubergine.jpg',
			},
			{
				key: 'Những món ăn giành cho những người thất tình',
				recipes: '20 công thức',
				saves: '200 lưu lại',
				link: 'https://www.bbcgoodfood.com/sites/default/files/editor_files/2018/12/coffee-komboucha.jpg',
			},
			{
				key: 'Cay và nóng là 2 món được ưa thích',
				recipes: '20 công thức',
				saves: '200 lưu lại',
				link:
					'https://www.bbcgoodfood.com/sites/default/files/editor_files/2018/12/hidden-vegetable-beef-burgers.jpg',
			},
			{
				key: 'Neu nhu mot ngay em khong giong',
				recipes: '20 công thức',
				saves: '200 lưu lại',
				link: 'https://www.bbcgoodfood.com/sites/default/files/editor_files/2018/12/goat-curry.jpg',
			},
			{
				key: 'Tai sao ma do ta khong do nang vay',
				recipes: '20 công thức',
				saves: '200 lưu lại',
				link: 'https://www.bbcgoodfood.com/sites/default/files/editor_files/2017/11/pickles.jpg',
			},
		];
	}

	onPress = () => {
		// console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAA', 'aa');
	};

	renderFrame = (item, index) => {
		const endStyle = this.data.length - 1 === index ? [styles.frame, styles.endFrame] : styles.frame;
		return (
			<View style={endStyle}>
				<View style={styles.containerTitle}>
					<TouchableOpacity style={styles.titleView}>
						<Text numberOfLines={1} style={styles.titleText}>
							{item.key}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.reportView}>
						<Image style={styles.dotImg} source={IMG.reportHome} />
					</TouchableOpacity>
				</View>

				<View style={styles.containerTimePrice}>
					<View style={styles.priceView}>
						<Image style={styles.sandImg} source={IMG.sandClokHome} />
						<Text style={styles.textTime}>60 Phut</Text>
					</View>
					<View style={styles.lineView}>
						<View style={styles.line} />
					</View>
					<View style={styles.dollaView}>
						<Image style={styles.dollaImg} source={IMG.dollaHome} />
						<Text style={styles.textTime}>150.000</Text>
					</View>
					<View style={styles.lineView}>
						<View style={styles.line} />
					</View>
					<View style={styles.dollaView}>
						<Image style={styles.personImg} source={IMG.personHome} />
						<Text style={styles.textTime}>01 Nguoi</Text>
					</View>
				</View>

				<View>
					<TouchableOpacity style={styles.recipeView}>
						<Image style={styles.recipeIMG} source={{ uri: item.link }} />
					</TouchableOpacity>
					<TouchableOpacity style={styles.containerChef}>
						<Image style={styles.avataImg} source={IMG.avatarHome} />
						<Text style={styles.nameChef}> Hoang Thi Kieu Nga </Text>
						<Image style={styles.rankImg} source={IMG.rankHome} />
					</TouchableOpacity>
				</View>

				<View style={[styles.containerTimePrice, { marginTop: 18 }]}>
					<View style={styles.priceView}>
						<Text style={styles.textTime}>498 thich</Text>
					</View>
					<View style={styles.lineLikeView}>
						<View style={styles.line} />
					</View>
					<View style={styles.likeView}>
						<Text style={styles.textTime}>200 binh luan</Text>
					</View>
					<View style={styles.lineLikeView}>
						<View style={styles.line} />
					</View>
					<View style={styles.likeView}>
						<Text style={styles.textTime}>200 chia se</Text>
					</View>
					<View style={styles.lineLikeView}>
						<View style={styles.line} />
					</View>
					<View style={styles.likeView}>
						<Text style={styles.textTime}>1k5 xem</Text>
					</View>
				</View>

				<View style={styles.lineHori} />

				<View style={styles.containerLoveCmt}>
					<TouchableOpacity>
						<Image style={styles.loveImg} source={IMG.loveHome} />
					</TouchableOpacity>
					<TouchableOpacity>
						<Image style={styles.cmtImg} source={IMG.commentHome} />
					</TouchableOpacity>
					<TouchableOpacity>
						<Image style={styles.shareImg} source={IMG.shareHome} />
					</TouchableOpacity>
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
					horizontal
					showsHorizontalScrollIndicator={false}
				/>
			</View>
		);
	}
}
