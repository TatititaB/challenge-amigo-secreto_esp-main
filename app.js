let listaAmigo = [];
let amigoCapturado = '';

console.log(amigoCapturado);
console.log(listaAmigo);

// Función para agregar un amigo a la lista
function agregarAmigo() {
    amigoCapturado = document.getElementById('amigo').value.trim();

    // Verificar si el campo está vacío
    if (amigoCapturado === '') {
        alert('Por favor digita un valor válido');
        return;
    }

    // Verificar si el amigo ya está en la lista
    if (listaAmigo.includes(amigoCapturado)) {
        alert('Ya tienes el amigo incluido');
        limpiarCaja();
        return;
    } else {
        // Agregar el amigo a la lista
        listaAmigo.push(amigoCapturado);
        limpiarCaja();
        actualizarListaAmigos();  // Llamar a la función para actualizar la lista en el HTML
        return;
    }
}

// Función para limpiar el campo de texto
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');

    // Limpiar la lista antes de agregar nuevos elementos
    lista.innerHTML = '';

    // Recorrer la lista de amigos y agregar un <li> para cada uno
    for (let i = 0; i < listaAmigo.length; i++) {
        const nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = listaAmigo[i];
        lista.appendChild(nuevoAmigo);
    }
}

