var btn = document.getElementById('btn');
btn.addEventListener('click', function(){
	//lo primero que hago es guardar en una variable mi contenedor de posteos que está vacío en el html
	var containerPots = document.getElementById('contenedor-posteos');
	//rescatar los textos que ingresó el usuario en input y textarea
	var name = document.getElementById('nombre').value;
	document.getElementById('nombre').value = "";
	var comment = document.getElementById('cajaposteos').value;
	document.getElementById('cajaposteos').value = "";
	//crear elementos necesarios
	var post = document.createElement('div');
	var elementName = document.createElement('strong');
	var elementComment = document.createElement('p');
	var elementLine = document.createElement('hr');
	//creamos los nodos de texto
	var nodoTextName = document.createTextNode(name);
	var nodoTextComment = document.createTextNode(comment);

	//aca hacemos el appendcheo
	elementName.appendChild(nodoTextName);
	elementComment.appendChild(nodoTextComment);

	post.appendChild(elementName);
	post.appendChild(elementComment);
	post.appendChild(elementLine);
	//le agregamos como atributo una clase llamada posteo
	post.setAttribute('class', 'posteo');

	containerPots.appendChild(post);
	var counter = document.getElementById('counter-characters');
	counter.innerHTML = '<span>Hermààààn@ eScRiBiSTèèèè --> </span> 0 <span><-- caRàààCTeREzzZZz oe ZZzzZììììì</span>';
})

var textArea = document.getElementById('cajaposteos');
textArea.onkeydown = function(){
	//rescatamos el valor del textarea
	var comment = document.getElementById('cajaposteos').value;
	//sacamos la longitud de ese msje
	var long = comment.length;
	//vamos a rescatar
	var counter = document.getElementById('counter-characters');
	counter.innerHTML = '<span>Hermààààn@ eScRiBiSTèèèè --> </span>' + long + ' <span><-- caRàààCTeREzzZZz oe ZZzzZììììì</span>';
}










