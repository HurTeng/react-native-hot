__d(function(t,e,i,r){'use strict';var s=e(310),a=e(307),o=(function(t){function e(t){babelHelpers.classCallCheck(this,e);var i=babelHelpers.possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return i._emitting=!1,i._emitQueue=[],i._target=t,i}return babelHelpers.inherits(e,t),babelHelpers.createClass(e,[{key:"emit",value:function(t,i,r,s){if(this._emitting){var o=Array.prototype.slice.call(arguments);this._emitQueue.push(o)}else{this._emitting=!0;var l=a.pool(t,this._target,i);for(s&&(s.target&&(l.target=s.target),s.eventPhase&&(l.eventPhase=s.eventPhase),s.defaultPrevented&&l.preventDefault(),s.propagationStopped&&l.stopPropagation()),babelHelpers.get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"emit",this).call(this,String(t),l),'function'==typeof r&&r.call(this._target,l),l.dispose(),this._emitting=!1;this._emitQueue.length;){o=this._emitQueue.shift();this.emit.apply(this,o)}}}}]),e})(s);i.exports=o},309);