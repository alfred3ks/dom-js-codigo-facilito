const title = document.getElementById('title');
title.innerHTML = 'Cursos';

const description = document.getElementById('description');
description.innerHTML = 'Listado de cursos';

/*

En esta sección vamos aprender a trabajar con los elementos ancestros y elementos hermanos.

*/

// Vamos a optener el primer elemento de la lista por medio de querySelector:

const element = document.querySelector('div.row > ul.list-group > li');
console.log(element);

// Asi conocemos el elemento padre. Nos apoyaremos del atributo parentElement, veremos el elemento padre del primer elemento:
console.log(element.parentElement);

// Si queremos ver el abuelo del primer elemento, nos apoyaremos del mismo atributo:
console.log(element.parentElement.parentElement);

// Ahora veremos si queremos trabajar con elementos hermanos:
console.log(element.nextElementSibling);
// siguiente hermano:
console.log(element.nextElementSibling.nextElementSibling);

// Nota: si un elemento no tiene hermano, entonces el resultado sera null. Ademas como vemos en los ejemplos podemos ver el siguiente hermano, ahora veremos como ver el anterior:

const lastElement = document.getElementById('perl');
console.log(lastElement.previousElementSibling);

