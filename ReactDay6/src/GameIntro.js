import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

class GameIntro extends Component {
    
    render() {
        return (
            <View style = {{ flex: 1, backgroundColor: 'blue' }}>
                <Text>This is game intro.</Text>
                <Button 
                    style = {{ position: 'absolute', bottom: 0, left: 0, height: 400 }}
                    title = {'Pass props'}
                    onPress = {() => {
                        this.props.onPassedProps({ value: 'VALUEs' });
                    }} />
            </View>
        );
    }
}
export default GameIntro;