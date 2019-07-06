let menuIcon = document.querySelector('.menu-icon');
let menuDrawer = document.querySelector('.drawer');
let menuItems = document.querySelector('#mobile-nav ul ');

menuIcon.addEventListener('click', _openDrawer, false);

function _openDrawer () {
    menuDrawer.classList.toggle('open-drawer');
    menuItems.classList.toggle('reveal-menu-items');
}
