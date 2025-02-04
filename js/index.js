const btnArray = document.querySelectorAll('.btn-option');
const ziseContainer = document.querySelector('.size-container');
const carrousel = document.querySelector('.carrouse');
const marcador = document.querySelectorAll('.marcador')

//-------------------------------------------------------------//


//cuando hace click en algun botón
    //cambia la clase del elemento para mostrarlo en pantalla
btnArray.forEach((btnShop) => {
    btnShop.addEventListener('click', () => {
        ziseContainer.classList.toggle('active')
    })
})
//-------------------------------------------------------------//
// Cuando CLICK en punto
    // Saber la posición de ese punto
    // Aplicar un transform translateX al grande
    // QUITAR la clase activo de TODOS puntos
    // AÑADIR la clase activo al punto que hemos hecho CLICK

////Recorre todos los marcadores
//    marcador.forEach((marca, i) => {
//        //asigna un click a cada punto
//        marca[i].addEventListener('click', () => {
//            //guarda la posición
//            let position = i
//            //calcula el espacio que debe desplazarse el carrousel
//            let operation = position * -33.3
//            //mueve el carrpusel 
//            carrousel.style.transform = `translateX(${operation}%)`
//
//            marcador.forEach((marca, i) => {
//                //saca las clases active
//                marca[i].classList.remove('activo')
//            })
//            marca[i].classList('activo')
//
//        })
//})
//