'use strict';

import {Dimensions} from 'react-native';

const deviceH = Dimensions.get('window').height;
const deviceW = Dimensions.get('window').width;

const basePx = 375;

export function px2dp(px) {
    return px *  deviceW / basePx;
}

//秒转换为xx:xx格式
export function formatTime(seconds){
    return [
        parseInt(seconds / 60 % 60),
        parseInt(seconds % 60)
    ].join(":").replace(/\b(\d)\b/g, "0$1");
}
