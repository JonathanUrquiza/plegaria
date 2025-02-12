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
btnMenuResponsive();