import React, { Component } from 'react';
import {
    View,
    Text,
    ProgressViewIOS
} from 'react-native';

class MyProgressBar extends Component {
    render() {
        return (
            <View>
                <ProgressViewIOS
                    progressViewStyle = 'bar'
                    progress = { 1 } />
            </View>
        );
    }
}
export default MyProgressBar;