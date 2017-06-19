import React, { Component } from 'react';
import { View } from 'react-native';
import FadeView from './components/FadeView';
import SlideView from './components/SlideView';
import TransformView from './components/TransformView';

export default class App extends Component {
    render() {
        return (
            <View
                style={{ 
                    flex: 1, 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    backgroundColor: 'lightblue'
                }}
            >
                <TransformView />
            </View>
        );
    }
}
