import React, { Component } from 'react';
import {
    View,
    Text,
    ProgressBarAndroid
} from 'react-native';

class MyProgressBar extends Component {
    render() {
        return (
            <View>
                <ProgressBarAndroid
                    styleAttr = 'Normal'
                    progress = { 1 } />
            </View>
        );
    }
}
export default MyProgressBar;