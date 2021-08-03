// Vamos a trabajar con el evento teclado, usaremos el metodo keydow:

// Evento teclado, obtenemos el input
const input = document.getElementById('input');
// console.log(input)

input.addEventListener('keydown', function(){
    console.log('tecla presionada');
})

// si queremos saber que tecla fue presionada debemos apoyarnos del evento (e)
input.addEventListener('keydown', function(e){
    console.log(e);
    console.log(`La tecla presionada es: ${e.key} con codigo ${e.keyCode}`);

})

// Al ejecutar debemos buscar el atributo key que es el que nos interesa. Este atributo almacena la tecla que fue presionada.

// Para profundizar ir a la web de Mozilla en le siguiente enlace:
// developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/KeyboarEvent