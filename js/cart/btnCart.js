const cartContainer = document.getElementById('cart-container');
const cartAdded = document.getElementById('cartAdded');
const btnAdd = document.getElementById('btn-add');
const checkout =document.querySelector('.btn-checkout');




btnAdd.addEventListener('click', (e) => {
    const show = cartAdded.classList.contains('hidden');
    e.preventDefault();
    if (show) {
        cartContainer.classList.remove('hidden');
        cartContainer.classList.add('cart-container');
        cartAdded.classList.remove('hidden');
        cartAdded.classList.add('show');
    } else {
        cartContainer.classList.remove('cart-container');
        cartContainer.classList.add('hidden');
        cartAdded.classList.remove('show');
        cartAdded.classList.add('hidden'); 
    }
});
checkout.addEventListener('click', () => {
    const show = cartAdded.classList.contains('hidden');
    if (show) {
        cartContainer.classList.remove('hidden');
        cartContainer.classList.add('cart-container');
        cartAdded.classList.remove('hidden');
        cartAdded.classList.add('show');
    } else {
        cartContainer.classList.remove('cart-container');
        cartContainer.classList.add('hidden');
        cartAdded.classList.remove('show');
        cartAdded.classList.add('hidden'); 
    }
    alert('Thank you for your purchase');
});