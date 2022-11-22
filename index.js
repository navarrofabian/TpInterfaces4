//cambiar icono de menu hamburguesa
let estado = 0;
const cambiarIcon = () =>{

  let burger = document.querySelector('.burger');
  let linea1 = document.querySelector('.linea1');
  let linea2 = document.querySelector('.linea2');
  let linea3 = document.querySelector('.linea3');

  burger.addEventListener('click', () =>{
      linea1.classList.toggle('linea1-activa');
      linea2.classList.toggle('linea2-activa');
      linea3.classList.toggle('linea3-activa');
      if(estado == 0){
        mostrarMenu()
        estado = 1;
      }
      else{
        ocultarMenu();
        estado = 0;
      }

      
  });
}

cambiarIcon();

function ocultarMenu(){
    document.getElementById('menu').style.display = 'none';
}

function mostrarMenu(){
    console.log("mostrar-menu")
    document.getElementById('menu').style.display = '';
}

ocultarMenu();


let header = document.getElementById('stickyHeader');

window.onscroll = function() {
  let y = window.scrollY;
  let min = 20;
  if(y > min) {
    header.classList.add('sticky-header');

  }
  else {
    header.classList.remove('sticky-header');
  }
  
};



function temporizadorDeRetraso() {
  identificadorTiempoDeEspera = setTimeout(funcionConRetraso, 5000);
}

function funcionConRetraso() {
    document.getElementById('onload').remove()
    var div = document.getElementById('bodyRemove');
    div.classList.remove('hidden');
}

temporizadorDeRetraso()


const main_img = document.querySelector(".main_img");
const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach((thumb) => {
  thumb.addEventListener("mouseover", function () {
    const active = document.querySelector(".active");
    active.classList.remove("active");
    thumb.classList.add("active");
    main_img.src = thumb.src;
  });
});

const carrusel = document.querySelector(".carr-destacados");

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 1;
const start = () => {
  intervalo = setInterval(function () {
    carrusel.scrollLeft = carrusel.scrollLeft + step;
    if (carrusel.scrollLeft === maxScrollLeft) {
      step = -10;
    } else if (carrusel.scrollLeft === 0) {
      step = 1;
    }
  }, 15);
};

const stop = () => {
  clearInterval(intervalo);
};

carrusel.addEventListener("mouseover", () => {
  stop();
});

carrusel.addEventListener("mouseout", () => {
  start();
});

start();



let imagesJuego = ['img-gameplay1.jpg', 'img-gameplay2.png', 'img-gameplay2.jpg'];


function mostrarImg(){

}


