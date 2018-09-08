'use strict';

import React, { Component } from 'react';
import { TouchableOpacity,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {px2dp} from '../util/format';

// 返回顶部的组件
export default class BackToTop extends Component{
    constructor(props){
      super(props);
      this.state={
      };
    }

    render(){
        return(
          <TouchableOpacity 
		    activeOpacity={0.9} 
		    style={styles.backToTop}
		    onPress={()=>{this.props.pressHandle()}}
		  >
		    <Icon style={styles.backToTopIcon} name='arrow-upward'/>
		  </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
  backToTop:{
    position:'absolute',
    right:px2dp(10),
    bottom:px2dp(20),
    width:px2dp(38),
    height:px2dp(38),
    borderRadius:px2dp(28),
    backgroundColor:'rgba(0,0,0,0.8)',
    alignItems:'center',
    justifyContent:'center'
  },
  backToTopIcon:{
    color:'white',
    fontSize:px2dp(25)
  }
});
