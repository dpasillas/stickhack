/*

path: the paperjs path object
stamina: integer value to be used for sprite characteristics
durability: aka how much health you got
speed: how fast sprite moves
sid: sprite identification so we know what type of path obj it is
	i.e. sid(0) is the hero or sid(1) is a creep
behavior: a vector indicating the movement of the sprite

*/

// class constructor
function Sprite(path_obj,durability_val,stamina_val,speed_val, sprite_id, behavior_vector)
{
	this.path = (path_obj == "undefined") ? null: path_obj;
	this.durability = (durability_val == "undefined") ? null: durability_val;
	this.stamina = (stamina_val == "undefined") ? null: stamina_val;
	this.speed = (speed_val == "undefined") ? null: speed_val;
	this.sid = (sprite_id == "undefined") ? null: sprite_id;
	this.behavior = ( behavior_vector == "undefined" ) ? null : behavior_vector;
	this.life = this.durability;

	this.collidable = true;
	this.active = true;
}

// wipeout
Sprite.prototype.clear = function()
{
	//this.path;
	this.durability = null;
	this.stamina = null;
	this.speed = null;
	this.sid = -1;
	this.life = this.durability;
	this.behavior = new Point(0,0);
};

// return location coordinate of sprite
Sprite.prototype.getPoint = function()
{
	return this.path.position;
};

// setter for path position
Sprite.prototype.setPosition = function(pos)
{
	this.path.position = pos;
};

// setter for path color
Sprite.prototype.setColor = function(colr)
{
	this.path.color = colr;
};

// used for animation class to bind animation methods to this object
//Sprite.prototype.setPosBindFunc = this.setPosition.bind(this);

// used for collision of this and another object
Sprite.prototype.collision = function(other)
{
	// true if collided, false otherwise
	return this.path.bounds.intersects(other.path.bounds);
};

// move sprite
/*Sprite.prototype.move = function()
{
	this.path.position.x += this.speed * this.behavior.x;
	this.path.position.y += this.speed * this.behavior.y;
	console.log("sprite pos:"+this.path.position.x +" "+this.path.position.y);
};*/









