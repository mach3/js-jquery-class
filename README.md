Class.create for jQuery
=====

version 1.1
Function to create custom class just like prototype.js's "Class.create"

This does
-----
- Make it easy to create class object, just like Prototype.js
- Enable us to handle events of instance, using jQuery's bind/trigger
- Enable us to create class simpler style

Require
-----
- jQuery

Author
-----
[blog.mach3.jp](http://blog.mach3.jp)
[follow @mach3ss](http://www.twitter.com/mach3ss)

Usage
-----

Traditional style as Prototype.js ( Class.create )  
"initialize" method is automatically executed when a new instance is defined.

	var Human = Class.create();
	Human.prototype = {
		name:null,
		age:null,
		initialize:function(name,age){
			this.name = name;
			this.age = age;
		},
		introduce:function(){
			alert("My name is " + this.name + ", " + this.age + " years.old");
		}
	};

Inheritance.

	var Animal = Class.create();
	Animal.prototype = {
		walk:function(){
			// do something
		}
	};
	var Dog = Class.create( Animal );
	Dog.prototype = {
		bark: function(){
			alert("bow-wow");
		}
	}

More simple style

	var Animal = Class.get({
		walk:function(){
			// do something
		}
	});
	var Dog = Class.get({
		bark:function(){
			alert("bow-wow");
		}
	});

Events

	var Data = Class.get({
		ITEM_ADDED:"item_added", // Event name as constant
		items:[],
		addItem:function( item ){
			this.items.push( item );
			this.trigger( this.ITEM_ADDED ); // Fire event using "trigger"
		},
		getItemCount:function(){
			return this.items.length;
		}
	});
	var myData = new Data();
	// Add event listener using "bind"
	myData.bind( myData.ITEM_ADDED, function(e){
		alert("ItemsCount : " + this.getItemCount() );
	});
	myData.addItem( "hoge" );
