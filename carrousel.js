
window.onload = function () {
    // Variables
    let imagenes = [
        'imagenes/img-gameplay1.jpg',
        'imagenes/img-gameplay2.png',
        '/imagenes/img-gameplay3.jpg'
    ];

    let pos = 0;
    let botonRetroceder = document.querySelector('#retroceder');
    let botonAvanzar = document.querySelector('#avanzar');
    let img = document.querySelector('#imagen');
    let imgsCont = document.querySelector("#imgsCont");

    function nextImg() {
        if(pos >= imagenes.length - 1) {
            pos = 0;
        } else {
            pos++;
        }
        renderizarImagen();
    }

    
    function antImg() {
        if(pos <= 0) {
            pos = imagenes.length - 1;
        } else {
            pos--;
        }
        renderizarImagen();
    }




    function renderizarImagen () {
        img.style.backgroundImage = `url(${imagenes[pos]})`;
        img.style.animationName = "none";

        setTimeout(() => {
            img.style.animationName = "effect";
        }, 0);

    }

    // Eventos
    botonAvanzar.addEventListener('click', nextImg);
    botonRetroceder.addEventListener('click', antImg);
    renderizarImagen();
} 
