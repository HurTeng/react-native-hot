__d(function(e,t,n,r){'use strict';var i=t(31),s=t(267),_=t(268),a=t(13),o=t(269)({__types:!0});var v={emit:function(e,t,n,r,i,s,_){return this.__getEventEmitter().emit(e,t,n,r,i,s,_)},emitAndHold:function(e,t,n,r,i,s,_){return this.__getEventEmitter().emitAndHold(e,t,n,r,i,s,_)},addListener:function(e,t,n){return this.__getEventEmitter().addListener(e,t,n)},once:function(e,t,n){return this.__getEventEmitter().once(e,t,n)},addRetroactiveListener:function(e,t,n){return this.__getEventEmitter().addRetroactiveListener(e,t,n)},addListenerMap:function(e,t){return this.__getEventEmitter().addListenerMap(e,t)},addRetroactiveListenerMap:function(e,t){return this.__getEventEmitter().addListenerMap(e,t)},removeAllListeners:function(){this.__getEventEmitter().removeAllListeners()},removeCurrentListener:function(){this.__getEventEmitter().removeCurrentListener()},releaseHeldEventType:function(e){this.__getEventEmitter().releaseHeldEventType(e)},__getEventEmitter:function(){if(!this.__eventEmitter){var e=new i,t=new _;this.__eventEmitter=new s(e,t)}return this.__eventEmitter}};n.exports=function(e,t){a(t,'Must supply set of valid event types');var n=e.prototype||e;a(!n.__eventEmitter,'An active emitter is already mixed in');var r=e.constructor;r&&a(r===Object||r===Function,'Mix EventEmitter into a class, not an instance'),n.hasOwnProperty(o)?babelHelpers.extends(n.__types,t):n.__types?n.__types=babelHelpers.extends({},n.__types,t):n.__types=t,babelHelpers.extends(n,v)}},266);