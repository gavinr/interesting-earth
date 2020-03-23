var scrollStop = function (callback) {
	// Make sure a valid callback was provided
	if (!callback || typeof callback !== 'function') return;
	// Setup scrolling variable
	var isScrolling;
	// Listen for scroll events
	window.addEventListener('scroll', function (event) {
		// Clear our timeout throughout the scroll
		window.clearTimeout(isScrolling);
		// Set a timeout to run after scrolling ends
		isScrolling = setTimeout(function() {
			// Run the callback
			callback();
		}, 66);
	}, false);
};

export default scrollStop;