import { AppRegistry } from 'react-native';
import App from './App';
import TestComponentStructure from './app/00_component_structure_demo/TestComponentStructure';
import TestProps from './app/00_component_structure_demo/TestProps';
import TestState from './app/00_component_structure_demo/TestState';
import TestLifeCycle from './app/01_lifecycle_demo/TestLifeCycle';
import FlexDiceTest from './app/02_flex_demo/FlexDiceTest';
import FlexTest from './app/02_flex_demo/FlexTest';
import FetchNetData from './app/03_fetch_demo/FetchNetData';
import TestTabNavigator from './app/04_library_demo/TestTabNavigator';
import TestSwiper from './app/04_library_demo/TestSwiper';
import TestScrollableTabView from  './app/04_library_demo/TestScrollableTabView';
import TestAsyncStorage from './app/05_storage_demo/TestAsyncStorage';
import TestNativeComponents from './app/06_call_native_components_demo/TestNativeComponents';
import TestRCTDeviceEventEmitter from './app/07_communication_with_native_demo/TestRCTDeviceEventEmitter'
import TestCallback from './app/07_communication_with_native_demo/TestCallback'
import TestPromise from './app/07_communication_with_native_demo/TestPromise'
import TestConstants from './app/07_communication_with_native_demo/TestConstants'

// AppRegistry.registerComponent('AwesomeProject', () => App);
// AppRegistry.registerComponent('AwesomeProject', () => FlexTest);
// AppRegistry.registerComponent('AwesomeProject', () => FlexDiceTest);
// AppRegistry.registerComponent('AwesomeProject', () => FetchNetData)
// AppRegistry.registerComponent('AwesomeProject', () => TestTabNavigator)
// AppRegistry.registerComponent('AwesomeProject', () => TestSwiper)
// AppRegistry.registerComponent('AwesomeProject', () => TestScrollableTabView)
// AppRegistry.registerComponent('AwesomeProject', () => TestAsyncStorage)
// AppRegistry.registerComponent('AwesomeProject', () => TestNativeComponents)
// AppRegistry.registerComponent('AwesomeProject', () => TestRCTDeviceEventEmitter)
// AppRegistry.registerComponent('AwesomeProject', () => TestCallback)
// AppRegistry.registerComponent('AwesomeProject', () => TestPromise)
AppRegistry.registerComponent('AwesomeProject', () => TestConstants)
// AppRegistry.registerComponent('AwesomeProject', () => TestComponentStructure)
// AppRegistry.registerComponent('AwesomeProject', () => TestProps)
// AppRegistry.registerComponent('AwesomeProject', () => TestState)
// AppRegistry.registerComponent('AwesomeProject', () => TestLifeCycle)