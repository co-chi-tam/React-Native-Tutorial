import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

import ListView from './ListView.js'

class Home extends Component {
    state = {
        headerText: 'This is header.',
        names: [
            {'name': 'Ben', 'id': 1},
            {'name': 'Susan', 'id': 2},
            {'name': 'Robert', 'id': 3},
            {'name': 'Mary', 'id': 4},
            {'name': 'Daniel', 'id': 5},
            {'name': 'Laura', 'id': 6},
            {'name': 'John', 'id': 7},
            {'name': 'Debra', 'id': 8},
            {'name': 'Aron', 'id': 9},
            {'name': 'Ann', 'id': 10},
            {'name': 'Steve', 'id': 11},
            {'name': 'Olivia', 'id': 12}
        ]
    }
    headerView = () => {
        return (
            <View>
                <Text>{ this.state.headerText }</Text>
                <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Email"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    // secureTextEntry = {true}
                    onChangeText = {(val) => { this.setState({ headerText: val })}}/>
            </View>
        )
    }
    footerView = () => {
        return (
            <Text>
                "This is footer."
            </Text>
        );
    }
    alertItem = (index) => {
        alert(this.state.names[index].name);
    }
    render() {
        return (
            <ListView
                header = { this.headerView() }
                data = { this.state.names }
                onPress = { this.alertItem }
                footer = { this.footerView() } />
        );
    };
}
export default Home;

const styles = StyleSheet.create({
    container: {
       paddingTop: 23
    },
    input: {
       margin: 15,
       height: 40,
       borderColor: '#7a42f4',
       borderWidth: 1
    },
    submitButton: {
       backgroundColor: '#7a42f4',
       padding: 10,
       margin: 15,
       height: 40,
    },
    submitButtonText:{
       color: 'white'
    }
 })