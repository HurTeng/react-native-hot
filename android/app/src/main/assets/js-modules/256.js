__d(function(e,t,n,o){'use strict';var s=t(109),r=t(112),i=t(257),l=t(220),u=(function(e){function t(e,n){babelHelpers.classCallCheck(this,t);var o=babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return o._flatListRef=null,o._shouldBounceFirstRowOnMount=!1,o._onScroll=function(e){o.state.openRowKey&&o.setState({openRowKey:null}),o.props.onScroll&&o.props.onScroll(e)},o._renderItem=function(e){var t=o.props.renderQuickActions(e),n=o.props.keyExtractor(e.item,e.index);if(!t)return o.props.renderItem(e);var s=!1;return o._shouldBounceFirstRowOnMount&&(o._shouldBounceFirstRowOnMount=!1,s=!0),r.createElement(i,{slideoutView:t,isOpen:n===o.state.openRowKey,maxSwipeDistance:o._getMaxSwipeDistance(e),onOpen:function(){return o._onOpen(n)},onClose:function(){return o._onClose(n)},shouldBounceOnMount:s,onSwipeEnd:o._setListViewScrollable,onSwipeStart:o._setListViewNotScrollable},o.props.renderItem(e))},o._setListViewScrollable=function(){o._setListViewScrollableTo(!0)},o._setListViewNotScrollable=function(){o._setListViewScrollableTo(!1)},o.state={openRowKey:null},o._shouldBounceFirstRowOnMount=o.props.bounceFirstRowOnMount,o}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"render",value:function(){var e=this;return r.createElement(l,babelHelpers.extends({},this.props,{ref:function(t){e._flatListRef=t},onScroll:this._onScroll,renderItem:this._renderItem}))}},{key:"_getMaxSwipeDistance",value:function(e){return'function'==typeof this.props.maxSwipeDistance?this.props.maxSwipeDistance(e):this.props.maxSwipeDistance}},{key:"_setListViewScrollableTo",value:function(e){this._flatListRef&&this._flatListRef.setNativeProps({scrollEnabled:e})}},{key:"_onOpen",value:function(e){this.setState({openRowKey:e})}},{key:"_onClose",value:function(e){this.setState({openRowKey:null})}}]),t})(r.Component);u.propTypes=babelHelpers.extends({},l.propTypes,{bounceFirstRowOnMount:s.bool.isRequired,maxSwipeDistance:s.oneOfType([s.number,s.func]).isRequired,renderQuickActions:s.func.isRequired}),u.defaultProps=babelHelpers.extends({},l.defaultProps,{bounceFirstRowOnMount:!0,renderQuickActions:function(){return null}}),n.exports=u},256);