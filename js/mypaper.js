//<script type="text/paperscript" canvas="myCanvas">

paper.install(window);

/*function onMouseDown(event) {
	console.log('You pressed the mouse!');
}

function onMouseDrag(event) {
	console.log('You dragged the mouse!');
}

function onMouseUp(event) {
	console.log('You released the mouse!');
}*/

// Only executed our code once the DOM is ready.
window.onload = function() {
	// Get a reference to the canvas object
	var canvas = document.getElementById('myCanvas');
	// Create an empty project and a view for the canvas:
	paper.setup(canvas);


	// Create a circle shaped path with its center at the center
	// of the view and a radius of 30:

	// Create a Paper.js Path to draw a line into it:
	var path = new Path.Circle({
		center: view.center,
		radius: 30,
		strokeColor: 'black'
	});
	
	// Give the stroke a color
	path.strokeColor = 'black';

	/*var hero = new Sprite(path);
	var level = new Level(hero);
	var map = new Map(level);*/

	function onResize(event) {
		// Whenever the window is resized, recenter the path:
		path.position = view.center;
	}
	
};

