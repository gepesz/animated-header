/**
 * animatedHeader.js v1.0.0
 * 
 * Simple jQuery component that will animate a fixed header on scroll.
 * Important values:
 *   changeHeaderOn: how many px to scroll down before shrinking the header
 * 
 * CSS classes used:
 *   .navbar-default: default (large) header
 *   .navbar-shrink:  shrunk (small) header
 *
 * Code released under the Apache 2.0 license.
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Copyright 2015, Peter Szocs.
 * http://peter.szocs.info
 */

var animatedHeader = {
	didScroll: false,
	changeHeaderOn: 150,
	
	scrollPage: function() {
		if ( $(window).scrollTop() >= this.changeHeaderOn ) {
			$('.navbar-default').addClass('navbar-shrink');
		} else {
			$('.navbar-default').removeClass('navbar-shrink');
		}
		this.didScroll = false;
	}
};

$(window).on('scroll', function(e) {
    if( !animatedHeader.didScroll ) {
		animatedHeader.didScroll = true;
		setTimeout( animatedHeader.scrollPage(), 200 );
	}
});