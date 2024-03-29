import { NavigationActions } from 'react-navigation';

let navigator;

function setTopLevelNavigator(navigatorRef) {
	navigator = navigatorRef;
}

function navigate(routeName, params, key) {
	navigator.dispatch(
		NavigationActions.navigate({
			routeName,
			params,
			key
		})
	);
}

function goBack() {
	navigator.dispatch(NavigationActions.back());
}

// add other navigation functions that you need and export them

export default {
	navigate,
	goBack,
	setTopLevelNavigator,
};
