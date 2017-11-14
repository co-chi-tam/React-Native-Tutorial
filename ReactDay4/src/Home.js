import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    ActivityIndicator,
    Button,
    DrawerLayoutAndroid
} from 'react-native';
import MyPicker from './MyPicker';
import MyFlatList from './MyFlatList';
import MyModal from './MyModal';

class Home extends Component {
    state = {
        animating: true,
        homeInfo: 'This is home',
        showModal: false
    }
    constructor() {
        super();
    }
    componentWillMount() {
        
    }
    render () {
        var navigationView = (
            <View>
                <Text>Navigation View....</Text>
            </View>
        );
        return(
            <View>
                <ScrollView>
                    <Text>
                        { this.state.homeInfo }
                    </Text>
                    <Text>Button.</Text>
                    <Button 
                        onPress = { () => {
                            this.setState ({ animating: !this.state.animating });
                        }}
                        title = 'Click me!!'
                        accessibilityLabel = 'Just click me more....'
                        />
                    <Text>This is ActivityIndicator.</Text>
                    <ActivityIndicator
                        animating = { this.state.animating }
                        size = 'large'
                    />
                    <Text>This is DrawerLayoutAndroid</Text>
                    <DrawerLayoutAndroid
                        drawerWidth = { 300 }
                        drawerPosition = { DrawerLayoutAndroid.positions.Left }
                        renderNavigationView = { () => { navigationView } }>
                        <View style={{flex: 1, alignItems: 'center'}}>
                            <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
                            <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
                        </View>
                    </DrawerLayoutAndroid>
                    <Text>This is flat list</Text>
                    <MyFlatList data = {[
                        { id: 0 },
                        { id: 1 },
                        { id: 2 },
                        { id: 3 },
                        { id: 4 },
                        { id: 5 }
                    ]}/>
                    <Text>This is modal</Text>
                    <Button 
                        onPress = { () => {
                            this.setState ({ showModal: true });
                        }}
                        title = 'Click me!!'
                        accessibilityLabel = 'Just click me more....'
                        />
                    <MyModal visible = { this.state.showModal } />
                    <Text>This is picker</Text>
                    <MyPicker data = {[
                        'Java',
                        'C#',
                        'C++',
                        'Objective-C',
                        'Java',
                        'Go',
                        'Lua'
                    ]}
                        onValueChange = {(item, index) => {
                            console.log (item);
                    }}/>
                </ScrollView>
            </View>
        );
    }
    componentDidMount() {
        
    }
}
export default Home;