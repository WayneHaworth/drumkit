$(document).ready(function() {

	var baseUrl = "sounds/";
	var audio = ["closedhh.mp3", "handclap.mp3", "hiconga.mp3", "kick1.mp3", "kick2.mp3", "maracas.mp3", "openhh.mp3", "snare.mp3", "tom.mp3"];
	var transition_speed = 100;

	$('body').on('keypress', function(event) {
		var audio_track = keyCodeToArr(event.keyCode);
		
		
		playSound(audio_track);		

		$('.key[data-key="' + event.keyCode + '"]').addClass('bigger');
		setTimeout(function() {
			$('.key[data-key="' + event.keyCode + '"]').removeClass('bigger');
		}, transition_speed);
	});

	$('.key').click(function() {
		var i = parseInt($(this).attr('data-key'));
		var audio_track = keyCodeToArr(i);

		playSound(audio_track);

		$(this).addClass("bigger").delay(transition_speed).queue(function(next) {
			$(this).removeClass("bigger");
			next();
		});

	});

	function keyCodeToArr(key) {
		if (key === 97)  { return 0; }
		if (key === 115) { return 1; }
		if (key === 100) { return 2; }
		if (key === 102) { return 3; }
		if (key === 103) { return 4; }
		if (key === 104) { return 5; }
		if (key === 106) { return 6; }
		if (key === 107) { return 7; }
		if (key === 108) { return 8; }
	}

	function playSound(track) {
		new Audio(baseUrl + audio[track]).play();	
	}
});