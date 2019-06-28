import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import RecipeItem from '../recipe-item/recipe-item';
import ComboItem from '../combo-item/combo-item';
import Trending from '../trending/trending';
import ContainerScroll from '../container-scroll/container-scroll';
import navigationService from '../../services/navigation.service';
import { LANG } from '../../lang/lang';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class PageHome extends Component {
	//Home Screen to show in Home Option
	render() {
		return (
			<ContainerScroll>
				<View style={{ flex: 1, flexDirection: 'column' }}>
					<Trending />
					<RecipeItem />
					<View style={{ height: 100 }}>
					</View>
					<Text style={{ marginLeft: 10, fontSize: 20, fontWeight: 'bold' }}>Combo Mon</Text>
					{/* <ComboItem></ComboItem> */}
					<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
						<Text style={{ marginTop: 50, fontSize: 25 }}>{LANG.HOME}</Text>
						<TouchableOpacity
							style={styles.button}
							onPress={() => navigationService.navigate('Settings')}
						>
							<Text>Go to settng Tab</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.button}
							onPress={() => navigationService.navigate('Details')}
						>
							<Text>Open Details Screen</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.button}
							onPress={() => this.props.navigation.navigate('SignIn')}>
							<Text>Đăng nhập</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View style={{ height: 1000 }}></View>
			</ContainerScroll>
		);
	}
}
const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		backgroundColor: '#DDDDDD',
		padding: 10,
		width: 300,
		marginTop: 16,
	},
});
