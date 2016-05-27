// import React, {
//   Component,
//   StyleSheet,
//   ScrollView,
//   Text
// } from 'react-native'

import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    Text,
    View
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator'
import Icon from 'react-native-vector-icons/Ionicons'

import IView from '../../views/Index'
import HomeView from '../../views/Home'
import ListView from '../../views/List'

let tabs = [
    {
        text: '首页',
        icon: 'ios-home-outline',
        view: <ListView/>
    }, {
        text: '购物车',
        icon: 'ios-cart-outline',
        view: <HomeView/>
    }, {
        text: '我的',
        icon: 'ios-person-outline',
        view: <IView/>
    }
]

export default class TabBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: '首页'
        }
    }

    render() {
        return (
            <TabNavigator>
                {this._renderTab() }
            </TabNavigator >
        )
    }

    _renderTab() {
        return tabs.map((tab) => {
            return this._renderTabItem(tab)
        })
    }

    _renderTabItem(tab) {
        const TEXT = tab.text
        return (
            <TabNavigator.Item
                key={TEXT}
                title={TEXT}
                titleStyle={styles.titleStyle}
                selectedTitleStyle={styles.selectedTitleStyle}
                renderIcon={() => this._renderTabItemIcon(tab.icon) }
                renderSelectedIcon={() => this._renderTabItemIcon(tab.icon, true) }
                selected={this.state.selectedTab === TEXT}
                onPress={() => this.setState({ selectedTab: TEXT }) }>
                {tab.view}
            </TabNavigator.Item>
        )
    }

    _renderTabItemIcon(icon, selected = false) {
        let color = selected ? "#09bb07" : "#787878"
        return (
            <Icon name={icon} size={26} color={color}/>
        )
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        color: '#787878',
        fontSize: 10,
        marginTop: -2,
        marginBottom: 6,
    },
    selectedTitleStyle: {
        color: '#09bb07'
    },
    tabIcon: {
        marginRight: 10,
        fontSize: 28,
        color: '#787878',
        fontFamily: 'iconfont'
    },
    // selectedTabIcon: {
    //     color: '#ff9630'
    // }
})