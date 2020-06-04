var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var color;

function bodyStyle(){
	body.style.background = 
"linear-gradient(to right, " 
+ color1.value 
+ ", " 
+ color2.value 
+ ")";
css.textContent = body.style.background + ";";
return;
}

body.addEventListener("load", bodyStyle());

function setGradient() {
	bodyStyle();	
}

color1.addEventListener("input", setGradient);
color1.addEventListener("", setGradient)
color2.addEventListener("input", setGradient);
color2.addEventListener("ValueChange", setGradient)

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
  }

function setColor1() {
	color1.value = getRandomColor();
	setGradient();
}
function setColor2() {
	color2.value = getRandomColor();
	setGradient();
	
}
document.getElementById('button1').addEventListener("click", setColor1);
document.getElementById('button2').addEventListener("click", setColor2);
