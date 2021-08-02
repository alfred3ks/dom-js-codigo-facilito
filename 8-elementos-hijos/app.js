/*

Elementos hijos. LISTAS:

Cada elemento dentro del arbol de nuestro DOM y le corresponde una posicion, y el elemento puede poseer padres, hijos y hermanos.

En este apartado vamos a obtener los hijos de un elemento en especial.

Trataremos de nuevo con la lista.

Vamos a mostrar en consola estos 7 elementos de la lista.

// Para saber la cantidad de hijos que tiene nuestra lista lo haremos a traves del atributo .childElementCount, este atributo es solo de lectura, OJO no lo podemos modificar.

console.log(list.childElementCount)

// Si queremos obtener el listado de hijo lo haremos mediante el atributo .children

console.log(list.children)

// A tener el listado lo podemos iterar como ya hemos visto

for(let i = 0; i < list.children.length; i++){
    let hijos = list.children[i]
    console.log(hijos)
}

// Tambien podemos acceder a los hijos por medio de los indices.

console.log(list.children[0].style.color = "red")
console.log(list.children[1])
console.log(list.children[3])

*/

const title = document.getElementById('title');
title.innerHTML = 'Cursos';

const description = document.getElementById('description');
description.innerHTML = 'Listado de cursos';


// Vamos a obtener de nuevo la lista de los cursos, el padre es ul y los elelemtnso hijos son los li:

const list = document.querySelector('ul');
console.log(list);

// Para saber la cantidad de hijos que tiene un elemento padre usaremos el atributo childElementCount, es un atributo de lectura:
console.log(list.childElementCount);  // 7

// Para obtener el listado de los hijos usaremos el atributo children:
console.log(list.children);

// Ahora si podemos obtener una lista esta la podemos iterar, usaremos un for:
for( i = 0; i < list.children.length; i++){
    console.log(list.children[i]);
}

// Tambien podemos acceder al hijo que queramos:
console.log(list.children[2]);
console.log(list.children[4]);
console.log(list.children[5]);

// Ahora veremos que tambien si tenemos una lista podemos acceder a sus hijos el primero y el ultimo mediante sus atributos:
console.log(list.firstElementChild);
console.log(list.lastElementChild);

// Ya si podemos obtener los elelemntos hijos podemos acceder a sus atributo y modificarlo o leerlo:
list.firstElementChild.innerHTML = 'C';
console.log(list.firstElementChild.innerHTML);
console.log(list.lastElementChild.innerHTML);