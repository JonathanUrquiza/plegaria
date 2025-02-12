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
btnsearch();