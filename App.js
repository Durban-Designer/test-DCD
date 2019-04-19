import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { Icon } from 'react-native-material-ui';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Offers from './pages/Offers';
import reducer from './reducers/rootReducer';

const client = axios.create({
  baseURL: 'https://api.test.com',
  responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

const getTabBarIcon = (navigation, focused, tintColor) => {


  // You can return any component that you like here!
  return (
    <Ionicons name={iconName} size={25} color={tintColor} />
  );
};

const Navigation = createAppContainer(
  createBottomTabNavigator(
    {
      Home: { screen: Home },
      Profile: { screen: Profile },
      Offers: { screen: Offers },
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let IconName;
          if (routeName === 'Home') {
            IconName = 'home'
          } else if (routeName === 'Profile') {
            IconName = 'person'
          } else {
            IconName = 'settings'
          }
          return (
            <Icon name={IconName} />
          );
        }
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    }
  )
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
