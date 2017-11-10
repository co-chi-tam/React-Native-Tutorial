import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Home from './components/home/Home.js';

// react-native start --reset-cache
// react-native run-android

class reactTutorialApp extends Component {
    render() {
        return (
            <View>
                <Home/>
            </View>
        );
    }
}
export default reactTutorialApp;

AppRegistry.registerComponent('MyNewApp', () => reactTutorialApp);
