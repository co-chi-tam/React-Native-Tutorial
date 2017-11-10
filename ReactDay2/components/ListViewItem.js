import React, { Component } from 'react';
import { Text, Image, View, TouchableOpacity, StyleSheet } from 'react-native';

const ListViewItem = (props) =>  {
    return (
        <TouchableOpacity
            key = { props.data.id }
            style = { styles.container }
            onPress = { () => props.onPress (props.data) }>
            <Text style = { styles.idtext }> 
                { props.data.id }
            </Text>
            <Image style = { styles.icon50x50 } source = { require('../src/icon-50x50.png') } />
            <Text style = { styles.text }> 
                { props.data.name }
            </Text>
        </TouchableOpacity>
    );
}
export default ListViewItem;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 3,
        backgroundColor: '#d9f9b1',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
     },
     icon50x50: {
        width: 50,
        height: 50
     },
     idtext: {
        color: '#ff6030',
        textAlign: 'center',
        fontSize: 16,
        padding: 10
     },
     text: {
        color: '#4f603c',
        textAlign: 'center',
        paddingLeft: 10
     }
});