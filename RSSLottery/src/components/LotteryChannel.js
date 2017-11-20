import React, { Component } from 'react';
import {
    View, 
    Text, 
    Button,
    FlatList,
    Linking
} from 'react-native';
import LotteryChannelItem from './LotteryChannelItem';

class LotteryChannel extends Component {
    keyExtractor(item, index) {
        return item.id;
    }
    renderItem ({item}) {
        return (
            <LotteryChannelItem
                item = { item } />
        );
    }
    render() {
        return (
            <View>
                <FlatList 
                    data = { this.props.data }
                    keyExtractor = { this.keyExtractor }
                    renderItem = { this.renderItem } />
            </View>
        );
    }
}
export default LotteryChannel;