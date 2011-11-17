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
	//private function
	function somePrivateFunc() {
	}
	
	//private property
	var privateVal = 0;

	SomeClass.prototype = {
		init : function(jsonUrl) {
			//todo:init
		},
		somePublicFunc : function(jsonUrl) {
		}
	}
}(JS));

/**
 * app template
 */
//todo init 
var main = JS.main = function() {

}
$(document).ready(function() {
	JS.main();
});
