const url = 'https://api.github.com/users/camilo51'

const peticion = async () => {
    const data = await fetch(url)
    const pedido = await data.json();



    const perfil = document.querySelector('.perfil');

    perfil.innerHTML = `
        <h2 class="text-center perfil__titulo">Perfil</h2>
        <div class="perfil__header">
            <div class="perfil__contenedor">
                <img class="perfil__img" src="${pedido.avatar_url}" alt="Preubas" />
                <div class="perfil__body">
                    <p>${pedido.name}</p>
                    <p>@${pedido.login}</p>
                    <p>ID: ${pedido.id}</p>
                    <p>Carrito: ${localStorage.length}</p>
                </div>
            </div>
        </div>
    `;


}

const producto = document.querySelector('.cantidad-productos')



for (let i = 0; i < localStorage.length; i++) {
    let productos = JSON.parse(localStorage.getItem(localStorage.key(i)));
    const {
      cantidadProducto,
      categoriaProducto,
      imagenProducto,
      nombreProducto,
      precioProducto,
    } = productos;

    producto.innerHTML += `
        <div class="carritoPerfil">
            <img class="carritoPerfil__img img" src="../${imagenProducto}" alt="" />
            <div class="carritoPerfil__body">
                <p class="carritoPerfil__nombre">${nombreProducto}</p>
                <p class="carritoPerfil__categoria">Categoria: ${categoriaProducto}</p>
                <p class="carritoPerfil__cantidad">Cantidad: ${cantidadProducto}</p>
                <p class="carritoPerfil__precio">Precio: ${precioProducto}</p>
            </div>
                <p class="carritoPerfil__total">Total: <span>${cantidadProducto*precioProducto}</span></p>
        </div>
    `;
}

// =====================

console.log(peticion());


