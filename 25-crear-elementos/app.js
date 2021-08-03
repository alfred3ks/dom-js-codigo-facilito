/*

Crear nuevos elementos.

Ahora aprenderemos a crear elementos en nuestro DOM y a eliminarlos.

Cada vez que hagamos click sobre el boton de agregar curso se nos creara una tajera con ese curso, donde veremos el nombre y su descripcion.

*/

const row = document.querySelector('.row')

const form = document.getElementById('course-form')
form.addEventListener('submit', function(e){
    e.preventDefault()

    let title = document.getElementById('title-form').value
    let description = document.getElementById('description-form').value

    create_card(title, description)
})

function create_card(title, description) {


    let html = `<div class="col-sm-6 col-md-4">
                    <div class="thumbnail">
                        <div class="caption">
                            <h3 id="title_card">${title}</h3>
                            <p class="" id="description_card">${description}</p>
                            <a href="#" class="btn btn-danger">Acción</a>
                    </div>
                </div>
            </div>`

        row.innerHTML += html

}
