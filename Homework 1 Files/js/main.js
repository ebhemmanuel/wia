/*
     Name: Emmanuel Barreto
     Date: 11/24/14
     Class & Section:  WIA-00
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below

********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************

PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/
// Globals
var myGreen        = "#25CC81";
var darkGreen      = "#20B06F";
var myCyan         = "#88FFEB";
var mediumCyan     = "#7FEBD8";
var darkCyan       = "#76DECC";
var white          = "#F7F7F7";
var gray           = "#ECECEC";
var orange         = "#FF9748";
var fillColor      = myGreen;
var strokeColor    = darkGreen;
var strokeWeight   = 5;
var image          = document.getElementById('source');
/*******************************************/
window.onload      = function(){

//Draw Rectangle here

var theCanvas      = document.getElementById('canvas1');
	theCanvas.width  = 900;
	theCanvas.height = 300;
	if (theCanvas) {
		var ctx 				  = theCanvas.getContext("2d");
		if (ctx) {
			ctx.fillStyle   = "blue";
			ctx.strokeStyle = "black";
			ctx.lineWidth   = strokeWeight;
			ctx.strokeRect(0,0,100,100);
			ctx.fillRect(0,0,100,100);
		}
	}

/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here

var theCanvas2        = document.getElementById('canvas2');
	theCanvas2.width    = 900;
	theCanvas2.height   = 300;
	if (theCanvas2) {
		var ctx2 				  = theCanvas2.getContext("2d");
		if (ctx2) {

			var degrees     = 360;
			var radians     = (Math.PI/180)*degrees;
			ctx2.strokeStyle= "black";
			ctx2.fillStyle  = "rgba(175, 73, 71, .5);";
			ctx2.lineWidth  = strokeWeight;
			ctx2.beginPath();
			ctx2.arc(650,150,20,0,radians);
			ctx2.fill();
			ctx2.beginPath();
			ctx2.arc(650,150,30,0,radians);
			ctx2.stroke();
		}
	}


/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here

	var theCanvas3    = document.getElementById('canvas3');
	theCanvas3.width  = 900;
	theCanvas3.height = 300;
	if (theCanvas3) {
		var ctx3 				= theCanvas3.getContext("2d");
		if (ctx3) {
			ctx3.strokeStyle = strokeColor;
			ctx3.fillStyle   = myGreen;
			ctx3.lineWidth   = 1;
			ctx3.beginPath();
			ctx3.moveTo(100,100);
			ctx3.lineTo(160,100); // first line
			ctx3.lineTo(180,50);  // North Point
			ctx3.lineTo(200,100); // first drop from North Point
			ctx3.lineTo(260,100); // right point
			ctx3.lineTo(220,140); // right lower joint
			ctx3.lineTo(235,210); // south east point
			ctx3.lineTo(180,170); // middle joint
			ctx3.lineTo(130,210); // south west point
			ctx3.lineTo(140,140); // left lower joint
			ctx3.lineTo(100,100); // left point
			ctx3.fill();
			ctx3.stroke();
		}
	}

/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here

	var theCanvas4    = document.getElementById('canvas4');
	theCanvas4.width  = 900;
	theCanvas4.height = 300;
	if (theCanvas4) {
		var ctx4 				= theCanvas4.getContext("2d");
		if (ctx4) {
			ctx4.strokeStyle  = darkCyan;
			ctx4.fillStyle    = mediumCyan;
			// ctx4.lineWidth= strokeWeight;
			ctx4.lineJoin = "round";
			ctx4.lineCap  = "round";
			ctx4.beginPath();
			ctx4.arc(400,150,100,1*Math.PI,0,false);
			ctx4.bezierCurveTo(475,110,450,145,450,150);
			ctx4.bezierCurveTo(425,110,400,145,400,150);
			ctx4.bezierCurveTo(375,110,350,145,350,150);
			ctx4.bezierCurveTo(325,110,300,145,300,150);
			// ctx4.lineTo(450,150); // First  Point Coord
			// ctx4.lineTo(400,150); // Second Point Coord
			// ctx4.lineTo(350,150); // Third  Point Coord
			// ctx4.lineTo(300,150); // Fourth Point Coord
			ctx.fill();
			ctx4.stroke();
		}
	}

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here

	var theCanvas5    = document.getElementById('canvas5');
	theCanvas5.width  = 900;
	theCanvas5.height = 300;
	if (theCanvas) {
		var ctx5 				= theCanvas5.getContext("2d");
		if (ctx5) {
			var myString  = "Brim."
			ctx5.font     = "25pt Helvetica";
			ctx5.fillStyle= myGreen;
			ctx5.fillText(myString,150,150);
		}
	}

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here

var theCanvas6    = document.getElementById('canvas6');
	theCanvas6.width  = 900;
	theCanvas6.height = 300;
	if (theCanvas6) {
		var ctx6 				= theCanvas6.getContext("2d");
		if (ctx6) {
			ctx6.drawImage(image,50,20,image.width,image.height);
			ctx6.drawImage(image,50,20,image.width/2,image.height/2);
			ctx6.drawImage(image,300,300,300,300,12,12,200,200);
		}
	}

/*******************************************
PART 7

Putting it all together.

Using a combination of all the methods.
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here

	var theCanvas7    = document.getElementById('canvas7');
	theCanvas7.width  = 900;
	theCanvas7.height = 300;
	if (theCanvas7) {
		var ctx7 				= theCanvas7.getContext("2d");
		if (ctx7) {
			var degrees     = 360;
			var radians     = (Math.PI/180)*degrees;
			var myString    = "Today's Goal"
			var secString   = "Burn it all."
			ctx7.font       = "15pt Helvetica";
			ctx7.fillStyle  = gray;
			ctx7.fillRect(150,0,300,300);
			ctx7.fillStyle  = myGreen;
			ctx7.lineWidth  = strokeWeight;
			ctx7.beginPath();
			ctx7.arc(300,150,60,0,radians);
			ctx7.fill();
			ctx7.fillStyle  = darkGreen;
			ctx7.fillText(myString,240,60);
			ctx7.fillStyle  = white;
			ctx7.font       = "lighter 12pt Helvetica";
			ctx7.fillText(secString,265,160);
		}
	}
} // End window.load
