var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset")


var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
//if you have more then one input add ("input[type='number']")
//another way to select: you can use the exact selector type
var winningScoreDisplay = document.querySelector("p span")


var p1Score = 0;
var p2Score = 0;

var gameOver = false;
var winningScore = 5;

//gameover starts as false becuase when you start the game its doesnt start at game over.


//addEventListener beucase we want it to do something when it gets clicked.
p1Button.addEventListener("click", function(){
	//start with not gameover beucase we just started the game.
	if(!gameOver){
		//adds 1 to player score
		p1Score++;	
		if(p1Score === winningScore){
			//adds css property to winner at the end
			p1Display.classList.add("winner");
			//ends the game so neither player can move
			gameOver = true;
		}	
	}
	p1Display.textContent = p1Score;

});
p2Button.addEventListener("click", function(){
	if(!gameOver){
		//adds 1 to player score
		p2Score++;
		if (p2Score === winningScore){
			//adds css property to winner at the end
			p2Display.classList.add("winner");
			//ends the game so neither player can move
			gameOver = true
		}
	}
	p2Display.textContent = p2Score;
});

//adding a function reset() and calling it inside the EventListener will make sure that if someone changes the
//number of winns needed that it doesnt fuck things up, and just resets the game entirely.
resetButton.addEventListener("click", function(){
	reset();

});
function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");

	//So that we can continue playing after Reset is hit, we need to
	//make sure the gameOver is set to False again.

	gameOver = false;
}
//click event wont work here because we want to be able to place text inside the input as well as click
//so we have to use "change" instead.
numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = numInput.value;
	winningScore = Number(numInput.value);
	reset();
});
//To make two states coexist use a Boolean
//<span></span> elements allow you change them with JS without effecting the rest of the text elements.
//Use console.log to debug for now.
//To change a string into a interger or value use, Number($$STRING$$)

