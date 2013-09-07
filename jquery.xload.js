(function($) {
	'use strict';
	$.fn.xload = function(url) {
		var element = this;
		$.getJSON('http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22'+encodeURIComponent(url)+'%22&format=json\'&callback=?', function(json) {
			return element.append($(json.results[0]));
		});
	};
}(jQuery));