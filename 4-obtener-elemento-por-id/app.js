/*
Optener elementos mediante ID.
Los elementos en nuestro html pueden tener un identificador unico. ID.
En nuestro maquetado tenemos varios ID. En el titulo, tenemos el id=title, para nuestro h2 y el id=description para nuestro parrafo.

En este ejercicio vamos a optener ambos elementos y los vamos a modificar.



*/

// Vamos a optener esos elementos y vamos a modificar el texto que contiene:
const title = document.getElementById('title');
console.log(title);

// ahora para modificar el texto usaremos el atributo innerHTML:
title.innerHTML = 'Cursos';

// ahora vamos a modificar el del parrado:
const description = document.getElementById('description');
console.log(description);
description.innerHTML = 'Listado de cursos';

// Para finalizar debemos mencionar algo, todos los elementos que hemos visto anteriormente poseen un atributo ID, unico para ese elemento, es por medio de ese atributo que se hace la busqueda por medio del metodo getElementById.