var myCyan         	 = "#88FFEB";
var darkCyan         = "#76DECC";
var mediumCyan       = "#7FEBD8";
var myGreen          = "#25CC81";
var darkGreen        = "#20B06F";
var fillColor        = myGreen;
var strokeColor      = darkGreen;
var endPoint				 = "rgba(3,3,3,.25)";
window.onload        = function(){
	var theCanvas      = document.getElementById('canvas1');
		theCanvas.width  = 900;
		theCanvas.height = 300;
	if (theCanvas) {
	var ctx            = theCanvas.getContext("2d");
	if (ctx) {
		var theString    = "Drawing Text on a Canvas";
		// Draw a simple text string on canvas using default settings
		ctx.fillText(theString,20,20);
		// Draw the string with some font info
		ctx.font         = "25pt Helvetica";
		ctx.fillText(theString,20,60);
		// Draw the string with a stillStyle color
		ctx.fillStyle    = myGreen;
		ctx.fillText(theString,20,100);
		// Draw the string with a stroke and a fill with some opacity
		ctx.font         = "32pt Verdana";
		ctx.fillStyle    = darkCyan;
		ctx.strokeStyle  = "rgba(127, 235, 216, 0.25)";
		ctx.lineWidth    = 6;
		ctx.fillText(theString,20,160);
		ctx.strokeText(theString,20,160);
		}
	}
}