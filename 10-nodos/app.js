const title = document.getElementById('title');
title.innerHTML = 'Cursos';

const description = document.getElementById('description');
description.innerHTML = 'Listado de cursos';

/*

Nodos: Son los elementos mas pequeños que podemos encontrar en nuestro arbol del DOM.

*/

// Igual que antes trabajaremos con el primer elemento de la lista:
const element = document.getElementById('first-course');
console.log(element);

console.log(element.childElementCount); // 0 no posee hijos

console.log(element.childNodes.length); // 1
// Nos devuelve 1 porque aunque este elemento no tiene hijos pero si posee contenido, hace referencia al texto, al nodo, por eso lo del 1.

// asi podemos visializar el nodo
console.log(element.childNodes); // NodeList [text]

// ahora veamos si en la lista agregamos un parrafo con saltos de linea asi:
/*

<li class="list-group-item" id="first-course">
    <p>
        Python
    </p>
</li>

*/

console.log(element.childNodes); // NodeList [text, p, text] y si expandimos buscamos el atributo textContent vemos el salto de linea.

// Una cosa interesante con los nodos es que tambien podemos movernos por ellos, entre ancestros, hermanos e hijos. Para eso hemos utilizado el atributo childNodes, si queremos el hermano siguiente nextElementSibling, y el anterior previousElementSibling


