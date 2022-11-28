let header = document.getElementById("stickyHeader");
let tSec = document.getElementById("tSec");
let cardsPj = document.getElementById("cardsPj");
let posY;
let alto = cardsPj.offsetHeight;
let pos = 0;
let imgCont = document.getElementById("imgHistory");
let imgsHistory = ["/imagenes/img-historia1.png", "/imagenes/img-historia2.png","/imagenes/img-historia3.png"]
let menu = document.getElementById("menu");
imgCont.style.backgroundImage = `url(${imgsHistory[pos]})`;

window.onscroll = function () {
  let posT = tSec.offsetTop;
  let height = window.innerHeight;
  if (posT < window.scrollY + height) {
    tSec.style.top = (window.scrollY + height - posT) / 5 + "px";
  }

  let y = window.scrollY;
  let min = 20;

  if (y > min) {
    header.classList.add("sticky-header");
    menu.style.top = "58px";

  } else if (y < min) {
    header.classList.remove("sticky-header");
    menu.style.top = "95px";
  }

  if (y < tSec.offsetTop - alto) {
    cardsPj.classList.add("ocultarPjs");
  } else if (y > tSec.offsetTop - alto) {
    cardsPj.classList.remove("ocultarPjs");
  }
  cambiarImagen(y)

  
};


let text1 = document.querySelector("#text1")
let text2 = document.querySelector("#text2")
let text3 = document.querySelector("#text3")

let margen = 300;
function cambiarImagen(y){

  if(y + margen < text2.offsetTop){
    imgCont.style.backgroundImage = `url(${imgsHistory[0]})`;
  }
  else if((y + margen < text3.offsetTop)){
    imgCont.style.backgroundImage = `url(${imgsHistory[1]})`;
  }
  else{
    imgCont.style.backgroundImage = `url(${imgsHistory[2]})`;
  }
}
