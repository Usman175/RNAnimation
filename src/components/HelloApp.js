import React, { Component } from 'react';
import { Animated, Text, Dimensions } from 'react-native';
import backgroundImage from '../media/background.png';
import logoImage from '../media/logo.png';

const { width, height } = Dimensions.get('window');

export default class FadeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Animated.Value(0)
        }
    }

    componentDidMount() {
        Animated.timing(
            this.state.time,
            { 
                toValue: 2,
                duration: 2000
            }
        ).start();
    }

    render() {
        const opacity = this.state.time.interpolate({
            inputRange: [0, 2],
            outputRange: [0, 1]
        });

        const marginTop = this.state.time.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [-100, 100, 100]
        });

        const marginLeft = this.state.time.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [-700, -700, 0]
        });

        return (
            <Animated.Image
                style={{
                    width,
                    height,
                    alignItems: 'center',
                    opacity
                }}
                source={backgroundImage}
            >
                <Animated.Image 
                    style={{ resizeMode: 'center', marginTop }}
                    source={logoImage}
                />
                <Animated.Text style={{ 
                        fontSize: 30, 
                        backgroundColor: 'transparent',
                        marginTop: 300,
                        marginLeft,
                        color: 'white'
                    }}
                >KHOA PHAM TRAINING</Animated.Text>
            </Animated.Image>
        );
    }
}
