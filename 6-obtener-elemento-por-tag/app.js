/*
Obtener elementos por medio de las tag.

Cuando hablamos tag nos referimos a su etiqueta, que pueden ser h1, h2, p, etc.

Es igual que el ejemplo anterior solo que aqui obtenemos los elementos por medio de tag.
*/


const title = document.getElementById('title');
title.innerHTML = 'Cursos';

const description = document.getElementById('description');
description.innerHTML = 'Listado de cursos';

const items = document.getElementsByTagName('li');

for ( let i = 0; i < items.length; i++){
    let element = items[i];
    console.log(element);
}

// Podemos dentro del for agregar un poco de estilo al resultado que nnos muestra:

for ( let i = 0; i < items.length; i++){
    if( i % 2 == 0){
        let element = items[i];
        element.style.background = '#F9E3A2';
    }
}

/* Para modificar el estilo de un elemento podemos usar muchos atributos, si colocamos en la consola:

title.style podemos ver lalista de atributo que podemos modificar. y porque title? porque es el id a traves de el que accedemos a esas propiedades.

*/