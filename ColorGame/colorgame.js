
//keeps track of what mode we are in
var numSquares = 6;
//trouble shoot using console.log and alerts :D
var colors = [];
var pickedColor
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//mode button event listener functions
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i=0; i<modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			//using a turnerary
			//this reads, "If mode is Easy then numSquares is 3 otherwise its 6"
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
			//figure out how many squares to show
			//pick new colors
			//pick a new pickedcolor
			//update page to reflect change

		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++) {
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//Grab color of clicked square and save to variable
			var clickedColor = this.style.background;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				//update the resetButton to say restart
				resetButton.textContent = "Play Again?";
				//call function changeColors(color)
				changeColors(clickedColor);
				//change h1 background
				h1.style.background = clickedColor;
			}	else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again!";
			}
			
		});

	}
}

function reset(){
		//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from arr
	pickedColor = pickColor();
	//change colorDispaly to mathc picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent="New Colors";
	//refresh message.display
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i =0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}	
	}
	//resets the h1 background color
	h1.style.background = "steelblue";
}

//Easy and Hard mode events
// easyBtn.addEventListener("click", function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 		if (colors[i]) {
// 			squares[i].style.background = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// });
// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 			squares[i].style.background = colors[i];
// 			squares[i].style.display = "block";
// 	}
// });
	


colorDisplay.textContent = pickedColor;



//creat a functions that changes all the squares to the 
//correct color, when the correct square is clicked on
function changeColors(color) {
	//first loop through all squares
	for(var i=0; i<squares.length; i++){
	//select the corect array, and change the color of the squares in that array
	squares[i].style.background=color;
	}
}
//create functions to pick a random color,
//we need it to pick a random number 0 - 255,
//then we need to use that number to access the color from the array
function pickColor (){
	//using the length of the array to generate the number..
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateRandomColors(num){
	//make an array
	var arr=[]
	//add num random colors to array
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor())
	}
	//return array in the end.
	return arr;
}
function randomColor(){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random()*256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random()*256);
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random()*256);
	
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
