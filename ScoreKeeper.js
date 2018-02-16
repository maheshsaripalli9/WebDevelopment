var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var p1Score = 0;
var p2Score =0;
var p1Display = document.querySelector("#p1Dis");
var p2Display = document.querySelector("#p2Dis");
var playingTo = document.querySelector("#play");
var number = document.querySelector("#number");
var gameOver = false;
var winnigScore =5;
var play = document.querySelector("p span");


p1Button.addEventListener("click", function(){

	if(!gameOver)
	{
		p1Score++;
		p1Display.textContent = p1Score;
	if(p1Score === winnigScore)
	{	
		gameOver = true;
		p1Display.classList.add("winner");
	}		
	}

});

p2Button.addEventListener("click", reset);

function reset(){
	p1Score =0;
	p2Score=0;
	gameOver = false;
	p1Display.textContent =0;
	p2Display.textContent =0;
	p1Display.classList.remove("winner");
	p1Display.classList.remove("winner");
}

resetButton.addEventListener("click", reset);

number.addEventListener("change",function(){
	play.textContent = number.value;
	winnigScore = Number(number.value);
	reset();

});

