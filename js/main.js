'use strict';

(function(){

	var link = document.getElementsByTagName('a')[0];

	link.onclick = function (){
		console.log('click');
		// XHR Object
		var xhr = new XMLHttpRequest();

		// handle the "onreadystatechange" event
		// xhr.readyState property values
		// 0 = uninitialize
		// 1 = Loading
		// 2 = Loaded
		// 3 = Interactive
		// 4 = Complete

			xhr.onreadystatechange=function()
			  {
			  if (xhr.readyState===4 && xhr.status===200){
			    	var body = document.getElementsByTagName('body')[0];
			    	var p = document.createElement('p');
			    	var pText = document.createTextNode(xhr.responseText);
			    	p.appendChild(pText);
			    	body.appendChild(p);
			    }
			  };

		// open the request
		xhr.open('GET', 'files/ajax.txt', true);

		// send the request
		xhr.send(null);

		return false;
	};

})();