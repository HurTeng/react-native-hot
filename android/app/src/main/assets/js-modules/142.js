__d(function(t,r,e,i){'use strict';var n=r(143),s=r(144),u=r(15),o=void 0,c=void 0,f=void 0;e.exports=function(t){if('object'==typeof t)return t;var r=n.getAssetByID(t);if(!r)return null;var e=new s((function(){if(void 0===c){var t=u.SourceCode.scriptURL,r=t&&t.match(/^https?:\/\/.*?\//);c=r?r[0]:null}return c})(),(function(){if(void 0===f){var t=u.SourceCode.scriptURL;if(!t)return f=null;if(t.startsWith('assets://'))return f=null;f=t.substring(0,t.lastIndexOf('/')+1),t.startsWith('file://')||(f='file://'+f)}return f})(),r);return o?o(e):e.defaultAsset()},e.exports.pickScale=s.pickScale,e.exports.setCustomSourceTransformer=function(t){o=t}},142);