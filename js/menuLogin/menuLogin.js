//Boton que desplega el login
const menuLogin = () => {
    const login = document.getElementById('login'),
     cart = document.getElementById('cart'), 
     menuSearch = document.getElementById('menusearch'),
     accountAccess = document.getElementById('btn-acount-access');
    const state = login.classList.contains('login-off')
    
    
    return accountAccess.addEventListener('click', () => {
        state?login.classList.replace('login-off','login-on'):login.classList.replace('login-on','login-off');
        cart.classList == 'show'? cart.classList.replace('show','hidden'):null;
        menuSearch.classList == 'show' ? menuSearch.classList.replace('show', 'hidden'):null;
    })
}
//-------------------------------------//
const btnAccount = document.getElementById('account')
const showlogin = () => {
    const login = document.getElementById('login')
    let show = login.classList.contains('login-off')
    
    if (show) {
        login.classList.replace('login-off','login-on')
        collectionsList.classList.replace('show','hidden');
        cart.classList.replace('show','hidden');
        tienda.classList.replace('shop-submenu','hidden');
        menuSearch.classList.replace('show','hidden')
    } else {
        login.classList.replace('login-on','login-off')
        
    }

}




btnAccount.addEventListener('click', showlogin)
menuLogin();
