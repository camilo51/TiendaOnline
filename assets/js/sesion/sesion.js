// import { sesion } from "./validacion.js";

const navegacion = document.querySelector('.navegacion__contenedor')


localStorage.setItem('sesion', 'true');
const sesion = localStorage.getItem('sesion')

if (sesion === 'false') {
    navegacion.innerHTML += `
    <li class="navegacion__links iniciar"><a href="#">Iniciar Sesion</a></li>
    <li class="navegacion__links"><a href="#">Registrarse</a></li>
    `;
   
}else if(sesion === 'true'){
    navegacion.innerHTML += `
    <li class="navegacion__links"><a href="index.html">Inicio</a></li>
    <li class="navegacion__links navegacion__links--categorias">Categorias <i class="fa-solid fa-caret-down"></i>
        <ul class="navegacion__subContenedor">
            <li class="navegacion__subLinks"><a href="#">Camisas</a></li>
            <li class="navegacion__subLinks"><a href="#">Almohadas</a></li>
            <li class="navegacion__subLinks"><a href="#">Tazas</a></li>
            <li class="navegacion__subLinks"><a href="#">Stikers</a></li>
        </ul>
    </li>
    <li class="navegacion__links"><a href="#">Perfil</a></li>
    <li class="navegacion__links"><a href="#">Cerrar Sesion</a></li>
    <li class="navegacion__links"><i class="fa-solid fa-cart-shopping"></i></li>
    `;
}

const iniciar = document.querySelector('.iniciar')

// iniciar.addEventListener('click', () => {
//     localStorage.setItem('sesion', 'true');

//     location.href = '/'
// })