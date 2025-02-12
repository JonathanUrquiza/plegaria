const sizeMenu = () => {
    const btnArray = document.querySelectorAll('.btn-option');
const ziseContainer = document.querySelector('.size-container');

btnArray.forEach((btnShop) => {
    btnShop.addEventListener('click', () => {
        ziseContainer.classList.toggle('active')
    })
});
ziseContainer.addEventListener('click', () => {
    ziseContainer.classList.toggle('active')
});

}
sizeMenu();