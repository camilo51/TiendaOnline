const articulos = document.querySelector('.articulos');
const tarjetas = [...document.querySelectorAll('.articulos__articulo')];
const pruebas = document.querySelectorAll('.articulos__articulo');

// articulos.addEventListener('click', e => {
//     console.log(parseInt(e.target.parentElement.id));

//     if (e.target.tagName == 'IMG') {
//         console.log('Hola');
//         tarjetas.filter(entry => {
//             console.log(entry);
//             if (entry.id == parseInt(e.target.parentElement.id)) {
//             }
//         })
//     }

// })


pruebas.forEach(entry =>{
    entry.addEventListener('click', () =>{
        console.log(entry);
    })
})