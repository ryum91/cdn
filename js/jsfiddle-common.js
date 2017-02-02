/**
 * text print
 */
function print(text) {
	var span = document.createElement('span');
	span.appendChild(document.createTextNode(text));
	document.body.appendChild(span);
}

/**
 * text print and new line
 */
function println(text) {
	print(text);
	document.body.appendChild(document.createElement('br'));
}

// clear console when fiddle reloading
try {
	console.clear();
} catch (e) {}
