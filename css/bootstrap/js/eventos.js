document.addEventListener("keydown", dibujarTeclado);
var d = document.getElementById("area_de_dibujo");
var papel = d.getContext("2d");
d.addEventListener("mousemove", dibujarmouse)
d.addEventListener("mousedown", comensar)
d.addEventListener("mouseup", terminar)
//keydown
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};
var x = 150;
var y = 150;
var color = "blue"
var clic = false;
dibujarlinea(color, x - 1, y - 1, x + 1, y + 1, papel);
dibujarlinea(color, 1, 1, 1, d.height, papel);
dibujarlinea(color, 1, d.height, d.width - 1, d.height - 1, papel);
dibujarlinea(color, 1, 1, d.width - 1, 1, papel);
dibujarlinea(color, d.width - 1, 1, d.width - 1, d.height, papel);
function dibujarmouse(evento) {
    if (clic)
        dibujarlinea(color, evento.offsetX - 1, evento.offsetY - 1, evento.offsetX + 1, evento.offsetY + 1, papel);
}
function comensar() {
    clic = true;
}
function terminar() {
    clic = false;
}
function dibujarTeclado(evento) {
    var colorcito = "green";
    var movimiento = 1;
    switch (evento.keyCode) {
        case teclas.UP:
            dibujarlinea(colorcito, x, y, x, y - movimiento, papel);
            y -= movimiento;
            break;
        case teclas.DOWN:
            dibujarlinea(colorcito, x, y, x, y + movimiento, papel);
            y += movimiento;
            break;
        case teclas.LEFT:
            dibujarlinea(colorcito, x, y, x - movimiento, y, papel);
            x -= movimiento;
            break;
        case teclas.RIGHT:
            dibujarlinea(colorcito, x, y, x + movimiento, y, papel);
            x += movimiento;
            break;
        default:

            break;
    }
}
function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;    
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
function onfo(con){
con.value="estado onfocus"
}
function onblu(con){
    con.value="estado onblur"
}