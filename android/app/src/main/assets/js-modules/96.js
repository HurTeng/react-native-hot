__d(function(e,n,t,s){'use strict';n(97);var a=n(15),l=(n(23),(function(){function e(){babelHelpers.classCallCheck(this,e)}return babelHelpers.createClass(e,null,[{key:"alert",value:function(e,n,t,s,a){r.alert(e,n,t,s)}}]),e})()),r=(function(){function e(){babelHelpers.classCallCheck(this,e)}return babelHelpers.createClass(e,null,[{key:"alert",value:function(e,n,t,s){var l={title:e||'',message:n||''};s&&(l=babelHelpers.extends({},l,{cancelable:s.cancelable}));var r=t?t.slice(0,3):[{text:'OK'}],o=r.pop(),i=r.pop(),u=r.pop();u&&(l=babelHelpers.extends({},l,{buttonNeutral:u.text||''})),i&&(l=babelHelpers.extends({},l,{buttonNegative:i.text||''})),o&&(l=babelHelpers.extends({},l,{buttonPositive:o.text||''})),a.DialogManagerAndroid.showAlert(l,function(e){return console.warn(e)},function(e,n){e===a.DialogManagerAndroid.buttonClicked?n===a.DialogManagerAndroid.buttonNeutral?u.onPress&&u.onPress():n===a.DialogManagerAndroid.buttonNegative?i.onPress&&i.onPress():n===a.DialogManagerAndroid.buttonPositive&&o.onPress&&o.onPress():e===a.DialogManagerAndroid.dismissed&&s&&s.onDismiss&&s.onDismiss()})}}]),e})();t.exports=l},96);