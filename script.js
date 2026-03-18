// JS NAVBAR
const Hamburger = document.querySelector('.hamburger');
Hamburger.addEventListener('click', () => {
    const Navbar = document.querySelector('.navbar');
    Navbar.classList.toggle('active');
}) 


  window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("splash").classList.add("hidden");
      document.getElementById("main-content").classList.add("show");
    }, 2000); // 2 seconds
  });



