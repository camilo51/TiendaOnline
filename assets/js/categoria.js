import { informacion } from "./inforrmacion.js";

let categoria = document.querySelector(".navegacion__subContenedor");
const articulos = document.querySelector(".articulos");
const tituloA = document.querySelector('.articulo__titulo');

categoria.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    articulos.innerHTML = '';
    tituloA.innerText = '';
    informacion.filter((entry) => {
        const {id, img, titulo, precio, categoria} = entry
      if (entry.categoria === e.target.innerText) {
        articulos.innerHTML += `<div class="articulos__articulo" id="${id}">
                                        <img class="img" src=${img} alt="Imagen #${id}" />
                                        <div class="articulos__body">
                                            <h2>${titulo}</h2>
                                            <p>Valor de: $${precio}</p>
                                        </div>
                                    </div>`;
        tituloA.innerHTML = `${categoria}`
      }
    });
  }
});
