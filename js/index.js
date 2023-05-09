const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const closeMenu = document.querySelector('.close');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    closeMenu.style.display = 'block';
    if (window.innerWidth <= 1024) {
        hamburger.style.display = 'none'; // Oculta el botón de hamburguesa cuando se abre el menú en pantallas pequeñas
    }
});

closeMenu.addEventListener('click', () => {
    navLinks.classList.remove('show');
    closeMenu.style.display = 'none';
    if (window.innerWidth <= 1024) {
        hamburger.style.display = 'block';
    }
});

