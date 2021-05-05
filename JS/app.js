alert("Hola")

const contador = document.querySelector("#Contador");
contador.textContent = "0 segundos";

let numero = 1;

setInterval(() => {
    contador.textContent = `${numero++} segundos`;
},1000);