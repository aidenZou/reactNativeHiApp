/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// import Icon from 'react-native-vector-icons/Ionicons';
// <Icon name="ios-person" size={30} color="#4F8EF7" />

import Icon from 'react-native-vector-icons/FontAwesome';

class reactNativeHiApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.loginWithFacebook}>
          Login with Facebook
        </Icon.Button>
        <Text style={styles.welcome}>
          Welcome to React Native!子凡
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload, {'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('reactNativeHiApp', () => reactNativeHiApp);
