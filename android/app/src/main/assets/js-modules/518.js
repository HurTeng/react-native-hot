__d(function(n,t,e,o){Object.defineProperty(o,"__esModule",{value:!0}),o.getNewsByChannel=function(n){arguments.length>1&&void 0!==arguments[1]&&arguments[1],arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new Promise(function(t,e){var o="http://is.snssdk.com/api/news/feed/v51/?category="+n;console.log('channel:'+n),fetch(o).then(function(n){return n.json()}).then(function(n){if('success'!==n.message)throw new Error(n.status);for(var e=n.data,o=[],r=e,i=Array.isArray(r),c=0,r=i?r:r["function"==typeof Symbol?Symbol.iterator:"@@iterator"]();;){var s;if(i){if(c>=r.length)break;s=r[c++]}else{if((c=r.next()).done)break;s=c.value}var a=s,u=a.content;console.log(u);var f=JSON.parse(u);o.push(f)}t(o)}).catch(function(n){e(n.toString())})})},o.getVideoList=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]&&arguments[1];return new Promise(function(n,t){fetch("http://is.snssdk.com/api/news/feed/v51/?category=video").then(function(n){return n.json()}).then(function(t){if('success'!==t.message)throw new Error(t.status);!(function(){for(var e=[],o=t.data,r=function(n){var t=n.content;console.log(t);var o=JSON.parse(t);if(o.url){var r=o.video_id;console.log('videoID:'+r),i(r).then(function(n){o.video_url=n,console.log('video_url:'+o.video_url),e.push(o)}).catch(function(n){throw new Error(o.status)})}},c=o,s=Array.isArray(c),a=0,c=s?c:c["function"==typeof Symbol?Symbol.iterator:"@@iterator"]();;){var u;if(s){if(a>=c.length)break;u=c[a++]}else{if((a=c.next()).done)break;u=a.value}var f=u;r(f)}setTimeout(function(){n(e)},1e3)})()}).catch(function(n){t(n.toString())})})},o.getVideoUrl=i,o.getHotKey=function(){return new Promise(function(n,t){fetch("http://www.yidianzixun.com/home/q/hot_search_keywords?appid=web_yidian").then(function(n){return n.json()}).then(function(t){if(0!==t.code)throw new Error(t.status);var e=t.keywords.slice(),o=[];e.map(function(n,t){o.push(n.name)}),n(o)}).catch(function(n){t(n.toString())})})},o.getTipsWords=function(n){return new Promise(function(t,e){fetch("http://www.yidianzixun.com/home/q/search_channel?word="+encodeURIComponent(n)+"&appid=web_yidian").then(function(n){return n.json()}).then(function(n){if(0!==n.code)throw new Error(n.status);var e=[];if(n.channels){var o=n.channels.slice();o.map(function(n,t){'keyword'!==n.type&&'sugkwd'!==n.type||e.push(n.name)})}t(e)}).catch(function(n){e(n.toString())})})},o.getFindList=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return new Promise(function(t,e){fetch("https://m.guokr.com/apis/minisite/article.json?retrieve_type=by_channel_v2&channel_key=hot&subject_key=all&limit=10&offset="+n).then(function(n){return n.json()}).then(function(n){if(!n.ok)throw new Error('\u6682\u65f6\u65e0\u6cd5\u83b7\u5f97\u6570\u636e');t(n.result)}).catch(function(n){e(n.toString())})})};var r=t(519);function i(n){return new Promise(function(t,e){fetch((function(n){var t="/video/urls/v/1/toutiao/mp4/"+n+"?r="+(function(){for(var n='',t=0;t<16;t++){var e=Math.floor(10*Math.random());n+=e,console.log(e)}return n.toString()})(),e=(0,r.crc32)(t);console.log("video_url:"+t+",crc32str:"+e);var o="http://ib.365yg.com"+t+"&s="+e;return console.log('final_url:'+o),o})(n)).then(function(n){return n.json()}).then(function(n){if('success'!==n.message)throw new Error(n.status);var e=n.data.video_list.video_1.main_url,o=(new r.Base64).decode(e);console.log('mian_url:'+o),t(o)}).catch(function(n){e(n.toString())})})}},518);