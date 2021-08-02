/*

Obtener elementos por css.

Vamos a trabajar con dos(2) metodos muy interesantes que nos permitiran obtener elementos pero con las reglas de css.

Vamos a obtener el primer elemento de la lista.
<li class="list-group-item" id="firs-course">Python</li>

Tiene una etiqueta, una clase y un id.

El primer metodo utilizado sera:

.querySelector()

Como argumento recibe una regla css, puede ser un id o una clase.
Si lo obtenemos por medio de su id

.querySelector('#id')

Si lo queremos obtener mediante si clase
.querySelector(.class)

OJO --> cuando tenemos una lista como es el caso que vemos que todos los elementos tienen una misma clase con querySellector() cuando encuentra el primer elemento de la clase que cumpla con la regla, la busqueda la hace de manera descendente y ese es el que nos imprime.

Si lo queremos obtener por medio de tag

.querySelector('li)

Al igual que clase este obtiene el primer elemento que encuentra que cumple con la regla css.

Lo interesante de usar .querySelector() es para obtener elementos con reglas css mas complejas.

const elementComp = document.querySelector('div.row > ul.list-group > li#perl')
console.log(elementComp);

El segundo metodo que usaremos es:

.querySelectorAll()

Este metodo retorna un listado de elementos, en el caso de que sea una lista.

Recibe como parametro una regla css

*/

const title = document.getElementById('title');
title.innerHTML = 'Cursos';

const description = document.getElementById('description');
description.innerHTML = 'Listado de cursos';

// Obtenemos el elemento por su id:
const elementId = document.querySelector('#first-course');
console.log(elementId);

// Ejemplos con querySelector():

// Obtenemos el elemento por su clase:
// Para este caso vemos que hay mas elementos que tienen esa clase pero solo retorna el primero que encuentra. La busqueda la hace de forma descendente.
const elementClass = document.querySelector('.list-group-item');
console.log(elementClass);

// Obtenemos elemento por su etiqueta:
// Al igual nos muestra el primer resultado encontrado.
const elementTag = document.querySelector('li');
console.log(elementTag);

// Aqui lo interesante de usar .querySelector(), es que podemos buscar elementos mediante reglas especificas:
const elementComp = document.querySelector('div.row > ul.list-group > li#perl')
console.log(elementComp);

// Ejemplo con querySelectorAll():
// retorna la lista completa de elementos al usar este metodo sobre la lista:
const items = document.querySelectorAll('li');
console.log(items);

// Podemos poner una regla css mas compleja, por ejemplo de la lista obtener los elementos pares y impares de la lista nuevamente:

// Par:
const itemsPar = document.querySelectorAll('li:nth-child(odd');
console.log(itemsPar);

// Impar:
const itemsImpar = document.querySelectorAll('li:nth-child(even');
console.log(itemsImpar);