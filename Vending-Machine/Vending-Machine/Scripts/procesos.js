var btnsoda = document.getElementById('sodaB');
var btnpapas = document.getElementById('papasB');
var btncafe = document.getElementById('cafeB');

var orden = document.getElementById('orden');
var pagar = document.getElementById('pagar');

var total = 0;

function agregarSoda() {
    var node = document.createElement("p");
    var textnode = document.createTextNode("Pepsi - $ 1.50");
    node.appendChild(textnode);
    orden.appendChild(node);

    total += 1.50;
    pagar.innerHTML = "Total: $ " + total;
}
function agregarPapas() {
    var node = document.createElement("p");
    var textnode = document.createTextNode("Papas Sabritas- $ 0.50");
    node.appendChild(textnode);
    orden.appendChild(node);

    total += 0.50;
    pagar.innerHTML = "Total: $ " + total;
}
function agregarCafe() {
    var node = document.createElement("p");
    var textnode = document.createTextNode("Cafe negro- $ 0.75");
    node.appendChild(textnode);
    orden.appendChild(node);

    total += 0.75;
    pagar.innerHTML = "Total: $ " + total;
}