/*

Evento click.

El primer evento que vamos a trabajar es el evento click, realizado por el mouse.

Tenemos evento click y doble click.

Usaremos el metodo addEventListener(), el cual recibe dos argumentos, el primero que tipo de evento le vamos a colocar y el segundo la funcion como callback que va a ejecutar ese evento. El segundo argumento puede ser una funcion, una funcion anonima o una arrow function.

function click() {
    // code
}

function () {
    // code
}

()=> {
    // code
}

Comunmente el evento click esta dirigido a un boton pero no esta limitado solo a este, se podria poner a cualquier elemento dentro del DOM.

Para colocar doble click deberemos usar el evento dblclick

*/

const title = document.getElementById('title');
title.innerHTML = 'Cursos';

const description = document.getElementById('description');
description.innerHTML = 'Listado de cursos';

// Aqui trabajaremos con el evento click:
const button = document.querySelector('.btn.btn-primary');
console.log(button);

button.addEventListener('click', ()=> {
    console.log('Has dado click al boton.');
})

button.addEventListener('dblclick', ()=> {
    console.log('Has dado doble click al boton.');
})

