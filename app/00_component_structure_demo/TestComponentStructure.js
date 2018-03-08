/**
 * Created by Francis on 2018/3/7.
 */
/**
 * Created by francis on
 * Function:
 * Desc:
 */

//导入组件
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class TestComponentStructure extends Component {
    //返回具体的界面
    render(){
        return(
            <View style={styles.container}>

            </View>
        )
    }
}
//自定义的样式
const styles = StyleSheet.create({
    container: {
        backgroundColor: "blue",
        height: 300,
        width: 300,
        justifyContent: "space-between",
        flexWrap: "wrap",
        flexDirection: "row",
    },
})