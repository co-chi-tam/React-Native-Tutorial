import React, { Component } from 'react';
import {
    View, 
    Text,
    TextInput,
    StyleSheet,
    Modal,
    Button,
    Keyboard
} from 'react-native';
import JobInfo from '../JobInfo';

class JobIntroModal extends Component {
    state = {
        isVisible: false
    }
    componentWillReceiveProps(nextProps) {
        this.setState ({ ...nextProps.data });
        this.setState ({ isVisible: nextProps.visible });
    }
    render() {
        return(
            <View>
                <Modal 
                    animationType = 'fade'
                    transparent = { false }
                    visible = { this.state.isVisible }
                    onShow = {() => {}}
                    onRequestClose = {() => {
                        this.setState({ isVisible: false });
                    }}>
                    <View style = { styles.container }> 
                        <View style = { styles.groupItems }>
                            <View style = { styles.itemDisplay }>
                                <Text style = { styles.itemText }>ID: </Text>
                                <Text style = { styles.itemText }>{ this.props.data.id }</Text>
                            </View>
                            <View style = { styles.itemDisplay }>
                                <Text style = { styles.itemText }>Job name: </Text>
                                <TextInput 
                                    style = { styles.itemText }
                                    value = { this.state.jobName }
                                    onChangeText = { (val) => {
                                        this.setState({
                                            jobName: val
                                        });
                                    }}/>
                            </View>
                            <View style = { styles.itemDisplayColumn }>
                                <Text style = { styles.itemText }>Job description: </Text>
                                <TextInput 
                                    style = {[styles.itemText, { textAlign: 'left', textAlignVertical: 'top' }]}
                                    multiline = { true }
                                    numberOfLines = {5}
                                    value = { this.state.jobDescription } 
                                    onChangeText = { (val) => {
                                        this.setState({
                                            jobDescription: val
                                        });
                                    }}/>
                            </View>
                        </View>
                        <View style = { styles.itemDisplay }>
                            <Button 
                                title = 'Save'
                                onPress = { () => {
                                    this.setState({ isVisible: false });
                                    Keyboard.dismiss;
                                    if (this.props.onSaveJob) {
                                        this.props.onSaveJob(this.state);
                                    }
                                 }}/>
                            <Button 
                                title = 'Close'
                                onPress = { () => {
                                    this.setState({ isVisible: false });
                                    Keyboard.dismiss;
                                }}/>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}
export default JobIntroModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-between'
    },
    groupItems: {
        flex: 1,
        flexDirection: 'column',
    },
    itemDisplay: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    itemDisplayColumn: {
        flexDirection: 'column'
    },
    itemText: {
        fontSize: 22,
        fontWeight: 'bold'
    }
});
