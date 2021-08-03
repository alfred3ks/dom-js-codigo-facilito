/*

Evento documentLoaded.

Como sabemos cuando carga la pagina web esta la hace de forma descendente.

Es por eso que nuestra etiqueta script esta al final despues de ña etiqueta del body.

Si movemos la etiqueta script del final y la subimos al head, al actualizar o cargar la web vemos por consola varios errores y no se aplican los cambio que tengamos en nuestro js. Esto pasa porque nuestro archivo js se esta ejecuntando antes de que se cree el documento html.

Si por una necesidad necesitamos colocar nuestro JS en el emcabezado los podemos hacer pero nuestro archivo js debemos cargar en la primera linea el evento DOMContentLoaded.

El evento DOMContentLoaded es lanzado cuando el DOM ya fue construido.

Pero lo mas comun siempre es colocarla al final.

Para profundizar un poco mas sobre este evento, ir a la web de Mozilla. Ahi veremos diferentes eventos.

https://developer.mozilla.org/en-US/docs/Web/Event/DOMContentLoaded
*/


document.addEventListener('DOMContentLoaded', function(){
    console.log('Hola Mundo, el DOM ya fue construido');

    const title = document.getElementById('title');
    title.innerHTML = 'Cursos';

    const description = document.getElementById('description');
    description.innerHTML = 'Listado de cursos';
})

// Todo esto si por alguna aplicacion necesitamos poner nuestro script en la cabecera, pero lo ideal es hacerlo siempre al final.
