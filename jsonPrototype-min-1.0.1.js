'use strict';(function(f){function u(a,b){switch(a){case "Date":return{d:b.valueOf(),"#":a};case "RegExp":return{r:b.source,a:g.call(b),"#":a};case void 0:case null:case "":break;default:return Object.assign({},b,{"#":a})}return!1}function m(a){return isNaN(a)?v:Infinity===a?w:-Infinity===a?x:!1}function n(a){return(a=Object.getPrototypeOf(a))&&"string"===typeof a.__PROTO__?a.__PROTO__:null}function p(a,b){switch(a){case "Date":b["#"]=a;b.d=b.valueOf();b.toJSON=void 0;break;case "RegExp":k.call(b);
break;case void 0:case null:case "":break;default:b["#"]=a}}function q(a){function b(a,b,c){b=typeof a[c];var e;if("object"===b){if(e=a[c])c=Object.getPrototypeOf(e),a=c.hasOwnProperty("hasOwnProperty"),c=c&&"string"===typeof c.__PROTO__?c.__PROTO__:null,!a&&!Array.isArray(e)&&"string"!==typeof c||e instanceof RegExp||e instanceof Date||q(e),p(c,e)}else"number"===b&&!1!==(e=m(a[c]))&&(a[c]=e)}Array.isArray(a)?a.forEach(b.bind(null,a)):Object.getOwnPropertyNames(a).forEach(b.bind(null,a,null))}function l(a){var b,
d;if(b=a["#"]){if(d=y[b])return d(a);d=eval("typeof this['"+b+"'];");if("function"===d&&(d=eval("typeof this['"+b+"'].prototype;"),"object"===d))return b=Object.create(eval("this['"+b+"'].prototype;")),delete a["#"],Object.assign(b,a)}return!1}function r(a,b){function d(d,c){var e;"object"===typeof a[c]&&(e=a[c])&&(r(e,b),!1!==(e=l.call(b,e))&&(a[c]=e))}Array.isArray(a)?a.forEach(d.bind(null)):Object.getOwnPropertyNames(a).forEach(d.bind(null,null))}var z="[object BackstagePass]"==f.toString();"function"!==
typeof Object.assign&&(Object.assign=function(a){for(var b=1,d=arguments.length;b<d;++b){var f=a,c=arguments[b];try{if("object"===typeof c&&c){var e=void 0;for(e in c)c.hasOwnProperty(e)&&(f[e]=c[e])}}catch(g){}}return a});var g;g="string"===typeof/x/.b?function(){return this.b}:function(){return(this.global?"g":"")+(this.ignoreCase?"i":"")+(this.h?"u":"")+(this.multiline?"m":"")+(this.g?"y":"")};var k,t;(function(a){a.f="";return"{}"===JSON.stringify({r:a})})(/somere/g)?(t=function(){return{"#":"RegExp",
r:this.source,a:g.call(this)}},k=function(){this.toJSON=t}):k=function(){this["#"]="RegExp";this.r=this.source;this.a=g.call(this);this.toJSON=void 0};var v={valueOf:function(){return NaN},"#":"__NaN"},w={valueOf:function(){return Infinity},"#":"__Inf"},x={valueOf:function(){return-Infinity},"#":"__-Inf"},y={__NaN:function(){return NaN},__Inf:function(){return Infinity},"__-Inf":function(){return-Infinity},Date:function(a){return new Date(a.d)},RegExp:function(a){return new RegExp(a.r,a.a)}},h={pack:function(a,
b){var d=typeof b,d="object"===d?b?u(n(b),b):!1:"number"===d?m(b):!1;return!1===d?b:d},packObject:function(a){q(a);Array.isArray(a)||p(n(a),a)},unpack:function(a,b){var d;return"object"===typeof b&&b?!1===(d=l.call(this,b))?b:d:b},unpackObject:function(a,b){if("object"!==typeof b||!b)throw"bad 'hash' argument. Has type "+typeof b+", but must be object!";r(a,b);return Array.isArray(a)?a:l.call(b,a)||a}};"function"===typeof define&&define.amd?define(function(){return h}):"object"===typeof module&&module.exports?
module.exports=h:z?(f.jsonPrototype=h,f.c=["jsonPrototype"]):f.jsonPrototype=h})(this);