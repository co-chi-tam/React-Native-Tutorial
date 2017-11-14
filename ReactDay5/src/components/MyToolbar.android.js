import React, { Component } from 'react';
import {
    View,
    Text,
    ToolbarAndroid
} from 'react-native';

class MyToolbar extends Component {

    render() {
        return(
            <View>
                <ToolbarAndroid 
                    title = 'Awesome toolbar'
                    height = {50}
                    actions = {[
                        {
                            title: 'Settings',
                            show: 'never'
                        },
                        {
                            title: 'About',
                            show: 'never'
                        },
                        {
                            title: 'Exit',
                            show: 'never'
                        }
                    ]}
                    onActionSelected = { (index) => {
                        alert('Selected index ' + index);
                    }}
                />
            </View>
        );
    }
}
export default MyToolbar;