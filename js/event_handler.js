/*
->interaction event hanlder source
*/

function onMouseDown(event) {
	console.log('You pressed the mouse!');
}

function onMouseDrag(event) {
	console.log('You dragged the mouse!');
}

function onMouseUp(event) {
	console.log('You released the mouse!');
}

function onKeyDown(event) {
	// When a key is pressed, set the content of the text item:
	console.log('The ' + event.key + ' key was pressed!');
}

function onKeyUp(event) {
	// When a key is released, set the content of the text item:
	console.log('The ' + event.key + ' key was released!');
}