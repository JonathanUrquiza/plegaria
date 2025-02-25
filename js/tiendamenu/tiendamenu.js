const btnTienda = document.getElementById('btn-tienda');
const submenu = document.getElementById('shop-submenu');
const cart = document.getElementById('cart')
menuSearch = document.getElementById('menusearch'),
login = document.getElementById('login')

const showtienda = () => {
    if (submenu.classList.contains('hidden')) {
        submenu.classList.replace('hidden', 'shop-submenu');
        cart.classList.replace('show','hidden');
        menuSearch.classList.replace('show','hidden');
        login.classList.replace('login-on','login-off');
        collectionsList.classList.replace('show','hidden')
    } else {
        submenu.classList.replace('shop-submenu','hidden');   
    }
}
     
btnTienda.addEventListener('click', showtienda)