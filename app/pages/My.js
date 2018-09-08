'use strict';

import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableNativeFeedback,
    Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {px2dp} from '../util/format';

export default class My extends Component {
    constructor(props) {
        super(props)
    }

    // 按钮点击效果
    getClickEffect () {
        return Platform.Version >= 21 ?
            TouchableNativeFeedback.Ripple('rgba(0,0,0,0.2)', false) :
            TouchableNativeFeedback.SelectableBackground()
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.personalInfo}>
                    <View style={styles.personalTop}>
                        <Image
                            style={styles.userImg}
                            source={{uri: 'https://tvax4.sinaimg.cn/crop.0.0.480.480.180/768c39d5ly8fjje1d0teej20dc0dcq35.jpg'}}
                            resizeMode='stretch'
                        />
                    </View>

                    <View style={styles.personalBottom}>
                        <View style={[styles.personalItem, {borderRightWidth: px2dp(1), borderRightColor: '#8b8b8b'}]}>
                            <Text style={styles.itemNum}>0</Text>
                            <Text style={styles.itemText}>动态</Text>
                        </View>
                        <View style={[styles.personalItem, {borderRightWidth: px2dp(1), borderRightColor: '#8b8b8b'}]}>
                            <Text style={styles.itemNum}>0</Text>
                            <Text style={styles.itemText}>关注</Text>
                        </View>
                        <View style={styles.personalItem}>
                            <Text style={styles.itemNum}>0</Text>
                            <Text style={styles.itemText}>粉丝</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.selectBox}>
                    <TouchableNativeFeedback
                        background={this.getClickEffect()}>
                        <View style={styles.selectItem}>
                            <Icon style={[styles.selectIcon, {color: '#e3952b'}]} name='stars'/>
                            <Text style={styles.selectText}>收藏</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                        background={this.getClickEffect()}>
                        <View style={styles.selectItem}>
                            <Icon style={[styles.selectIcon, {color: '#e66489'}]} name='history'/>
                            <Text style={styles.selectText}>历史</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                        background={this.getClickEffect()}>
                        <View style={styles.selectItem}>
                            <Icon style={[styles.selectIcon, {color: '#7d91fa'}]} name='lightbulb-outline'/>
                            <Text style={styles.selectText}>夜间</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <TouchableNativeFeedback
                    background={this.getClickEffect()}>
                    <View style={[styles.bar, {marginTop: px2dp(10)}]}>
                        <Text style={styles.barTitle}>消息通知</Text>
                        <Icon style={[styles.barIcon, {color: 'rgba(0,0,0,0.5)'}]} name='keyboard-arrow-right'/>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    background={this.getClickEffect()}>
                    <View style={[styles.bar, {marginTop: px2dp(10), borderBottomWidth: 0}]}>
                        <Text style={styles.barTitle}>头条商城</Text>
                        <Icon style={[styles.barIcon, {color: 'rgba(0,0,0,0.5)'}]} name='keyboard-arrow-right'/>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    background={this.getClickEffect()}>
                    <View style={styles.bar}>
                        <Text style={styles.barTitle}>京东特供</Text>
                        <Icon style={[styles.barIcon, {color: 'rgba(0,0,0,0.5)'}]} name='keyboard-arrow-right'/>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    background={this.getClickEffect()}>
                    <View style={[styles.bar, {marginTop: px2dp(10), borderBottomWidth: 0}]}>
                        <Text style={styles.barTitle}>用户反馈</Text>
                        <Icon style={[styles.barIcon, {color: 'rgba(0,0,0,0.5)'}]} name='keyboard-arrow-right'/>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    background={this.getClickEffect()}>
                    <View style={styles.bar}>
                        <Text style={styles.barTitle}>系统设置</Text>
                        <Icon style={[styles.barIcon, {color: 'rgba(0,0,0,0.5)'}]} name='keyboard-arrow-right'/>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    personalInfo: {
        height: px2dp(180),
        backgroundColor: '#3b3b3b',
        justifyContent: 'flex-end',
        paddingBottom: px2dp(14)
    },
    personalTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: px2dp(20),
        height: px2dp(60),
        marginBottom: px2dp(22),
    },
    userImg: {
        width: px2dp(60),
        height: px2dp(60),
        borderRadius: px2dp(50),
    },
    userName: {
        marginLeft: px2dp(10),
        color: 'white',
        fontSize: px2dp(16),
        textAlign:'center',
        paddingBottom: px2dp(5)
    },
    personalBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        height: px2dp(40)
    },
    personalItem: {
        height: '100%',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemNum: {
        color: 'white',
        fontSize: px2dp(15)
    },
    itemText: {
        color: '#8b8b8b',
        fontSize: px2dp(13)
    },
    selectBox: {
        height: px2dp(60),
        flexDirection: 'row',
        borderBottomWidth: px2dp(1),
        borderBottomColor: '#f5f3f3',
    },
    selectItem: {
        flex: 1,
        height: px2dp(60),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    selectIcon: {
        fontSize: px2dp(20),
        marginBottom: px2dp(5),
    },
    selectText: {
        fontSize: px2dp(12)
    },
    bar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: px2dp(50),
        paddingLeft: px2dp(16),
        paddingRight: px2dp(12),
        backgroundColor: 'white',
        borderTopWidth: px2dp(1),
        borderBottomWidth: px2dp(1),
        borderTopColor: '#f5f3f3',
        borderBottomColor: '#f5f3f3',
    },
    barTitle: {
        color: '#212121',
        fontSize: px2dp(14)
    },
    barIcon: {
        fontSize: px2dp(20)
    }
});