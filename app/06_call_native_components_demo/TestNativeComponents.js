/**
 * Created by Francis on 2018/3/8.
 */
/**
 * Created by francis on
 * Function:
 * Desc:
 */
import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MyTextView from '../06_call_native_components_demo/TestMyTextView';

export default class TestNativeComponents extends Component {

    render(){
        return(
            <View style={styles.container}>
                <MyTextView style={styles.myTextView} text = {'Call Native Components'} textSize={20}/>
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
    myTextView:{
        width:300,
        height:100,
    },
});