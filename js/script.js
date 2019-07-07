let menuIcon = document.querySelector('.menu-icon');
let menuDrawer = document.querySelector('.drawer');
let menuContainer = document.querySelector('#mobile-nav ul');
let menuItems = document.querySelectorAll('#mobile-nav ul li');

menuIcon.addEventListener('click', _openDrawer, false);

function _openDrawer () {
    menuDrawer.classList.toggle('open-drawer');
    menuContainer.classList.toggle('reveal-menu-items');
    menuItems.forEach(item => {
        item.classList.toggle('undo-rotate');
    });
}
