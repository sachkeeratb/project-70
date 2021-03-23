import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, createAppContainer, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-native-tabs';

import ReadStoryScreen from './screens/ReadStoryScreen.js';
import WriteStoryScreen from './screens/WriteStoryScreen.js';

export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  ReadStory: {screen: ReadStoryScreen},
  WriteStory: {screen: WriteStoryScreen},
});

const SwitchNavigator = createSwitchNavigator({
  ReadStory: {screen: ReadStoryScreen},
  WriteStory: {screen: WriteStoryScreen},
})

const AppContainer =  createAppContainer(SwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
