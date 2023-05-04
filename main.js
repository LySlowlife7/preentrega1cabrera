const PRODUCTOS = [
  { NOMBRE: "BUZO", PRECIO: 3000 },
  { NOMBRE: "REMERAS", PRECIO: 1500 },
  { NOMBRE: "JEAN", PRECIO: 5000 },
  { NOMBRE: "ZAPATILLAS", PRECIO: 6000 },
];

alert("Ingrese la opción del producto que desea llevar, para salir ingrese 0");

let seleccionarProductos = Number(
  prompt(
    `1-${PRODUCTOS[0].NOMBRE} $${PRODUCTOS[0].PRECIO} 2-${
      PRODUCTOS[1].NOMBRE
    } $${PRODUCTOS[1].PRECIO} 3-${
      PRODUCTOS[2].NOMBRE
    } $${PRODUCTOS[2].PRECIO} 4-${
      PRODUCTOS[3].NOMBRE
    } $${PRODUCTOS[3].PRECIO}`
  )
);
let seleccionarCantidad;
let total = 0;

// seccion para calcular el valor de la compra de un producto
const cantidad = (cant, precio) => {
  return cant * precio;
};

while (seleccionarProductos !== 0) {
  // Use map() para obtener un array con los precios de cada producto
  const precios = PRODUCTOS.map(producto => producto.PRECIO);
  const indice = seleccionarProductos - 1; // El índice en el array de precios es la opción seleccionada menos 1
  
  // Use filter() para buscar el producto seleccionado y obtener su precio
  const precioSeleccionado = PRODUCTOS.filter(producto => producto === PRODUCTOS[indice])[0].PRECIO;
  
  seleccionarCantidad = Number(
    prompt(`el producto seleccionado es ${PRODUCTOS[indice].NOMBRE}, indique la cantidad`)
  );
  total += cantidad(seleccionarCantidad, precioSeleccionado);
  
  seleccionarProductos = Number(
    prompt(
      `1-${PRODUCTOS[0].NOMBRE} $${PRODUCTOS[0].PRECIO} 2-${
        PRODUCTOS[1].NOMBRE
      } $${PRODUCTOS[1].PRECIO} 3-${
        PRODUCTOS[2].NOMBRE
      } $${PRODUCTOS[2].PRECIO} 4-${
        PRODUCTOS[3].NOMBRE
      } $${PRODUCTOS[3].PRECIO}`
    )
  );
}

alert(`el total de la compra es de: $${total}`);

const ENVIO = () => {
  if (total >= 10000) {
    alert("El envío es gratuito");
  } else {
    total += 1000;
    alert(`el costo de envío es de $1000, el total es: $${total}`);
  }
};

// seccion de envios y metodo de pago()

const METODO_DE_PAGO = () => {
  let metodo = prompt("Ingrese el método de pago (efectivo o tarjeta):");
  let totalConDescuento = total;
  
  if (metodo === "tarjeta") {
    totalConDescuento *= 1.1; // Aplicamos un 10% de recargo por pago con tarjeta
  }
  
  alert(`El total con el método de pago seleccionado es: $${totalConDescuento}`);
};

ENVIO();
METODO_DE_PAGO();
