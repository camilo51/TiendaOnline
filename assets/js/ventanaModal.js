const botonesCarrito = document.querySelectorAll(".articulos__carrito");
const carritoTitulo = document.querySelector(".carrito__titulo");
const modalBody = document.querySelector(".modal-body");
const btn = document.querySelector(".enviado");

function clickeado() {
  carritoTitulo.innerHTML = `${this.parentElement.children[0].innerText}`;
  modalBody.innerHTML = `<img class="col-12 col-md-5" src="${this.parentElement.parentElement.children[0].attributes.src.value}" alt="${this.parentElement.parentElement.children[0].attributes.alt.value}" />
                            <div class="col-12 col-md-7 text-center d-flex flex-column justify-content-around">
                                <h3 class="fs-1">${this.parentElement.children[0].innerText}</h3>
                                <p>${this.parentElement.children[1].innerText}</p>
                                <form>
                                    <label>Cantidad del producto</label>
                                    <input class="img cantidad" type="number" min="1" max="24" />
                                </form>
                            </div>
                                    `;
}
for (let i = 0; i < botonesCarrito.length; i++) {
  botonesCarrito[i].addEventListener("click", clickeado);
}
btn.addEventListener("click", () => {
  swal({
    text: "Producto agregado al carrito correctamente",
    icon: "success",
  });
  const btnSwal = document.querySelector(".swal-button.swal-button--confirm");
  btnSwal.addEventListener('click', () => {
      location.href = '/';
  })
});

