import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, createAppContainer, TextInput, TouchableOpacity, Touchable} from 'react-native';
import { Header } from 'react-native-elements';
import { createBottomTabNavigator } from 'react-native-tabs';

export default class WriteStoryScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            title: '',
            author: '',
            story: ''
        }
    }
    render(){
        return (
            <View style={styles.container}>
                <Header
                    backgroundColor={'#FFC0CB'}
                    centerComponent={{
                        text: 'Story Hub',
                        style: { color: '#000000', fontSize: 20 },
                }}/>
                <TextInput
                    style={styles.inputBox}
                    onChangeText={title => {
                        this.setState({ 
                            title: title 
                        });
                    }}
                    value={this.state.text}
                />
                <TextInput
                    style={styles.inputBox}
                    onChangeText={title => {
                        this.setState({ 
                            author: author 
                        });
                    }}
                    value={this.state.text}
                />
                <TextInput
                    style={styles.inputBox}
                    props multiline = {true}
                    onChangeText={title => {
                        this.setState({ 
                            story: story 
                        });
                    }}
                    value={this.state.text}
                />
                
                <TouchableOpacity 
                style={styles.goButton}
                onPress={() => {
                    this.setState({ 
                        title:title,
                        author: author,
                        story: story
                    });
                }}
                title="SUBMIT"/>
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
  inputBox: {
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  }
});
