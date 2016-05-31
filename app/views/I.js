/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

// import Icon from 'react-native-vector-icons/Ionicons';
// <Icon name="ios-person" size={30} color="#4F8EF7" />

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Index extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.loginWithFacebook}>
                    Login with Facebook
                </Icon.Button>
                <Text style={styles.welcome}>
                    Welcome to CNode!
                </Text>
                <Text style={styles.instructions}>
                    Node.js专业中文社区
                </Text>
                <Text>子凡</Text>
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
