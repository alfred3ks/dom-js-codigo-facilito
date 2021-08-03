/*

Evento bubling.

Algo interesante de los eventos en JS es que estos no se detienen en el elemento que los disparo, sino que se propagan.

La propagacion se hara en todos los ancestros hasta llegar al nodo padre. Es decir de forma ascendente.

A la propagacion de eventos lo conocemos como evento bubling.

Un ejemplo.

Si un usuario hace click sobre nuestro elemento li de la lista el evento se propagara a su elemento padre osea lu, es como si el usuario diera click a este elemento.

Posteriormente seguira propagandose hasta llegar al ultimo elemento del arbol, document.

El saber como se propagan nuestros eventos en la web nos ayudara a construir paginas web mas robustas y mejor performance.

*/