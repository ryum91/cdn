function println(text) {
	var body = document.body;
	var span = document.createElement('span');
	span.appendChild(document.createTextNode(text));
	body.appendChild(span);
	body.appendChild(document.createElement('br'));
}

function print(text) {
	var body = document.body;
	var span = document.createElement('span');
	span.appendChild(document.createTextNode(text));
	body.appendChild(span);
}