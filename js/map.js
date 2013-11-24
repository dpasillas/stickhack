/*

object for map
contains information about the level and background

*/

// Map constructor
function Map(lvl,map)
{
	this.level = ( lvl == "undefined" ) ? null : lvl;
	this.map = ( map == "undefined" ) ? null : map;
	this.bg = null;
	this.levelCount = 1;
	this.window_x_min = -400.0;
	this.window_x_max = screen.width - 100;
	this.window_y_min = -400.0;
	this.window_y_max = screen.height - 100;
}

// ** !! function to do drawing shit !! **
Map.prototype.update = function(hero_point)
{
	/* call animation and drawing functions here */
	var hero_action = 0;

	this.level.hero.path.position.x += hero_point.x;
	this.level.hero.path.position.y += hero_point.y;
	if ( (this.offMap( this.level.hero ) === 1) )
	{
		hero_action = 1;
		console.log("no going off map!!!"+this.level.hero.getPoint());
	}
	else
	{
		for (var i = 0; i < this.level.creeps.length; i++)
		{
			if ( this.level.hero.path.bounds.intersects( this.level.getCreepBox(i) ) )
			{
				hero_action = 1;
				switch(this.level.creeps[i].sid)
				{
					case 1: // environment sprite, no death
						hero_action = 1;
					break;
					default: hero_action = 1;
				}
			}
		}
	}

	switch(hero_action)
	{
		case 1: // go back
			this.level.hero.path.position.x -= hero_point.x;
			this.level.hero.path.position.y -= hero_point.y;
			break;
		default:
	}

};

// set function for level
Map.prototype.setLevel = function(lvl)
{
	this.level = lvl;
};

// set function for set background
Map.prototype.setBg = function(backgrnd)
{
	this.bg = backgrnd;
	this.bg.opacity = 0.75;
	this.bg.sendToBack();
	this.bg.strokeWidth = 0;
};

// method to assign level to Map and also increment level count
Map.prototype.newLevel = function(lvl)
{
	this.level = lvl;
	this.levelCount++;
};

// pseudo destructor for Map, default restore
Map.prototype.clear = function()
{
	this.level = null;
	this.bg = null;
	this.levelCount = 1;
};

// return 0 is on map and 1 if off map
Map.prototype.offMap = function(sprite)
{
	//console.log(sprite.path.matrix.rotation);
	if ( (sprite.path.bounds.top >= this.map.bounds.top) && (sprite.path.bounds.bottom <= this.map.bounds.bottom) )
	{
		if ( (sprite.path.bounds.left >= this.map.bounds.left) && (sprite.path.bounds.right <= this.map.bounds.right) )
		{
			return 0;
		}
	}
	return 1;
};


