// controllers/productos.js
const productos = [
    { id: 1, nombre: 'Sombras', descripcion: 'Tonalidad Neutra', cantidad: 10, precio: 100, imagen: 'producto1.jpg' },
    { id: 2, nombre: 'Rubor', descripcion: 'Marca Revlon color #253', cantidad: 15, precio: 150, imagen: 'producto2.jpg' },
    { id: 3, nombre: 'Labial', descripcion: 'Descripción del Producto 3', cantidad: 5, precio: 50, imagen: 'producto3.jpg' },
    { id: 4, nombre: 'Rimel', descripcion: 'Descripción del Producto 4', cantidad: 10, precio: 100, imagen: 'producto4.jpg' },
    { id: 5, nombre: 'Sombras', descripcion: 'Descripción del Producto 5', cantidad: 15, precio: 150, imagen: 'producto5.jpg' },
    { id: 6, nombre: 'Labial', descripcion: 'Descripción del Producto 6', cantidad: 5, precio: 50, imagen: 'producto6.jpg' },
    { id: 7, nombre: 'Base liquida', descripcion: 'Descripción del Producto 7', cantidad: 5, precio: 50, imagen: 'producto7.jpg' }
  ];
  
  function getProductos() {
    return productos;
  }
  
  function getProductoPorId(id) {
    return productos.find(producto => producto.id === parseInt(id));
  }
  
  module.exports = {
    getProductos,
    getProductoPorId
  };
  