/*

Crear nuevos elementos al DOM.

*/

const row = document.querySelector('.row');

const form = document.getElementById('course-form');
form.addEventListener('submit', function(e){
    e.preventDefault();

    let title = document.getElementById('title-form').value;
    let description = document.getElementById('description-form').value;

    create_card(title, description);
})

/*

<!-- card -->
            <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                    <div class="caption">
                        <h3 id="title_card">Título</h3>
                        <p id="description_card">Descripción</p>
                        <a href="#" class="btn btn-danger">Acción</a>
                    </div>
                </div>
            </div>
*/

function create_card(title, description) {
    // Creamos los elementos con el metodo createElement();
    let div = document.createElement('div');
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


// agregamos los elementos por medio del metodo appendChild():
    p2.appendChild(a);
    caption.appendChild(h3)
    caption.appendChild(p1)
    caption.appendChild(p2)

    thumbnail.appendChild(caption)

    div.appendChild(thumbnail)
    row.appendChild(div)

}