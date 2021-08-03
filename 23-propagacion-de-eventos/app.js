/*

Propagacion de eventos.

Vamos a ver un ejemplo de propagacion de eventos.

Agregaremos un evento click a nuestro primer elemento de la lista. Veremos como se propaga el evento.

*/

const element = document.querySelector('li');
const list = document.querySelector('ul');
const div_row = document.querySelector('.row');
const div_container = document.querySelector('.container');
const body = document.querySelector('body');

element.addEventListener('click',()=>{
    // console.log( `Elemento!!!` );
})
list.addEventListener('click',()=>{
    // console.log( `Lista!!!` );
})
div_row.addEventListener('click',()=>{
    // console.log( `Div_row!!!` );
})
div_container.addEventListener('click',()=>{
    // console.log( `Div_container!!!` );
})
body.addEventListener('click',()=>{
    // console.log( `Body!!!` );
})

// Como podemos ver al dar click sobre un elemento de la lista nos lanzar todos los eventos, osea que el evento se propaga desde el elemento hasta el body.

// Ahora vamos a generar una nueva funcion:
function show_message(e){
    console.log(`Elemento actual:${this.tagName}`);
    console.log(`Elemento que disparo el evento:${e.target.tagName}`);
    console.log('\n');
}

// y se la colocamos a nuestros eventos como segundo parametro:
/*
element.addEventListener('click',show_message);
list.addEventListener('click',show_message);
div_row.addEventListener('click',show_message);
div_container.addEventListener('click',show_message);
body.addEventListener('click',show_message);
*/

// Asi vemos quien dispara el evento y tambien hasta donde se propaga el evento.

// Vamos a hacer un ciclo for para hacer todo lo anterior pero de manera rapida en vez de un evento por elemento:

for (let element of document.querySelectorAll('*')){
    element.addEventListener('click', show_message);
}