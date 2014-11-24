var myCyan           	 = "#88FFEB";
var darkCyan           = "#76DECC";
var mediumCyan         = "#7FEBD8";
var myGreen            = "#25CC81";
var darkGreen          = "#20B06F";
var fillColor          = myGreen;
var strokeColor        = darkGreen;
var endPoint					 = "rgba(3,3,3,.25)";
window.onload = function(){
	var theCanvas    = document.getElementById('canvas1');
	theCanvas.width  = 900;
	theCanvas.height = 300;
	if (theCanvas) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
			ctx.strokeStyle = mediumCyan;
			ctx.lineWidth   = 5;
			ctx.lineCap = "round";
			ctx.lineJoin = "round";

			// Stroke a simple bezier curve
			ctx.beginPath();
			ctx.moveTo(50,200); // start point
			ctx.bezierCurveTo(50,100,200,100,200,150)
			ctx.stroke();

			ctx.beginPath();
			ctx.moveTo(150,200); // start point
			ctx.bezierCurveTo(50,100,200,100,200,150)
			ctx.stroke();

			//show control points
			ctx.strokeStyle = endPoint;
			ctx.lineWidth   = 5;
			ctx.beginPath();
			ctx.moveTo(50,200);
			ctx.lineTo(50,100);
			ctx.lineTo(200,100);
			ctx.lineTo(200,150);
			ctx.stroke();

			//stroke quadratic curve
			ctx.strokeStyle = myGreen;
			ctx.lineWidth   = 5;
			ctx.beginPath();
			ctx.moveTo(400,200);
			ctx.quadraticCurveTo(400,100,600,150);
			ctx.stroke();

			//show control points
			ctx.strokeStyle = endPoint;
			ctx.lineWidth   = 5;
			ctx.beginPath();
			ctx.moveTo(400,200);
			ctx.lineTo(400,100);
			ctx.lineTo(600,150);
			ctx.stroke();

		}
	}
}