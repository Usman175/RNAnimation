import React, { Component } from 'react';
import { Animated, Text, View, Easing } from 'react-native';
import icon from '../media/icon.png';

export default class ResponseView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: null, 
            y: null, 
            marginLeft: new Animated.Value(0), 
            marginTop: new Animated.Value(0)
        }
    }

    onPress(evt) {
        const { locationX, locationY } = evt.nativeEvent;
        this.setState({ x: locationX, y: locationY });
        console.log(locationX, locationY);
    }

    onMove(evt) {
        const { locationX, locationY } = evt.nativeEvent;
        const { x, y } = this.state;
        const marginLeft = new Animated.Value(locationX - x);
        const marginTop = new Animated.Value(locationY - y);
        this.setState({ marginLeft, marginTop });
    }

    onRelease(evt) {
        const anim1 = Animated.timing(
            this.state.marginLeft,
            {
                toValue: 0,
                duration: 500,
                easing: Easing.bounce
            }
        );

        const anim2 = Animated.timing(
            this.state.marginTop,
            {
                toValue: 0,
                duration: 500,
                easing: Easing.bounce
            }
        );

        Animated.parallel([anim1, anim2]).start();
    }  

    render() {
        const { marginLeft, marginTop } = this.state;
        return (
            <View 
                onStartShouldSetResponder={() => true}
                onMoveShouldSetResponder={() => true}
                onResponderMove={this.onMove.bind(this)}
                onResponderRelease={this.onRelease.bind(this)}
                onResponderGrant={this.onPress.bind(this)}
                style={{
                    flex: 1,
                    backgroundColor: 'yellow'
                }}
            >
                <Animated.Image 
                    source={icon} 
                    style={{ height: 100, width: 100, marginLeft, marginTop }} 
                />
            </View>
        );
    }
}
