// JS NAVBAR
const Hamburger = document.querySelector('.hamburger');
Hamburger.addEventListener('click', () => {
    const Navbar = document.querySelector('.navbar');
    Navbar.classList.toggle('active');
}) 




// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});