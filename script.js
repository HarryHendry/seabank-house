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


  const transition = document.getElementById("page-transition");
  const title = document.getElementById("page-title");

  function showTransition(text, url) {
    title.textContent = text;
    transition.classList.add("active");

    setTimeout(() => {
      window.location.href = url;
    }, 800); // delay before navigating
  }




