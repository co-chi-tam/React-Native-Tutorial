import React, { Component } from 'react';
import {
    View, 
    Text
} from 'react-native';
import CheckBox from 'react-native-checkbox';

class MyCheckBox extends Component {
    state = {
        isChecked: false
    }
    constructor(props) {
        super (props);
    } 
    componentWillReceiveProps(nextProps) {
        
    }
    render() {
        return (
            <View>
                <CheckBox 
                    label = { this.props.title }
                    checked = { this.state.isChecked }
                    onChange = { (val) => {
                        this.setState ({ isChecked: !val })
                        if (this.props.onValueChange) {
                            this.props.onValueChange(!val);
                        }
                    }}/>
            </View>
        );
    }
}
export default MyCheckBox;