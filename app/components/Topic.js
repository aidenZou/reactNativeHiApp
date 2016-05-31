/**
 * 列表主题
 */
import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Image,
    Text,
} from 'react-native'

// import Icon from 'react-native-vector-icons/FontAwesome'
import Tag from './Tag'

const tabText = {
    'ask': '问答',
    'share': '分享',
    'job': '招聘',
    'good': '精华',
}

let formatDate = (date) => {
    let d = new Date(date)
    return '' + d.getFullYear() + '年' + d.getMonth() + '月' + d.getDate() + '日 ' + d.getHours() + ':' + d.getMinutes()
}

export default class Topic extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let item = this.props.item
        return (
            <View style={styles.container}>
                <View style={[styles.row]}>
                    <View style={[styles.row, {flex:1}]}>
                        <Image style={[styles.img]} source={{ uri: item.author.avatar_url }}/>
                        <Text style={[styles.text]}>来自 </Text>
                        <Text style={[{fontSize: 15}]}>{item.author.loginname}</Text>
                    </View>
                    <Text style={[styles.text]}>{formatDate(item.last_reply_at)}</Text>
                </View>
                <Text style={[styles.title]}>{item.title}</Text>
                <View style={[styles.row]}>
                    {this.renderTop(item.top)}
                    {this.renderTab(item.tab)}
                    <Text style={[styles.text]}>{item.visit_count + ' 浏览 . ' + item.reply_count + ' 回复'}</Text>
                </View>
            </View>
        )
    }

    // 渲染置顶
    renderTop(top) {
        if (top) {
            return <Tag color='green'>置顶</Tag>
        }
        return null
    }

    renderTab(tab) {
        if (tab) {
            return <Tag>{tabText[tab]}</Tag>
        }
        return null
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginBottom: 12,
        padding: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    img: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 10,
        backgroundColor: 'transparent',
    },
    box: {
        padding: 10,
    },
    title: {
        // fontSize: 14,
        margin: 10,
        fontSize: 16,
        color: '#259',
    },
    text: {
        fontSize: 15,
        color: '#999'
    }
});
