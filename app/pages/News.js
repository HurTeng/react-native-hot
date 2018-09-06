'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    RefreshControl,
    FlatList,
    TouchableHighlight,
    TouchableOpacity,
    Image,
    ToastAndroid
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // 图标
import BackToTop from '../components/BackToTop'; // 顶部返回组件
import TabList from '../components/TabList'; // 列表组件
import WebViewPage from './WebViewPage'; // webView组件
import Search from './Search'; // 搜索组件


import {getNewsByChannel} from '../api/news';
import {px2dp} from '../util/format';

//  新闻组件
export default class News extends Component {
    // 构造函数
    constructor(props) {
        super(props);
        this.state = { // 状态
            isFreshing: false, // 是否为最新
            newsData: [], // 新闻数据
            curChannelIndex: 0, // 当前频道
            channelInfo: [{'id': 'news_hot', 'name': '热点'},
                {'id': 'news_society', 'name': '社会'},
                {'id': 'news_entertainment', 'name': '娱乐'},
                {'id': 'news_tech', 'name': '科技'},
                {'id': 'news_car', 'name': '汽车'},
                {'id': 'news_sports', 'name': '体育'},
                {'id': 'news_finance', 'name': '财经'},
                {'id': 'news_military', 'name': '军事'},
                {'id': 'news_world', 'name': '国际'},
                {'id': 'essay_joke', 'name': '段子'},
                {'id': 'question_and_answer', 'name': '问答'},
                {'id': 'image_funny', 'name': '趣图'},
                {'id': '组图', 'name': '图片'}]
        }; // 频道信息
    }

    // 获取标题列表
    getItemTitles() {
        let titles = [];
        let channelInfo = this.state.channelInfo;
        channelInfo.forEach(function (channel) {
            titles.push(channel.name);
        });
        return titles;
    }

    // 获取当前频道
    getCurrentChannel() {
        let curIndex = this.state.curChannelIndex; // 当前索引
        return this.state.channelInfo[curIndex].id; // 当前频道
    }

    // 获取当前频道的新闻数据
    getCurrentNews() {
        let channel = this.getCurrentChannel();
        return this.fetchNewsData(channel, 1, 10);
    }

    // 组件挂载
    componentDidMount() {
        this.getCurrentNews(); // 获取新闻数据
    }

    // 搜索
    navToSearch() {
        this.props.navigator.push({
            component: Search,
            args: {}
        });
    }

    // 跳转到新闻详情页面
    chooseNews(url) {
        console.log('url:' + url);
        this.props.navigator.push({
            component: WebViewPage, // web页面
            args: {
                uri: url
            }
        });
    }

    // 切换频道
    changeChannel(index) {
        this.setState({
            newsData: [],
            curChannelIndex: index
        }, () => {
            this.getCurrentNews();
            this.refs.newsList.scrollToOffset({x: 0, y: 0, animated: false});
        })
    }

    // 获取新闻数据
    fetchNewsData(channelId, start, end) {
        const res = getNewsByChannel(channelId, start, end); // api接口
        res.then((newsArr) => {
            let temArr = this.state.newsData.slice(); // 返回切片数据
            temArr.push(...newsArr);
            this.setState({ // 设置状态
                newsData: temArr
            });
            console.log(temArr);
        }).catch((e) => { // 错误异常处理
            ToastAndroid.show(e, ToastAndroid.SHORT); // androidToast
        })
    }

    // 加载更多数据
    loadMore() {
        if (this.state.newsData.length <= 0) {
            return;
        }
        let channel = this.getCurrentChannel(); // 当前item
        let start = (this.state.newsData.length + 2); // 起始值
        let end = (this.state.newsData.length + 12); // 结束值
        this.fetchNewsData(channel, start, end);
    }

    // 刷新头部
    refreshHandle() {
        this.setState({
            newsData: []
        }, () => {
            this.getCurrentNews();
        });
    }

    // 返回顶部
    backToTop() {
        this.refs.newsList.scrollToOffset({x: 0, y: 0, animated: true});
    }

