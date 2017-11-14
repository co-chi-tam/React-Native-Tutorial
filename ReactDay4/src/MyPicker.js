import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Picker
} from 'react-native';

class MyPicker extends Component {
    state = {
        pickerValue: this.props.data[0]
    }
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Picker 
                    selectedValue = { this.state.pickerValue }
                    onValueChange = { (item, index) => {
                        if (this.props.onValueChange) {
                            this.props.onValueChange (item, index);
                        }
                        this.setState ({pickerValue: item});
                    }}>
                    {
                        this.props.data.map ((item, index) => {
                            return (
                                <Picker.item 
                                        label = { item } 
                                        value = { item }
                                        key = { item } />
                            );
                        })
                    }
                </Picker>
            </View>
        );
    }
}
export default MyPicker;