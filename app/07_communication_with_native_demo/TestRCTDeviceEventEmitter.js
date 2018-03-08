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

export default class TestRCTDeviceEventEmitter extends Component {

    constructor(pros){
        super(pros);
        this.state = {
            content: "init RCTDeviceEventEmitter"
        }
    }

    componentDidMount() {
        //注册监听事件，提供给原生进行调用
        DeviceEventEmitter.addListener('nativeCallRn',(msg)=>{
            this.setState({
                content: msg
            })
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <Button title={'TestRCTDeviceEventEmitter'} onPress={this.skipNativeCall.bind(this, '调用原生方法并传递值')}></Button>
                <Text style={styles.margin_top_10}>{this.state.content}</Text>
            </View>
        )
    }
    skipNativeCall(message) {
        //调用原生方法
        NativeModules.commModule.toast(message);
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