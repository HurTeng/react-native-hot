'use strict';

import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TabNavigator from 'react-native-tab-navigator';
import {px2dp} from '../util/format';
let {width, height} = Dimensions.get('window');
import News from '../pages/News';
import Find from '../pages/Find';
import VideoPage from '../pages/VideoPage';
import My from '../pages/My';

// 顶部导航切换栏
export default class TabView extends Component {
  constructor(props){
    super(props);
    this.state = {
        currentTab: 'News',
        hideTabBar: false
    };
    this.tabNames = [
      ["新闻", "fiber-new", "News", <News {...this.props}/>],
      ["视频", "videocam", "VideoPage", <VideoPage {...this.props}/>],
      ["发现", "public", "Find", <Find {...this.props}/>],
      ["我的", "person", "My", <My {...this.props}/>]
    ];
    TabView.hideTabBar = TabView.hideTabBar.bind(this);
    TabView.showTabBar = TabView.showTabBar.bind(this);
  }
  static showTabBar(time){
    this.setState({hideTabBar: false})
  }
  static hideTabBar(time){
    this.setState({hideTabBar: true})
  }
  render(){
    return (
      <TabNavigator
        hidesTabTouch={true}
        tabBarStyle={[styles.tabbar,
          (this.state.hideTabBar?styles.hide:{})
        ]}
        sceneStyle={{}}>
          {
            this.tabNames.map((item, index) => {
              return (
                <TabNavigator.Item
                    key={item[2]}
                    tabStyle={styles.tab}
                    title={item[0]}
                    titleStyle={styles.tabText}
                    selected={this.state.currentTab === item[2]}
                    selectedTitleStyle={{color: "#fa4747"}}
                    renderIcon={() => <Icon style={styles.icon} name={item[1]}/>}
                    renderSelectedIcon={() => <Icon style={styles.selectedIcon} name={item[1]}/>}
                    onPress={() => this.setState({ currentTab: item[2] })}>
                    {item[3]}
                </TabNavigator.Item>
              )
            })
          }
      </TabNavigator>
    )
  }
}

const styles = StyleSheet.create({
    tabbar: {
      height: px2dp(46),
      alignItems:'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    hide: {
      transform: [
        {translateX:width}
      ]
    },
    tab:{
    },
    icon:{
      position:'relative',
      top:px2dp(3),
      fontSize:px2dp(22)
    },
    selectedIcon:{
      position:'relative',
      top:px2dp(3),
      color:'#fa4747',
      fontSize:px2dp(22)
    },
    tabText:{
      fontSize: px2dp(10),
      fontWeight:'bold'
    }
})