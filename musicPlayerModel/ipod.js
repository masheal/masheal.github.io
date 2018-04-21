// Create your global variables below:
var tracklist = ["One Call Away", "Dangerously", "Marin Gaye", "Losing My Mind", "We Don't Talk Anymore", "My Gospel", "Up All Night", "Left Right Left", "Then There's You", "Suffer"];
var volLevels = [];
var slider;
var tElapsed;
var myVar;

function init() {
	for (i = 0; i < 6; i++){ 
		volLevels.push(document.getElementById('vl'+i));
	}
	for (i = 0; i < 3; i++){
		volLevels[i].style.background = '#A9A9A9';
	}
	slider = document.getElementById("bar-length");
	tElapsed = document.getElementById("play-time");
};

function volUp() {
	for(var i = 0; i < 6; i++){
		if(volLevels[i].style.backgroundColor == 'rgb(169, 169, 169)'){
		}
		else{
			volLevels[i].style.backgroundColor = '#A9A9A9';
			break;
		}
	}
}

function volDown() {
	for(var i = 5; i >= 0; i--){
		if(volLevels[i].style.backgroundColor == 'rgb(169, 169, 169)'){
			volLevels[i].style.backgroundColor = '#ffffff';
			break;
		}
	}
}

function switchPlay() {
	var switch_Play = document.getElementById("switchPlay");
	tElapsed.innerHTML = secondsToMs(slider.value);
	if(switch_Play.innerHTML == 'play_arrow'){
		switch_Play.innerHTML = 'pause';
	}else{
		switch_Play.innerHTML = 'play_arrow';
	}
	if(switch_Play.innerHTML == 'pause')
		myVar = setInterval(timeElapsed, 1000);
	else clearInterval(myVar);
}

function slide(d) {
  	tElapsed.innerHTML = secondsToMs(d);
}

function timeElapsed(){
	document.getElementById("bar-length").stepUp(1);
	var cur = document.getElementById("bar-length").value; 
	document.getElementById("play-time").innerHTML = secondsToMs(cur);
	if(cur == 180){
		document.getElementById("bar-length").value = 0;
		nextSong();
	} 
}


function nextSong() {
	document.getElementById("bar-length").value = 0;

	for(var i = 0; i < 10; i++){//change name
		if(i != 9){
			if(document.getElementById("player-song-name").innerHTML == tracklist[i]){
				document.getElementById("player-song-name").innerHTML = tracklist[i+1];
			break;
			}
		}else{
			i = 0;
			document.getElementById("player-song-name").innerHTML = tracklist[0]
			break;
		}
	}
}

function prevSong() {
	document.getElementById("bar-length").value = 0;

	for(var i = 9; i >= 0; i--){//change name
		if(i != 0){
			if(document.getElementById("player-song-name").innerHTML == tracklist[i]){
				document.getElementById("player-song-name").innerHTML = tracklist[i-1];
			break;
			}
		}else{
			i = 9;
			document.getElementById("player-song-name").innerHTML = tracklist[9]
			break;
		}
	}
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

init();