import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView
} from 'react-native';
import MySectionList        from './components/MySectionList';
import MyCheckBox           from './components/MyCheckBox';
import MyProgressBar        from './components/MyProgressBar';
import MyRefreshableList    from './components/MyRefreshableList';
import MySlider             from './components/MySlider';
import MyStatusBar          from './components/MyStatusBar';
import MySwitch             from './components/MySwitch';
import MyToolbar            from './components/MyToolbar';
import MyViewPager          from './components/MyViewPager';

class Home extends Component {
    render() {
        return (
            <ScrollView>
                <Text>This is view pager</Text>
                <MyViewPager />
                <Text>This is toolbar</Text>
                <MyToolbar />
                <Text>This is switch</Text>
                <MySwitch />
                <Text>This is status bar</Text>
                <MyStatusBar />
                <Text>This is checkbox</Text>
                <MyCheckBox 
                    title = "Check me."
                    onValueChange = { (val) => {
                        alert ('Checkbox checked ' + val);
                    }}
                    />
                <Text>This is progressbar</Text>
                <MyProgressBar />   
                <Text>This is refreshable list</Text>
                <MyRefreshableList />
                <Text>This is section list</Text>
                <MySectionList />
                <Text>This is slider</Text>
                <MySlider />
            </ScrollView>
        );
    }
}
export default Home;