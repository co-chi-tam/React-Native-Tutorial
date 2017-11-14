import React, { Component } from 'react';
import {
    View,
    Text,
    Modal,
    Button,
    TouchableOpacity
} from 'react-native';
import { Action } from 'react-native-router-flux'; // Action.home;

class MyModal extends Component {
    state = { modalVisible: false }
    componentWillReceiveProps(nextProps) {
        this.setState ({ modalVisible: nextProps.visible });
    }
    render() {
        return (
            <View>
                <Modal 
                    animationType = 'fade' // none, slide, fade
                    transparent = { false }
                    visible = { this.state.modalVisible }
                    onShow = { () => {
                        alert('Modal has showed.')
                    } }
                    onRequestClose = { () => { // HOME callback
                        alert('Modal has been closed.')
                        this.setState({modalVisible: false});
                    }}
                >
                    <View>
                        <Text>This is modal view...</Text>
                        <Button 
                            onPress = { () => {
                                this.setState({modalVisible: false});
                            }}
                            title = 'Close'/>
                    </View>
                </Modal>
            </View>
        );
    }
};
export default MyModal;