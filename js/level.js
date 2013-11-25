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
	this.projectiles = [];
}

Level.prototype.addToEnviro = function(sprite) {
	this.environment[this.environment.length] = sprite;
};

Level.prototype.addToCreeps = function(sprite) {
	this.creeps[this.creeps.length] = sprite;
};

Level.prototype.addToProjectiles = function(sprite) {
	this.projectiles[this.projectiles.length] = sprite;
};

Level.prototype.delFromEnviro = function(index) {
	this.environment.splice(index,1);
};

Level.prototype.delFromCreeps = function(index) {
	if ( this.creeps[index].active === true )
	{
		this.creeps[index].path.visible = false;
		//console.log("projLen:"+project.activeLayer.children.length);
		//console.log("path-index:"+this.creeps[index].path.index);
		project.activeLayer.removeChildren(this.creeps[index].path.index,this.creeps[index].path.index);
		//this.creeps.splice(index,1);
		this.creeps[index].path = null;
		//this.creeps[index].active = false;
	}
};

Level.prototype.delFromCreeps2 = function(index) {
	this.creeps.splice(index,1);
};

Level.prototype.delFromProjectiles = function(index) {
	if ( this.projectiles[index].path !== null)
	{
		this.projectiles[index].path.remove();
		/*this.projectiles[index].path.visible = false;
		project.activeLayer.removeChildren(this.projectiles[index].path.index,this.projectiles[index].path.index);*/
		this.projectiles[index].path = null;
	}
};

/*Level.prototype.delFromCreeps2 = function(index) {
	console.log(index);
	this.projectiles.splice(index,1);
};*/

Level.prototype.getCreepBox = function(index) {
	//console.log("cindex:"+this.creeps[index].path.bounds);
	return this.creeps[index].path.bounds;
};

Level.prototype.createRandomCreeps = function(n)
{
	// create random creeps
	var myLevel = this;
	for (var i = 0; i < n; i++) {
		(function(i){
		var radius = Math.floor((Math.random()*25)+4);
		var center = new Point( Math.floor((Math.random()*800)+1), Math.floor((Math.random()*800)+1) );
		var tmp = new Path.Circle( center, radius);
		tmp.fillColor = 'red';
		// path_obj,durability_val,stamina_val,speed_val, sprite_id, bahavior_vector
		var plusOrMinus1 = Math.random() < 0.5 ? -1 : 1;
		var plusOrMinus2 = Math.random() > 0.5 ? -1 : 1;
		console.log("p1 "+plusOrMinus1+";p2 "+plusOrMinus2);
		var a = Math.floor((Math.random()*1)+1)*plusOrMinus1;
		var b = Math.floor((Math.random()*1)+1)*plusOrMinus2;
		var behavior = new Point(a,b);
		var creep = new Sprite(tmp, 1, 10, Math.floor((Math.random()*5)+1), 3, behavior);
		myLevel.addToCreeps( creep );

		//Animate!
		//(function(creep){



		/*var delta1 = 240000;
		var myHero = this.hero;
		sideAni = new Animation();
		map.animation = sideAni;
		sideAni.write = function(val){myHero.path.position.x = val;};
		sideAni.setStartValue(myHero.path.position.x);
		sideAni.setEndValue(myHero.path.position.x + delta1);
		sideAni.duration = 2*60;
		sideAni.easingFunc = easeInQuad;
		sideAni.finish = function func(){
			sideAni = new Animation();
			map.animation = sideAni;
			sideAni.write = function(val){myHero.path.position.x = val;};
			sideAni.setStartValue(myHero.path.position.x);
			sideAni.setEndValue(myHero.path.position.x + delta1);
			sideAni.duration = 2*60;
			sideAni.finish = func;
			sideAni.start();
		};
		sideAni.start();*/



			//var d = 24000;
			var ani = new Animation();

			creep.animation = ani;

			var myPath = creep.path;
			var creeps = myLevel.creeps;
			ani.write = function(val){
				myPath.position = val;
			};
			ani.setStartValue(creep.path.position);
			var x = creep.path.position.x + 60*creep.speed*a;
			var y = creep.path.position.y + 60*creep.speed*b;

			console.log(creep.path.position);

			console.log("a "+a+";b "+b);
			console.log("x "+x+";y "+y);
			ani.setEndValue( new Point(x,y) );
			ani.duration = 60;
			ani.finish = function f(){
				if(creep.path == null || creep.path.position == null)//if(creep.path == null || creep.path.position == null)
					return;
				var ani1 = new Animation();
				creep.animation = ani1;
				ani1.write = function(val){
					myPath.position = val;
				};
				ani1.setStartValue(creep.path.position.clone());
				var x = creep.path.position.x + 60*creep.speed*behavior.x;
				var y = creep.path.position.y + 60*creep.speed*behavior.y;
				ani1.setEndValue( new Point(x,y) );
				ani1.duration = 60;
				ani1.finish = f;
				ani1.start();
			};
			ani.start();
		})(i);
		//})(creep);
	}
};




