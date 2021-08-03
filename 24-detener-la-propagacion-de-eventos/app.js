/*

Detener la propagacion de eventos.

Vamos a ver un ejemplo como detener la propagacion de eventos para que este no llegue a los ancestros.

Para detener la propagacion nos vamos a ubicar la funcion donde queremos parar la propagacion.

Nos vamos apoyar del evento (e)
e.stopPropagation()

Bastante sencillo.


*/

const element = document.querySelector('li');
const list = document.querySelector('ul');

element.addEventListener('click', function(e){
    console.log( `Click sobre el elemento` );
    e.stopPropagation();
})

list.addEventListener('click', function(){
    console.log( `Click sobre la lista` );
})



