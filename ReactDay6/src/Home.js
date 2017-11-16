import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import MyWebView from './components/MyWebView';

class Home extends Component {
    static navigationOptions = {
        title: 'Home'
    }
    render = function() {
        const { navigate } = this.props.navigation;
        return (
            <View style = {{ flex: 1 }}>
                <Text>This is Home</Text>
                <Text>This is webview</Text>
                <MyWebView />
                <Button 
                    title = 'Go to about.'
                    onPress = { () => {
                        navigate('AboutUs', { origin: 'Home' });
                    }}/>
            </View>
        );
    }
}
export default Home;