let listaAmigo = [];
let amigoCapturado = '';

console.log(amigoCapturado);
console.log(listaAmigo);


function agregarAmigo() {
    amigoCapturado = document.getElementById('amigo').value.trim();

    if (amigoCapturado === '') {
        alert('Por favor digita un valor válido');
        return;
    }

    if (listaAmigo.includes(amigoCapturado)) {
        alert('Ya tienes el amigo incluido');
        limpiarCaja();
        return;
    } else {
        listaAmigo.push(amigoCapturado);
        limpiarCaja();
        actualizarListaAmigos();
        return;
    }
}
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}
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
function sortearAmigo() {
    // Verificar si hay al menos un amigo en la lista
    if (listaAmigo.length < 1) {
        alert('¡La lista está vacía! Agrega al menos un amigo.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigo.length);
    const amigoSecreto = listaAmigo[indiceAleatorio];

    mostrarResultado(amigoSecreto);
}
function mostrarResultado(amigoSecreto) {
    const resultadoList = document.getElementById('resultado');
    resultadoList.innerHTML = '';

    const li = document.createElement('li');
    li.textContent = `¡Tu amigo secreto es: ${amigoSecreto}!`;
    resultadoList.appendChild(li);
}
