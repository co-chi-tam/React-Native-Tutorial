import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PresentationalComponent from './PresentationalComponent';

class Home extends Component {
    state = {
        myState: 'Some text !!!'
    }
    updateState = () => this.setState({
        myState: 'This is new state.'
    });
    render() {
        return (
            <View> 
                <PresentationalComponent myState = { this.state.myState } updateState = { this.updateState } />
            </View>
        );
    }
}
export default Home;