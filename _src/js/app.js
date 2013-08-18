// App JS

function oknFullScreen() {
	if ($(window).height() > $(".bkg").innerHeight()) {
		// Enlarge jumbotron to fullscreen
		$(".bkg").css("height",function(){
			return ($(window).innerHeight() -50);
		});
	}
}

function oknFullScreenLandingText() {
	if ($(".bkg").height() > $(".landing-wrap").height()) {
		// Enlarge jumbotron to fullscreen
		$(".landing-wrap").css("height",function(){
			return ($(".bkg").height());
		});
	}
}

$(document).ready(function() {
	oknFullScreen();
	oknFullScreenLandingText();
});

$(window).resize(function() {
	oknFullScreen();
	oknFullScreenLandingText();
});