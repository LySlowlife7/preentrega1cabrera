document.addEventListener('DOMContentLoaded', () => {
  const listaCarrito = document.getElementById('listaCarrito');
  const totalCarrito = document.getElementById('totalCarrito');
  const agregarCarritoButtons = document.querySelectorAll('.agregarCarrito');
  const vaciarCarritoButton = document.getElementById('vaciarCarritoButton');
  let carrito = [];

const listaCarrito = document.getElementById('listaCarrito');
const totalCarrito = document.getElementById('totalCarrito');
const agregarCarritoButtons = document.getElementsByClassName('agregarCarrito');
const vaciarCarritoButton = document.getElementById('vaciarCarritoButton');
let carrito = [];

//seccion para Agregar un producto al carrito
const agregarAlCarrito = (producto) => {
  carrito.push(producto);
  mostrarCarrito();
};

// va mostrar los productos en el carrito
const mostrarCarrito = () => {
  listaCarrito.innerHTML = '';
  let total = 0;
  carrito.forEach((producto) => {
    const { NOMBRE, PRECIO } = producto;
    const itemCarrito = document.createElement('li');
    itemCarrito.innerHTML = `${NOMBRE} - Precio: $${PRECIO}`;
    listaCarrito.appendChild(itemCarrito);
    total += PRECIO;
  });
  totalCarrito.textContent = `Total: $${total}`;
};

// Vacíar el carrito
const vaciarCarrito = () => {
  carrito = [];
  mostrarCarrito();
};

// seccion para Agregar eventos a los botones de "Agregar al Carrito"
for (let i = 0; i < agregarCarritoButtons.length; i++) {
  agregarCarritoButtons[i].addEventListener('click', () => {
    agregarAlCarrito(PRODUCTOS[i]);
  });
}

//seccion de Agregar evento al botón de "Vaciar Carrito"
vaciarCarritoButton.addEventListener('click', vaciarCarrito);