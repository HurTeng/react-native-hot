__d(function(e,t,r,l){Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e){var t,r;return r=t=(function(t){function r(){return babelHelpers.classCallCheck(this,r),babelHelpers.possibleConstructorReturn(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return babelHelpers.inherits(r,t),babelHelpers.createClass(r,[{key:"render",value:function(){var t=this.props,r=t.style,l=t.iconStyle,a=t.children,n=babelHelpers.objectWithoutProperties(t,["style","iconStyle","children"]),i=(0,s.default)(n,Object.keys(f.Text.propTypes),'style','name','size','color'),d=(0,s.default)(n,Object.keys(f.TouchableHighlight.propTypes)),c=(0,u.default)(n,Object.keys(i),Object.keys(d),'iconStyle','borderRadius','backgroundColor');i.style=l?[y.icon,l]:y.icon;var p=(0,s.default)(this.props,'color'),h=(0,s.default)(this.props,'backgroundColor','borderRadius');return b.default.createElement(f.TouchableHighlight,babelHelpers.extends({style:[y.touchable,h]},d),b.default.createElement(f.View,babelHelpers.extends({style:[y.container,h,r]},c),b.default.createElement(e,i),(0,o.default)(a)?b.default.createElement(f.Text,{style:[y.text,p]},a):a))}}]),r})(d.PureComponent),t.propTypes={backgroundColor:p.default.oneOfType([p.default.string,p.default.number]),borderRadius:p.default.number,color:p.default.oneOfType([p.default.string,p.default.number]),size:p.default.number,iconStyle:p.default.any,style:p.default.any,children:p.default.node},t.defaultProps={backgroundColor:h,borderRadius:5,color:'white',size:20},r};var a=t(342),o=babelHelpers.interopRequireDefault(a),n=t(351),u=babelHelpers.interopRequireDefault(n),i=t(479),s=babelHelpers.interopRequireDefault(i),d=t(46),b=babelHelpers.interopRequireDefault(d),c=t(49),p=babelHelpers.interopRequireDefault(c),f=t(340),y=f.StyleSheet.create({container:{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',padding:8},touchable:{overflow:'hidden'},icon:{marginRight:10},text:{fontWeight:'600',backgroundColor:'transparent'}}),h='#007AFF'},341);