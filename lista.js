/* Filtro que lista productos obtenidos de un JSON (api simulada) */

const jsonString = `{
  "productos": [
    { "id": 1, "nombre": "Laptop", "precio": 1200, "categoria": "electronica" },
    { "id": 2, "nombre": "Mouse", "precio": 25, "categoria": "accesorios" },
    { "id": 3, "nombre": "Teclado", "precio": 75, "categoria": "electronica" },
    { "id": 4, "nombre": "Monitor", "precio": 300, "categoria": "electronica" }
  ]
}`;

const datos = JSON.parse(jsonString);

const filtroProductos = datos.productos 
    .filter(producto => producto.categoria === "electronica" && producto.precio > 100)
    .map(producto => producto.nombre);

console.log(filtroProductos);

/* ¿Qué ventajas ofrece JSON sobre XML para el intercambio de datos en aplicaciones web modernas? */
/* La ventaja que tiene json sobre xml es que es mucho mas facil de leer y entender */
/* Disminuye el tamaño de los datos y permite trabajar de manera mas eficiento con objetos */