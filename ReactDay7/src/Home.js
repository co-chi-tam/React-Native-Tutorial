import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Animated,
    Easing
} from 'react-native';

class Home extends Component {
    state = {
        fadeAnim: 0
    }
    constructor(props) {
        super(props);
        this.textAnimatedValue = new Animated.Value(0);
        this.opacityAnimatedValue = new Animated.Value(0);
        this.springAnimatedValue = new Animated.Value(0);
        this.spinValue = new Animated.Value(0);
    } 
    componentWillMount() {
        this.animated();
        this.spin();
        this.opacityAnimated();
        this.springAnimated();
        // this.parallelAnimated();
        // this.sequenceAnimated();
        // this.staggerAnimated();
    }
    animated() {
        this.textAnimatedValue.setValue(0);
        Animated.timing(
            this.textAnimatedValue,
            {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear
            }
        ).start(() => this.animated());
    }
    opacityAnimated() {
        this.opacityAnimatedValue.setValue(0);
        Animated.timing(
            this.opacityAnimatedValue,
            {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear
            }
        ).start(() => this.opacityAnimated());
    }
    springAnimated() {
        this.springAnimatedValue.setValue(0);
        Animated.spring(
            this.springAnimatedValue,
            {
                toValue: 1,
                friction: 1
            }
        ).start();
    }
    spin(){
        this.spinValue.setValue(0);
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 4000,
                easing: Easing.linear
            }
        ).start(() => this.spin());
    }
    parallelAnimated() {
        Animated.parallel([
            Animated.spring(
                this.springAnimatedValue,
                {
                    toValue: 1,
                    friction: 1
                }
            ),
            Animated.timing(
                this.spinValue,
                {
                    toValue: 1,
                    duration: 4000,
                    easing: Easing.linear
                }
            )
        ])
    }
    sequenceAnimated() {
        Animated.sequence([
            Animated.spring(
                this.springAnimatedValue,
                {
                    toValue: 1,
                    friction: 1
                }
            ),
            Animated.timing(
                this.spinValue,
                {
                    toValue: 1,
                    duration: 4000,
                    easing: Easing.linear
                }
            )
        ])
    }
    staggerAnimated() {
        Animated.stagger(1000, [
            Animated.spring(
                this.springAnimatedValue,
                {
                    toValue: 1,
                    friction: 1
                }
            ),
            Animated.timing(
                this.spinValue,
                {
                    toValue: 1,
                    duration: 4000,
                    easing: Easing.linear
                }
            )
        ])
    }
    render() {
        const textSize = this.textAnimatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [18, 32, 18]
        });
        const opacity = this.opacityAnimatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 1, 0]
        })
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });
        return(
            <View style = { style.container }>
                <Text>This is Animated.Image + rotate.</Text>
                <Animated.Image 
                    style = {{
                        width: 128,
                        height: 128,
                        transform: [{rotate: spin}]
                    }}
                    source = {require('./img/test.png')} />
                <Text>This is Animated.Text + fontSize</Text>
                <Animated.Text 
                    style = {{
                        marginTop: 10,
                        fontSize: textSize,
                    }}>This is text.
                </Animated.Text>
                <Text>This is Animated.View + opacity</Text>
                <Animated.View 
                    style = {{
                        width: 30, 
                        height: 30,
                        opacity,
                        backgroundColor: 'blue'
                    }}
                />
                <Text 
                    onPress = {() => {
                        this.springAnimated();
                    }}>This is Spring Animated</Text>
                <Animated.Image 
                    style = {{
                        width: 128,
                        height: 128,
                        transform: [{scale: this.springAnimatedValue}]
                    }}
                    source = { require('./img/test.png') }
                />
            </View>
        );
    }
}
export default Home;

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10
    }
})