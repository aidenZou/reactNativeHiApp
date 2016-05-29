import React, { Component } from 'react'
import {
    Navigator,
    StyleSheet,
    ScrollView,
    Text,
    View
} from 'react-native'

import NavigationBar from 'react-native-navbar'
import Icon from 'react-native-vector-icons/FontAwesome'

// 菜品
import Item from '../components/Item'

function renderScene(route, navigator) {
    return <route.component route={route} navigator={navigator} />;
}

const REQUEST_URL = 'https://api.youcai.xin/cai/item?cate=1'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: null,
        }
        // this.fetchData()
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL)
            // .then((response) => response.text())
            .then((response) => response.json())
            .then((responseData) => {
                // console.log(JSON.parse(responseText));
                // let data = JSON.parse(responseText)
                this.setState({
                    items: responseData.items
                })
            })
            .catch((error) => {
                console.warn(error);
            });
    }

    render() {
        const titleConfig = {
            title: 'HiApp', tintColor: 'black',
        };
        // const leftButtonConfig = {
        //     title: 'Back',
        //     handler: () => {
        //         alert('hello');
        //     }
        // }
        let rightButtonConfig = {
            title: 'Forward',
            handler: () => this.props.navigator.push({
                component: NextView,
            }),
        }

        if (!this.state.items) {
            return this.renderLoadingView();
        }

        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: "rgba(240,239,245,1)",
                }}>
                <NavigationBar
                    title={titleConfig}
                    // leftButton={leftButtonConfig}
                    rightButton={rightButtonConfig}
                    style={{ backgroundColor: "white", }}
                    statusBar={{ tintColor: "white", showAnimation: 'slide', hideAnimation: 'slide' }}
                    />
                <ScrollView
                    horizontal={false}
                    style={{
                        flex: 1,
                    }}>
                    <Text>{this.state.items.length}</Text>
                    <View
                        style={{
                            flex: 1,
                            // justifyContent: "flex-start",
                            // alignItems: 'stretch',

                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                            backgroundColor: "rgba(155,155,155,0)",
                            paddingLeft: 12,
                            paddingRight: 12,
                        }}>
                        {this.renderItemBox() }
                    </View>
                </ScrollView>
            </View>
        );
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    Loading...
                </Text>
            </View>
        );
    }

    renderItemBox() {
        return (
            this.state.items.map((item) => {
                return <View key={item.id} style={[{ alignSelf: 'center', paddingLeft: 0, }]}><Item key={item.id} item={item}/></View>
                // return <View key={item.id} style={[{padding: 5}]}><Item key={item.id} item={item}/></View>
            })
        )
    }
}

export default class Home extends Component {
    render() {
        const initialRoute = {
            component: Index
        };

        return (
            <View style={{ flex: 1, }}>
                <Navigator
                    initialRoute={initialRoute}
                    renderScene={renderScene}/>
            </View>
        )
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
