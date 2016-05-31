/**
 * Tag 标签
 * Created by aidenZou on 16/6/1.
 */
import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
} from 'react-native'

export default class Tag extends Component {
    // const { prefixCls, closable, color, className, children, ...restProps } = this.props;

    render() {
        const {color, children, ...restProps} = this.props

        return (
            <Text style={[styles.tag, styles[color]]}>{children}</Text>
        )
    }
}

const styles = StyleSheet.create({
    // Tag组件
    tag: {
        padding: 2,
        paddingLeft: 4,
        paddingRight: 4,
        marginRight: 3,
        borderRadius: 3,
        fontSize: 12,
        // color: '#666',
        // backgroundColor: '#f3f3f3',
        color: '#999',
        backgroundColor: '#e5e5e5',
    },
    green: {
        color: '#fff',
        backgroundColor: '#87d068',
    },
});
