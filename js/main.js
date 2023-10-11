/*function sumarProductos(precio1, precio2, precio3) {
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
}*/

const productos = [
    {
      nombre: "M Gilbert",
      precio: 57000
    },
    {
      nombre: "M Wayvee",
      precio: 79000
    },
    {
        nombre: "Old Skool Bolt",
        precio: 55000
    },
    {
        nombre: "Skate Old Skool",
        precio: 64000
      },
      {
        nombre: "U Authentic",
        precio: 34000
      },
      {
          nombre: "U Old Skool",
          precio: 53000
      },
      {
        nombre: "U Sk8",
        precio: 57000
      },
      {
          nombre: "W Sk8 Platform",
          precio: 59000
      }

  ];

  function buscarProductoPorNombre(nombre) {
    return productos.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());
  }
  const productoBuscado = buscarProductoPorNombre("M Gilbert");
console.log("Producto buscado:", productoBuscado);

function filtrarProductosPorPrecioMaximo(precioMaximo) {
    return productos.filter(producto => producto.precio <= precioMaximo);
  }

  const productosFiltrados = filtrarProductosPorPrecioMaximo(60000);
console.log("Productos filtrados por precio máximo de 60000:", productosFiltrados);

const nombreProducto = prompt("Ingrese el nombre del producto:");
let encontrado = false;

for (const producto of productos) {
    if (producto.nombre.toLowerCase() === nombreProducto.toLowerCase()) {
      alert(`Producto encontrado:\nNombre: ${producto.nombre}\nPrecio: $${producto.precio}`);
      encontrado = true;
      break;
    }
  }

  if (!encontrado) {
    alert("Producto no encontrado. Por favor, verifique el nombre ingresado.");
  }