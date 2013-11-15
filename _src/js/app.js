// App JS

function oknFullScreen() {
	if ($(window).height() > $(".bkg").height() + 50) {
		// Enlarge jumbotron to fullscreen
		$(".bkg").css("height",function(){
			return ($(window).height() - 50);
		});
	}
}

function oknFullScreenLandingText() {
	//if ($(".landing-wrap").height() > $(window).height()) {
		// Enlarge jumbotron to fullscreen
		$(".landing-wrap").css("height",function(){
<<<<<<< HEAD
			return ($(".bkg").height() - 50);
=======
			return ($(".bkg").height() -30);
>>>>>>> Typography tweaks
		});

		// $(".landing-wrap > .landing-header > .names:after").css("width",function(){
		// 	return ($(".names").width());
		// });

	//}
}

$(document).ready(function() {
	oknFullScreen();
	oknFullScreenLandingText();
});

$(window).resize(function() {
	oknFullScreen();
	oknFullScreenLandingText();
});
