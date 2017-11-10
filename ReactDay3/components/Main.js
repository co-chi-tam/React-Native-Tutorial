import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Home from './Home.js'

const Main = () => {
    const goToAbout = () => {
        Actions.about();
    }
    return (
        <View>
            <Home />
            <TouchableOpacity 
                onPress = { () => {
                    goToAbout();
                }}>
                <Text>This is Main</Text>
            </TouchableOpacity>
        </View>
    );
}
export default Main;