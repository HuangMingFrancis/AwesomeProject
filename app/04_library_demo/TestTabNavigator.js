/**
 * Created by Francis on 2018/3/1.
 */
/**
 * Created by francis on
 * Function:
 * Desc:
 */
import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

class Home extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>HomeView</Text>
            </View>
        )
    }
}

class ProfileView extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>ProfileView</Text>
            </View>
        )
    }
}


export default class TestTabNavigator extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'home'
        }
    }


    render(){
        return(
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="Home"
                    renderIcon={() => <Image style={styles.icon} source={require('../imgs/ic_news.png')} />}
                    renderSelectedIcon={() => <Image style={styles.icon} source={require('../imgs/ic_news_selected.png')} />}
                    badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    <Home/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'profile'}
                    title="Profile"
                    renderIcon={() => <Image style={styles.icon} source={require('../imgs/ic_video.png')} />}
                    renderSelectedIcon={() => <Image style={styles.icon} source={require('../imgs/ic_video_selected.png')} />}
                    onPress={() => this.setState({ selectedTab: 'profile' })}>
                    <ProfileView/>
                </TabNavigator.Item>
            </TabNavigator>
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
    icon: {
        height: 20,
        width: 20,
    }
});

