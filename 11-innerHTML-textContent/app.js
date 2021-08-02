/*

Vamos a ver mas en profundidad el atributo innerHTML y textContent. El atributo innerHTML ya lo hemos visto antes, lo hemos usado para modificar el texto del contenido de un elemento.

*/

// Veamos un ejemplo. Mediante JS modificamos los textos del title y la description:

const title = document.getElementById('title');
title.innerHTML = 'Cursos';

const description = document.getElementById('description');
// description.innerHTML = 'Listado de cursos';

// Por consola vemos lo que almacena el atributo innerHTML, para le caso de la descripcion:

console.log(description.innerHTML);

// La propiedad Element.innerHTML devuelve o establece la sintaxis HTML describiendo los descendientes del elemento. Si dentro del elemento descripcion agregamos mas hijos este lo mostrara, osea si tenemos mas etiquetas dentro este lo mostrara.

// El atributo innerHTML modifica el DOM, es de lectura y escritura. Por lo tanto podemos anidar nuevas etiquetas mediante este atributo.
description.innerHTML = '<strong>Listado de cursos</strong>';
console.log(description.innerHTML);

// Para obtener el texto de un elemento podemos usar el atributo textContent:
console.log(description.textContent);

// Ahora que ya sabemos esto podemos hacer un refactory de nuestro codigo, asi :
description.textContent = 'Listado de cursos.';
description.innerHTML = '<strong>' + description.textContent + '</strong>'

// OJO IMPORTANTE **************
// La propiedad innerHTML le corresponde a un elemento y el atributo textContent a un nodo. Si queremos modificar el HTML de un elemento usaremos innerHTML pero si queremos modificar el contenido, un nodo mejor usar textContent.




