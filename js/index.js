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
    const login = document.getElementById('login'),
     cart = document.getElementById('cart'), 
     menuSearch = document.getElementById('menusearch'),
     accountAccess = document.getElementById('btn-acount-access');
    const state = login.classList
    return accountAccess.addEventListener('click', () => {
        state.value == 'login-off'?login.classList.replace('login-off','login-on'):login.classList.replace('login-on','login-off');
        cart.classList == 'show'? cart.classList.replace('show','hidden'):null;
        menuSearch.classList == 'show' ? menuSearch.classList.replace('show', 'hidden'):null;
    })
}
//-------------------------------------//

// BOTON DE BUSQUEDA DE ITEMS
const btnsearch = () => {
    const btnSearch = document.getElementById('search'),
    cart = document.getElementById('cart'), 
     menuSearch = document.getElementById('menusearch'),
     login = document.getElementById('login')
    const state = menuSearch.classList
    return btnSearch.addEventListener('click', () => {
        state.value == 'hidden'? menuSearch.classList.replace('hidden','show'): menuSearch.classList.replace('show', 'hidden')
        cart.classList == 'show'? cart.classList.replace('show','hidden'):null;
        login.classList == 'login-on'? login.classList.replace('login-on','login-off'):null;
    })
};
//-------------------------------------//
//boton cart
const menuCart = () => {
    const cart = document.getElementById('cart')
     btnCart = document.getElementById('btn-cart'),
     menuSearch = document.getElementById('menusearch'),
     login = document.getElementById('login')
     
    const state = cart.classList
    return btnCart.addEventListener('click', () => {
           state == 'hidden'? cart.classList.replace('hidden','show'):cart.classList.replace('show','hidden')
           login.classList == 'login-on'? login.classList.replace('login-on', 'login-off'):null;
           menuSearch.classList == 'show'? menuSearch.classList.replace('show','hidden'):null;
           ;
    })
}

const CloseCart = () => {
    const btnCartClose = document.getElementById('close-Cart'),
     cart = document.getElementById('cart')
    const state = cart.classList
    console.log(cart);
    btnCartClose.addEventListener('click', () => {
        state != 'hidden'?cart.classList.replace('show','hidden'):null
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



//Ejecucion de todas las funciones
btnMenu();
menuLogin();
btnMenuResponsive();
btnsearch();
menuCart();
CloseCart();


//-------------------------------------//