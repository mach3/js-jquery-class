/**
 * jQuery.class.js
 * @version 1.1
 * @author mach3
 * @requires jQuery
 */
var Class = (Class) ? Class : {};
$.extend( Class, {
	/**
	 * Function to attach class feature to function, just like prototype.js's "Class.create()" method.
	 * @param {Object} superClass Super class object. (optional)
	 * @return {Object} Function which has class feature.
	 * @example var MyClass = Class.create(); MyClass.prototype = { ... };
	 */
	create: function( superClass ){
		var s = superClass || {}, c;
		return function(){
			var pt = {
				superclass:s.prototype,
				bind:function( e, f ){ $(this).bind(e,f); },
				trigger:function( e ){ $(this).trigger(e); },
				log:function( m ){ if($.isFunction(console.log)){ console.log( m ); } }
			};
			$.extend( true, pt, s.prototype, this );
			$.extend( true, this, pt );
			try{ this.initialize.apply(this, arguments); }
			catch(e){}
		};
	},
	/**
	 * Function to get class defenition directly, wrapper of create().
	 * @param {Object} def Definition of the class. (required)
	 * @param {Object} superClass Super class object. (optional)
	 * @return {Object} Class defenition
	 * @example var MyClass = Class.get( { ... }, MySuperClass );
	 */
	get: function( def, superClass ){
		var cls = this.create( superClass );
		cls.prototype = def;
		return cls;
	}
});