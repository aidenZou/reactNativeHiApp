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
                <View style={[styles.box]}>
                    <Text style={[styles.title]}>{item.title}</Text>
                    <Text style={[{color: '#C4C4C4', fontSize: 12, marginTop: 10}]}>{quantity}</Text>
                    <Text style={{fontSize: 14, color: '#09bb07', marginTop: 10}}>￥{item.price / 100}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 170,
        // height: 226,
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
    },
    box: {
        padding: 10,
    },
    title: {
        color: '#646464',
        fontSize: 14,
    }
    
});
