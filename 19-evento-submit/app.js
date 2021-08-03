// Para el caso del evento submit este se realiza sobre el formulario no sobre el boton.

// Obtenemos el formulario:
const form = document.getElementById('course-form');
console.log(form);


// Vamos agregar el evento al formulario:
form.addEventListener('submit', function(e){

    e.preventDefault();

    let title = document.getElementById('title-form').value;
    let description = document.getElementById('description-form').value;

    console.log(title);
    console.log(description);

})

/* Cada vez que se haga submit al formulario vamos a optener los valores de los input. Para el caso son el titulo y la descripcion. Con el metodo .value

Para obtener los valores del input usaremos el atributo .value en cada input. Asi almacenamos el valor de los input y no los propios input.

Si no agregamos como parametro a la funcion el evento la pagina se recarga y no vemos en consola la impresion de los datos del titulo y la descripcion del formulario.
Para eso usamos e.preventDefault(); Solo lo usamos para evitar que la pagina se recargue, la cual es su comportamiento normal.

*/

