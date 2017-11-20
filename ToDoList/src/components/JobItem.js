import React, { Component } from 'react';
import {
    View, 
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Animated,
    Easing,
    Keyboard
} from 'react-native';
import JobInfo from '../JobInfo';

class JobItem extends Component {
    state = {

    }
    constructor(props) {
        super(props);
        this.textAnimated = new Animated.Value(1);
    }
    touchedItem() {
        this.textAnimated.setValue(0.3);
        Animated.spring(
            this.textAnimated, 
            {
                toValue: 1,
                friction: 1
            }
        ).start();
    }
    render() {
        return(
            <TouchableOpacity
                style = { [styles.jobInfoItem, { backgroundColor: this.props.data.id % 2 == 0 ? 'yellow' : 'orange' }]}
                onPress = { () => {
                    if (this.props.onPress) {
                        this.props.onPress({...this.props.data});
                    }
                    this.touchedItem();
                }}>
                    <Animated.Text style = {[styles.jobInfoItemText, 
                        {
                            transform: [{scale: this.textAnimated}]
                        }
                    ]}>
                        {this.props.data.jobName}
                    </Animated.Text>
            </TouchableOpacity>
        );
    }
}
export default JobItem;

const styles = StyleSheet.create({
    jobInfoItem: {
        flex: 1,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    jobInfoItemText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    }
});