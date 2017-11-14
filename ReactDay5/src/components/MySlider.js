import React, { Component } from 'react';
import {
    View, 
    Text,
    Slider
} from 'react-native';

class MySlider extends Component {
    state = {
        sliderValue: 0
    }
    render() {
        return (
            <View>
                <Slider 
                    value = { this.state.sliderValue }
                    minimumValue = {0}
                    maximumValue = {100}
                    step = {0.1}
                    onValueChange = { (val) => {
                        this.setState ({ sliderValue: val })
                    }}
                    onSlidingComplete = { () => {

                    }}
                />
            </View>
        )
    }
}
export default MySlider;