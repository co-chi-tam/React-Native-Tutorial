// Follow: https://github.com/react-native-community/react-native-tab-view/blob/v0.0.56/example/src/NoAnimationExample.js#L157

import React, { Component } from 'react';
import { Animated, View, Platform, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { TabViewAnimated, TabViewPagerPan, TabViewPagerScroll, TabViewPagerAndroid } from 'react-native-tab-view';
import GameIntro from './GameIntro';
import MobileAppIntro from './MobileAppIntro';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f4f4f4',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(0, 0, 0, .2)',
    paddingTop: 4.5,
  },
  iconContainer: {
    height: 26,
    width: 26,
  },
  icon: {
    position: 'absolute',
    textAlign: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    color: '#0084ff',
  },
  outline: {
    color: '#939393',
  },
  label: {
    fontSize: 10,
    marginTop: 3,
    marginBottom: 1.5,
    backgroundColor: 'transparent',
  },
  page: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
});

export default class AboutUs extends Component {

    static navigationOptions = {
        title: 'About Us'
    }
    static backgroundColor = '#f4f4f4';
    static tintColor = '#222';
    static appbarElevation = 4;

    static propTypes = {
        style: View.propTypes.style,
    };

    state = {
        index: 0,
        routes: [
        { key: '1', title: 'Game Intro' },
        { key: '2', title: 'Mobile App Intro' },
        { key: '3', title: 'Near Me' },
        { key: '4', title: 'Search' },
        { key: '5', title: 'Updates' },
        ],
    };

    _handleChangeTab = (index) => {
        this.setState({
        index,
        });
    };

    _renderLabel = ({ position, navigationState }) => ({ route, index }) => {
        const inputRange = navigationState.routes.map((x, i) => i);
        const outputRange = inputRange.map(inputIndex => inputIndex === index ? '#2196f3' : '#939393');
        const color = position.interpolate({
        inputRange,
        outputRange,
        });
        return (
        <Animated.Text style={[ styles.label, { color } ]}>
            {route.title}
        </Animated.Text>
        );
    };

    // TEST
    _renderHeader = props => {
        return this._renderFooter(props);
    }

    _renderFooter = props => {
        return (
        <View style={styles.tabbar}>
            {props.navigationState.routes.map((route, index) => {
            return (
                <TouchableWithoutFeedback key={route.key} onPress={() => props.jumpToIndex(index)}>
                    <Animated.View style={styles.tab}>
                        {this._renderLabel(props)({ route, index })}
                    </Animated.View>
                    </TouchableWithoutFeedback>
                );
            })}
        </View>
        );
    };

    _renderScene = ({ route }) => {
        switch (route.key) {
        case '1':
            return <GameIntro onPassedProps = {(passedProps) => {
                    alert(passedProps.value);
                }}/>;
        case '2':
            return <MobileAppIntro />;
        case '3':
            return <View style={[ styles.page, { backgroundColor: '#9DB1B5' } ]} />;
        case '4':
            return <View style={[ styles.page, { backgroundColor: '#EDD8B5' } ]} />;
        case '5':
            return <View style={[ styles.page, { backgroundColor: '#9E9694' } ]} />;
        default:
            return null;
        }
    };

    _renderPager = (props) => {
        switch (Platform.OS) {
        case 'ios':
            return (
                <TabViewPagerScroll
                {...props}
                animationEnabled={true}
                swipeEnabled={true}
                />
            );
        case 'android':
            return (
                <TabViewPagerAndroid
                {...props}
                animationEnabled={true}
                swipeEnabled={true}
                />
            );
        default:
            return (
                <TabViewPagerPan
                {...props}
                swipeEnabled={true}
                />
            );
        }
    };

    render() {
        return (
        <TabViewAnimated
            style={[ styles.container, this.props.style ]}
            navigationState={this.state}
            renderPager={this._renderPager}
            renderScene={this._renderScene}
            renderFooter={this._renderFooter}
            onIndexChange={this._handleChangeTab}
        />
        );
    }
}