/**
 * @author gary.zhan
 */
var fireEvent = function(name, data) {
	var e = document.createEvent("Event");
	e.initEvent(name, true, true);
	e.data = data;
	window.dispatchEvent(e);
};
var fetch = function(url, callback) {
	var xhr = new XMLHttpRequest();

	var noResponseTimer = setTimeout(function() {
		xhr.abort();
		fireEvent("connectiontimeout", {});
		if(!!localStorage[url]) {
			// We have some data cached, return that to the callback.
			callback(localStorage[url]);
			return;
		}
	}, maxWaitTime);

	xhr.onreadystatechange = function(e) {
		if(xhr.readyState != 4) {
			return;
		}

		if(xhr.status == 200) {
			fireEvent("goodconnection", {});
			clearTimeout(noResponseTimer);
			// Save the data to local storage
			localStorage[url] = xhr.responseText;
			// call the handler
			callback(xhr.responseText);
		} else {
			fireEvent("connectionerror", {});
			// There is an error of some kind, use our cached copy (if available).
			if(!!localStorage[url]) {
				// We have some data cached, return that to the callback.
				callback(localStorage[url]);
				return;
			}
		}
	};
	xhr.open("GET", url);
	xhr.send();
};
var addd = function(e) {
	alert("There is a connection error");
}
window.addEventListener("connectionerror", addd);

//setTimeout(function() { fetch("favicon.ico"); } , 30000);

// if (navigator.onLine) {
// alert('online')
// } else {
// alert('offline');
// }

// window.addEventListener("offline", function(e) {
// alert("offline");
// }, false);
//
// window.addEventListener("online", function(e) {
// alert("online");
// }, false);