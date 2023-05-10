const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const closeMenu = document.querySelector('.close');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    closeMenu.style.display = 'block';
    if (window.innerWidth <= 1024) {
        hamburger.style.display = 'none';
    }
});

closeMenu.addEventListener('click', () => {
    navLinks.classList.remove('show');
    closeMenu.style.display = 'none';
    if (window.innerWidth <= 1024) {
        hamburger.style.display = 'block';
    }
});

document.addEventListener("DOMContentLoaded", function (event) {
  const loadDisqus = () => {
    const d = document, s = d.createElement('script');
    s.src = 'https://my-interactive-resume.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  }

  loadDisqus();
});