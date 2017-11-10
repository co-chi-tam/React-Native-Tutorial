import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';

import ListViewItem from './ListViewItem.js'

const ListView = (props) => {
    headerView = () => {
        return (
            <View style = { styles.header }>
                { props.header }
            </View>
        );
    }
    bodyView = () => {
        return (
            <ScrollView style = { styles.scrollType } > 
                {
                    props.data.map ((item, index) => (
                        <View key = { index }>
                            <ListViewItem 
                                data = { item } 
                                onPress = { () => { 
                                    if (props.onPress != 'undefined') {
                                        props.onPress (index)
                                    }
                                }} />
                        </View>
                    ))
                }
            </ScrollView>
        );
    }
    footerView = () => {
        return (
            <View style = { styles.footer } >
                { props.footer }
            </View>
        );
    }
    return (
        <View style = { styles.listViewType }> 
            { headerView() }
            { bodyView() }
            { footerView() }
        </View>
    )
}
export default ListView;

const styles = StyleSheet.create({
    listViewType: {
        flexDirection: 'column'
    },
    header: {
        left: 0, 
        right: 0,
        top: 0,
        backgroundColor: 'white'
    },
    scrollType: {
        height: '75%',
        left: 0,
        right: 0
    },
    footer: {
        height: '10%',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'white'
    }
});