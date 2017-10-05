var colors=[
"rgb(0, 255, 0)",
"rgb(255, 255, 0)",
"rgb(255, 0, 0)",
"rgb(255, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 0, 255)"]

var squares=document.querySelectorAll(".square");
var pickedColor=colors[3];

var displayColor= document.getElementById("colorDisplay");
displayColor.textContent=pickedColor;

for (var i = 0; i < colors.length; i++) {
	//add random colors to square
	squares[i].style.backgroundColor=colors[i];

	//add event listener
     squares[i].addEventListener("click",function(){
       //grab color of clicked square
       var clickedColor = this.style.backgroundColor;
       //Compare color with pickedColor
       if(clickedColor === pickedColor){
       	alert("Correct!!");
       }else{
       	alert("Wrong!!");
       }
     });
	
}

