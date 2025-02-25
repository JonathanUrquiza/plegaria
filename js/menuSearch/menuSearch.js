// BOTON DE BUSQUEDA DE ITEMS
const btnSearch = document.getElementById('search');
const searchmobile = () => {
    const cart = document.getElementById('cart'), 
     menuSearch = document.getElementById('menusearch'),
     login = document.getElementById('login')
    
     if (menuSearch.classList.contains('hidden')) {
        menuSearch.classList.replace('hidden','show');
        cart.classList.replace('show','hidden');
        login.classList.replace('login-on','login-off');
    } else {
        menuSearch.classList.replace('show', 'hidden')   
    }
};



//-------------------------------------//

const btSearch = document.getElementById('searchWeb')
const searchWeb = () => {
    const menuSearch = document.getElementById('menusearch'),
    cart = document.getElementById('cart'),
    login = document.getElementById('login')
    const collectionsList = document.getElementById('collection-submenu');
    const tienda = document.getElementById('shop-submenu')

    if (menuSearch.classList.contains('hidden')) {
        menuSearch.classList.replace('hidden','show')
        cart.classList.replace('show','hidden');
        login.classList.replace('login-on','login-off');
        tienda.classList.replace('shop-submenu','hidden');
        collectionsList.classList.replace('show','hidden');
        
    }else {
        menuSearch.classList.replace('show', 'hidden');
        
    }
}
btnSearch.addEventListener('click',searchmobile);
btSearch.addEventListener('click',searchWeb);