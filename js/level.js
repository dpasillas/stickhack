/*

->Level class knows what's on the screen
hero: the hero of the game, sprite that user interacts with
environment: the static sprites on the screen
creeps: the sprites actively attempting to cause harm to hero

*/

function Level(hero_obj)
{
	this.hero = (hero_obj == "undefined") ? null : hero_obj;
	this.environment = [];
	this.creeps = [];
}

Level.prototype.addToEnviro = function(sprite) {
	this.environment[this.environment.length] = sprite;
};

Level.prototype.addToCreeps = function(sprite) {
	this.creeps[this.creeps.length] = sprite;
};

Level.prototype.delFromEnviro = function(index) {
	this.environment.splice(index,1);
};

Level.prototype.delFromCreeps = function(index) {
	this.creeps.splice(index,1);
};

Level.prototype.getCreepBox = function(index)
{
	//console.log("cindex:"+this.creeps[index].path.bounds);
	return this.creeps[index].path.bounds;
};
