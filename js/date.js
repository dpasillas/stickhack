/***
below are extensions to the javascript Date object

example of use:

var newDate = new Date();
var datetime = "LastSync: " + newDate.today() + " @ " + newDate.timeNow();
*/

//For today's date
Date.prototype.today = function()
{
	return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear();
};

//For the time now
Date.prototype.timeNow = function()
{
     return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
};



/****

object for retrieving time elapsed (ms) since object instansiation

example of use

var time = new TimeLapse();
setTimeout(
	function(){
		var tdiff=time.lapse(); console.log("tdiff:"+tdiff);
	},
	3000
);

*/
function TimeLapse()
{
	this.startd = new Date();
	this.startm = Date.parse(this.startd);
	//console.log("startd:"+this.startd);
}

TimeLapse.prototype.stopt = function()
{
	this.stopd = new Date();
	this.stopm = Date.parse(this.stopd);
	//console.log("stopd:"+this.stopd);
};

TimeLapse.prototype.lapse = function()
{
	this.stopt();
	//console.log("startm:"+this.startm);
	//console.log("stopm :"+this.stopm);

	// return milliseconds difference of instantiation and stop
	return this.stopm - this.startm;
};


