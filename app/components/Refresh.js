import React, {Component} from 'react';
import {RefreshControl} from 'react-native';

// loading刷新组件
export default class Refresh extends Component{
    render() {
        return (
            <RefreshControl
                refreshing={this.props.refresh}
                colors={['red', '#ffd500', '#0080ff', '#99e600']}
                tintColor='red'
                title="Loading..."
                titleColor='red'/>
        )
    }
}