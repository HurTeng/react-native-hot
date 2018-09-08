'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    WebView,
    ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BackHandleComponent from '../components/BackHandleComponent';

import {px2dp} from '../util/format';

// webview组件
export default class WebViewPage extends BackHandleComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }

    _renderLoading() {
        return (
            <View style={{justifyContent: 'center', paddingTop: px2dp(70)}}>
                <ActivityIndicator color='red' size="large"/>
            </View>
        );
    }

    showTips(state) {

    }

    render() {
        return (
            <View style={{flex: 1}}>
                {/* 后退按钮 */}
                <View style={styles.headerBar}>
                    <View style={styles.backIconBox}>
                        <Icon style={styles.backIcon} name='chevron-left' onPress={() => {
                            this.props.navigator.pop()
                        }}/>
                    </View>
                </View>

                {/* webview */}
                <WebView
                    source={{uri: this.props.uri}}
                    style={styles.webView}
                    renderLoading={this._renderLoading.bind(this)}
                    startInLoadingState={true}
                    onLoad={this.showTips.bind(this, 'load')}
                    onError={this.showTips.bind(this, 'error')}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    webView: {
        flex: 1,
    },
    headerBar: {
        flexDirection: 'row',
        height: px2dp(40),
        backgroundColor: 'white',
        borderBottomWidth: px2dp(1),
        borderBottomColor: '#f5f5f3',
        alignItems: 'center'
    },
    backIconBox: {
        width: px2dp(40),
        height: px2dp(40),
        justifyContent: 'center',
        alignItems: 'center'
    },
    backIcon: {
        fontSize: px2dp(30)
    },
});
