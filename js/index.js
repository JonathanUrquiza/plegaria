const btnArray = document.querySelectorAll('.btn-option');
const btnsMenu = document.querySelectorAll('.btn');

const ziseContainer = document.querySelector('.size-container');
const footerContainer = document.querySelector('footer-container');
const carrousel = document.querySelector('.carrouse');
const marcador = document.querySelectorAll('.marcador');


const collections = document.getElementById('collection-submenu')
const arrivals = document.getElementById('arrivals-submenu')
const aboutUs = document.getElementById('about-submenu');

//-------------------------------------------------------------//

//cuando hace click en algun botón
//cambia la clase del elemento para mostrarlo en pantalla
btnArray.forEach((btnShop) => {
    btnShop.addEventListener('click', () => {
        ziseContainer.classList.toggle('active')
    })
});
ziseContainer.addEventListener('click', () => {
    ziseContainer.classList.toggle('active')
});
//Abre el menu hamburguesa
const btnMenuResponsive = () => {
    const btnMobile = document.querySelector('.btn-menu');
    const btnClose = document.querySelector('.btn-close');
    const menu = document.querySelector('.menu');
    let state;
    btnMobile.addEventListener('click', () => {
        state == undefined? menu.classList.toggle('active'):null
        state == menu.classList[1]
    });
    btnClose.addEventListener('click', () => {
        state == 'active'? menu.classList.toggle('ocultar'): null
    });
}
//-------------------------------------//

//Boton que desplega el login
const menuLogin = () => {
    const login = document.getElementById('login');
    const accountAccess = document.getElementById('btn-acount-access');
    const state = login.classList
    return accountAccess.addEventListener('click', () => {
        state.value == 'login-off'?login.classList.replace('login-off','login-on'):login.classList.replace('login-on','login-off');
    })
}
//-------------------------------------//
//bonton de apertura de menu
const btnMenu = () => {
    const tiendaMenu = document.getElementById('shop-submenu')
    const tienda = tiendaMenu.classList
    return btnsMenu[0].addEventListener('click', () => {
        tienda.value == 'ocultar'?tiendaMenu.classList.replace('ocultar','shop-submenu'):tiendaMenu.classList.replace('shop-submenu','ocultar')
    })
}
//-------------------------------------//

// BOTON DE BUSQUEDA DE ITEMS
const btnsearch = () => {
    const btnSearch = document.getElementById('search')
    const menuSearch = document.getElementById('menusearch');
    const state = menuSearch.classList
    return btnSearch.addEventListener('click', () => {
        state.value == 'hidden'? menuSearch.classList.replace('hidden','show'): menuSearch.classList.replace('show', 'hidden')
    })
};
//-------------------------------------//

//Ejecucion de todas las funciones
btnMenu();
menuLogin();
btnsearch();
btnMenuResponsive();



//-------------------------------------//