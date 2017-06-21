import React, { Component } from 'react';
import { View } from 'react-native';
import FadeView from './components/FadeView';
import SlideView from './components/SlideView';
import TransformView from './components/TransformView';
import HelloApp from './components/HelloApp';
import ResponseView from './components/ResponseView';
import HotGirlView from './components/HotGirlView';

export default class App extends Component {
    render() {
        return (
            <View
                style={{ 
                    flex: 1, 
                    justifyContent: 'center', 
                    alignItems: 'stretch',
                    backgroundColor: 'lightblue'
                }}
            >
                <HotGirlView />
            </View>
        );
    }
}
