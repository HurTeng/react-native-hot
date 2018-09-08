__d(function(e,t,n,r){'use strict';t(23),t(19);var i=t(13),l=t(15).Timing,a=null;function o(){return a||(a=t(24)),a()}var u=16.666666666666668,c=[],s=[],m=[],f=[],d=[],v={},h=[],I=1,T=null,g=!1;function p(e,t){var n=I++,r=(function(){var e=m.indexOf(null);return-1===e&&(e=m.length),e})();return m[r]=n,c[r]=e,s[r]=t,n}function b(e,n,r){t(27)(e<=I,'Tried to call timer with ID %s but no such timer exists.',e);var i=m.indexOf(e);if(-1!==i){var l=s[i],a=c[i];if(a&&l){'setTimeout'!==l&&'setImmediate'!==l&&'requestAnimationFrame'!==l&&'requestIdleCallback'!==l||x(i);try{'setTimeout'===l||'setInterval'===l||'setImmediate'===l?a():'requestAnimationFrame'===l?a(o()):'requestIdleCallback'===l?a({timeRemaining:function(){return Math.max(0,u-(o()-n))},didTimeout:!!r}):console.error('Tried to call a callback with invalid type: '+l)}catch(e){T?T.push(e):T=[e]}}else console.error('No callback found for timerID '+e)}}function w(){if(f.length>0){var e=f.slice();f=[];for(var t=0;t<e.length;++t)b(e[t],0)}return f.length>0}function x(e){m[e]=null,c[e]=null,s[e]=null,h[e]=null}function k(e){if(null!=e){var t=m.indexOf(e);if(-1!==t){x(t);var n=s[t];'setImmediate'!==n&&'requestIdleCallback'!==n&&l.deleteTimer(e)}}}var q={setTimeout:function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=p(function(){return e.apply(void 0,r)},'setTimeout');return l.createTimer(a,t||0,Date.now(),!1),a},setInterval:function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=p(function(){return e.apply(void 0,r)},'setInterval');return l.createTimer(a,t||0,Date.now(),!0),a},setImmediate:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=p(function(){return e.apply(void 0,n)},'setImmediate');return f.push(i),i},requestAnimationFrame:function(e){var t=p(e,'requestAnimationFrame');return l.createTimer(t,1,Date.now(),!1),t},requestIdleCallback:function(e,t){0===d.length&&l.setSendIdleEvents(!0);var n=t&&t.timeout,r=p(null!=n?function(t){var n=v[r];return n&&(q.clearTimeout(n),delete v[r]),e(t)}:e,'requestIdleCallback');if(d.push(r),null!=n){var i=q.setTimeout(function(){var e=d.indexOf(r);e>-1&&(d.splice(e,1),b(r,o(),!0)),delete v[r],0===d.length&&l.setSendIdleEvents(!1)},n);v[r]=i}return r},cancelIdleCallback:function(e){k(e);var t=d.indexOf(e);-1!==t&&d.splice(t,1);var n=v[e];n&&(q.clearTimeout(n),delete v[e]),0===d.length&&l.setSendIdleEvents(!1)},clearTimeout:function(e){k(e)},clearInterval:function(e){k(e)},clearImmediate:function(e){k(e);var t=f.indexOf(e);-1!==t&&f.splice(t,1)},cancelAnimationFrame:function(e){k(e)},callTimers:function(e){i(0!==e.length,'Cannot call `callTimers` with an empty list of IDs.'),T=null;for(var t=0;t<e.length;t++)b(e[t],0);if(T){var n=T.length;if(n>1)for(var r=1;r<n;r++)q.setTimeout(function(e){throw e}.bind(null,T[r]),0);throw T[0]}},callIdleCallbacks:function(e){if(!(u-(o()-e)<1)){if(T=null,d.length>0){var t=d.slice();d=[];for(var n=0;n<t.length;++n)b(t[n],e)}0===d.length&&l.setSendIdleEvents(!1),T&&T.forEach(function(e){return q.setTimeout(function(){throw e},0)})}},callImmediates:function(){for(T=null;w(););T&&T.forEach(function(e){return q.setTimeout(function(){throw e},0)})},emitTimeDriftWarning:function(e){g||(g=!0,console.warn(e))}};l?n.exports=q:(console.warn("Timing native module is not available, can't set timers."),n.exports={callImmediates:q.callImmediates,setImmediate:q.setImmediate})},22);