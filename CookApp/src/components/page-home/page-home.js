import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import RecipeItem from '../recipe-item/recipe-item';
import ComboItem from '../combo-item/combo-item';
import Trending from '../trending/trending';
import ContainerScroll from '../container-scroll/container-scroll';
import navigationService from '../../services/navigation.service';
import ProductList from '../product-list/product-list';
import ViewMoreHome from '../view-more-home/view-more-home';
import { LANG } from '../../lang/lang';

export default class PageHome extends Component {
	viewMore = (type) => {
	}

	render() {
		return (
			<ContainerScroll>
				<View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#eae8e8' }}>
					<Trending />
					<ViewMoreHome type={LANG.COLLECTION} viewMore={this.viewMore}/>
					<RecipeItem />
					<View style={{ height: 100 }} />
					<Text style={{ marginLeft: 10, fontSize: 20, fontWeight: 'bold' }}>Combo Mon</Text>
					<ComboItem />
					<ProductList />
					<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
						<TouchableOpacity style={styles.button} onPress={() => navigationService.navigate('SignIn')}>
							<Text>Đăng nhập</Text>
						</TouchableOpacity>
					</View>
				</View>
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
