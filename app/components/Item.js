/**
 * 菜品
 */
import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Image,
    Text,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        let item = this.props.item

        let quantity = parseFloat(item.quantity)
        if (item.unit === 'g') {
            quantity /= 1000

        }
        quantity = quantity * 2 + '斤/份'
        
        return (
            <View style={[styles.container]}>
                <Image
                    style={[styles.img,]}
                    source={{ uri: item.imgs[0] }}
                    />
                <Text>{item.title}</Text>
                <Text>{quantity}</Text>
                <Text>￥{item.price / 100}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 170,
        height: 226,
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#fff',
        marginBottom: 12,
    },
    img: {
        width: 170,
        height: 135,
        backgroundColor: 'transparent',
        // marginRight: 10,
    }
});
