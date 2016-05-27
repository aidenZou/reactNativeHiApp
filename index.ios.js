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

import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

import IndexView from './app/views/Index';
import FacebookTabsExample from './app/views/FacebookTabsExample';
import FacebookExample from './app/views/FacebookExample';
import TabBar from './app/components/TabBar';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollableTabView initialPage={0} renderTabBar={() => <ScrollableTabBar />}>
          <Text tabLabel='Tab #1'>My</Text>
          <Text tabLabel='Tab #2'>favorite</Text>
          <Text tabLabel='Tab #5'>project</Text>
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
});

// AppRegistry.registerComponent('reactNativeHiApp', () => App);
AppRegistry.registerComponent('reactNativeHiApp', () => TabBar);
