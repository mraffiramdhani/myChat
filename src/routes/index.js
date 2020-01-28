import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SplashScreen from '../screens/SplashScreen';

const SplashStack = createStackNavigator(
	{
		SplashScreen: {
			screen: SplashScreen,
		},
	},
	{
		initialRouteName: 'SplashScreen'
	}
);

const SwitchNav = createSwitchNavigator(
	{
		SplashStack
	},
	{
		initialRouteName: 'SplashStack'
	}
);

const AppContainer = createAppContainer(SwitchNav);

class Router extends Component {
	render() {
		return (
			<>
				<AppContainer />
			</>
		)
	}
}

export default Router