// script.js
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navbarLinks = document.getElementById('navbar-links');

mobileMenuToggle.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});
