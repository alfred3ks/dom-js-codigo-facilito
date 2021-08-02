/*

Eventos.

En JS nosotros podemos establecer eventos a cuaquier elemento de nuestro DOM.

Con los eventos es la forma en que podemos controlar acciones que ocurren en nuestra pagina web. Cuando un evento se dispara nosotros podemos definir que tipo de acciones queremos que se ejecute.

Por ejemplo el evento al hacer click sobre un boton.

Para definir eventos en nuestra web va a existir dos maneras:

La primera:
Contamos con una funcion que nos dara una saludo.

function saluda() {
    console.log('Hola a todos desde JavaScript');
}

Esa funcion queremos que se ejecute cuando el usuario haga click sobre la boton saludar.

La segunda:
// Usaremos el metodo addEvenlistener(), le pasamos dos argumentos, el primero el evento (click), y siguiente una funcion, que puede ser anonima, flecha o normal. etc.

function saludar() {
    console.log('Segundo saludo');
}

button.addEventListener('click', saludar);

// OJO esto es bastante importante....

*/