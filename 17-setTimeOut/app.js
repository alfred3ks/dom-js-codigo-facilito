const title = document.getElementById('title');
title.innerHTML = 'Cursos';

const description = document.getElementById('description');
description.innerHTML = 'Listado de cursos';

// Usaremos la funcion setTimeOut(), la cual recibe dos parametros, uno la funcion y otra el tiempo em ms. Esta funcion le pertenece al objeto window.

setTimeout(function(){
    console.log('Mensaje con setTimeOut')
}, 2000);

// Cuando vemos por consola el mensaje se muestra pasado 2 segundo.

// Tambien podemos ver que a nuestra funcion podemos pasarle parametros

setTimeout(function(p1,p2,p3){
    console.log(p1)
    console.log(p2)
    console.log(p3)
}, 3000, 'arg1', 'arg2', 'arg3');