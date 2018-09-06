'use strict';

import React, {Component} from 'react';
import Container from './app/Container';
import {View} from 'react-native';

// app入口组件
export default class App extends Component<{}> {
    render() {
        return (
            <View style={{flex: 1}}>
                <Container/>
            </View>
        )
    }
}