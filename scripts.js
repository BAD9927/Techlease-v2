// scripts.js

// Función para agregar al carrito
function agregarAlCarrito(nombreProducto, precioProducto) {
    // Verificar si ya hay un carrito en el Local Storage
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // Crear un objeto del producto
    let producto = {
        nombre: nombreProducto,
        precio: precioProducto
    };

    // Agregar el producto al carrito
    carrito.push(producto);

    // Guardar el carrito actualizado en el Local Storage
    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert(`${nombreProducto} ha sido agregado a tus intereses.`);
}

// scripts.js

// Función para agregar al carrito y redirigir a la página de compras
function agregarAlCarrito(nombreProducto, precioProducto) {
    // Verificar si ya hay un carrito en el Local Storage
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // Crear un objeto del producto
    let producto = {
        nombre: nombreProducto,
        precio: precioProducto
    };

    // Agregar el producto al carrito
    carrito.push(producto);

    // Guardar el carrito actualizado en el Local Storage
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Mostrar mensaje de confirmación
    alert(`${nombreProducto} ha sido agregado al carrito.`);

    // Redirigir a la página de compras
    window.location.href = 'compras.html';
}
