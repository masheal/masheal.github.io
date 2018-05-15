var numOfSquare = 6;
var colors = randomColor(6);
var squareSelected = document.querySelectorAll(".square");
var colorPicked = colors[Math.floor((Math.random()*5+1))];
var colorDisplayed = document.getElementById("colorDisplayed");
var tryAgain = document.querySelector("#try");
var h1BackgroundColor = document.querySelector("h1");
var newGame = document.querySelector("#NewGame");
var mode = document.querySelectorAll(".mode");
colorDisplayed.textContent = colorPicked;

for(var i = 0; i < mode.length; i++){
	mode[i].addEventListener("click", function(){
		mode[0].classList.remove("selected");
		mode[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy Mode"? numOfSquare = 3: numOfSquare = 6;
		setColor();
	})
}

function setColor(){
	colors = randomColor(numOfSquare);
	colorPicked = colors[Math.floor((Math.random()*(numOfSquare-1)+1))];
	colorDisplayed.textContent = colorPicked;
	for(var i = 0; i < squareSelected.length; i++){
		if(colors[i]){
			squareSelected[i].style.display = "block";
			squareSelected[i].style.backgroundColor = colors[i];
		}else{
			squareSelected[i].style.display = "none";
		}
	}
}


newGame.addEventListener("click", function(){
	setColor();
	h1BackgroundColor.style.backgroundColor = "steelblue";
	newGame.textContent = "New Game";
	tryAgain.textContent = "";
	colorDisplayed.textContent = colorPicked;
})

for(var i = 0; i < squareSelected.length; i++){
	squareSelected[i].style.backgroundColor = colors[i];
	squareSelected[i].addEventListener("click",function(){
		if(this.style.backgroundColor === colorPicked){
			//correct
			tryAgain.textContent = "correct!!";
			colorChange();
			h1BackgroundColor.style.backgroundColor = colorPicked;
			newGame.textContent = "Another Game?";
		}else{
			//wrong
			this.style.backgroundColor = "black";
			tryAgain.textContent = "Try Again!!";
		}
	});
}

//all blocks have the same colors
function colorChange(){
	for(var i = 0; i < squareSelected.length; i++){
		squareSelected[i].style.backgroundColor = colorPicked;
	}
}

function randomColor(num){
	var color = [];
	for(var i = 0; i < num; i++){
		var r = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);
		color.push("rgb(" + r + ", " + g + ", " + b + ")");
	}
	return color;
}