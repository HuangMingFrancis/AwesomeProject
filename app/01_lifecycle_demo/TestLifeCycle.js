/**
 * Created by Francis on 2018/3/1.
 */
/**
 * Created by francis on
 * Function:
 * Desc:
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class TestLifeCycle extends Component {

    //构造函数
    constructor(props){
        super(props);
        console.log("constructor");
        //初始化状态值
        this.state = {
            message: 'hello everyone'
        };
    }

    //准备加载组件
    componentWillMount(){
        console.log('componentWillMount');
    }

    //渲染界面
    render(){
        console.log("render");
        return (
            <View style = {styles.container}>
                <Text style={styles.info}>{this.state.message}</Text>
            </View>
        )
    }
    //组件加载成功并渲染出来
    componentDidMount(){
        console.log('componentDidMount');
    }
    //组件接收到新的props时触发
    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps');
    }
    //决定是否需要更新组件
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate');
    }
    //组件重新渲染前会被调用
    componentWillUpdate(nextProps, nextState){
        console.log('componentWillUpdate');
    }
    //组件重新渲染后会被调用
    componentDidUpdate(nextProps, nextState){
        console.log('componentDidUpdate');
    }
    //组件卸载前会被调用
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        alignItems: 'center'
    },
    info: {
        fontSize: 20,
    }

})