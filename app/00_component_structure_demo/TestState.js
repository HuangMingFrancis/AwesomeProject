/**
 * Created by Francis on 2018/3/8.
 */
/**
 * Created by francis on
 * Function:
 * Desc:
 */
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class TestState extends Component {
    constructor(pros){
        super(pros);
        this.state = {
            content: "init"
        }
    }


    render(){
        return(
            <View>
                <Button title='change state' onPress={this._changeState.bind(this)}></Button>
                <Text>{this.state.content}</Text>
            </View>
        )
    }

    _changeState(){
        this.setState({ content: 'TestState' });
    }
}