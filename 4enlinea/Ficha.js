class Ficha{
    constructor(posX, posY,radius,context, jugador,img){
        this.posX = posX;
        this.posY = posY;
        this.radius = radius;
        this.ctx = context;
        this.jugador = jugador;
        this.isMov = false;
        this.jugada = false;
        this.img = img;
    }
    getJugador(){
        return this.jugador;
    }


    setPos(x,y){
        this.posX = x;
        this.posY = y;
    }
    setPosX(x){
        this.posX = x;
    }
    setPosY(y){
        this.posY = y;
    }
    setFill(fill){
        this.fill = fill;
    }
    setRadius(r){
        this.radius = r;
    }
    getRadius(){
        return this.radius;
    }
    getPos(){
        return{
            x: this.getPosX(),
            y: this.getPosY()
        };
    }
    getPosX(){
        return this.posX;
    }
    getPosY(){
        return this.posY;
    }
    getFill(){
        return this.fill;
    }
    
    setResaltado(estado){
        this.isResaltado = estado;
    }

    setMov(estado){
        this.isMov = estado;
    }

    getMov(){
        return this.isMov;
    }
    mismoJugador(otroJugador){
        return this.getJugador().getNombre() == otroJugador;
    }

    fueJugada(){
        return this.jugada
    }

    setJugada(estado){
        this.jugada = estado;
    }

    draw(){

        let y = this.posY - this.radius;
        let x = this.posX - this.radius;
        this.ctx.drawImage(this.img, x, y, 80, 80);
    }

    isPointInside(x, y){
        let _x =this.posX - x;
        let _y = this.posY - y;
        return Math.sqrt(_x * _x + _y *_y)< this.radius;
        
    }
    
}