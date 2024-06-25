let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

function mostarMensajeConsola() {
    console.log('El botón fue clicado')
}

function mostrarAlerta() {
    let ciudad = prompt("Ingresa el nombre de una ciudad de Brasil:");
    alert("Estuve en " + ciudad + " y me acordé de ti.");
}

function mostarAlerta2(){
    alert("Yo amo JS");
} 

function sumaDosNumeros(){
    let primerNumero = parseInt(prompt('Digite un número'));
    let segunNumero = parseInt(prompt('Digite un segundo número'));
    let resultado = primerNumero + segunNumero; 
    alert(`${primerNumero} + ${segunNumero} = ${resultado}`)
}