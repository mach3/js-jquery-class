/**
 * CustomClass
 * @version 1.0
 * @author mach3
 * @requires jQuery
 */
if( !Class ){ Class = function(){}; }
/**
 * Function to create Class, just like prototype.js's "Class.create()" method.
 * @param {Object} Class defeinition
 * @return {Object} Class defenition
 */
Class.create = function( o ){
	return function( config ){
		var c = $.extend( o, {
			bind:function( e, f ){ $(this).bind(e,f); },
			trigger:function( e ){ $(this).trigger(e); }
		});
		try{ c.initialize( config ); }catch(e){}
		return c;
	};
};