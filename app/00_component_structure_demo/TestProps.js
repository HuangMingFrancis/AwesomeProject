/**
 * Created by Francis on 2018/3/7.
 */
/**
 * Created by francis on
 * Function:
 * Desc:
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class TestProps extends Component {
    render(){
        return(
            <MyText content = "TestProps" />
        )

    }
}

class MyText extends Component{
    render(){
        return(
            <View>
                <Text>{this.props.content}</Text>
            </View>
        )
    }
}