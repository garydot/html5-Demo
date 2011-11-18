/**
 * @author gary.zhan
 */

/**
 * class template
 */
( function(ctx) {
	//Constructor
	var SomeClass = ctx.SomeClass = function() {
		//public constructor
		this.property1 = "";
		this.property2 = 0;
	}
		
	//private property
	var privateVal = 0;

	//private function
	function somePrivateFunc() {
	}

	SomeClass.prototype = {
		init : function() {
			//todo:init
			alert("static function");
		},
		somePublicFunc : function() {
		}
	}
}(JS));

/**
 * app template
 */
//todo init 
var main = JS.main = function() {
	alert("main function");
}
$(document).ready(function() {
	JS.main();
});
