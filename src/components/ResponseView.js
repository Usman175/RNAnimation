import React, { Component } from 'react';
import { Animated, Text, View } from 'react-native';

export default class ResponseView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: null, y: null
        }
    }

    onPress(evt) {
        const { locationX, locationY } = evt.nativeEvent;
        this.setState({ x: locationX, y: locationY });
        console.log(locationX, locationY);
    }

    onMove(evt) {
        console.log('I am moving');
    }

    onRelease(evt) {
        console.log('Stop moving');
    }  

    render() {
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
            />
        );
    }
}
