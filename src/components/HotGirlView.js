import React, { Component } from 'react';
import { Animated, Text, View, Easing, Dimensions } from 'react-native';
import h1 from '../media/1.jpg';
import h2 from '../media/2.jpg';
import h3 from '../media/3.jpg';
import h4 from '../media/4.jpg';
import h5 from '../media/5.jpg';

const { width } = Dimensions.get('window');

export default class ResponseView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: null, 
            y: null,
            rotate: new Animated.Value(0)
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
        const tyLe = new Animated.Value((locationX - x) / width);
        this.setState({ rotate: tyLe });
    }

    onRelease(evt) {
        Animated.timing(
            this.state.rotate,
            {
                toValue: 0,
                duration: 500,
                easing: Easing.bounce
            }
        ).start();
    }  

    render() {
        const rotate = this.state.rotate.interpolate({
            inputRange: [-1, 1],
            outputRange: ['-30deg', '30deg']
        });
        return (
            <View 
                onStartShouldSetResponder={() => true}
                onMoveShouldSetResponder={() => true}
                onResponderMove={this.onMove.bind(this)}
                onResponderRelease={this.onRelease.bind(this)}
                onResponderGrant={this.onPress.bind(this)}
                style={{
                    flex: 1,
                    backgroundColor: 'yellow',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Animated.Image 
                    source={h1} 
                    style={{ height: 200, width: 150, transform: [{ rotate }] }} 
                />
            </View>
        );
    }
}
