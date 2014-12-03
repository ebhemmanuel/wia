var audio;
window.onload = function() {

	// Link variable to the video
	audio = document.getElementById("audio");

};

// After create button in <body>

function clicked(){
	// Property of HTML5 video
	// currentTime - current play time in seconds
	audio.currentTime +=2;
	if(audio.currentTime>=7){
		audio.currentTime=0;
	};
};

// After add onclick to video, create pause function

function pauseToggle(){
	if(audio.paused){
		audio.play();
	}else{
		audio.pause();
	}
};