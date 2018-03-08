/**
 * Created by Francis on 2018/3/5.
 */
/**
 * Created by francis on
 * Function:
 * Desc:
 */
import React, {Component} from 'react';
import {AsyncStorage, View, StyleSheet, Button, Alert, NativeModules} from 'react-native';
// 数据对应的key
var STORAGE_KEY = 'STORAGE';
export default class TestAsyncStorage extends Component {
    render(){
        return(
            <View style = {TestAsyncStorageStyle.container}>
                <Button title = 'setItem' onPress={this._set}> </Button>
                <View style={TestAsyncStorageStyle.margin_top_five}>
                    <Button title = 'getItem' onPress={this._get}> </Button>
                </View>
                <View style={TestAsyncStorageStyle.margin_top_five}>
                    <Button title = 'moveItem' onPress={this._moveItem}> </Button>
                </View>
            </View>
        )
    }

    async  _get(){
        try {
            console.log('getDate');
            var value =  await AsyncStorage.getItem(STORAGE_KEY);
            if (value != null){
                console.log("result: " + value);
                Alert.alert("GetData", "result: " + value);
            }

        } catch (error) {
            // Error retrieving data
            Alert.alert("get error " + error);
        }

    }

    async _set(){
        try{
            console.log('setDate');
            await AsyncStorage.setItem(STORAGE_KEY, 'I like to save it.');
        }catch (error){
            Alert.alert("set error " + error);
        }
    }

    async _moveItem(){
        try{
            console.log('moveDate');
            await AsyncStorage.removeItem(STORAGE_KEY);
        }
        catch (error){
            Alert.alert("move error " + error);
        }
    }

}


const TestAsyncStorageStyle = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    margin_top_five: {
        marginTop: 10,
    }

})