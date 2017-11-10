import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const PresentationalComponent = (props) => {
    return (
        <View style = { styles.verticalBox }>
            <View style = { styles.bottomLine }> 
                <Text style = { styles.myStyle } onPress = { props.updateState }>
                    { props.myState }
                </Text>
            </View>
            <View style = { styles.container }>
                <View style = { styles.redBox } />
                <View style = { styles.blueBox } /> 
                <View style = { styles.blackBox } />       
            </View>
        </View>
    );
}
export default PresentationalComponent;

const styles = StyleSheet.create({
    verticalBox: {
        flexDirection: 'column',
        alignItems: 'stretch' 
    },
    container: {
        flexDirection: 'column', // column, row -> align vertical or horizontal
        justifyContent: 'flex-end', // center, flex-start, flex-end, space-around, space-between -> Item in container
        alignItems: 'flex-start',   // center, flex-start, flex-end, stretch -> Item in container opposite of flexDirection
        backgroundColor: 'grey'
    },
    redBox: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    },
    blueBox: {
        width: 90,
        height: 90,
        backgroundColor: 'blue'
    },
    blackBox: {
        width: 110,
        height: 110,
        backgroundColor: 'black'
    },
    bottomLine: {
        borderBottomWidth: 1,
        borderBottomColor: '#f4c842'
    },
    myStyle: {
        marginTop: 20,
        textAlign: 'center',
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 20
    }
});