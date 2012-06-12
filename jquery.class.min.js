/*!
 * jQuery.class.js
 * Copyirght (c) 2010, matsukaze.
 * Lisenced under the MIT license.
 * 
 * @version 1.2.3
 * @author mach3
 * @requires jQuery
 */
var Class=Class||{};$.extend(Class,{create:function(b){var a=b||{};return function(){var d,c;d={superclass:a.prototype,rebase:function(e){this[e]=$.extend(true,{},this[e])}};c=["unbind","bind","trigger","on","off"];$.each(c,function(f,e){if($.isFunction($.fn[e])){d[e]=function(){$.fn[e].apply($(this),arguments)}}});$.extend(true,d,a.prototype,this);$.extend(true,this,d);if($.isFunction(this.initialize)){this.initialize.apply(this,arguments)}}},get:function(c,b){var a=this.create(b);a.prototype=c;return a}});