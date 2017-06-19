import React, { Component } from 'react';
import { Animated, Text, Easing, View } from 'react-native';

export default class TransformView extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            transform: new Animated.Value(0)
        };
    }

    componentDidMount() {
        const anim1 = Animated.timing(
            this.state.transform,
            {
                toValue: 1,
                duration: 1000
            }
        );
        const anim2 = Animated.timing(
            this.state.transform,
            {
                toValue: 0,
                duration: 1000
            }
        );
        const finalAnim = Animated.sequence([anim1, anim2]);
        Animated.loop(finalAnim).start();
    }

    render() {
        // const backgroundColor = this.state.colorAnim.interpolate({
        //     inputRange: [0, 0.5, 1],
        //     outputRange: ['green', 'red', 'yellow']
        // });        
        const rotate = this.state.transform.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['15deg', '0deg', '-15deg']
        });
        return (
            <Animated.View
                style={{
                    width: 300,
                    height: 200,
                    marginBottom: 30,
                    transform: [{ rotate }, { rotateY: rotate}],
                    backgroundColor: 'green'
                }}
            />
        );
    }
}
