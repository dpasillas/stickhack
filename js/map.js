/*

object for map
contains information about the level and background

*/

// Map constructor
function Map(lvl,map,anim)
{
	this.level = ( lvl == "undefined" ) ? null : lvl;
	this.map = ( map == "undefined" ) ? null : map;
	this.animation = ( anim == "undefined" ) ? null : anim;
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
	var creep_index = 0;

	if (this.level.creeps.length === 0)
	{
		this.level.createRandomCreeps(50);
	}
	else ;//console.log(this.level.creeps.length);

	//this.level.hero.path.position.x += hero_point.x;
	//this.level.hero.path.position.y += hero_point.y;

	/*var a = new Animation();
	a.write = function(val) { this.level.hero.path.position = val; };
	a.duration = this.level.hero.path.position.x + hero_point.x;*/



	if ( (this.offMap( this.level.hero ) === 1) )
	{
		hero_action = 2;
		console.log("no going off map!!!"+this.level.hero.getPoint());
		//view.center.x = this.level.hero.path.position.x;
	}
	else
	{
		for (var i = 0; i < this.level.creeps.length; i++)
		{
			if ( this.level.creeps[i].path !== null )
			{
				if ( this.level.hero.collidable && this.level.creeps[i].collidable && this.level.hero.path.bounds.intersects( this.level.getCreepBox(i) ) )
				{
					console.log("HIT!");

					hero_action = 1;
					creep_index = i;
					this.level.hero.life = (this.level.hero.life > 0) ? this.level.hero.life - 1 : 0;
					this.level.creeps[i].life = (this.level.creeps[i].life > 0) ? this.level.creeps[i].life - 1 : 0;
					switch(this.level.creeps[i].sid)
					{
						case 1: // no damage contact
							hero_action = 1;
							break;
						case 3: // damage contact
							hero_action = 3;
							break;
						default: hero_action = 1;
					}
				}

				//this.level.creeps[i].path.position.x += this.level.creeps[i].speed * this.level.creeps[i].behavior.x;
				//this.level.creeps[i].path.position.y += this.level.creeps[i].speed * this.level.creeps[i].behavior.y;
				if ( this.level.creeps[i].path !== null && this.offMap(this.level.creeps[i]) == 1 )
				{
					//this.level.delFromCreeps(i);
					this.level.creeps[i].collidable = false;
					this.level.creeps[i].path.visible = false;
				}
			}
		}

		/*for (var i = 0; i < this.level.projectiles.length; i++)
		{
			if ( this.level.projectiles[i].path !== null )
			{
				for (var j = 0; j < this.level.creeps.length; j++)
				{
					if ( this.level.projectiles[i].path.bounds.intersects( this.level.getCreepBox(j) ) )
					{
						console.log("HIT!");

						proj_action = 1;
						proj_creep = j;

						this.level.projectiles[i].life = (this.level.projectiles[i].life > 0) ? this.level.projectiles[i].life - 1 : this.level.projectiles[i].life;
						this.level.creeps[j].life = (this.level.creeps[j].life > 0) ? this.level.creeps[j].life - 1 : this.level.creeps[j].life;
						switch(this.level.creeps[j].sid)
						{
							case 1: // no damage contact
								proj_action = 1;
								break;
							case 3: // damage contact
								proj_action = 3;
								break;
							default: proj_action = 1;
						}
					}

					//this.level.creeps[i].path.position.x += this.level.creeps[i].speed * this.level.creeps[i].behavior.x;
					//this.level.creeps[i].path.position.y += this.level.creeps[i].speed * this.level.creeps[i].behavior.y;
					if ( this.level.creeps[i].path !== null && this.offMap(this.level.creeps[i]) == 1 )
					{
						//this.level.delFromCreeps(i);
					}
				}
			}
		}*/
	}

	switch(hero_action)
	{
		case 1: // non-lethal contact
			if(this.animation !== null) {
				this.animation.stop();

			var myHero = this.level.hero;
			var ani = new Animation();
			ani.write = function(val) {myHero.position = val;};
			ani.setStartValue(myHero.position);
			var x = myHero.position.x - myHero.behavior.x * 75;
			var y = myHero.position.y;
			ani.setEndValue(new Point(x,y));
			ani.easingFunc = easeOutExpo;
			ani.duration = 0.7 * 60;

			//myHero.controllable = 0;

			ani.finish = function(){
				//myHero.controllable = true;
			};
			ani.start();


			}

			//this.level.hero.path.position.x -= hero_point.x;
			//this.level.hero.path.position.y -= hero_point.y;
			break;
		case 2: // offMap action
			if(this.animation !== null) {
				this.animation.stop();
			}

			var half1 = 1 + (this.level.hero.path.bounds.left)*-1 + this.level.hero.path.position.x;
			var half2 = this.level.hero.path.bounds.right - this.level.hero.path.position.x;
			var npos = this.map.bounds.right - half2 - 1;
			this.level.hero.path.position.x = (this.level.hero.path.bounds.left <= 0) ? half1 : npos;
			break;
		case 3: // damage contact
			if(typeof(this.animation) != "undefined" && this.animation !== null) {
				this.animation.stop();
				this.animation = null;
			}
			var myCreep = this.level.creeps[creep_index];
			if(typeof myCreep == "undefined")
				break;
			console.log("Creep Index: "+creep_index);
			console.log("Creep Count: "+this.level.creeps.length);
			if(typeof(myCreep.animation) != "undefined" && myCreep.animation !== null) {
				myCreep.animation.stop();
				myCreep.animation = null;
			}

			// durability is how many times it takes for enemy to die (states) and life is the countdown

			if (myCreep.life === 0) {
				// IS DEAD
				var myCreep = this.level.creeps[creep_index];
				myCreep.collidable = false;
				var ani = new Animation();
				ani.write = function(val){ try{myCreep.path.fillColor = val;} catch(err){this.stop()} };
				ani.setStartValue(myCreep.path.fillColor);
				ani.setEndValue(new Color(0,0,1,0));
				ani.duration = 1.5 * 60;
				//ani.easingFunc = function(t){ return easeInOutBounce(t,5);};
				var myLevel = this.level;
				ani.finish = function(){
					//myLevel.delFromCreeps(myLevel.creeps.indexOf(myCreep));
					//myLevel.delFromCreeps2(myLevel.creeps.indexOf(myCreep));
					myCreep.collidable = false;
					myCreep.path.visible = false;
				};
				ani.start();


			}
			else {
				// NOT DEAD
			}
			var myHero = this.level.hero;
			console.log(myHero.life);
			if (myHero.life === 0) {
				// IS DEAD


				
			}
			else {
				// NOT DEAD
				myHero.collidable = false;
				var ani = new Animation();
				var c1 = myHero.path.fillColor;
				var c2 = new Color(1,1,1);
				ani.write = function(val){ myHero.path.fillColor = val; };
				ani.setStartValue(c1);
				ani.setKeyValue(0.16666666666666, c2);
				ani.setKeyValue(0.33333333333333, c1);

				ani.setKeyValue(0.5, c2);
				ani.setKeyValue(0.66666666666666, c1);

				ani.setKeyValue(0.83333333333333, c2);
				ani.setEndValue(c1);
				ani.duration = 0.7 * 60;
				var myLevel = this.level;
				ani.finish = function(){
					
				};
				ani.start();

				var ani2 = new Animation();
				ani2.write = function(val){ myHero.path.position = val; };
				ani2.setStartValue(myHero.path.position);
				var dir = myCreep.path.position.normalize();
				var dist = 100; //distance in pixels to slide
				var x = myHero.path.position.x + dir.x * dist;
				var y = myHero.path.position.y + dir.y * dist;
				
				ani2.setEndValue(new Point(x,y));
				ani2.easingFunc = easeOutExpo;
				ani2.duration = 0.7 * 60;
				//ani.easingFunc = function(t){ return easeInOutBounce(t,5);};
				
			}
			break;
		default: //this.level.hero.path.rotate(2);
	}

	var allDead = true;
	/* clean up dead creeps !!! */
	for (var k = 0; k < this.level.creeps.length; k++)
	{
		if (this.level.creeps[k].collidable === true)
		{
			allDead = false;
			break;
		}
	}

	if (allDead === true) {
		for (var m = 0; m < this.level.creeps.length; m++) {
			if(this.level.creeps[m].animation !== null){
				this.level.creeps[m].animation.stop();
				this.level.creeps[m].animation = null;
			}
			this.level.delFromCreeps(m);
			this.level.delFromCreeps2(m);
		}
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

	/*this.level.hero.path.position = view.center;
	this.level.hero.path.scale(1.5);*/
	return 1;
};


