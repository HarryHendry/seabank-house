const hamburger = document.querySelector('.hamburger');
hamburger.onclick = function() {
    const Navbar = document.querySelector('.navbar');
    Navbar.classList.toggle('active')
}