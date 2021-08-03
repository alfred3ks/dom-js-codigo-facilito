const row = document.querySelector('.row');


const form = document.getElementById('course-form');
form.addEventListener('submit', function(e){
    e.preventDefault();

    let title = document.getElementById('title-form').value;
    let description = document.getElementById('description-form').value;

    create_card(title, description);
})

// Declaramos el div fuera de la funcion para poderlo eliminar
let div = null;

function create_card(title, description) {
    console.log('Carta creada');
    // Vamos a generar los div con el metodo createElement();
    div = document.createElement('div');
    div.className = 'col-sm-6 col-md-4';

    let thumbnail = document.createElement('div');
    thumbnail.className = 'thumbnail';

    let caption = document.createElement('div');
    caption.className = 'caption';

    let h3 = document.createElement('h3');
    h3.textContent = title;

    let p1 = document.createElement('p');
    p1.textContent = description;

    let p2 = document.createElement('p');
    let a = document.createElement('a');
    a.className = 'btn btn-danger';
    a.textContent = 'Eliminar';

    // Aqui eliminamos la tarjeta
    p2.addEventListener('click', deleteCard);

// Aqui agregamos los alementos con el metodo appendChild(;)
    p2.appendChild(a);
    caption.appendChild(h3)
    caption.appendChild(p1)
    caption.appendChild(p2)

    thumbnail.appendChild(caption)

    div.appendChild(thumbnail)
    row.appendChild(div)

}

// Funcion para eliminar las cartas:
function deleteCard(e){
    console.log('Carta eliminada');
    // El padre y elemento a eliminar(hijo)
    let ancestor = getAncestors(e.target, 4);
    row.removeChild(ancestor);

}

function getAncestors(ancestor, level){
    if(level == 0){
        return ancestor;
    }
    level--;
    return getAncestors(ancestor.parentElement, level);

}





















