function sumarProductos(precio1, precio2, precio3) {
    // controlar que los precios no sean negativos
    if (precio1 < 0 || precio2 < 0 || precio3 < 0) {
        return "No se pueden ingresar precios negativos";
    } else {
        const suma = precio1 + precio2 + precio3;
        return "Total a pagar" + " " + "$" + suma;
    }
}
let precioProducto1 = 24900;
let precioProducto2 = 29900;
let precioProducto3 = 19900;

let resultado = sumarProductos (precioProducto1, precioProducto2, precioProducto3);
console.log (resultado);


for (let x = 1; x <= 5; x++) {
    console.log(x);
}
