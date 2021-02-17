//clase e instancias para los productos
class producto {
    constructor(nombre, precio, imag, time) {
        this.nombre = nombre;
        this.precio = precio;
        this.imag = imag;
        this.time = time;
    }
}
const soda = new producto("Pepsi", 1.50, "/Content/img/soda.png", 2);
const papas = new producto("Papas Sabritas", 0.50, "/Content/img/papas.png", 6);
const cafe = new producto("Cafe negro", 0.75, "/Content/img/cafe.png", 10);

//Botones Order
var sodaB = document.getElementById('sodaB');
var papasB = document.getElementById('papasB');
var cafeB = document.getElementById('cafeB');

//Elementos del area your order
var orden = document.getElementById('orden');
var pagar = document.getElementById('pagar');

//Elementos del area de dispatched products
var ordenados = document.getElementById('ordenados');

//Elementos dela area de preparacion
var segs = document.getElementById('segs');
var secsleft = document.getElementById('secsleft');
var terminado = document.getElementById('terminado');
var alimento = document.getElementById('alimento');

//Imagenes de preparacion
var image = document.getElementById('image');


var total = 0;//total apagar

//Segundos de preparcaion
//var timecafe = 10;
//var timepapas = 6;
//var timesoda = 2;

//Tiempos de preparacion
function preparacion(nom, prec, tiempo, img) {
    segs.classList.remove("ocultar");
    segs.classList.add("mostrar");
    secsleft.classList.remove("ocultar");
    secsleft.classList.add("mostrar");
    terminado.classList.remove("mostrar");
    terminado.classList.add("ocultar");

    //Tiempo de preparacion
    //var original = prod.time;

    segs.innerHTML = tiempo;//
    if (tiempo == 0) {//
        segs.classList.remove("mostrar");
        segs.classList.add("ocultar");
        secsleft.classList.remove("mostrar");
        secsleft.classList.add("ocultar");
        terminado.classList.remove("ocultar");
        terminado.classList.add("mostrar");

        //Agregar el producto a la lista de agregados
        var node = document.createElement("p");
        var textnode = document.createTextNode(nom + " - $" + prec);
        node.appendChild(textnode);
        ordenados.appendChild(node);

        //poner imagen
        image.src = img;


    } else {
        //poner gif de carga
        image.src = "/Content/img/cargar.gif";

        tiempo -= 1;//
        setTimeout(function () { preparacion(nom, prec, tiempo, img); }, 1000);
        //setTimeout( function () { incrementarVar ( param1, param2 ); }, 1000 ); 
    }
}


//Botones
function order(prod) {
    var node = document.createElement("p");
    var textnode = document.createTextNode(prod.nombre + " - $" + prod.precio);
    node.appendChild(textnode);
    orden.appendChild(node);

    //Agregando el precio al total
    total += prod.precio;
    pagar.innerHTML = "TOTAL: $ " + total;

    preparacion(prod.nombre, prod.precio, prod.time, prod.imag);
}

/*PREPARACION*/ 
//function preparapapas() {
//    segs.classList.remove("ocultar");
//    segs.classList.add("mostrar");
//    secsleft.classList.remove("ocultar");
//    secsleft.classList.add("mostrar");
//    terminado.classList.remove("mostrar");
//    terminado.classList.add("ocultar");

//    segs.innerHTML = timepapas;
//    if (timepapas == 0) {
//        segs.classList.remove("mostrar");
//        segs.classList.add("ocultar");
//        secsleft.classList.remove("mostrar");
//        secsleft.classList.add("ocultar");
//        terminado.classList.remove("ocultar");
//        terminado.classList.add("mostrar");

//        //Agregar el producto a la lista de agregados
//        var node = document.createElement("p");
//        var textnode = document.createTextNode("Papas Sabritas - $ 0.50");
//        node.appendChild(textnode);
//        ordenados.appendChild(node);

//        //poner imagen
//        cargar.classList.remove("mostrarimg");
//        cargar.classList.add("ocultarimg");
//        sodafin.classList.remove("mostrarimg");
//        sodafin.classList.add("ocultarimg");
//        papasfin.classList.remove("ocultarimg");
//        papasfin.classList.add("mostrarimg");
//        cafefin.classList.remove("mostrarimg");
//        cafefin.classList.add("ocultarimg");

//        timepapas = 6;
//    } else {
//        //poner gif de carga
//        cargar.classList.remove("ocultarimg");
//        cargar.classList.add("mostrarimg");
//        sodafin.classList.remove("mostrarimg");
//        sodafin.classList.add("ocultarimg");
//        papasfin.classList.remove("mostrarimg");
//        papasfin.classList.add("ocultarimg");
//        cafefin.classList.remove("mostrarimg");
//        cafefin.classList.add("ocultarimg");

//        timepapas -= 1;
//        setTimeout("preparapapas()", 1000);
//    }
//}
//function preparacafe() {
//    segs.classList.remove("ocultar");
//    segs.classList.add("mostrar");
//    secsleft.classList.remove("ocultar");
//    secsleft.classList.add("mostrar");
//    terminado.classList.remove("mostrar");
//    terminado.classList.add("ocultar");

//    segs.innerHTML = timecafe;
//    if (timecafe == 0) {
//        segs.classList.remove("mostrar");
//        segs.classList.add("ocultar");
//        secsleft.classList.remove("mostrar");
//        secsleft.classList.add("ocultar");
//        terminado.classList.remove("ocultar");
//        terminado.classList.add("mostrar");

//        //Agregar el producto a la lista de agregados
//        var node = document.createElement("p");
//        var textnode = document.createTextNode("Cafe negro - $ 0.75");
//        node.appendChild(textnode);
//        ordenados.appendChild(node);

//        //poner imagen
//        cargar.classList.remove("mostrarimg");
//        cargar.classList.add("ocultarimg");
//        sodafin.classList.remove("mostrarimg");
//        sodafin.classList.add("ocultarimg");
//        papasfin.classList.remove("mostrarimg");
//        papasfin.classList.add("ocultarimg");
//        cafefin.classList.remove("ocultarimg");
//        cafefin.classList.add("mostrarimg");

//        timecafe = 10;
//    } else {
//        //poner gif de carga
//        cargar.classList.remove("ocultarimg");
//        cargar.classList.add("mostrarimg");
//        sodafin.classList.remove("mostrarimg");
//        sodafin.classList.add("ocultarimg");
//        papasfin.classList.remove("mostrarimg");
//        papasfin.classList.add("ocultarimg");
//        cafefin.classList.remove("mostrarimg");
//        cafefin.classList.add("ocultarimg");

//        timecafe -= 1;
//        setTimeout("preparacafe()", 1000);
//    }
//}

/*FUNCIONES AGREGAR*/
//function agregarPapas() {
//    var node = document.createElement("p");
//    var textnode = document.createTextNode("Papas Sabritas - $ 0.50");
//    node.appendChild(textnode);
//    orden.appendChild(node);

//    //Agregando el precio al total
//    total += 0.50;
//    pagar.innerHTML = "TOTAL: $ " + total;

//    preparapapas();
//}
//function agregarCafe() {
//    var node = document.createElement("p");
//    var textnode = document.createTextNode("Cafe negro - $ 0.75");
//    node.appendChild(textnode);
//    orden.appendChild(node);

//    //Agregando el precio al total
//    total += 0.75;
//    pagar.innerHTML = "TOTAL: $ " + total;

//    preparacafe();
//}





