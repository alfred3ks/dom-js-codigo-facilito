const title = document.getElementById('title');
title.innerHTML = 'Cursos';

const description = document.getElementById('description');
description.innerHTML = 'Listado de cursos';

// Vamos a trabajar con el botton que es el dispara un evento: haremos que cuando hagas click en el boton la eqtiqueta h1 y p van a desaparecer, y tambien los hara aparecer.

const button = document.querySelector('.btn.btn-primary');
button.innerHTML = 'Ocultar';

button.addEventListener('click', function(e){
    console.log(e);

    if(title.style.display != 'none') {
        title.style.display = 'none'
        description.style.display = 'none'
        // button.textContent = 'Mostrar'
        e.target.textContent = 'Mostrar'
        // this.textContent = 'mostrar'

    } else {
        title.style.display = 'block'
        title.style.color = 'red'
        description.style.display = 'block'
        description.style.color = 'blue'
        // button.textContent = 'Ocultar'
        e.target.textContent = 'Ocultar'
        // this.textContent = 'Ocultar'
    }
})

// Al ver el evento e, podemos ver el objeto MouseEvent, un atributo que nos interesa que es target, el cual almacena el elemento que disparo el evento, en nuestro caso nuestro boton. sabiendo esto modificamos nuestro codigo. El comportamiento es el mismo pero es importante saber que el evento target almacena al elemento que dispara el evento.

// Ahora si queremos saber tambien que elemento dispara un evento lo podemos hacer con la variable this, de estas dos formas podemos obtener el elemento que dispara el evento.