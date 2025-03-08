// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = [];

function agregarAmigo() {
    let introducirAmigo = document.getElementById("amigo");
    let friends = introducirAmigo.value;
    
    if (!friends) {
        alert("Por favor, ingrese el nombre");
        return;
    }
    amigo.push(friends);
    introducirAmigo.value = "";
    introducirAmigo.focus();
    actualizarAmigos();
    }

function actualizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    
    for (let i = 0; i < amigo.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigo [i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigo.length === 0) {
        alert ("No hay amigos para el sorteo");
        return;
    }

    let amigoAleatorio = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteados es: ${amigoAleatorio}`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
}