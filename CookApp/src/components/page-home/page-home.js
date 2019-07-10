import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import RecipeItem from '../recipe-item/recipe-item';
import ComboItem from '../combo-item/combo-item';
import Trending from '../trending/trending';
import ContainerScroll from '../container-scroll/container-scroll';
import navigationService from '../../services/navigation.service';
import ProductList from '../product-list/product-list';
import ViewMoreHome from '../view-more-home/view-more-home';
import { LANG } from '../../lang/lang';
import styles from './page-home-style';

export default class PageHome extends Component {
	viewMore = (type) => {
	}

	render() {
		return (
			<ContainerScroll>
				<View style={styles.container}>
					<Trending />
					<View style={styles.wrapContent}>
						<ViewMoreHome type={LANG.COLLECTION} viewMore={this.viewMore}/>
						<RecipeItem />
						<View style={{ height: 100 }} />
						<Text style={{ marginLeft: 10, fontSize: 20, fontWeight: 'bold' }}>Combo Mon</Text>
						<ComboItem />
						<ProductList />
					</View>
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

