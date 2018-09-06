'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ToastAndroid,
    Image,
    FlatList,
    RefreshControl,
    TouchableNativeFeedback, Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import WebViewPage from './WebViewPage';
import Swiper from '../components/Swiper';

import {getFindList} from '../api/news';
import {px2dp} from '../util/format';

export default class Find extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isFreshing: false
        }
    }

    componentDidMount() {
        this.getFindList(10);
    }

    getClickEffect () {
        return Platform.Version >= 21 ?
            TouchableNativeFeedback.Ripple('rgba(0,0,0,0.2)', false) :
            TouchableNativeFeedback.SelectableBackground()
    }

    getFindList(offset) {
        const res = getFindList(offset);
        res.then((data) => {
            let usableData = [];
            data.map((item, index) => {
                usableData.push({
                    key: item.id,
                    id: item.id,
                    url: item.url,
                    image: item.image_info.url,
                    text: item.title,
                    summary: item.summary,
                    authorImage: item.authors[0].avatar.normal || 'https://1-im.guokr.com/TL27-S81EuoahCN7pVlXlzCI6I07ORoBQCo7fDv5EUqgAAAAoAAAAFBO.png?imageView2/1/w/48/h/48',
                    authorName: item.authors[0].nickname,
                    commentNum: Math.floor(Math.random() * 200),
                    likeNum: Math.floor(Math.random() * 200)
                })
            });
            let temArr = this.state.data.slice();
            temArr.push(...usableData);
            this.setState({
                data: temArr
            })
        })
            .catch((e) => {
                ToastAndroid.show(e, ToastAndroid.SHORT);
            })
    }

    loadMore() {
        if (this.state.data.length <= 0) {
            return;
        }
        this.getFindList(this.state.data.length + 10)
    }

    refreshHandle() {
        this.setState({
            data: []
        }, () => {
            this.getFindList(10);
        });
    }

    navTo(itemId) {
        let uri = '';
        for (let i = 0; i < this.state.data.length; i++) {
            if (this.state.data[i].id === itemId) {
                uri = this.state.data[i].url;
                break;
            }
        }
        this.props.navigator.push({
            component: WebViewPage,
            args: {
                uri: uri
            }
        });
    }

    renderSwiper() {
        return (
            <Swiper
                data={this.state.data.slice(0, 5)}
                height={px2dp(200)}
                activeColor='#fa4747'
                pressHandle={this.navTo.bind(this)}
            />
        )
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <FlatList
                    ref="dataList"
                    data={this.state.data.length > 0 ? this.state.data.slice(5) : []}
                    onEndReached={this.loadMore.bind(this)}
                    onEndReachedThreshold={0.2}
                    extraData={this.state.data}
                    ListHeaderComponent={this.renderSwiper()}
                    renderItem={({item, separators}) => (
                        <TouchableNativeFeedback
                            background={this.getClickEffect()}
                            onPress={this.navTo.bind(this, item.id)}>
                            <View style={styles.itemBox}>
                                <View style={styles.itemMain}>
                                    <View style={styles.mainLeft}>
                                        <Text numberOfLines={2} style={styles.title}>{item.text}</Text>
                                        <Text numberOfLines={2} style={styles.summary}>{item.summary}</Text>
                                    </View>
                                    <Image
                                        style={styles.mainRight}
                                        source={{uri: item.image}}
                                        resizeMode='stretch'
                                    />
                                </View>
                                <View style={styles.itemTips}>
                                    <View style={styles.tipsLeft}>
                                        <Image
                                            style={styles.authorImg}
                                            source={{uri: item.authorImage}}
                                            resizeMode='stretch'
                                        />
                                        <Text style={styles.authorName}>{item.authorName}</Text>
                                    </View>
                                    <View style={styles.tipsRight}>
                                        <Icon style={styles.icon} name='comment'/>
                                        <Text style={styles.num}>{item.commentNum + ''}</Text>
                                        <Icon style={styles.icon} name='thumb-up'/>
                                        <Text style={styles.num}>{item.likeNum + ''}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableNativeFeedback>
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
            </View>
        )
    }
}

const styles = StyleSheet.create({
    itemBox: {
        height: px2dp(150),
        paddingTop: px2dp(15),
        paddingLeft: px2dp(10),
        paddingRight: px2dp(10),
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    itemMain: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    mainLeft: {
        width: px2dp(220),
    },
    title: {
        color: 'black'
    },
    summary: {
        color: '#b4b4b4',
        marginTop: px2dp(6),
        fontSize: px2dp(12)
    },
    mainRight: {
        width: px2dp(120),
        height: px2dp(100),
    },
    itemTips: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: px2dp(0.8),
        borderBottomColor: 'rgba(0,0,0,0.1)',
        paddingBottom: px2dp(10)
    },
    tipsLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    authorImg: {
        width: px2dp(20),
        height: px2dp(20),
        borderRadius: px2dp(50)
    },
    authorName: {
        marginLeft: px2dp(10),
        fontSize: px2dp(12)
    },
    tipsRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: px2dp(2),
        marginLeft: px2dp(10),
        color: '#b4b4b4'
    },
    num: {
        fontSize: px2dp(12),
        color: '#b4b4b4'
    },
})
