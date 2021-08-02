/*
Optener elementos mediante Clases.

A diferencia de los id, las clases pueden repetirse a lo largo de nuestro html.


OJO esto es importante:

TODOS LOS ELMENTOS POSEE UN ATRIBUTO .className

Por ejemplo:

title.className --> display-2

<div class="jumbotron">
            <h2 class="display-2" id="title">Título</h2>
            <p class="description_container" id="description">Breve descripcion</p>
        </div>

Osea por medio del id podemos acceder a su clase. Lo vemos en el ejemplo anterior.

Desde la consola lo vemos,

title.className y nos arroja display-2 que es la clase.

Vamos a trabajar con la siguiente lista:
Vamos a ver la lista de los 7 elementos.
Los elementos comparten la misma clase, list-group-item.
Vamos a obtener los elementos a traves de dicha clase.

<ul class="list-group">
    <li class="list-group-item" id="firs-course">Python</li>
    <li class="list-group-item">JavaScript</li>
    <li class="list-group-item">Java 8</li>
    <li class="list-group-item">Ruby</li>
    <li class="list-group-item">C#</li>
    <li class="list-group-item">Kotlin</li>
    <li class="list-group-item">Perl</li>
</ul>

*/

const title = document.getElementById('title');
title.innerHTML = 'Cursos';

const description = document.getElementById('description');
description.innerHTML = 'Listado de cursos';


const items = document.getElementsByClassName('list-group-item');

// retorna un listado de elementos:
console.log(items);

// lo que haremos ahora es iterarlos por medio de un for:
for(i = 0; i < items.length; i++){
    let element = items[i];
    console.log( element );
}

// asi podemos por consola los elementos que tenemos en esa lista.
