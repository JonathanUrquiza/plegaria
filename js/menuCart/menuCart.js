//boton cart
const btnCartClose = document.getElementById('close-Cart');
const btnCart = document.getElementById('btn-cart');
const cartweb = document.getElementById('cartweb');
const menuCart = () => {
    const cart = document.getElementById('cart'),
     menuSearch = document.getElementById('menusearch'),
     login = document.getElementById('login')
     
     if (cart.classList.contains('hidden')) {
         cart.classList.replace('hidden','show')
         login.classList.replace('login-on', 'login-off');
         menuSearch.classList.replace('show','hidden');   
         
        } else {
         cart.classList.replace('show','hidden')
        
        }
}

const CloseCart = () => {
    const cart = document.getElementById('cart')

    if (!cart.classList.contains('hidden')) {
        cart.classList.replace('show','hidden');
    }
    
        
}

const webCart = ()  => {
    const cart = document.getElementById('cart'),
     menuSearch = document.getElementById('menusearch'),
     login = document.getElementById('login')

     if (cart.classList.contains('hidden')) {
        cart.classList.replace('hidden','show')
        menuSearch.classList.replace('show','hidden');   
        
       } else {
        cart.classList.replace('show','hidden')
       }
       console.log('aca');
       
}
//-------------------------------------//
btnCart.addEventListener('click',menuCart);
btnCartClose.addEventListener('click',CloseCart);
cartweb.addEventListener('click', webCart)
