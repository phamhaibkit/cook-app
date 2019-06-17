import React, { Component } from 'react';
import { Text, View} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import styles from './recipe-item-style';
export default class RecipeItem extends Component {
	//Detail Screen to show from any Open detail button

	renderFrame = data => {
		return (
			<View >
				<Text>{data.key}</Text>
			</View>
		);
	};

	render() {
		return (
			<View style={styles.container}>
				<FlatList
					data={[
						{ key: 'Ahihih' },
						{ key: 'Dokngoc' },
						{ key: 'James' },
						{ key: 'Joel' },
						{ key: 'John' },
						{ key: 'Jillian' },
						{ key: 'Jimmy' },
						{ key: 'Julie' },
						{ key: 'Devin1' },
						{ key: 'Jackson1' },
						{ key: 'James1' },
						{ key: 'Joel1' },
						{ key: 'John1' },
						{ key: 'Jillian1' },
						{ key: 'Jimmy1' },
						{ key: 'Julie1' },
					]}
					renderItem={({ item }) => this.renderFrame(item)}
          horizontal
				/>
			</View>
		);
	}
}
