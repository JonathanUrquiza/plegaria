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
menuLogin();