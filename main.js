var Canvas = new fabric.Canvas ('myCanvas');
var AnchoBloque = 30;
var AlturaBloque = 30;
var JugadorX = 10;
var JugadorY = 10;
var ObjetoJugador = "";
function ActualizacionJugador(){
    fabric.Image.fromURL("player.png", function(Img){
        ObjetoJugador = Img;
        ObjetoJugador.scaleToWidth(150);
        ObjetoJugador.scaleToHeight(150);
        ObjetoJugador.set({
            top:JugadorY,
            left:JugadorX
        });
        Canvas.add(ObjetoJugador);
    });
    

}
function NuevaImagen(getImage){
    fabric.Image.fromURL(getImage, function(Img)
    {
        var ObjetoBloqueo=Img;
        ObjetoBloqueo.scaleToWidth(AnchoBloque);
        ObjetoBloqueo.scaleToHeight(AlturaBloque);
        ObjetoBloqueo.set({
            top:JugadorY,
            left: JugadorX
        });
        Canvas.add(ObjetoBloqueo);
    });
}
window.addEventListener("keydown", MyKeyDown);
function MyKeyDown(e){
    keyPressed=e.keyCode;
    console.log("El Codigo ASCII De La Tecla Presionada Es "+keyPressed);
    if(e.shiftKey==true&&keyPressed=='80'){
        AnchoBloque=AnchoBloque+10;
        AlturaBloque=AlturaBloque+10;
        document.getElementById("AnchoActual").innerHTML=AnchoBloque;
        document.getElementById("AlturaActual").innerHTML=AlturaBloque;
        console.log("Se Preciono P+Shift Al Mismo Tiempo");
    }
    if(e.shiftKey==true&&keyPressed=='77'){
        AnchoBloque=AnchoBloque-10;
        AlturaBloque=AlturaBloque-10;
        document.getElementById("AnchoActual").innerHTML=AnchoBloque;
        document.getElementById("AlturaActual").innerHTML=AlturaBloque;
        console.log("Se Preciono M+Shift Al Mismo Tiempo")
    }
    if(keyPressed=='38'){
        up();
        console.log("up");
    }
    if(keyPressed=='40'){
        down();
        console.log("down");
    }
    if(keyPressed=='37'){
        left();
        console.log("left");
    }
    if(keyPressed=='39'){
        right();
        console.log("Right");
    }
    if(keyPressed=='87'){
        NuevaImagen('wall.jpg');
        console.log("w");
    }
    if(keyPressed=='71'){
        NuevaImagen('ground.png');
        console.log("g");
    }
    if(keyPressed=='68'){
        NuevaImagen('dark_green.png');
        console.log("d");
    }
    if(keyPressed=='76'){
        NuevaImagen('light_green.png');
        console.log("l");
    }
    if(keyPressed=='84'){
        NuevaImagen('trunk.jpg');
        console.log("t");
    }
    if(keyPressed=='82'){
        NuevaImagen('roof.jpg');
        console.log("r");
    }
    if(keyPressed=='89'){
        NuevaImagen('yellow_wall.png');
        console.log("y");
    }
    if(keyPressed=='85'){
        NuevaImagen('unique.png');
        console.log("u");
    }
    if(keyPressed=='67'){
        NuevaImagen('cloud.jpg');
        console.log("c");
    }
}
function up(){
    if (JugadorY>=0){
        JugadorY=JugadorY-AlturaBloque;
        console.log("Altura Del Bloque= "+AlturaBloque);
        console.log("Cuando Se Presiona La Flecha Hacia Arriba X= "+JugadorX+", Y= "+JugadorY);
        Canvas.remove(ObjetoJugador);
        ActualizacionJugador();
    }
}
function down(){
    if (JugadorY<=500){
        JugadorY=JugadorY+AlturaBloque;
        console.log("Altura Del Bloque= "+AlturaBloque);
        console.log("Cuando Se Presiona La Flecha Hacia Abajo X= "+JugadorX+", Y= "+JugadorY);
        Canvas.remove(ObjetoJugador);
        ActualizacionJugador();
    }
}
function right(){
    if (JugadorX<=850){
        JugadorX=JugadorX+AnchoBloque;
        console.log("Ancho Del Bloque= "+AnchoBloque);
        console.log("Cuando Se Presiona La Flecha Hacia La Derecha X= "+JugadorX+", Y= "+JugadorY);
        Canvas.remove(ObjetoJugador);
        ActualizacionJugador();
    }
}
function left(){
    if (JugadorX>0){
        JugadorX=JugadorX-AnchoBloque;
        console.log("Ancho Del Bloque= "+AnchoBloque);
        console.log("Cuando Se Presiona La Flecha Hacia La Izquierda X= "+JugadorX+", Y= "+JugadorY);
        Canvas.remove(ObjetoJugador);
        ActualizacionJugador();
    }
}