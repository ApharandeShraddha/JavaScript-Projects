
	//all selected elements

	var p1Button= document.querySelector("#p1");

	var p2Button= document.querySelector("#p2");

	var p1Display= document.querySelector("#p1Display");

	var p2Display= document.querySelector("#p2Display");

	var reset= document.querySelector("#reset");

	var winningScoreDisplay= document.querySelector("#winningScoreDisplay");

	var numInput= document.querySelector("#winningScore");

	var player1=0;
	var Player2=0;
	var ws =0;
	var gameOver= false;



// function to display changed winning score

	numInput.addEventListener("change",function(){
		
		winningScoreDisplay.textContent=this.value;
	    ws=Number(this.value);
	    resetValues();

	});

//function for player 1

	p1Button.addEventListener("click",function(){
		if(!gameOver){
			player1++;
			if(player1 === ws){
				gameOver=true;
				p1Display.classList.add("winner");
			}
			p1Display.textContent = player1;
		}

	});

//function for player 2

	p2Button.addEventListener("click",function(){
		if(!gameOver){
			Player2++;

			if(Player2 === ws){
				gameOver=true;
				p2Display.classList.add("winner");
			}
			p2Display.textContent = Player2;
		}


	});



	reset.addEventListener("click",function(){

	   resetValues();

	});

//reset function

	function resetValues(){
	 gameOver=false;
	    Player2 =0;
	    player1=0;
	    p1Display.textContent =0;
	    p2Display.textContent =0;
	    p1Display.classList.remove("winner");
	    p2Display.classList.remove("winner");
	  
	}