import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  LayoutAnimation,
  Animated
} from 'react-native';

class Home extends Component {
    state = {
        url: 'https://jsonblob.com/api/5945f818-c5cb-11e7-a9dc-d56fae68f991',
        data: '',
        myStyle: {
            height: 10
        }
    }
    constructor() {
        super();
    }
    componentWillMount = () => {
        this.animatedHeight = new Animated.Value(10)
    }
    animatedExpand = () => {
        Animated.timing(this.animatedHeight, {
            toValue: 300,
            duration: 500
        }).start();
    }
    getMethodURL = (url, callback, error) => {
        fetch(url, {
            method: 'GET'
        })
        .then ((response) => response.json())
        .then ((responseJson) => {
            if (callback) {
                callback(responseJson)
            }
        })
        .catch((errStr) => {
            if (error) {
                error(errStr)
            }
        })
    }
    expandElement = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        this.setState ({
            myStyle: {
                height: 300,
                backgroundColor: 'grey'
            }
        });
    }
    collapseElement = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
        this.setState ({
            myStyle: {
                height: 10
            }
        });
    }
    render() {
        return (
            <View>
                <TextInput 
                    value = { this.state.url }
                    onChangeText = {(val) => {
                        this.state.url = val;
                    }}>
                </TextInput>
                <TouchableHighlight
                    key = {0}
                    style = {{ alignItems: 'center', backgroundColor: 'orange' }}
                    onPress = { () => {
                        this.getMethodURL(this.state.url, (json) => {
                            this.setState({
                                data: json
                            });
                            this.animatedExpand();
                        }, null);
                    }}>
                    <Text>GET</Text>
                </TouchableHighlight>
                <Animated.View style = {{ backgroundColor: 'yellow', height: this.animatedHeight }}>
                    <Text style = {{ textAlign: 'center', fontWeight: 'bold', fontSize: 22 }}>
                        { this.state.data.title }
                    </Text>
                    <Text style = {{ fontSize: 12 }}>
                        { this.state.data.body }
                    </Text>
                </Animated.View>
            </View>
        );
    }
    componentDidMount = () => {
        this.collapseElement();
    }
}
export default Home;

