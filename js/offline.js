/**
 * @author gary.zhan
 */
var m = Math, mround = function(r) {
	return r >> 0;
}, vendor = (/webkit/i).test(navigator.appVersion) ? 'webkit' : (/firefox/i).test(navigator.userAgent) ? 'Moz' : 'opera' in window ? 'O' : ''; 

( function(ctx) {
	//Constructor
	var BaseAPI = ctx.BaseAPI = function() {
		//todo:constructor
	}
	BaseAPI.prototype = {
		init : function(jsonUrl) {
			//todo:init
		},
		checkOnline : function() {

		},
		registerEvent : function(name, data) {
			var e = document.createEvent("Event");
			e.initEvent(name, true, true);
			e.data = data;
			window.dispatchEvent(e);
		},
		listenEvent : function(name, callback) {
			window.addEventListener("connectionerror", callback(e));
		}
	}

}(JS));
