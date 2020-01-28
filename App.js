import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import SplashScreen from './src/screens/SplashScreen';

// import MainScreen from './src/screens/MainScreen';
// import ContactLocation from './src/screens/ContactLocation';
// import Profile from './src/screens/Profile';

// const ChatStack = createStackNavigator({
//   MainScreen,
// });

// const LocationStack = createStackNavigator({
//   ContactLocation,
// });

// const ProfileStack = createStackNavigator({
//   Profile,
// });

// const BottomTab = createBottomTabNavigator({
//   ChatStack: {
//     screen: ChatStack,
//     navigationOptions: {
//       title: 'Chat',
//       tabBarIcon: ({focused, horizontal, tintColor}) => (
//         <Icon name="comments" color={tintColor} size={28} />
//       ),
//       tabBarOptions: {
//         activeTintColor: '#006b3a',
//         labelStyle: {
//           fontWeight: 'bold',
//         },
//       },
//     },
//   },
//   LocationStack: {
//     screen: LocationStack,
//     navigationOptions: {
//       title: 'Locations',
//       tabBarIcon: ({focused, horizontal, tintColor}) => (
//         <Icon name="map-marker" color={tintColor} size={28} />
//       ),
//       tabBarOptions: {
//         activeTintColor: '#006b3a',
//         labelStyle: {
//           fontWeight: 'bold',
//         },
//       },
//     },
//   },
//   ProfileStack: {
//     screen: ProfileStack,
//     navigationOptions: {
//       title: 'Profile',
//       tabBarIcon: ({focused, horizontal, tintColor}) => (
//         <Icon name="user" color={tintColor} size={28} />
//       ),
//       tabBarOptions: {
//         activeTintColor: '#006b3a',
//         labelStyle: {
//           fontWeight: 'bold',
//         },
//       },
//     },
//   },
// });

const SwitchContainer = createSwitchNavigator({
  SplashScreen,
  // BottomTab,
});

const AppContainer = createAppContainer(SwitchContainer);

const App = () => {
  return (
    <>
      <AppContainer />
    </>
  );
};

export default App;
