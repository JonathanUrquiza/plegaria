const collections = document.querySelector('.btn-collections');
const collectionsList = document.getElementById('collection-submenu');
const collectionsItems = document.getElementById('collections-items');
const btBack = document.getElementById('bt-back');
const btForward = document.getElementById('bt-forward');
const slider = document.querySelectorAll('.slider');

const tienda = document.getElementById('shop-submenu'),
menuSearch = document.getElementById('menusearch'),
     login = document.getElementById('login')

const length = slider.length;
let index = 1;

const nextProduct = () => {
    if(index>=length+1) return;
    slider.forEach(slide => slide.style.transition = 'transform 0.5s ease-in-out');
    index++;
    updateSlider();
    if (index === length) {
        setTimeout(() => {
            slider.forEach(slide => slide.style.transition = 'none');
            index = 1;
            updateSlider();
        }, 500);
    }
}

const prevProduct = () => {
    if(index<=0) return;
    slider.forEach(slide => slide.style.transition = 'transform 0.5s ease-in-out');
    index--;
    updateSlider();
    if (index === 0) {
        setTimeout(() => {
            slider.forEach(slide => slide.style.transition = 'none');
            index = length - 1;
            updateSlider();
        }, 500);
    }
}
const updateSlider = () => {
    slider.forEach(slide => slide.style.transform = `translateX(-${index * 25}%)`);
}

const btcollection = () => {
    const show = collectionsList.classList.contains('hidden');
    if (show) {
        collectionsList.classList.add('show');
        collectionsList.classList.remove('hidden');
        menuSearch.classList.replace('show', 'hidden');
        cart.classList.replace('show','hidden');
        login.classList.replace('login-on','login-off');
        tienda.classList.replace('shop-submenu','hidden');
    } else {
        collectionsList.classList.remove('show');
        collectionsList.classList.add('hidden');
    }
}

collections.addEventListener('click', btcollection);
btForward.addEventListener('click', nextProduct);
btBack.addEventListener('click', prevProduct)