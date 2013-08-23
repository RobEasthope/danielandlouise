// App JS

function oknFullScreen() {
	if ($(window).height() > $(".bkg").height() + 50) {
		// Enlarge jumbotron to fullscreen
		$(".bkg").css("height",function(){
			return ($(window).height());
		});
	}
}

function oknFullScreenLandingText() {
	if ($(".bkg").height() < $(window).height()) {
		// Enlarge jumbotron to fullscreen
		$(".landing-wrap").css("height",function(){
			return ($("window").height());
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