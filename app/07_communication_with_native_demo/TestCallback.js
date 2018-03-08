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

export default class TestCallback extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Button title={'TestCallback'} onPress={this.callbackComm.bind(this, "调用Callback")}></Button>
            </View>
        )
    }

    //在调用原生方法的同时传入Callback进行回调
    callbackComm(message) {
        NativeModules.commModule.rnCallNativeFromCallback(message,(result) => {
            ToastAndroid.show("CallBack收到消息:" + result, ToastAndroid.SHORT);
        })
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
    }
});