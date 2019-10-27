const navSlide = () => {
  const menuBurger = document.querySelector('.menu-burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  menuBurger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('nav-active');
    // Animate Links
    navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = '')
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 +
            0.2}s`);
    });
    // Animate menuBurger
    menuBurger.classList.toggle('toggle');
  });
};

const app = () => {
  navSlide();
};

app();
