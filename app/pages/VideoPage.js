'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ToastAndroid,
    RefreshControl,
    FlatList,
    TouchableOpacity,
    Image
} from 'react-native';
import BackToTop from '../components/BackToTop';
import ArsVideo from '../components/ArsVideo';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {getVideoList} from '../api/news';
import {px2dp} from '../util/format';

// 视频页面
export default class VideoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoData: [],
            isFreshing: false
        }
    }

    componentDidMount() {
        this.fetchVideoData(0, 10);
    }

    // 获取视频数据
    fetchVideoData(start, end) {
        const res = getVideoList(start, end);
        res.then((data) => {
            let temArr = this.state.videoData.slice();
            temArr.push(...data);
            this.setState({
                videoData: temArr
            })
        }).catch((e) => {
            ToastAndroid.show(e, ToastAndroid.SHORT);
        })
    }

    loadMore() {
        if (this.state.videoData.length <= 0) {
            return;
        }
        this.fetchVideoData((this.state.videoData.length + 2), (this.state.videoData.length + 12));
    }

    refreshHandle() {
        this.setState({
            videoData: []
        }, () => {
            this.fetchVideoData(0, 10);
        });
    }

    backToTop() {
        this.refs.videoList.scrollToOffset({x: 0, y: 0, animated: true});
    }

    getVideoUrl(video_url) {
        console.log('cdss:' + video_url);
        // video_url = 'https://www.w3schools.com/html/movie.mp4';
        // video_url = 'http://v11-tt.ixigua.com/d7f789e5dc3a96a679ec8657798e4ac9/5b90133d/video/m/2200bb1e35499154a66addca056d1eebe77115b588300000091f3639240/';
        // video_url = 'http://v7.pstatp.com/9a95e753ea75b7ab5cd76be0b98ffc35/5b9097eb/video/m/220f75f56927e084c90a3242ff7fad3812a115b4b8700003527b1ed079f/';

        // video_url = require('../../../assets/video.mp4');
        return video_url;
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <FlatList
                    ref="videoList"
                    style={{flex: 1}}
                    ItemSeparatorComponent={() => {
                        return (<View style={styles.line}></View>)
                    }}
                    data={this.state.videoData}
                    onEndReached={this.loadMore.bind(this)}
                    onEndReachedThreshold={0.2}
                    renderItem={({item, separators}) => (
                        <View>
                            <View style={styles.videoItem}>
                                <ArsVideo
                                    // source={item.video_url}
                                    source={this.getVideoUrl(item.video_url)}
                                    img={item.middle_image.url}
                                    title={item.title}
                                    duration={item.video_duration}
                                    height={px2dp(200)}
                                />
                                <TouchableOpacity activeOpacity={0.8} style={styles.videoTips}>
                                    {/*                                    <View style={styles.authorInfo}>
                                        <Image
                                            style={styles.authorImage}
                                            source={{uri: item.wemedia_info.image}}
                                            resizeMode='stretch'
                                        />
                                        <Text style={styles.authorName}>{item.wemedia_info.name}</Text>
                                    </View>
                                    <View style={styles.videoInfo}>
                                        <Icon style={styles.icon} name='comment'/>
                                        <Text style={styles.videoNum}>{item.comment_count}</Text>
                                        <Icon style={styles.icon} name='thumb-up'/>
                                        <Text style={styles.videoNum}>{item.like}</Text>
                                    </View>*/}
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isFreshing}
                            onRefresh={this.refreshHandle.bind(this)}
                            colors={['red', '#ffd500', '#0080ff', '#99e600']}
                            tintColor='red'
                            title="Loading..."
                            titleColor='red'
                        />
                    }
                />
                <BackToTop pressHandle={this.backToTop.bind(this)}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    line: {
        backgroundColor: '#f5f5f3',
        height: px2dp(7),
    },
    video: {
        height: px2dp(200)
    },
    videoImg: {
        height: px2dp(200)
    },
    videoItem: {
        borderBottomWidth: px2dp(0.5),
        borderBottomColor: 'rgba(0,0,0,0.2)'
    },
    videoTips: {
        flexDirection: 'row',
        height: px2dp(40),
        alignItems: 'center',
        paddingLeft: px2dp(10),
        paddingRight: px2dp(10),
        justifyContent: 'space-between'
    },
    authorInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    authorImage: {
        width: px2dp(20),
        height: px2dp(20),
        borderRadius: px2dp(50),
    },
    authorName: {
        marginLeft: px2dp(5),
        fontSize: px2dp(14)
    },
    videoInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: px2dp(2),
        marginLeft: px2dp(10),
    },
    videoNum: {
        fontSize: px2dp(14)
    }
});