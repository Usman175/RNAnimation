import React, { Component } from 'react';
import { Animated, Text, View, Easing, Dimensions } from 'react-native';
import h1 from '../media/1.jpg';
import h2 from '../media/2.jpg';
import h3 from '../media/3.jpg';
import h4 from '../media/4.jpg';
import h5 from '../media/5.jpg';

const { width } = Dimensions.get('window');
const arrImages = [h1, h2, h3, h4, h5];

export default class ResponseView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: null, 
            y: null,
            rotate: new Animated.Value(0),
            index: 0
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
        const tyLe = new Animated.Value(1.5 * (locationX - x) / width);
        if (1.5 * (locationX - x) / width > 1) {
            this.setState({ 
                index: (this.state.index + 1) % 5,
                x: locationX,
                y: locationY
            });
        }

        if (1.5 * (locationX - x) / width < -1) {
            this.setState({ 
                index: (this.state.index - 1 + 5) % 5,
                x: locationX,
                y: locationY
            });
        }
        
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

        const opacity = this.state.rotate.interpolate({
            inputRange: [-1, 0, 1],
            outputRange: [0, 1, 0]
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
                    source={arrImages[this.state.index]} 
                    style={{ height: 200, width: 150, opacity, transform: [{ rotate }] }} 
                />
            </View>
        );
    }
}
