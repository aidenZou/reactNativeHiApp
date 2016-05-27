// import React, {
//     Component,
//     StyleSheet,
//     Text,
//     View,
//     Switch,
// } from 'react-native'

import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Switch,
} from 'react-native'

export default class TextSwitch extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View
                style={{
                    padding: 10,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "rgba(255,255,255,0)",
                    borderBottomColor: '#D2D2D2',
                    borderBottomWidth: 0.5,
                }}>
                <Text
                    style={{
                        color: 'black',
                        fontSize: 16,
                        fontWeight: 'normal',
                        fontFamily: 'Helvetica Neue',
                    }}>
                    {this.props.text}
                </Text>
                <Switch
                    value={(this.state && this.state.switchValue) || false}
                    onValueChange={(value) => {
                        this.setState({ switchValue: value })
                    } }
                    // Color props are iOS-only
                    // thumbTintColor={'white'} // Removes shadow
                    tintColor={"rgba(230,230,230,1)"}
                    onTintColor={"rgba(68,219,94,1)"}
                    />
            </View>
        );
    }
}
