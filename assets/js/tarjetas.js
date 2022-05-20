import { informacion } from "./inforrmacion.js";

const articulos = document.querySelector('.articulos');

informacion.forEach(entry => {
const {id, img, titulo, precio} = entry

    articulos.innerHTML += `<div class="articulos__articulo" id="${id}">
                                <img class="img" src=${img} alt="Imagen #${id}" />
                                <div class="articulos__body">
                                    <h2>${titulo}</h2>
                                    <p>Valor de: $${precio}</p>
                                    <p class="articulos__carrito" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Agregar Al Carrito <i class="fa-solid fa-cart-plus"></i></p>
                                </div>
                            </div>`;
})
