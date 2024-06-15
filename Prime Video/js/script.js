let smMenu = document.querySelector('.sm-menu');
let smSubmenu = document.querySelector('.sm-submenu');

smMenu.addEventListener('click', () => {
    // smSubmenu.style.display = 'block';
    smSubmenu.classList.toggle('block')
})