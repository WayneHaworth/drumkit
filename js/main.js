$(document).ready(function() {

	$(window).on('keydown', function(e) {
		var audio = $('audio[data-key="' + e.keyCode + '"]');
	  
		$('div.key[data-key="' + e.keyCode + '"]').addClass('bigger');
		$('div.key').on('transitionend', function() {
			$(this).removeClass('bigger');
		});

		if (!audio[0]) { return 0; } // do not play if no audio element found
		audio[0].currentTime = 0; // reset sample if hitting the note quickly.
		audio[0].play();
	});

});