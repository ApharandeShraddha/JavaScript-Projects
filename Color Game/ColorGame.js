  var colors=generateRandomColors(6);
  var squares=document.querySelectorAll(".square");
  var pickedColor=pickColor();
  var displayColor= document.getElementById("colorDisplay");
  displayColor.textContent=pickedColor;
  var messageDisplay = document.querySelector("#message");
  var h1 = document.querySelector("h1");
  var resetButton= document.getElementById("reset");

  resetButton.addEventListener("click",function(){
      //generate all new colors
      colors=generateRandomColors(6);
      pickedColor = pickColor();
      displayColor.textContent=pickedColor;
      // change colors of the square
    for (var i = 0; i < squares.length; i++) {
    //add random colors to square
    squares[i].style.backgroundColor=colors[i];
  }

  h1.style.backgroundColor = "#232323";

  });

  for (var i = 0; i < colors.length; i++) {
  	//add random colors to square
  	squares[i].style.backgroundColor=colors[i];

  	//add event listener
       squares[i].addEventListener("click",function(){
         //grab color of clicked square
         var clickedColor = this.style.backgroundColor;
         //Compare color with pickedColor
         console.log(clickedColor, pickedColor);
         if(clickedColor === pickedColor){
             messageDisplay.textContent="Correct!!"
             resetButton.textContent ="Play Again?"
             h1.style.backgroundColor=clickedColor;
             changeColors(clickedColor);
         	}else{
         	this.style.backgroundColor = "#232323";
          messageDisplay.textContent="try Again!!";
         }
       });
  	
  }

    function changeColors(colors){
     //lop through all colors
    for (var i = 0; i < squares.length; i++){
          squares[i].style.backgroundColor = colors;
        }
    }

  function pickColor(){
    var random= Math.floor(Math.random() * colors.length);
    return colors[random];
  }

  function generateRandomColors(num){
   var arr=[];
   
   for (var i = 0; i < num; i++) {
     //get random colors
     arr.push(randomColor());
   };

   return arr;
  }

  function randomColor(){
    //pick random number between 0-255 for res , green and blue
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b= Math.floor(Math.random() * 256);
     return "rgb("+r+", "+g+", "+b+")";
  }