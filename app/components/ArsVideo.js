'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    ToastAndroid,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Video from 'react-native-video'; // 视频组件

import {px2dp, formatTime} from '../util/format';

export default class BackToTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toolsShowed: true,
            paused: false,
            curTime: 0,
            wholeDuration: 0,
            playableDuration: 0,
            playState: 0,//0表示还没加载，显示一张图片；1表示开始缓冲但还没可以播放；2表示正在播放；3表示暂停；4表示播放途中正在缓冲；5表示播放完毕
        };
        this.controlBarWidth = 246;
    }

    componentWillMount() {
        this.setState({
            wholeDuration: this.props.duration
        })
    }

    loadStart() {
        //ToastAndroid.show('begin', ToastAndroid.SHORT);
    }

    loadHandle() {
        this.setState({
            toolsShowed: false,
            playState: 2
        })
    }

    setTime(timeObj) {
        this.setState({
            curTime: timeObj.currentTime,
            playableDuration: timeObj.playableDuration
        })
    }

    onEnd() {
        this.setState({
            toolsShowed: true,
            paused: true,
            curTime: 0,
            playState: 5,
        })
    }

    videoError() {
        ToastAndroid.show('抱歉，视频出现错误', ToastAndroid.SHORT);
        // ToastAndroid.show(e, ToastAndroid.SHORT);
    }

    _onError = (error) => {
        console.log('错误' + JSON.stringify(error))
/*        this.setState({
            videoError: true,
        })*/
    };

    controlTools() {
        if (this.state.playState === 0) {
            this.setState({
                playState: 1,
                toolsShowed: true,
                paused: false
            })
        } else if (this.state.playState === 2 || this.state.playState === 3 || this.state.playState === 4) {
            this.setState({
                toolsShowed: false
            })
        }
    }

    play() {
        if (this.state.playState === 0) {
            this.setState({
                playState: 1,
                toolsShowed: true,
                paused: false
            })
        } else {
            this.setState({
                playState: 2,
                paused: false
            }, () => {
                setTimeout(() => {
                    this.setState({
                        toolsShowed: false,
                    })
                }, 2000)
            })
        }
    }

    pause() {
        this.setState({
            playState: 3,
            toolsShowed: true,
            paused: true
        })
    }

    replay() {
        this.setState({
            toolsShowed: true,
            paused: false,
            curTime: 0,
            playState: 0,
        })
    }

    pressVideoHandle() {
        this.setState({
            toolsShowed: true
        })
    }

    changeProgress(evt) {
        let locationX = evt.nativeEvent.locationX;
        let progress = (locationX / this.controlBarWidth);
        let changedTime = this.state.wholeDuration * progress;
        this.refs.videoPlayer.seek(changedTime);
    }

    render() {
        return (
            <View style={{
                height: this.props.height,
            }}>
                <Image
                    style={{
                        width: '100%',
                        height: this.props.height,
                        position: 'absolute',
                        top: 0,
                        left: 0
                    }}
                    source={{uri: this.props.img}}
                    resizeMode='stretch'
                />
                {
                    this.state.playState === 0 ?
                        <Image
                            style={{
                                width: '100%',
                                height: this.props.height,
                                position: 'absolute',
                                top: 0,
                                left: 0
                            }}
                            source={{uri: this.props.img}}
                            resizeMode='stretch'
                        />
                        :
                        <TouchableOpacity activeOpacity={1} onPress={this.pressVideoHandle.bind(this)}>
                            <Video
                                ref="videoPlayer"
                                source={{uri: this.props.source}} // 视频路径
                                rate={1.0}                   // 控制暂停/播放，0 代表暂停
                                volume={1.0}                 // 声音的放大倍数，0 代表没有声音，就是静音muted, 1 代表正常音量 normal，更大的数字表示放大的倍数
                                muted={false}                //true代表静音，默认为false.
                                paused={this.state.paused}              // true代表暂停，默认为false
                                resizeMode="cover"           // 视频的自适应伸缩铺放行为，
                                repeat={false}                // 是否重复播放
                                onLoadStart={this.loadStart.bind(this)} // 当视频开始加载时的回调函数
                                onLoad={this.loadHandle.bind(this)}    // 当视频加载完毕时的回调函数
                                onProgress={this.setTime.bind(this)}    // 进度控制，每250ms调用一次，以获取视频播放的进度
                                onEnd={this.onEnd.bind(this)}           // 当视频播放完毕后的回调函数
                                // onError={this.videoError.bind(this)}    // 当视频不能加载，或出错后的回调函数
                                onError={this._onError}    // 当视频不能加载，或出错后的回调函数
                                style={{
                                    height: this.props.height,
                                }}
                            />
                        </TouchableOpacity>
                }
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={this.controlTools.bind(this)}
                    style={{
                        display: this.state.toolsShowed ? 'flex' : 'none',
                        width: '100%',
                        height: this.props.height,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        paddingTop: px2dp(6),
                        justifyContent: 'space-between',
                    }}>
                    <Text style={{
                        color: '#fff',
                        marginLeft: px2dp(6),
                        marginRight: px2dp(6),
                    }}>{this.props.title}</Text>
                    {
                        this.state.playState === 0 || this.state.playState === 3 ?
                            <Icon onPress={this.play.bind(this)} style={styles.playIcon} name='play-arrow'/>
                            :
                            this.state.playState === 1 || this.state.playState === 4 ?
                                <ActivityIndicator color='white' size={26}/>
                                :
                                this.state.playState === 2 ?
                                    <Icon onPress={this.pause.bind(this)} style={styles.playIcon} name='pause'/>
                                    :
                                    <Icon onPress={this.replay.bind(this)} style={styles.playIcon} name='cached'/>
                    }
                    {
                        this.state.playState === 0 || this.state.playState === 5 ?
                            <View style={styles.duartion}>
                                <Text style={styles.duartionText}>{formatTime(this.state.wholeDuration)}</Text>
                            </View>
                            :
                            <TouchableOpacity activeOpacity={1} style={styles.controlBar} onPress={() => {
                                return;
                            }}>
                                <Text style={styles.controlBarText}>{formatTime(Math.floor(this.state.curTime))}</Text>
                                <View
                                    style={styles.controlBarBar}
                                    onStartShouldSetResponder={(evt) => true}
                                    onMoveShouldSetResponder={(evt) => true}
                                    onResponderGrant={this.changeProgress.bind(this)}
                                >
                                    <View style={styles.wholeProgress}></View>
                                    <View
                                        style={[styles.playableProgress, {width: ((this.state.playableDuration / this.state.wholeDuration) * 100) + '%'}]}></View>
                                    <View
                                        style={[styles.playedProgress, {width: ((this.state.curTime / this.state.wholeDuration) * 100) + '%'}]}></View>
                                    <View
                                        style={[styles.circle, {left: ((this.state.curTime / this.state.wholeDuration) * 100) + '%'}]}></View>
                                </View>
                                <Text style={styles.controlBarText}>{formatTime(this.state.wholeDuration)}</Text>
                            </TouchableOpacity>
                    }
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    videoImg: {},
    video: {},
    playIcon: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: px2dp(50)
    },
    duartion: {
        alignSelf: 'flex-end',
        width: px2dp(46),
        height: px2dp(17),
        borderRadius: px2dp(10),
        backgroundColor: 'rgba(0,0,0,0.5)',
        marginRight: px2dp(8),
        marginBottom: px2dp(8),
        justifyContent: 'center',
        alignItems: 'center'
    },
    duartionText: {
        color: '#fff',
        fontSize: px2dp(10),
    },
    controlBar: {
        width: '100%',
        height: px2dp(40),
        backgroundColor: 'rgba(0,0,0,0.8)',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: px2dp(6),
        paddingRight: px2dp(6),
        justifyContent: 'space-between'
    },
    controlBarBar: {
        flex: 1,
        marginLeft: px2dp(22),
        marginRight: px2dp(22),
        height: '100%'
    },
    wholeProgress: {
        position: 'absolute',
        top: '49%',
        height: px2dp(4),
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.4)',
        borderRadius: px2dp(6)
    },
    playableProgress: {
        position: 'absolute',
        top: '49%',
        height: px2dp(4),
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: px2dp(6),
    },
    playedProgress: {
        position: 'absolute',
        top: '49%',
        height: px2dp(4),
        backgroundColor: '#d33d3c',
        borderRadius: px2dp(6),
    },
    circle: {
        width: px2dp(14),
        height: px2dp(14),
        backgroundColor: '#fff',
        borderRadius: px2dp(100),
        position: 'absolute',
        top: '38%',
    },
    controlBarText: {
        color: 'white',
        fontSize: px2dp(12)
    }
})