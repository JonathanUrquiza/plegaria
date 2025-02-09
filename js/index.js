const accountAccess = document.getElementById('acount-access');
const btnArray = document.querySelectorAll('.btn-option');
const btnsMenu = document.querySelectorAll('.btn');
const btnMobile =document.querySelector('.btn-menu');
const btnClose = document.querySelector('.btn-close');
const ziseContainer = document.querySelector('.size-container');
const footerContainer = document.querySelector('footer-container');
const carrousel = document.querySelector('.carrouse');
const marcador = document.querySelectorAll('.marcador');
const menu = document.querySelector('.menu');
const tiendaMenu = document.getElementById('shop-submenu'),
 collections = document.getElementById('collection-submenu'),
 arrivals = document.getElementById('arrivals-submenu'),
 aboutUs = document.getElementById('about-submenu');
 
let condition = "open";
//-------------------------------------------------------------//

//cuando hace click en algun botón
//cambia la clase del elemento para mostrarlo en pantalla
btnArray.forEach((btnShop) => {
    btnShop.addEventListener('click', () => {
        ziseContainer.classList.toggle('active')
    })
    
})
ziseContainer.addEventListener('click', ()=> {
    ziseContainer.classList.toggle('active')

})

btnMobile.addEventListener('click', () => {
    menu.classList.toggle('active');
});
btnClose.addEventListener('click', () => {
    menu.classList.add('ocultar');
});

accountAccess.addEventListener('click', () => {
    const login = document.getElementById('login')
    const app = document.getElementById('app')
    app.innerHTML(login)
})



btnsMenu[0].addEventListener('click', () => {
    const tienda = tiendaMenu.classList
    if (tienda.value == 'ocultar') {
        tiendaMenu.classList.remove('ocultar');
        tiendaMenu.classList.add('shop-submenu')
        condition = 'close';
        console.log(condition);
    } else {
        tiendaMenu.classList.remove('shop-submenu')
        tiendaMenu.classList.add('ocultar');
        condition = 'open';
        console.log(condition);
    }
})

btnsMenu[1].addEventListener('click', () => {
    const collections = collections.classList
    if (condition == "open") {
       
        console.log(condition);
        condition = 'close';


    } else {
        console.log(condition);
        condition = 'open';
    }
})


btnsMenu.forEach((btn, ) => {
    btn.addEventListener('click', () => {
        if (condition == "open") {
            console.log(condition);
            condition = 'close';
    
    
        } else {
            console.log(condition);
            condition = 'open';
        }

    })

})






//5968725

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