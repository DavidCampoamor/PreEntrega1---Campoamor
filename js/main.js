// PRODUCTOS ARRAY
const productos = [
  {
    nombre: "M Gilbert",
    descripcion: `Este modelo cuenta con una horma angosta. Recomendamos comprar un punto más. Las
    inconfundibles zapatillas de skate Gilbert Crockett creadas por Él cuentan con una parte
    superior resistente de cuero y lona de 283 g con refuerzos de caucho DURACAP™ en las
    zonas más expuestas al desgaste para ofrecer una durabilidad inigualable.`,
    imagen: "./img/m-gilbert.jpg",
    precio: 57000,
  },
  {
    nombre: "M Wayvee",
    descripcion: `Esta temporada, Vans Skateboarding se asocia con Justin Henry para presentar una completa
    colección de calzado y ropa… todo diseñado por el propio Justin para asegurarse de que
    puede superar los límites del estilo y la progresión. Vans Skateboarding se enorgullece
    de presentar las Wayvee.`,
    imagen: "./img/m-wayvee.jpg",
    precio: 79000,
  },
  {
    nombre: "Old Skool Bolt",
    descripcion: `Conocido por primera vez como Vans #36, Old Skool debutó en 1977 con una nueva adición única: un garabato aleatorio dibujado por el fundador Paul Van Doren, y originalmente
    denominado "raya de jazz".`,
    imagen: "./img/old-skool-bolt.jpg",
    precio: 55000,
  },
  {
    nombre: "Skate Old Skool",
    descripcion: `Los nuevos diseños Skate Classics están dotados de un interior ultrarresistente,
    especialmente diseñado para la práctica del skateboarding.`,
    imagen: "./img/skate-old-skool.jpg",
    precio: 64000,
  },
  {
    nombre: "U Authentic",
    descripcion: `La Authentic es el modelo fundamental y clásico de Vans. Lanzada en el año 1966, ahora es un modelo icónico de Vans.`,
    imagen: "./img/u-authentic.jpg",
    precio: 34000,
  },
  {
    nombre: "U Old Skool",
    descripcion: `Las Old Skool son las zapatillas clásicas de Vans y el primer modelo en lucir el icónico
        sidestripe de la marca. Nacieron como un calzado para skaters de los años 70´y con el
        correr
        de las décadas se transformó en un modelo básico de lifestyle.`,
    imagen: "./img/u-old-skool.jpg",
    precio: 53000,
  },
  {
    nombre: "U Sk8",
    descripcion: `Las Sk8-Hi de Vans son unas zapatillas ligeras, de caña alta y con cordones. Presenta
    amortiguación en el talón para más confort, una puntera reforzada que garantiza la
    durabilidad y cuello acolchado para mayor sujeción y flexibilidad.`,
    imagen: "./img/u-sk8.jpg",
    precio: 57000,
  },
  {
    nombre: "W Sk8 Platform",
    descripcion: `La plataforma Sk8-Hi combina el legendario top alto con cordones con parte superior de
    lona resistente y gamuza, collares acolchados para brindar apoyo y flexibilidad, y suelas de
    gofres de firma de plataforma.`,
    imagen: "./img/w-sk8-platform.jpg",
    precio: 59000,
  },
];

// Carga de productos
const contenedorProductos = document.querySelector("#contenedor-productos");

function cargarProductos() {
  productos.forEach((producto, index) => {
    const div = document.createElement("div");
    div.classList.add("product-container");
    div.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <div class="product-details">
            <h2>${producto.nombre}</h2>
            <p>${producto.descripcion}</p>
            <p>Precio: $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${index})">Agregar al carrito</button>
        </div>`;
    contenedorProductos.append(div);
  });
}

cargarProductos();

// Carrito de compra
const carrito = [];
const contenedorCarrito = document.createElement("div");
contenedorCarrito.id = "carrito-container";
contenedorCarrito.classList.add("carrito-container");
document.body.appendChild(contenedorCarrito);

function agregarAlCarrito(index) {
  const producto = productos[index];
  const copiaProducto = { ...producto };
  carrito.push(copiaProducto);

  // Notificacion librería
  notificar(`Producto agregado al carrito: ${producto.nombre}`);

  actualizarProductosSeleccionados();
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarProductosSeleccionados();
}

function actualizarProductosSeleccionados() {
  const productosSeleccionadosContainer = document.getElementById("productos-container");
  productosSeleccionadosContainer.innerHTML = ""; 

  let precioTotal = 0;

  carrito.forEach((producto, index) => {
    const div = document.createElement("div");
    div.classList.add("carrito-item");

    const productoInfo = document.createElement("p");
    productoInfo.textContent = `${producto.nombre} - $${producto.precio}`;

    const eliminarButton = document.createElement("button");
    eliminarButton.textContent = "Eliminar";
    eliminarButton.className = "boton-accion";
    eliminarButton.addEventListener("click", () => eliminarDelCarrito(index));

    div.appendChild(productoInfo);
    div.appendChild(eliminarButton);
    productosSeleccionadosContainer.appendChild(div);

    precioTotal += producto.precio;
  });

  // Actualizar precio total
  const precioTotalSpan = document.getElementById("precio-total");
  precioTotalSpan.textContent = `$${precioTotal}`;
}

// Envío del formulario
const carritoForm = document.getElementById("carrito-form-row");
carritoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Datos del formulario
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;

  console.log("Nombre:", nombre);
  console.log("Email:", email);
  console.log("Productos Seleccionados:", carrito);

  // Reinicio del formulario y el carrito
  carritoForm.reset();
  carrito.length = 0;
  actualizarProductosSeleccionados();
});

// Almacenamiento en localStorage
const carritoJSON = JSON.stringify(carrito);
localStorage.setItem("carrito", carritoJSON);

const carritoAlmacenado = localStorage.getItem("carrito");
const carritoRecuperado = JSON.parse(carritoAlmacenado);

// Función de notificación
function notificar(mensaje) {
  alert(mensaje);
}
 