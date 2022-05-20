import { informacion } from "./inforrmacion.js";
import { botonesCarrito } from "./ventanaModal.js";

let producto = {};

const btnAgregar = document.querySelector(".enviado");
const carritoNum = document.querySelector(".carrito-num");
const modalBody = document.querySelector(".bodyModal");
const valorTotal = document.querySelector(".valorTotal");

function clickeado() {
  const cantidad = document.querySelector(".cantidad");

  cantidad.parentElement.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  informacion.filter((entry) => {
    if (parseInt(this.parentElement.parentElement.id) === entry.id) {
      producto = {
        imagenProducto: entry.img,
        nombreProducto: entry.titulo,
        precioProducto: entry.precio,
        categoriaProducto: entry.categoria,
      };

      btnAgregar.addEventListener("click", () => {
        producto.cantidadProducto = cantidad.value;
        producto.imagenProducto = entry.img;
        producto.nombreProducto = entry.titulo;
        producto.precioProducto = entry.precio;
        producto.categoriaProducto = entry.categoria;
        localStorage.setItem(entry.id, JSON.stringify(producto));
        carritoNum.innerHTML = `${localStorage.length}`;
      });
    }
  });
}

carritoNum.innerHTML = `${localStorage.length}`;

for (let i = 0; i < botonesCarrito.length; i++) {
  botonesCarrito[i].addEventListener("click", clickeado);
}
let total = 0;
for (let i = 0; i < localStorage.length; i++) {
  let producto = JSON.parse(localStorage.getItem(localStorage.key(i)));
  const {
    cantidadProducto,
    categoriaProducto,
    imagenProducto,
    nombreProducto,
    precioProducto,
  } = producto;

  total = total + cantidadProducto * precioProducto;

  modalBody.innerHTML += `
      <tr>
        <td class="col-2" scope="row"><img class=" img" src="${imagenProducto}" /></td>
        <td class="col-4"><p class="text-center">${nombreProducto}</p></td>
        <td class="col-2"><p class="text-center">${cantidadProducto}</p></td>
        <td class="col-2"><p class="text-center">${precioProducto}</p></td>
        <td class="col-2"><p class="text-center">${categoriaProducto}</p></td>
      </tr>
        
    `;
}

valorTotal.innerHTML = `Valor total: ${total}
`;

// ================= Pueda que se agregue despues =================

// for (let i = 0; i < localStorage.length; i++) {
//     function entra() {
//       const sumarCantidad = JSON.parse(
//         localStorage.getItem(localStorage.key(i))
//       );
//       let valorProducto = parseInt(sumarCantidad.cantidadProducto);
//       btnAgregar.addEventListener("click", () => {
//         producto.cantidadProducto =
//           valorProducto + parseInt(cantidad.value);
//         console.log(producto);
//         localStorage.setItem(entry.id, JSON.stringify(producto));
//         carritoNum.innerHTML = `${localStorage.length}`;
//       });
//     }
//     function noEntra() {

//     }

//     if (parseInt(localStorage.key(i)) !== entry.id) {
//       noEntra();
//     } else {
//       entra();
//       break;
//     }
//   }
