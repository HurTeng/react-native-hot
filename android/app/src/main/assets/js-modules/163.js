__d(function(E,t,e,R){'use strict';var i=t(164),_=t(23),s=t(166),S=(t(112),t(39)),o=t(167),n=t(168),a=t(59),l=(t(152),t(132)),N=(t(37),l({NOT_RESPONDER:null,RESPONDER_INACTIVE_PRESS_IN:null,RESPONDER_INACTIVE_PRESS_OUT:null,RESPONDER_ACTIVE_PRESS_IN:null,RESPONDER_ACTIVE_PRESS_OUT:null,RESPONDER_ACTIVE_LONG_PRESS_IN:null,RESPONDER_ACTIVE_LONG_PRESS_OUT:null,ERROR:null})),T={RESPONDER_ACTIVE_PRESS_OUT:!0,RESPONDER_ACTIVE_PRESS_IN:!0},h={RESPONDER_INACTIVE_PRESS_IN:!0,RESPONDER_ACTIVE_PRESS_IN:!0,RESPONDER_ACTIVE_LONG_PRESS_IN:!0},P={RESPONDER_ACTIVE_LONG_PRESS_IN:!0},O=l({DELAY:null,RESPONDER_GRANT:null,RESPONDER_RELEASE:null,RESPONDER_TERMINATED:null,ENTER_PRESS_RECT:null,LEAVE_PRESS_RECT:null,LONG_PRESS_DETECTED:null}),u={NOT_RESPONDER:{DELAY:N.ERROR,RESPONDER_GRANT:N.RESPONDER_INACTIVE_PRESS_IN,RESPONDER_RELEASE:N.ERROR,RESPONDER_TERMINATED:N.ERROR,ENTER_PRESS_RECT:N.ERROR,LEAVE_PRESS_RECT:N.ERROR,LONG_PRESS_DETECTED:N.ERROR},RESPONDER_INACTIVE_PRESS_IN:{DELAY:N.RESPONDER_ACTIVE_PRESS_IN,RESPONDER_GRANT:N.ERROR,RESPONDER_RELEASE:N.NOT_RESPONDER,RESPONDER_TERMINATED:N.NOT_RESPONDER,ENTER_PRESS_RECT:N.RESPONDER_INACTIVE_PRESS_IN,LEAVE_PRESS_RECT:N.RESPONDER_INACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:N.ERROR},RESPONDER_INACTIVE_PRESS_OUT:{DELAY:N.RESPONDER_ACTIVE_PRESS_OUT,RESPONDER_GRANT:N.ERROR,RESPONDER_RELEASE:N.NOT_RESPONDER,RESPONDER_TERMINATED:N.NOT_RESPONDER,ENTER_PRESS_RECT:N.RESPONDER_INACTIVE_PRESS_IN,LEAVE_PRESS_RECT:N.RESPONDER_INACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:N.ERROR},RESPONDER_ACTIVE_PRESS_IN:{DELAY:N.ERROR,RESPONDER_GRANT:N.ERROR,RESPONDER_RELEASE:N.NOT_RESPONDER,RESPONDER_TERMINATED:N.NOT_RESPONDER,ENTER_PRESS_RECT:N.RESPONDER_ACTIVE_PRESS_IN,LEAVE_PRESS_RECT:N.RESPONDER_ACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:N.RESPONDER_ACTIVE_LONG_PRESS_IN},RESPONDER_ACTIVE_PRESS_OUT:{DELAY:N.ERROR,RESPONDER_GRANT:N.ERROR,RESPONDER_RELEASE:N.NOT_RESPONDER,RESPONDER_TERMINATED:N.NOT_RESPONDER,ENTER_PRESS_RECT:N.RESPONDER_ACTIVE_PRESS_IN,LEAVE_PRESS_RECT:N.RESPONDER_ACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:N.ERROR},RESPONDER_ACTIVE_LONG_PRESS_IN:{DELAY:N.ERROR,RESPONDER_GRANT:N.ERROR,RESPONDER_RELEASE:N.NOT_RESPONDER,RESPONDER_TERMINATED:N.NOT_RESPONDER,ENTER_PRESS_RECT:N.RESPONDER_ACTIVE_LONG_PRESS_IN,LEAVE_PRESS_RECT:N.RESPONDER_ACTIVE_LONG_PRESS_OUT,LONG_PRESS_DETECTED:N.RESPONDER_ACTIVE_LONG_PRESS_IN},RESPONDER_ACTIVE_LONG_PRESS_OUT:{DELAY:N.ERROR,RESPONDER_GRANT:N.ERROR,RESPONDER_RELEASE:N.NOT_RESPONDER,RESPONDER_TERMINATED:N.NOT_RESPONDER,ENTER_PRESS_RECT:N.RESPONDER_ACTIVE_LONG_PRESS_IN,LEAVE_PRESS_RECT:N.RESPONDER_ACTIVE_LONG_PRESS_OUT,LONG_PRESS_DETECTED:N.ERROR},error:{DELAY:N.NOT_RESPONDER,RESPONDER_GRANT:N.RESPONDER_INACTIVE_PRESS_IN,RESPONDER_RELEASE:N.NOT_RESPONDER,RESPONDER_TERMINATED:N.NOT_RESPONDER,ENTER_PRESS_RECT:N.NOT_RESPONDER,LEAVE_PRESS_RECT:N.NOT_RESPONDER,LONG_PRESS_DETECTED:N.NOT_RESPONDER}},r={Mixin:{componentDidMount:function(){_.isTVOS&&(this._tvEventHandler=new o,this._tvEventHandler.enable(this,function(E,t){var e=S.findNodeHandle(E);t.dispatchConfig={},e===t.tag&&('focus'===t.eventType?E.touchableHandleActivePressIn&&E.touchableHandleActivePressIn(t):'blur'===t.eventType?E.touchableHandleActivePressOut&&E.touchableHandleActivePressOut(t):'select'===t.eventType&&E.touchableHandlePress&&E.touchableHandlePress(t))}))},componentWillUnmount:function(){this._tvEventHandler&&(this._tvEventHandler.disable(),delete this._tvEventHandler),this.touchableDelayTimeout&&clearTimeout(this.touchableDelayTimeout),this.longPressDelayTimeout&&clearTimeout(this.longPressDelayTimeout),this.pressOutDelayTimeout&&clearTimeout(this.pressOutDelayTimeout)},touchableGetInitialState:function(){return{touchable:{touchState:void 0,responderID:null}}},touchableHandleResponderTerminationRequest:function(){return!this.props.rejectResponderTermination},touchableHandleStartShouldSetResponder:function(){return!this.props.disabled},touchableLongPressCancelsPress:function(){return!0},touchableHandleResponderGrant:function(E){var t=E.currentTarget;E.persist(),this.pressOutDelayTimeout&&clearTimeout(this.pressOutDelayTimeout),this.pressOutDelayTimeout=null,this.state.touchable.touchState=N.NOT_RESPONDER,this.state.touchable.responderID=t,this._receiveSignal(O.RESPONDER_GRANT,E);var e=void 0!==this.touchableGetHighlightDelayMS?Math.max(this.touchableGetHighlightDelayMS(),0):130;0!==(e=isNaN(e)?130:e)?this.touchableDelayTimeout=setTimeout(this._handleDelay.bind(this,E),e):this._handleDelay(E);var R=void 0!==this.touchableGetLongPressDelayMS?Math.max(this.touchableGetLongPressDelayMS(),10):370;R=isNaN(R)?370:R,this.longPressDelayTimeout=setTimeout(this._handleLongDelay.bind(this,E),R+e)},touchableHandleResponderRelease:function(E){this._receiveSignal(O.RESPONDER_RELEASE,E)},touchableHandleResponderTerminate:function(E){this._receiveSignal(O.RESPONDER_TERMINATED,E)},touchableHandleResponderMove:function(E){if(this.state.touchable.touchState!==N.RESPONDER_INACTIVE_PRESS_IN&&this.state.touchable.positionOnActivate){var t=this.state.touchable.positionOnActivate,e=this.state.touchable.dimensionsOnActivate,R=this.touchableGetPressRectOffset?this.touchableGetPressRectOffset():{left:20,right:20,top:20,bottom:20},i=R.left,_=R.top,s=R.right,S=R.bottom,o=this.touchableGetHitSlop?this.touchableGetHitSlop():null;o&&(i+=o.left,_+=o.top,s+=o.right,S+=o.bottom);var a=n.extractSingleTouch(E.nativeEvent),l=a&&a.pageX,T=a&&a.pageY;if(this.pressInLocation)this._getDistanceBetweenPoints(l,T,this.pressInLocation.pageX,this.pressInLocation.pageY)>10&&this._cancelLongPressDelayTimeout();if(l>t.left-i&&T>t.top-_&&l<t.left+e.width+s&&T<t.top+e.height+S)this._receiveSignal(O.ENTER_PRESS_RECT,E),this.state.touchable.touchState===N.RESPONDER_INACTIVE_PRESS_IN&&this._cancelLongPressDelayTimeout();else this._cancelLongPressDelayTimeout(),this._receiveSignal(O.LEAVE_PRESS_RECT,E)}},_remeasureMetricsOnActivation:function(){var E=this.state.touchable.responderID;null!=E&&a.measure(E,this._handleQueryLayout)},_handleQueryLayout:function(E,t,e,R,_,S){(E||t||e||R||_||S)&&(this.state.touchable.positionOnActivate&&s.release(this.state.touchable.positionOnActivate),this.state.touchable.dimensionsOnActivate&&i.release(this.state.touchable.dimensionsOnActivate),this.state.touchable.positionOnActivate=s.getPooled(_,S),this.state.touchable.dimensionsOnActivate=i.getPooled(e,R))},_handleDelay:function(E){this.touchableDelayTimeout=null,this._receiveSignal(O.DELAY,E)},_handleLongDelay:function(E){this.longPressDelayTimeout=null;var t=this.state.touchable.touchState;t!==N.RESPONDER_ACTIVE_PRESS_IN&&t!==N.RESPONDER_ACTIVE_LONG_PRESS_IN?console.error('Attempted to transition from state `'+t+'` to `'+N.RESPONDER_ACTIVE_LONG_PRESS_IN+"`, which is not supported. This is most likely due to `Touchable.longPressDelayTimeout` not being cancelled."):this._receiveSignal(O.LONG_PRESS_DETECTED,E)},_receiveSignal:function(E,t){var e=this.state.touchable.responderID,R=this.state.touchable.touchState,i=u[R]&&u[R][E];if(e||E!==O.RESPONDER_RELEASE){if(!i)throw new Error('Unrecognized signal `'+E+'` or state `'+R+'` for Touchable responder `'+e+'`');if(i===N.ERROR)throw new Error('Touchable cannot transition from `'+R+'` to `'+E+'` for responder `'+e+'`');R!==i&&(this._performSideEffectsForTransition(R,i,E,t),this.state.touchable.touchState=i)}},_cancelLongPressDelayTimeout:function(){this.longPressDelayTimeout&&clearTimeout(this.longPressDelayTimeout),this.longPressDelayTimeout=null},_isHighlight:function(E){return E===N.RESPONDER_ACTIVE_PRESS_IN||E===N.RESPONDER_ACTIVE_LONG_PRESS_IN},_savePressInLocation:function(E){var t=n.extractSingleTouch(E.nativeEvent),e=t&&t.pageX,R=t&&t.pageY,i=t&&t.locationX,_=t&&t.locationY;this.pressInLocation={pageX:e,pageY:R,locationX:i,locationY:_}},_getDistanceBetweenPoints:function(E,t,e,R){var i=E-e,_=t-R;return Math.sqrt(i*i+_*_)},_performSideEffectsForTransition:function(E,t,e,R){var i=this._isHighlight(E),_=this._isHighlight(t);if((e===O.RESPONDER_TERMINATED||e===O.RESPONDER_RELEASE)&&this._cancelLongPressDelayTimeout(),!T[E]&&T[t]&&this._remeasureMetricsOnActivation(),h[E]&&e===O.LONG_PRESS_DETECTED&&this.touchableHandleLongPress&&this.touchableHandleLongPress(R),_&&!i?this._startHighlight(R):!_&&i&&this._endHighlight(R),h[E]&&e===O.RESPONDER_RELEASE){var s=!!this.props.onLongPress,S=P[E]&&(!s||!this.touchableLongPressCancelsPress());(!P[E]||S)&&this.touchableHandlePress&&(_||i||(this._startHighlight(R),this._endHighlight(R)),this.touchableHandlePress(R))}this.touchableDelayTimeout&&clearTimeout(this.touchableDelayTimeout),this.touchableDelayTimeout=null},_startHighlight:function(E){this._savePressInLocation(E),this.touchableHandleActivePressIn&&this.touchableHandleActivePressIn(E)},_endHighlight:function(E){var t=this;this.touchableHandleActivePressOut&&(this.touchableGetPressOutDelayMS&&this.touchableGetPressOutDelayMS()?this.pressOutDelayTimeout=setTimeout(function(){t.touchableHandleActivePressOut(E)},this.touchableGetPressOutDelayMS()):this.touchableHandleActivePressOut(E))}},TOUCH_TARGET_DEBUG:!1,renderDebugView:function(E){E.color,E.hitSlop;if(!r.TOUCH_TARGET_DEBUG)return null;throw Error('Touchable.TOUCH_TARGET_DEBUG should not be enabled in prod!')}};e.exports=r},163);