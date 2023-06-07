document.addEventListener('DOMContentLoaded', () => {
  const listaCarrito = document.getElementById('listaCarrito');
  const totalCarrito = document.getElementById('totalCarrito');
  const agregarCarritoButtons = document.querySelectorAll('.agregarCarrito');
  const vaciarCarritoButton = document.getElementById('vaciarCarritoButton');
  let carrito = [];

  new Vue({
    el: '#productos',
    data: {
      productos: [],
      filtroCategoria: ''
    },
    computed: {
      productosFiltrados() {
        if (this.filtroCategoria) {
          return this.productos.filter(producto => producto.CATEGORIA === this.filtroCategoria);
        }
        return this.productos;
      }
    },
    mounted() {
      this.cargarProductos();
    },
    methods: {
      cargarProductos() {
        // Carga los productos desde el archivo JSON local
        fetch('productos.json')
          .then(response => response.json())
          .then(data => {
            this.productos = data;
          })
          .catch(error => {
            console.error('Error al cargar los productos:', error);
          });
      },
      agregarAlCarrito(producto) {
        carrito.push(producto);
        this.mostrarCarrito();
      },
      mostrarCarrito() {
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
      },
      vaciarCarrito() {
        carrito = [];
        this.mostrarCarrito();
      }
    }
  });

  // seccion de Agregar evento al botón de "Vaciar Carrito"
  vaciarCarritoButton.addEventListener('click', () => {
    app.vaciarCarrito();
  });
});




