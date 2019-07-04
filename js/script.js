let menuIcon = document.querySelector('.menu-icon');
let menuDrawer = document.querySelector('.drawer');

menuIcon.addEventListener('click', _openDrawer, false);

function _openDrawer () {
    menuDrawer.classList.toggle('open-drawer');
}
