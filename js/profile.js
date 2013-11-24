/*
->class to store persistent game data

trial array: level attempt is the index and element is time (milliseconds)
fps: frames per second or refresh rate or drawing rate
user: the display name user wants to associate with game session

*/

// class declaration
function Profile(fps,un)
{
	this.fps = (fps == "undefined") ? 60 : fps;
	this.user = (un == "undefined") ? null : un;
	this.trial = [];
}

// method to add trial results to profile.
Profile.prototype.addtrial = function(time)
{
	this.trial[this.trial.length] = time;
	console.log( "trialTime:" + this.trial[this.trial.length - 1] );
};

// method to assign fps value
Profile.prototype.setFps = function(val)
{
	this.fps = val;
};

// method to assign user
Profile.prototype.setUser = function(val)
{
	this.user = val;
};

// method to return time (hh:mm:ss:ms) for specific trial
Profile.prototype.getTrial = function(index)
{
	var totSec = this.trial[index] / 1000;
	var hrs = parseInt( totSec / 3600, 10 ) % 24;
	var mins = parseInt( totSec / 60, 10 ) % 60;
	var secs = parseInt( totSec % 60, 10 );
	
	var result;

	if (hrs !== 0 && hrs < 10) { result = "0" + hrs + ":"; }
	else if (hrs === 0) { result = "00:"; }
	else { result = hrs + ":"; }
	if (mins !== 0 && mins < 10) { result += "0" + mins + ":"; }
	else if (mins === 0) { result += "00:"; }
	else { result += mins + ":"; }
	if (secs !== 0 && secs < 10) { result += "0" + secs; }
	else if (secs === 0) { result += "00"; }
	else { result += secs; }

	//var result = (hrs < 10 ? "0" + hrs : hrs) + ":" + (mins < 10 ? "0" + mins : mins) + ":" + (secs  < 10 ? "0" + secs : secs);
	return result;
};



