import {Base64, crc32} from "../util/encrypt.js";

//获取新闻
export function getNewsByChannel(channel, start = 0, end = 10) {
    return new Promise((resolve, reject) => {
        // let api = `http://www.yidianzixun.com/home/q/news_list_for_channel?channel_id=${channel}&cstart=${start}&cend=${end}&__from__=wap&appid=web_yidian`;
        let api = `http://is.snssdk.com/api/news/feed/v51/?category=${channel}`;
        console.log('channel:' + channel);
        fetch(api)
            .then((response) => response.json())
            .then((json) => {
                if (json.message === 'success') { // 数据请求成功
                    let newsArr = json.data; // 列表数据
                    let list = [];
                    for (let item of newsArr) {
                        // 获取内容数据
                        let content = item.content;
                        console.log(content);
                        // 获取json内容
                        let json = JSON.parse(content);
                        list.push(json); // 添加到列表中
                        // console.log(json.abstract);
                        /*                        //为每条新闻配上key
                                                item.key = item.docid;
                                                //处理图片地址
                                                if (item.image_urls) {
                                                    for (let i = 0; i < item.image_urls.length; i++) {
                                                        let imgUrl = `http://i1.go2yd.com/image.php?url=${item.image_urls[i]}&type=thumbnail_324x216`;
                                                        item.image_urls[i] = imgUrl;
                                                    }
                                                }*/
                    }
                    resolve(list);
                } else {
                    throw new Error(json.status);
                }
            })
            .catch((e) => {
                reject(e.toString())
            })
    })
}

//获取视频列表
export function getVideoList(start = 0, end = 10) {
    return new Promise((resolve, reject) => {
        let c = 'hotsoon_video';// 热门小视频
        let api = `http://is.snssdk.com/api/news/feed/v51/?category=video`;
        // let api = `http://www.yidianzixun.com/home/q/news_list_for_channel?channel_id=u13746&cstart=${start}&cend=${end}&infinite=true&refresh=1&__from__=wap&appid=web_yidian`;
        fetch(api)
            .then((response) => response.json())
            .then((json) => {
                if (json.message === 'success') { // 数据请求成功
                    let videoArr = [];

                    let newsArr = json.data; // 列表数据
                    for (let item of newsArr) {
                        // 获取内容数据
                        let content = item.content;
                        console.log(content);
                        // 获取json内容
                        let json = JSON.parse(content);


                        // 添加到视频列表中
                        if (json.url) {
                            let videoID = json.video_id; // 视频id
                            console.log('videoID:' + videoID);


                            // 获取视频url
                            getVideoUrl(videoID)
                                .then((data) => {
                                    json.video_url = data;
                                    console.log('video_url:' + json.video_url);
                                    videoArr.push(json)
                                }).catch((e) => {
                                throw new Error(json.status);
                            });

                            /*                            let video_url = "http://v11-tt.ixigua.com/f02f452df9a97b997beebd258d1b4a1c/5b9005c9/video/m/22090ece4d6324242d786e766a29ff64da8115b1b6e0000cc29bc1f667e/";
                                                        json.video_url = video_url;
                                                        console.log('video_url:' + json.video_url);
                                                        videoArr.push(json)*/
                        }

                        // getVideoContentApi("v020046f0000be7pa83bo1i7scpa49cg");

                        /*                        json.data.map((item, index) => {
                                                    if (item.video_url) {
                                                        item.key = item.url;
                                                        videoArr.push(item)
                                                    }
                                                });*/
                    }

                    // 延迟操作处理
                    setTimeout(() => {
                        resolve(videoArr);
                    }, 1000);
                } else {
                    throw new Error(json.status);
                }

            })
            .catch((e) => {
                reject(e.toString())
            })
    })
}

// 获取视频内容数据
export function getVideoUrl(videoID) {
    return new Promise((resolve, reject) => {
        fetch(getVideoContentApi(videoID)) // 根据视频ID,获取视频内容
            .then((response) => response.json())
            .then((json) => {
                if (json.message === 'success') { // 数据请求成功
                    let newsArr = json.data; // 数据
                    let main_url = newsArr.video_list.video_1.main_url; // base64位编码的url

                    // let decodedData = window.atob(main_url); // 需要浏览器支持
                    let decodedData = new Base64().decode(main_url);
                    console.log('mian_url:' + decodedData);
                    resolve(decodedData);
                } else {
                    throw new Error(json.status);
                }

            })
            .catch((e) => {
                reject(e.toString())
            })
    })
}


/**
 * 根据视频ID,获取视频内容的具体信息
 * @param videoID
 * @return http://ib.365yg.com/video/urls/v/1/toutiao/mp4/视频ID?r=16位随机数&s=加密结果
 *
 */
function getVideoContentApi(videoID) {
    // 获取16位的随机数
    let getRandom = function () {
        let result = '';
        for (let i = 0; i < 16; i++) {
            let c = Math.floor(Math.random() * 10);
            result += c;
            console.log(c);
        }
        return result.toString();
    };

    let VIDEO_HOST = "http://ib.365yg.com"; // host
    let video_url = `/video/urls/v/1/toutiao/mp4/${videoID}?r=${getRandom()}`; // 原始字符串
    let crcString = crc32(video_url); // 对原始字符串进行crc32加密
    console.log(`video_url:${video_url},crc32str:${crcString}`);

    // 获取详细的url链接数据
    let url = VIDEO_HOST + video_url + "&s=" + crcString;
    console.log('final_url:' + url);
    return url;
}


//获取新闻热搜
export function getHotKey() {
    return new Promise((resolve, reject) => {
        fetch(`http://www.yidianzixun.com/home/q/hot_search_keywords?appid=web_yidian`)
            .then((response) => response.json())
            .then((json) => {
                if (json.code === 0) {
                    let keywords = json.keywords.slice();
                    let wordArr = [];
                    keywords.map((item, index) => {
                        wordArr.push(item.name);
                    });
                    resolve(wordArr);
                } else {
                    throw new Error(json.status);
                }
            })
            .catch((e) => {
                reject(e.toString())
            })
    })
}

//获取搜索实时匹配
export function getTipsWords(words) {
    return new Promise((resolve, reject) => {
        fetch(`http://www.yidianzixun.com/home/q/search_channel?word=${encodeURIComponent(words)}&appid=web_yidian`)
            .then((response) => response.json())
            .then((json) => {
                if (json.code === 0) {
                    let wordsArr = [];
                    if (json.channels) {
                        let arr = json.channels.slice();
                        arr.map((item, index) => {
                            if (item.type === 'keyword' || item.type === 'sugkwd') {
                                wordsArr.push(item.name);
                            }
                        })
                    }
                    resolve(wordsArr);
                } else {
                    throw new Error(json.status);
                }
            })
            .catch((e) => {
                reject(e.toString())
            })
    })
}

//获取发现页面列表
export function getFindList(offset = 10) {
    return new Promise((resolve, reject) => {
        fetch(`https://m.guokr.com/apis/minisite/article.json?retrieve_type=by_channel_v2&channel_key=hot&subject_key=all&limit=10&offset=${offset}`)
            .then((response) => response.json())
            .then((json) => {
                if (json.ok) {
                    resolve(json.result)
                } else {
                    throw new Error('暂时无法获得数据');
                }
            })
            .catch((e) => {
                reject(e.toString())
            })
    })
}
