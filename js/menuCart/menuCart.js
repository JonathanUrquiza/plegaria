//boton cart
const menuCart = () => {
    const cart = document.getElementById('cart')
     btnCart = document.getElementById('btn-cart'),
     menuSearch = document.getElementById('menusearch'),
     login = document.getElementById('login'),
     navigation = document.getElementById('navigation')
     const state = cart.classList
     
     return btnCart.addEventListener('click', () => {
         
         state == 'hidden'? cart.classList.replace('hidden','show'):cart.classList.replace('show','hidden')
         state != 'hidden'? navigation.classList.replace('navigation','hidden'):null;
          login.classList == 'login-on'? login.classList.replace('login-on', 'login-off'):null;
            menuSearch.classList == 'show'? menuSearch.classList.replace('show','hidden'):null;   
    })
}

const CloseCart = () => {
    const btnCartClose = document.getElementById('close-Cart'),
     cart = document.getElementById('cart')
    const state = cart.classList
    btnCartClose.addEventListener('click', () => {
        state != 'hidden'?cart.classList.replace('show','hidden'):null
        state == 'hidden'? navigation.classList.replace('hidden','navigation'):null;
    })
}

//-------------------------------------//
menuCart();
CloseCart();