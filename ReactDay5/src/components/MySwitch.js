import React, { Component } from 'react';
import {
    View, 
    Text,
    Switch
} from 'react-native';

class MySwitch extends Component {
    state = {
        switchValue: false
    }
    render() {
        return (
            <View>
                <Switch 
                    value = { this.state.switchValue }
                    onValueChange = { (val) => {
                        this.setState ({ switchValue: val });
                    }}
                />
            </View>
        );
    }
}
export default MySwitch;