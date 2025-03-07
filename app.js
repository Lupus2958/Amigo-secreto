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
}