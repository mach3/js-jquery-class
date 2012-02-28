/*!
 * jQuery.class.js
 * Copyirght (c) 2010, matsukaze.
 * Lisenced under the MIT license.
 * 
 * @version 1.2.2
 * @author mach3
 * @requires jQuery
 */
var Class = Class || {};
$.extend( Class, {
	/**
	 * Function to attach class feature to function, 
	 * just like prototype.js's "Class.create()" method.
	 * 
	 * @param Object superClass Super class object. (optional)
	 * @return Object Function which has class feature.
	 * @example
	 *   var MyClass = Class.create(); 
	 *   MyClass.prototype = { ... };
	 */
	create: function( superClass ){
		var s = superClass || {};
		return function(){
			var pt, f;
			pt = {
				superclass:s.prototype,
				initObject:function(name){
					this[name] = $.extend(true, {}, this[name]);
				}
			};
			f = [ "unbind", "bind", "trigger", "on", "off" ];
			$.each(f, function(i, name){
				if( $.isFunction($.fn[name])){
					pt[name] = function(){ $.fn[name].apply($(this), arguments); };
				}
			});
			$.extend( true, pt, s.prototype, this );
			$.extend( true, this, pt );
			if( $.isFunction(this.initialize) ){
				this.initialize.apply(this, arguments);
			}
		};
	},
	/**
	 * Function to get class defenition directly, wrapper of create().
	 *
	 * @param Object def Definition of the class. (required)
	 * @param Object superClass Super class object. (optional)
	 * @return Object Class defenition
	 * @example 
	 *   var MyClass = Class.get( { ... }, MySuperClass );
	 */
	get: function( def, superClass ){
		var cls = this.create( superClass );
		cls.prototype = def;
		return cls;
	}
});
