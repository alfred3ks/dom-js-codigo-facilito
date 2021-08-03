// Vamos a ver el evento change, este metodo nos permite verificar cuando un evento ha cambiado su valor, se puede utilizar en input de area de texto, de texto, password, checkbox, etc.

// Vamos a trabajar con el checkbox premiun que hemos agregado:

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', function(){
    console.log('cambio de valor');
})

// Cuando damos click al checkbox nos muestra el cambio que ha tenido, al igual si lo desmarcamos.