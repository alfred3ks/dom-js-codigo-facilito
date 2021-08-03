const title = document.getElementById('title');
title.innerHTML = 'Cursos';

const description = document.getElementById('description');
description.innerHTML = 'Listado de cursos';

const button = document.querySelector('.btn.btn-primary');
button.innerHTML = 'Ocultar';

button.addEventListener('click', function(e){
    console.log(e);

    if(title.style.display != 'none') {
        title.style.display = 'none'
        description.style.display = 'none'
        e.target.textContent = 'Mostrar'
    } else {
        title.style.display = 'block'
        title.style.color = 'red'
        description.style.display = 'block'
        description.style.color = 'blue'
        e.target.textContent = 'Ocultar'
    }
})

// Ahora veremos los eventos del mouse, lo que haremos es que cada vez que el cursor entre sobre el boton este cambien de color, usaremos el evento mouseenter y mouseout:

button.addEventListener('mouseenter', function(e){
    e.target.className = 'btn btn-danger';
})

button.addEventListener('mouseout', function(e){
    e.target.className = 'btn btn-primary';
})

// Los eventos del mouse son varios para profundizar mas a traves de la web de mozilla:

// developer.mozilla.org/en-US/docs/Web/API/MouseEvent

