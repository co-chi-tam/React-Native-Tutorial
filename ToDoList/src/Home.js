import React, { Component } from 'react';
import {
    View, 
    Text,
    StyleSheet,
    FlatList
} from 'react-native';
import FileManagerJob from './components/FileManagerJob';
import JobInfo from './JobInfo';
import JobInput from './components/JobInput';
import JobFlatList from './components/JobFlatList';
import JobIntroModal from './components/JobIntroModal';

class Home extends Component {
    state = {
        jobSelected: new JobInfo('Empty Job'),
        showJobInfo: false,
        jobInfos: [
            {
                ...new JobInfo('job 1'),
                id: 0,
                key: '0'
            },{
                ...new JobInfo('job 2'),
                id: 1,
                key: '1'
            },{
                ...new JobInfo('job 3'),
                id: 2,
                key: '2'
            }
        ]
    }
    componentDidMount() {
        FileManagerJob.writeToFile(this.state.jobInfos, 'test.txt', () => {
            alert('OK saving');
        }, (error) => {
            alert('ERROR ' + error);
        });
    }
    render() {
        return(
            <View style={styles.container}>
                <JobInput onJobSubmit = {(jobInfo) => {
                    jobInfo.id = jobInfo.key = this.state.jobInfos.length;
                    this.state.jobInfos.push(jobInfo);
                    this.setState({
                        jobInfos: this.state.jobInfos
                    });
                }}/>
                <JobIntroModal 
                    data = { this.state.jobSelected } 
                    visible = { this.state.showJobInfo }
                    onSaveJob = { (savingJob) => {
                        alert (savingJob.jobName);
                    }}/> 
                <JobFlatList 
                    data = { this.state.jobInfos } 
                    onItemSelected = { (jobSelected) => {
                        this.setState({ jobSelected, showJobInfo: true })
                    }}/>
            </View>
        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    inputJob: {
        fontSize: 22
    }
  });