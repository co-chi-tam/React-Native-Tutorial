import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

const About = () => {
    const goToMain = () => {
        Actions.main();
    }
    return (
        <TouchableOpacity 
            onPress = { () => {
                goToMain();
            }}>
            <Text>This is About</Text>
        </TouchableOpacity>
    );
}
export default About;