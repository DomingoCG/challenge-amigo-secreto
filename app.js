// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = []; //lista para almacenar los nombres de los amigos

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    if(nombreAmigo === "") {
        alert("Debes ingresar un nombre");
        return;
    }

    amigo.push(nombreAmigo); //agregar el nombre a la lista de amigos
    inputAmigo.value = ""; //limpiar el input
    inputAmigo.focus(); //colocar el cursor en el input
    renderizarAmigos(); //actualizar la lista de amigos
}

function renderizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; //limpiar la lista de amigos

    for (let i = 0; i < amigo.length; i++) {
        let item = document.createElement("li"); //crear un elemento de lista
        item.textContent = amigo[i]; //agregar el nombre del amigo al elemento de lista
        listaAmigos.appendChild(item); //agregar el elemento de lista a la lista de amigos
    }
}

function sortearAmigo() {
    if (amigo.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

    //limpiar la lista de amigos
    let limpiarLista = document.getElementById("listaAmigos"); 
    limpiarLista.innerHTML = "";
}