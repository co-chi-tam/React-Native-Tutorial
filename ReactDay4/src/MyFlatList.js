import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList
} from 'react-native';
import { Action } from 'react-native-router-flux'; // Action.home

const MyFlatList = (props) => {
    var keyExtrator = (item, index) => item.id;
    var renderItem = ({item}) => {
        return (
            <View>
                <Text 
                    onPress = {() => {
                        alert('This is item' + item.id);
                    }}> 
                    This is item { item.id }
                </Text>
            </View>
        );
    }
    return(
        <View>
            <FlatList 
                data = { props.data }
                keyExtractor = { keyExtrator }
                renderItem = { renderItem }
            />
        </View>
    );
};
export default MyFlatList;