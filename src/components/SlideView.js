import React, { Component } from 'react';
import { Animated, Text, Easing } from 'react-native';

export default class SlideView extends Component {
    constructor(props) {
        super(props);
        this.state = { slideAnim: new Animated.Value(-700) }
    }

    componentDidMount() {
        Animated.timing(
            this.state.slideAnim,
            {
                toValue: 0,
                duration: 1000,
                easing: Easing.ease
            }
        ).start();
    }

    render() {
        const marginLeft = this.state.slideAnim;
        return (
            <Animated.View
                style={{
                    width: 300,
                    height: 200,
                    backgroundColor: 'green',
                    marginLeft
                }}
            >
                <Text>Khoa Pham Training</Text>
            </Animated.View>
        );
    }
}
