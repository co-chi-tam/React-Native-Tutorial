import React, { Component } from 'react';
import {
    View,
    Text, 
    StyleSheet,
    Button,
    TextInput,
    Keyboard
} from 'react-native';
import JobInfo from '../JobInfo';
class JobInput extends Component {
    state = {
        jobInfo: new JobInfo('Empty Job')
    }
    render() {
        return (
            <View style = { styles.container }>
                <Text 
                    style = { styles.lblJob }>Job name:</Text>
                <TextInput 
                    style = { styles.inputJob }
                    value = { this.state.jobInfo.jobName }
                    onChangeText = { (jobName) => {
                        var updateJob = { 
                            ...this.state.jobInfo,
                            jobName
                        };
                        this.setState ({ 
                            jobInfo: updateJob
                        });
                    }}
                    onEndEditing = { () => {}}/>
                <Button 
                    style = { styles.submitJob }
                    title = {'submit'}
                    onPress = { () => {
                        Keyboard.dismiss;
                        if (this.props.onJobSubmit) {
                            var newJob = { 
                                ...this.state.jobInfo
                            };
                            this.props.onJobSubmit(newJob);
                        }
                    }}/>
            </View>
        );
    }
}
export default JobInput;

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: '#ffffffff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    lblJob: {
        width: '17%'
    },
    inputJob: {
        fontSize: 22,
        width: '63%'
    },
    submitJob: {
        width: '20%'
    }
});