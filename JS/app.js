const contador = document.querySelector("#Contador");
contador.textContent = "0 segundos";

let segundos = 1;
let minutos = 1;

let intervalo = setInterval(tiempo,1000);
function tiempo(){
    contador.textContent = `${segundos++} segundos`;
    if(segundos === 60*minutos){
        alert(`Ya paso ${minutos} minutos`);
        minutos++;
    }
}

const parar = () => {
    clearInterval(intervalo);
}

// Si se preciona varias veces continuar ocurre un error
const continuar = () => {
    intervalo = setInterval(tiempo,1000);
}

const resetear = () => {
    segundos = 0;
    minutos = 1;
}