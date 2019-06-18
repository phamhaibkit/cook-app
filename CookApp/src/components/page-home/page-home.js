import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import RecipeItem from '../recipe-item/recipe-item';
import Trending from '../trending/trending';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class PageHome extends Component {
	//Home Screen to show in Home Option
	render() {
		return (
			<ScrollView>
				<View style={{flex: 1, flexDirection: 'column'}}>
          <Trending></Trending>
					<RecipeItem />
					{/* <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
					  <Text style={{ marginTop: 50, fontSize: 25 }}>Home!</Text>
						<TouchableOpacity
							style={styles.button}
							onPress={() => this.props.navigation.navigate('Settings')}
						>
							<Text>Go to settng Tab</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.button}
							onPress={() => this.props.navigation.navigate('Details')}
						>
							<Text>Open Details Screen</Text>
						</TouchableOpacity>
					</View> */}
				</View>
			</ScrollView>
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
