window.addEventListener("load", function(){
	window.cookieconsent.initialise({
		"palette": {
			"popup": {
				"background": "#252e39"
			},
			"button": {
				"background": "#14a7d0"
			}
		}
	});

	window.dataLayer = window.dataLayer || [];
	function gtag() {
		dataLayer.push(arguments);
	}
	gtag('js', new Date());
	gtag('config', 'UA-88091434-3');


	$(document).ready(function() {
		$("#owl-caro").owlCarousel({
			navigation : true
		});
	});
});
