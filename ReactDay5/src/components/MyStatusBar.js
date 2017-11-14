import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar
} from 'react-native';

class MyStatusBar extends Component {

    render() {
        return (
            <View>
                <StatusBar 
                    backgroundColor = 'blue'
                />
            </View>
        );
    }
}
export default MyStatusBar;