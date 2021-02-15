//Botones Order
var sodaB = document.getElementById('sodaB');
var papasB = document.getElementById('papasB');
var cafeB = document.getElementById('cafeB');


//Elementos del area your order
var orden = document.getElementById('orden');
var pagar = document.getElementById('pagar');
var ordenados = document.getElementById('ordenados');

//Elementos dela area de preparacion
var segs = document.getElementById('segs');
var secsleft = document.getElementById('secsleft');
var terminado = document.getElementById('terminado');
var alimento = document.getElementById('alimento');

//Imagenes de preparacion
var cargar = document.getElementById('cargar');
var sodafin = document.getElementById('sodafin');
var papasfin = document.getElementById('papasfin');
var cafefin = document.getElementById('cafefin');

var total = 0;//total apagar

//Segundos de preparcaion
var timecafe = 10;
var timepapas = 6;
var timesoda = 2;

//Tiempos de preparacion
function preparasoda() {
    segs.classList.remove("ocultar");
    segs.classList.add("mostrar");
    secsleft.classList.remove("ocultar");
    secsleft.classList.add("mostrar");
    terminado.classList.remove("mostrar");
    terminado.classList.add("ocultar");

    segs.innerHTML = timesoda;
    if (timesoda == 0) {
        segs.classList.remove("mostrar");
        segs.classList.add("ocultar");
        secsleft.classList.remove("mostrar");
        secsleft.classList.add("ocultar");
        terminado.classList.remove("ocultar");
        terminado.classList.add("mostrar");

        //Habilitar los botones
        sodaB.disabled = false;
        papasB.disabled = false;
        cafeB.disabled = false;

        //Agregar el producto a la lista de agregados
        var node = document.createElement("p");
        var textnode = document.createTextNode("Pepsi - $ 1.50");
        node.appendChild(textnode);
        ordenados.appendChild(node);

        //poner imagen
        cargar.classList.remove("mostrarimg");
        cargar.classList.add("ocultarimg");
        sodafin.classList.remove("ocultarimg");
        sodafin.classList.add("mostrarimg");
        papasfin.classList.remove("mostrarimg");
        papasfin.classList.add("ocultarimg");
        cafefin.classList.remove("mostrarimg");
        cafefin.classList.add("ocultarimg");

        timesoda = 2;
    } else {
        //Desabilitar todos los botones
        sodaB.disabled = true;
        papasB.disabled = true;
        cafeB.disabled = true;

        //poner gif de carga
        cargar.classList.remove("ocultarimg");
        cargar.classList.add("mostrarimg");
        sodafin.classList.remove("mostrarimg");
        sodafin.classList.add("ocultarimg");
        papasfin.classList.remove("mostrarimg");
        papasfin.classList.add("ocultarimg");
        cafefin.classList.remove("mostrarimg");
        cafefin.classList.add("ocultarimg");

        timesoda -= 1;
        setTimeout("preparasoda()", 1000);
    }
}
function preparapapas() {
    segs.classList.remove("ocultar");
    segs.classList.add("mostrar");
    secsleft.classList.remove("ocultar");
    secsleft.classList.add("mostrar");
    terminado.classList.remove("mostrar");
    terminado.classList.add("ocultar");

    segs.innerHTML = timepapas;
    if (timepapas == 0) {
        segs.classList.remove("mostrar");
        segs.classList.add("ocultar");
        secsleft.classList.remove("mostrar");
        secsleft.classList.add("ocultar");
        terminado.classList.remove("ocultar");
        terminado.classList.add("mostrar");

        //Habilitar los botones
        sodaB.disabled = false;
        papasB.disabled = false;
        cafeB.disabled = false;

        //Agregar el producto a la lista de agregados
        var node = document.createElement("p");
        var textnode = document.createTextNode("Papas Sabritas - $ 0.50");
        node.appendChild(textnode);
        ordenados.appendChild(node);

        //poner imagen
        cargar.classList.remove("mostrarimg");
        cargar.classList.add("ocultarimg");
        sodafin.classList.remove("mostrarimg");
        sodafin.classList.add("ocultarimg");
        papasfin.classList.remove("ocultarimg");
        papasfin.classList.add("mostrarimg");
        cafefin.classList.remove("mostrarimg");
        cafefin.classList.add("ocultarimg");

        timepapas = 6;
    } else {
        //Desabilitar todos los botones
        sodaB.disabled = true;
        papasB.disabled = true;
        cafeB.disabled = true;

        //poner gif de carga
        cargar.classList.remove("ocultarimg");
        cargar.classList.add("mostrarimg");
        sodafin.classList.remove("mostrarimg");
        sodafin.classList.add("ocultarimg");
        papasfin.classList.remove("mostrarimg");
        papasfin.classList.add("ocultarimg");
        cafefin.classList.remove("mostrarimg");
        cafefin.classList.add("ocultarimg");

        timepapas -= 1;
        setTimeout("preparapapas()", 1000);
    }
}
function preparacafe() {
    segs.classList.remove("ocultar");
    segs.classList.add("mostrar");
    secsleft.classList.remove("ocultar");
    secsleft.classList.add("mostrar");
    terminado.classList.remove("mostrar");
    terminado.classList.add("ocultar");

    segs.innerHTML = timecafe;
    if (timecafe == 0) {
        segs.classList.remove("mostrar");
        segs.classList.add("ocultar");
        secsleft.classList.remove("mostrar");
        secsleft.classList.add("ocultar");
        terminado.classList.remove("ocultar");
        terminado.classList.add("mostrar");

        //Habilitar los botones
        sodaB.disabled = false;
        papasB.disabled = false;
        cafeB.disabled = false;

        //Agregar el producto a la lista de agregados
        var node = document.createElement("p");
        var textnode = document.createTextNode("Cafe negro - $ 0.75");
        node.appendChild(textnode);
        ordenados.appendChild(node);

        //poner imagen
        cargar.classList.remove("mostrarimg");
        cargar.classList.add("ocultarimg");
        sodafin.classList.remove("mostrarimg");
        sodafin.classList.add("ocultarimg");
        papasfin.classList.remove("mostrarimg");
        papasfin.classList.add("ocultarimg");
        cafefin.classList.remove("ocultarimg");
        cafefin.classList.add("mostrarimg");
        
        timecafe = 10;
    } else {
        //Desabilitar todos los botones
        sodaB.disabled = true;
        papasB.disabled = true;
        cafeB.disabled = true;

        //poner gif de carga
        cargar.classList.remove("ocultarimg");
        cargar.classList.add("mostrarimg");
        sodafin.classList.remove("mostrarimg");
        sodafin.classList.add("ocultarimg");
        papasfin.classList.remove("mostrarimg");
        papasfin.classList.add("ocultarimg");
        cafefin.classList.remove("mostrarimg");
        cafefin.classList.add("ocultarimg");

        timecafe -= 1;
        setTimeout("preparacafe()", 1000);
    }
}


//Botones
function agregarSoda() {
    var node = document.createElement("p");
    var textnode = document.createTextNode("Pepsi - $ 1.50");
    node.appendChild(textnode);
    orden.appendChild(node);

    //Agregando el precio al total
    total += 1.50;
    pagar.innerHTML = "TOTAL: $ " + total;

    preparasoda();
}
function agregarPapas() {
    var node = document.createElement("p");
    var textnode = document.createTextNode("Papas Sabritas - $ 0.50");
    node.appendChild(textnode);
    orden.appendChild(node);

    //Agregando el precio al total
    total += 0.50;
    pagar.innerHTML = "TOTAL: $ " + total;

    preparapapas();
}
function agregarCafe() {
    var node = document.createElement("p");
    var textnode = document.createTextNode("Cafe negro - $ 0.75");
    node.appendChild(textnode);
    orden.appendChild(node);

    //Agregando el precio al total
    total += 0.75;
    pagar.innerHTML = "TOTAL: $ " + total;

    preparacafe();
}





