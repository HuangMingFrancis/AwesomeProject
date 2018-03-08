/**
 * Created by Francis on 2018/3/8.
 */
/**
 * Created by francis on
 * Function:
 * Desc:
 */
import React, {Component} from 'react';
import {View, Button, StyleSheet, ToastAndroid, DeviceEventEmitter, NativeModules, Text} from 'react-native';

export default class TestConstants extends Component {

    constructor(pros){
        super(pros);
        this.state = {
            content: "init"
        }
    }

    componentDidMount() {
        let result = NativeModules.commModule.Constant;
        // ToastAndroid.show("Constant收到消息:" + result, ToastAndroid.SHORT)
        this.setState({
            content: result
        })
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>{this.state.content}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        flex: 1,
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    margin_top_10: {
        marginTop: 10
    },

});