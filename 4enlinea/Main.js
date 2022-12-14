"use strict";
function xEnLinea() {
  let xEnLinea = parseInt(document.querySelector("#selectXenlinea").value);
  console.log(Math.pow(parseInt(xEnLinea + 4), 2));
  return xEnLinea;
}

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let canvas = document.querySelector("#canvas");

let ficha1 = document.getElementById("ficha1");
let ficha2 = document.getElementById("ficha2");

let juego;

let finJuego = document.getElementById("finJuego");

function iniciarJuego() {

let infoPartida = document.getElementById("info");
infoPartida.classList.toggle("ocultar-info-partida");



let xLinea = parseInt(xEnLinea());

let ctx = canvas.getContext("2d");
  juego = new Juego(canvas, ctx, xLinea);  
  juego.crearTablero();
  juego.generarFichas();
  juego.drawFigure();
 
  temporizadorDeRetraso();
}

function onMouseDown(e) {
let x = e.offsetX;
let y = e.offsetY;
juego.onMouseDown(x, y);
}
function onMouseUp(e) {
juego.onMouseUp();
}

function onMouseMove(e) {
let x = e.offsetX;
let y = e.offsetY;
if(juego != undefined){
    juego.onMouseMove(x, y);
}

}
canvas.addEventListener("mousedown", onMouseDown, false);
canvas.addEventListener("mouseup", onMouseUp, false);
canvas.addEventListener("mousemove", onMouseMove, false);


function finalizarJuego() {
  console.log("finalizo el juego");
  borrarAlerta()
  canvas.removeEventListener('mousedown', onMouseDown, false)

}

//capturar eventos
let btnReiniciar = document.querySelector("#btn-reiniciar");
    btnReiniciar.addEventListener("click", reiniciarJuego);

let btnIniciar = document.querySelector("#btn-iniciar");
btnIniciar.addEventListener("click", iniciarJuego);


//funcion retorna el resultado de comparar el jugador de mi ficha con otro pasado por paramtro
function reiniciarJuego() {
  console.log('reiniciarJuego')
    location.reload()
}



//Definimos y ejecutamos los segundos
let minutos = 60;
let segundos = 0;
function cargarSegundo() {
  let txtSegundos;

  if (segundos < 0) {
    segundos = 59;
  }
  if (segundos == 0 && minutos == 0) {
    finalizarJuego()
    juego.mostrarGanador()
  }

  //Mostrar Segundos en pantalla
  if (segundos < 10) {
    txtSegundos = `0${segundos}`;
  } else {
    txtSegundos = segundos;
  }
  document.getElementById("segundos").innerHTML = txtSegundos;
  segundos--;

  cargarMinutos(segundos);
}
//Definimos y ejecutamos los minutos
function cargarMinutos(segundos) {
  let txtMinutos;

  if (segundos == -1 && minutos !== 0) {
    setTimeout(() => {
      minutos--;
    }, 500);
  } else if (segundos == -1 && minutos == 0) {
    setTimeout(() => {
      minutos = 59;
    }, 500);
  }
  //Mostrar Minutos en pantalla
  if (minutos < 10) {
    txtMinutos = `0${minutos}`;
  } else {
    txtMinutos = minutos;
  }
  document.getElementById("minutos").innerHTML = txtMinutos;
}

let temporizador;

function temporizadorDeRetraso() {
    temporizador = setInterval(cargarSegundo, 1000);
}

function borrarAlerta() {
  clearInterval(temporizador);
}
