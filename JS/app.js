alert("Hola")

const contador = document.querySelector("#Contador");
contador.textContent = "0 segundos";

let segundos = 1;
let minutos = 1;

setInterval(() => {
    contador.textContent = `${segundos++} segundos`;
    if(segundos === 60*minutos){
        alert(`Ya paso ${minutos} minutos`);
        minutos++;
    }
},1000);