    // 渲染页面
    render() {
        return (
            <View style={{flex: 1}}>
                {/* 头部信息栏 */}
                <View style={styles.headerBar}>
                    <Text style={styles.headerTitle}>热点头条</Text>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        style={styles.searchBox}
                        onPress={this.navToSearch.bind(this)}>
                        <Icon style={styles.searchIcon} name='search'/>
                        <Text style={styles.searchText}>搜你想搜的</Text>
                    </TouchableOpacity>
                </View>

                {/* 侧滑栏 */}
                <TabList
                    items={this.getItemTitles()}
                    selectHandle={this.changeChannel.bind(this)}/>

                {/* 数据列表 */}
                <FlatList
                    ref="newsList"
                    ItemSeparatorComponent={() => {
                        return (<View style={styles.line}/>)
                    }}

                    data={this.state.newsData}
                    onEndReached={this.loadMore.bind(this)}
                    onEndReachedThreshold={0.2}
                    keyExtractor={(item, index) => index.toString()} // key属性
                    renderItem={({item, separators}) => (
                        <TouchableHighlight
                            onPress={this.chooseNews.bind(this, item.url)}>
                            {/* 新闻item */}
                            <View style={styles.newsItem}>
                                <Text style={styles.itemTitle}>{item.title}</Text>
                                <Text style={styles.itemAbstract}>{item.abstract}</Text>

                                {/* 图片列表 */}
                                <View style={styles.imgBox}>
                                    {
                                        item.image_list ?
                                            item.image_list.map((img, index) => {
                                                return (
                                                    <Image
                                                        style={
                                                            item.image_list.length === 1 ? styles.oneImg :
                                                                (item.image_list.length - 1) === index ? styles.lastImg : styles.itemImg
                                                        }
                                                        source={{uri: img.url}}
                                                        resizeMode='stretch'
                                                        key={index}
                                                    />
                                                )
                                            }) : []
                                    }
                                </View>

                                {/* 评论信息 */}
                                <View style={styles.tipsBox}>
                                    <Text style={styles.stick_label}>{item.stick_label}</Text>
                                    <Text style={styles.tips}>{item.source}</Text>
                                    <Text style={styles.tips}>{(item.comment_count || 0) + '评论'}</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                    )}

                    /* 刷新控制 */
                    refreshControl={
                      <RefreshControl
                            refreshing={this.state.isFreshing}
                            onRefresh={this.refreshHandle.bind(this)}
                            colors={['red', '#ffd500', '#0080ff', '#99e600']}
                            tintColor='red'
                            title="Loading..."
                            titleColor='red'/>
                    }

                />
                <BackToTop pressHandle={this.backToTop.bind(this)}/>
            </View>
        )
    }

}

// css样式
const styles = StyleSheet.create({
    headerBar: {
        height: px2dp(40),
        backgroundColor: '#d33d3c',
        flexDirection: 'row',
        paddingLeft: px2dp(10),
        paddingRight: px2dp(10),
        alignItems: 'center'
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: px2dp(18),
        color: 'white'
    },
    searchBox: {
        backgroundColor: '#f5f5f3',
        flex: 1,
        marginLeft: px2dp(15),
        height: px2dp(25),
        borderRadius: px2dp(3),
        padding: px2dp(3),
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchIcon: {
        fontSize: px2dp(18),
    },
    searchText: {
        fontSize: px2dp(13),
    },
    line: {
        backgroundColor: '#f5f5f3',
        height: px2dp(1),
    },
    newsItem: {
        backgroundColor: 'white',
        padding: px2dp(10)
    },
    itemTitle: { // 标题
        fontSize: px2dp(16),
        color: 'black',
    },
    itemAbstract: { // 摘要
        fontSize: px2dp(12),
        color: 'gray',
        paddingTop: px2dp(5),
    },
    stick_label: { // 粘性标签
        fontSize: px2dp(10),
        color: 'red',
    },
    imgBox: {
        flexDirection: 'row',
        marginTop: px2dp(6),
    },
    itemImg: {
        flex: 1,
        marginRight: px2dp(4),
        height: px2dp(70),
    },
    lastImg: {
        flex: 1,
        marginRight: 0,
        height: px2dp(70),
    },
    oneImg: {
        flex: 1,
        height: px2dp(180),
    },
    tipsBox: {
        flexDirection: 'row',
        marginTop: px2dp(6)
    },
    tips: {
        fontSize: px2dp(12),
        marginRight: px2dp(6)
    },
});