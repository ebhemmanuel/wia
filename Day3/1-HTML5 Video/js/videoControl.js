var vid;
window.onload = function() {

	// Link variable to the video
	vid = document.getElementById("vid");

};

// After create button in <body>

function clicked(){
	// Property of HTML5 video
	// currentTime - current play time in seconds
	vid.currentTime +=2;
	if(vid.currentTime>=7){
		vid.currentTime=0;
	};
};

// After add onclick to video, create pause function

function pauseToggle(){
	if(vid.paused){
		vid.play();
	}else{
		vid.pause();
	}
};