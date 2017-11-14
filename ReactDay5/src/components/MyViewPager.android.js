import React, { Component } from 'react';
import {
    View,
    Text,
    ViewPagerAndroid
} from 'react-native';

class MyViewPager extends Component {

    render() {
        return (
            <ViewPagerAndroid 
                initialPage = {0}
                height= {200}
                onPageSelected = {(page) => {
                    alert(page.nativeEvent.position);
                }}>
                <View style = {{ backgroundColor: 'red' }}> 
                    <Text>Page 1</Text>
                </View>
                <View style = {{ backgroundColor: 'blue' }}> 
                    <Text>Page 2</Text>
                </View>
            </ViewPagerAndroid>
        );
    }
}
export default MyViewPager;