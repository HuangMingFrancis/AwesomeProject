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

export default class TestPromise extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Button title={'TestPromise'} onPress={this.promiseComm.bind(this, "调用Promise")}></Button>
            </View>
        )
    }

    promiseComm(msg) {
        NativeModules.commModule.rnCallNativeFromPromise(msg).then(
            (result) =>{
                ToastAndroid.show("Promise收到消息:" + result, ToastAndroid.SHORT)
            }
        ).catch((error) =>{console.log(error)});
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