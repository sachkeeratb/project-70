import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, createAppContainer } from 'react-native';
import { createBottomTabNavigator } from 'react-native-tabs';

export default class ReadStoryScreen extends React.Component {
  render(){
    return (
        <View style={styles.container}>
            <Text> Read Story </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
