#Class.create for jQuery

Function to create custom class just like prototype.js's "Class.create"

##This does

- Make it easy to create class object, just like Prototype.js
- Enable us to handle events of instance, using jQuery's bind/trigger
- Enable us to create class simpler style

##Require

- jQuery

##Author

- [blog.mach3.jp](http://blog.mach3.jp)
- [follow @mach3ss](http://www.twitter.com/mach3ss)

##Usage

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

##Version

1.1.1 : Bug fix ( about console.log )
1.1 : Some feature added
1.0 : Release


##License

The MIT License

Copyright (c) 2010, matsukaze.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
