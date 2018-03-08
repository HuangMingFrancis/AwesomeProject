import {requireNativeComponent, View } from 'react-native';
import PropTypes from 'prop-types';
var myTextView ={
    name:'MyTextView',
    propTypes:{
        text:PropTypes.string,
        textSize:PropTypes.number,
        textColor:PropTypes.number,
        ...View.propTypes // 包含默认的View的属性
    }
}
module.exports =requireNativeComponent('MyTextView',myTextView);