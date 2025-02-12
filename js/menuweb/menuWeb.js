const menuWeb = () => {
    const tiendaMenu = document.getElementById('shop-submenu')
    const collections = document.getElementById('collection-submenu')
    const arrivals = document.getElementById('arrivals-submenu')
    const aboutUs = document.getElementById('about-submenu');
    const accountAccess = document.getElementById('accout');
    const searchWeb = document.getElementById('searchWeb');
    const cartweb = document.getElementById('cartweb');
    const btnsMenu = document.querySelectorAll('.btn');

    btnsMenu.forEach((btn, i) => {
        btn.addEventListener('click', () => {

            btnsMenu[i].innerHTML == 'TIENDA' ?
                tiendaMenu.classList == 'ocultar' ?
                    tiendaMenu.classList.replace('ocultar', 'shop-submenu') :
                    tiendaMenu.classList.replace('shop-submenu', 'ocultar') : null

            btnsMenu[i].innerHTML == 'COLECCIONES' ?
                collections.classList == 'ocultar' ?
                    collections.classList.replace('ocultar', 'show') :
                    collections.classList.replace('show', 'ocultar') : null

            btnsMenu[i].innerHTML == 'NEW ARRIVALS' ?
                arrivals.classList == 'ocultar' ?
                    arrivals.classList.replace('ocultar', 'show') :
                    arrivals.classList.replace('show', 'ocultar') : null

            btnsMenu[i].innerHTML == 'SOBRE NOSOTROS' ?
                aboutUs.classList == 'ocultar' ?
                    aboutUs.classList.replace('ocultar', 'show') :
                    aboutUs.classList.replace('show', 'ocultar') : null

            btnsMenu[i].innerHTML == 'CUENTA' ?
                accountAccess.classList == 'ocultar' ?
                    accountAccess.classList.replace('ocultar', 'show') :
                    accountAccess.classList.replace('show', 'ocultar') : null

            btnsMenu[i].innerHTML == 'CARRITO' ?
                cartweb.classList == 'ocultar' ?
                    cartweb.classList.replace('ocultar', 'show') :
                    cartweb.classList.replace('show', 'ocultar') : null;

        })
    })

}
menuWeb();