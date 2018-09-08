__d(function(e,t,n,o){Object.defineProperty(o,"__esModule",{value:!0}),o.TextTrackType=void 0;var a=t(46),s=babelHelpers.interopRequireDefault(a),r=t(49),l=babelHelpers.interopRequireDefault(r),i=t(12),u=t(142),d=babelHelpers.interopRequireDefault(u),f=t(525),c=babelHelpers.interopRequireDefault(f),p=t(527),y=babelHelpers.interopRequireDefault(p),b=i.StyleSheet.create({base:{overflow:'hidden'}});o.TextTrackType=c.default;var P=(function(e){function t(e){babelHelpers.classCallCheck(this,t);var n=babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.seek=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;'ios'===i.Platform.OS?n.setNativeProps({seek:{time:e,tolerance:t}}):n.setNativeProps({seek:e})},n.presentFullscreenPlayer=function(){n.setNativeProps({fullscreen:!0})},n.dismissFullscreenPlayer=function(){n.setNativeProps({fullscreen:!1})},n._assignRoot=function(e){n._root=e},n._onLoadStart=function(e){n.props.onLoadStart&&n.props.onLoadStart(e.nativeEvent)},n._onLoad=function(e){n.props.onLoad&&n.props.onLoad(e.nativeEvent)},n._onError=function(e){n.props.onError&&n.props.onError(e.nativeEvent)},n._onProgress=function(e){n.props.onProgress&&n.props.onProgress(e.nativeEvent)},n._onSeek=function(e){n.state.showPoster&&!n.props.audioOnly&&n.setState({showPoster:!1}),n.props.onSeek&&n.props.onSeek(e.nativeEvent)},n._onEnd=function(e){n.props.onEnd&&n.props.onEnd(e.nativeEvent)},n._onTimedMetadata=function(e){n.props.onTimedMetadata&&n.props.onTimedMetadata(e.nativeEvent)},n._onFullscreenPlayerWillPresent=function(e){n.props.onFullscreenPlayerWillPresent&&n.props.onFullscreenPlayerWillPresent(e.nativeEvent)},n._onFullscreenPlayerDidPresent=function(e){n.props.onFullscreenPlayerDidPresent&&n.props.onFullscreenPlayerDidPresent(e.nativeEvent)},n._onFullscreenPlayerWillDismiss=function(e){n.props.onFullscreenPlayerWillDismiss&&n.props.onFullscreenPlayerWillDismiss(e.nativeEvent)},n._onFullscreenPlayerDidDismiss=function(e){n.props.onFullscreenPlayerDidDismiss&&n.props.onFullscreenPlayerDidDismiss(e.nativeEvent)},n._onReadyForDisplay=function(e){n.props.onReadyForDisplay&&n.props.onReadyForDisplay(e.nativeEvent)},n._onPlaybackStalled=function(e){n.props.onPlaybackStalled&&n.props.onPlaybackStalled(e.nativeEvent)},n._onPlaybackResume=function(e){n.props.onPlaybackResume&&n.props.onPlaybackResume(e.nativeEvent)},n._onPlaybackRateChange=function(e){n.state.showPoster&&0!==e.nativeEvent.playbackRate&&!n.props.audioOnly&&n.setState({showPoster:!1}),n.props.onPlaybackRateChange&&n.props.onPlaybackRateChange(e.nativeEvent)},n._onAudioBecomingNoisy=function(){n.props.onAudioBecomingNoisy&&n.props.onAudioBecomingNoisy()},n._onAudioFocusChanged=function(e){n.props.onAudioFocusChanged&&n.props.onAudioFocusChanged(e.nativeEvent)},n._onBuffer=function(e){n.props.onBuffer&&n.props.onBuffer(e.nativeEvent)},n.state={showPoster:!0},n}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"setNativeProps",value:function(e){this._root.setNativeProps(e)}},{key:"toTypeString",value:function(e){switch(typeof e){case"object":return e instanceof Date?e.toISOString():JSON.stringify(e);case"undefined":return"";default:return e.toString()}}},{key:"stringsOnlyObject",value:function(e){var t=this,n={};return Object.keys(e).forEach(function(o){n[o]=t.toTypeString(e[o])}),n}},{key:"render",value:function(){var e=this.props.resizeMode,t=(0,d.default)(this.props.source)||{},n=t.uri||'';n&&n.match(/^\//)&&(n="file://"+n);var o=!(!n||!n.match(/^https?:/)),a=!(!n||!n.match(/^(assets-library|file|content|ms-appx|ms-appdata):/)),r=void 0;r=e===y.default.stretch?i.NativeModules.UIManager.RCTVideo.Constants.ScaleToFill:e===y.default.contain?i.NativeModules.UIManager.RCTVideo.Constants.ScaleAspectFit:e===y.default.cover?i.NativeModules.UIManager.RCTVideo.Constants.ScaleAspectFill:i.NativeModules.UIManager.RCTVideo.Constants.ScaleNone;var l=babelHelpers.extends({},this.props);if(babelHelpers.extends(l,{style:[b.base,l.style],resizeMode:r,src:{uri:n,isNetwork:o,isAsset:a,type:t.type||'',mainVer:t.mainVer||0,patchVer:t.patchVer||0,requestHeaders:t.headers?this.stringsOnlyObject(t.headers):{}},onVideoLoadStart:this._onLoadStart,onVideoLoad:this._onLoad,onVideoError:this._onError,onVideoProgress:this._onProgress,onVideoSeek:this._onSeek,onVideoEnd:this._onEnd,onVideoBuffer:this._onBuffer,onTimedMetadata:this._onTimedMetadata,onVideoAudioBecomingNoisy:this._onAudioBecomingNoisy,onVideoFullscreenPlayerWillPresent:this._onFullscreenPlayerWillPresent,onVideoFullscreenPlayerDidPresent:this._onFullscreenPlayerDidPresent,onVideoFullscreenPlayerWillDismiss:this._onFullscreenPlayerWillDismiss,onVideoFullscreenPlayerDidDismiss:this._onFullscreenPlayerDidDismiss,onReadyForDisplay:this._onReadyForDisplay,onPlaybackStalled:this._onPlaybackStalled,onPlaybackResume:this._onPlaybackResume,onPlaybackRateChange:this._onPlaybackRateChange,onAudioFocusChanged:this._onAudioFocusChanged,onAudioBecomingNoisy:this._onAudioBecomingNoisy}),this.props.poster&&this.state.showPoster){var u={position:'absolute',left:0,top:0,right:0,bottom:0,resizeMode:this.props.posterResizeMode||'contain'};return s.default.createElement(i.View,{style:l.style},s.default.createElement(m,babelHelpers.extends({ref:this._assignRoot},l)),s.default.createElement(i.Image,{style:u,source:{uri:this.props.poster}}))}return s.default.createElement(m,babelHelpers.extends({ref:this._assignRoot},l))}}]),t})(a.Component);o.default=P,P.propTypes=babelHelpers.extends({src:l.default.object,seek:l.default.oneOfType([l.default.number,l.default.object]),fullscreen:l.default.bool,onVideoLoadStart:l.default.func,onVideoLoad:l.default.func,onVideoBuffer:l.default.func,onVideoError:l.default.func,onVideoProgress:l.default.func,onVideoSeek:l.default.func,onVideoEnd:l.default.func,onTimedMetadata:l.default.func,onVideoAudioBecomingNoisy:l.default.func,onVideoFullscreenPlayerWillPresent:l.default.func,onVideoFullscreenPlayerDidPresent:l.default.func,onVideoFullscreenPlayerWillDismiss:l.default.func,onVideoFullscreenPlayerDidDismiss:l.default.func,source:l.default.oneOfType([l.default.shape({uri:l.default.string}),l.default.number]),resizeMode:l.default.string,poster:l.default.string,posterResizeMode:i.Image.propTypes.resizeMode,repeat:l.default.bool,allowsExternalPlayback:l.default.bool,selectedAudioTrack:l.default.shape({type:l.default.string.isRequired,value:l.default.oneOfType([l.default.string,l.default.number])}),selectedTextTrack:l.default.shape({type:l.default.string.isRequired,value:l.default.oneOfType([l.default.string,l.default.number])}),textTracks:l.default.arrayOf(l.default.shape({title:l.default.string,uri:l.default.string.isRequired,type:l.default.oneOf([c.default.SRT,c.default.TTML,c.default.VTT]),language:l.default.string.isRequired})),paused:l.default.bool,muted:l.default.bool,volume:l.default.number,bufferConfig:l.default.shape({minBufferMs:l.default.number,maxBufferMs:l.default.number,bufferForPlaybackMs:l.default.number,bufferForPlaybackAfterRebufferMs:l.default.number}),stereoPan:l.default.number,rate:l.default.number,playInBackground:l.default.bool,playWhenInactive:l.default.bool,ignoreSilentSwitch:l.default.oneOf(['ignore','obey']),disableFocus:l.default.bool,controls:l.default.bool,audioOnly:l.default.bool,currentTime:l.default.number,progressUpdateInterval:l.default.number,useTextureView:l.default.bool,onLoadStart:l.default.func,onLoad:l.default.func,onBuffer:l.default.func,onError:l.default.func,onProgress:l.default.func,onSeek:l.default.func,onEnd:l.default.func,onFullscreenPlayerWillPresent:l.default.func,onFullscreenPlayerDidPresent:l.default.func,onFullscreenPlayerWillDismiss:l.default.func,onFullscreenPlayerDidDismiss:l.default.func,onReadyForDisplay:l.default.func,onPlaybackStalled:l.default.func,onPlaybackResume:l.default.func,onPlaybackRateChange:l.default.func,onAudioFocusChanged:l.default.func,onAudioBecomingNoisy:l.default.func,scaleX:l.default.number,scaleY:l.default.number,translateX:l.default.number,translateY:l.default.number,rotation:l.default.number},i.ViewPropTypes);var m=(0,i.requireNativeComponent)('RCTVideo',P,{nativeOnly:{src:!0,seek:!0,fullscreen:!0}})},524);