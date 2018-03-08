/**
 * Created by Francis on 2018/3/1.
 */
/**
 * Created by francis on
 * Function:
 * Desc:
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

export default class TestScrollableTabView extends Component {
    render(){
        return(
            <ScrollableTabView>
                <ReactPage tabLabel="React" />
                <FlowPage tabLabel="Flow" />
                <JestPage tabLabel="Jest" />
            </ScrollableTabView>
            )
    }
}

class ReactPage extends Component{
    render(){
        return(
            <View>
                <Text>{this.props.tabLabel}</Text>
            </View>
        )
    }
}

class FlowPage extends Component{
    render(){
        return(
            <View>
                <Text>{this.props.tabLabel}</Text>
            </View>
        )
    }
}

class JestPage extends Component{
    render(){
        return(
            <View>
                <Text>{this.props.tabLabel}</Text>
            </View>
        )
    }
}
