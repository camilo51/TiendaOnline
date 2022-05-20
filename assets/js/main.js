const btnCategoria = document.querySelector('.navegacion__links--categorias');
const menuCategoria = document.querySelector('.navegacion__subContenedor');

btnCategoria.addEventListener('click', () => {
    menuCategoria.classList.toggle('navegacion__subContenedor--menu')
})