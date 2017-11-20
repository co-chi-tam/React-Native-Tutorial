import React, { Component } from 'react';
import {
    View, 
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Animated,
    Easing
} from 'react-native';
import JobInfo from '../JobInfo';
import JobItem from './JobItem';

class JobFlatList extends Component {
    constructor(props) {
        super(props);
    }
    keyExtrator = (item, index) => item.id;
    renderItem = ({item}) => {
        return (
            <JobItem 
                data = { item }
                onPress = {(selectedItem) => {
                if (this.props.onItemSelected) {
                    this.props.onItemSelected(selectedItem);
                }
            }}/>
        );
    }
    render() {
        return (
            <View style = { styles.container }>
                <Text>Job list</Text>
                <View>
                    <FlatList 
                        { ...this.props }
                        extraData = { this.state }
                        renderItem = { this.renderItem }/>
                </View>
            </View>
        );
    }
}
export default JobFlatList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});