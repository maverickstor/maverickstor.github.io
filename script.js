// script.js

// Selección de elementos del DOM
const menu = document.getElementById('menu');
const navbar = document.querySelector('.navbar');
const carritoContent = document.getElementById('carrito-content');
const listaCarrito = document.getElementById('lista-carrito');
const vaciarCarrito = document.getElementById('vaciar-carrito');
const productos = document.querySelectorAll('.producto');
const btnAgregarCarrito = document.querySelectorAll('.btn-1');

// Función para mostrar y ocultar el menú
menu.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Función para agregar productos al carrito
btnAgregarCarrito.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const producto = e.target.parentNode;
    const id = producto.querySelector('button').dataset.id;
    const imagen = producto.querySelector('img').src;
    const nombre = producto.querySelector('h3').textContent;
    const precio = producto.querySelector('p:nth-child(3)').textContent;

    // Crear fila en la tabla del carrito
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td><img src="${imagen}" alt="${nombre}"></td>
      <td>${nombre}</td>
      <td>${precio}</td>
      <td><button class="btn-eliminar">Eliminar</button></td>
    `;
    listaCarrito.appendChild(fila);

    // Mostrar contenido del carrito
    carritoContent.style.display = 'block';
  });
});

// Función para eliminar productos del carrito
listaCarrito.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-eliminar')) {
    const fila = e.target.parentNode.parentNode;
    fila.remove();
  }
});

// Función para vaciar el carrito
vaciarCarrito.addEventListener('click', () => {
  listaCarrito.innerHTML = '';
  carritoContent.style.display = 'none';
});

// Función para mostrar y ocultar el carrito
document.addEventListener('click', (e) => {
  if (e.target.id!== 'img-carrito' && e.target.parentNode.id!== 'carrito-content') {
    carritoContent.style.display = 'none';
  }
});

// Función para mostrar el carrito cuando se hace clic en el icono de carrito
document.getElementById('img-carrito').addEventListener('click', () => {
  carritoContent.style.display = 'block';
});