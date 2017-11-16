import React, { Component } from 'react';
import {
    View,
    Text,
    WebView
} from 'react-native';

class MyWebView extends Component {
    render() {
        return (
            <View style = {{ flex: 1 }}>
                <WebView
                    source = {{uri: 'https://www.foody.vn/#/places'}} 
                    onError = { (err) => {
                        alert('error ' + err);
                    }}
                    onLoadEnd = { () => {

                    }}/>
            </View>
        );
    }
}
export default MyWebView;