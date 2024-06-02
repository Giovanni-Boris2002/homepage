document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.getElementById("mobile-menu");
  const navbarMenu = document.querySelector(".navbar-menu");
  const navbarToggle = document.getElementById('navbar-toggle');

  mobileMenu.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
  });

  const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        if (body.classList.contains('dark-theme')) {
            themeToggle.innerHTML = '<span class="material-icons">brightness_5</span> Light Theme';
        } else {
            themeToggle.innerHTML = '<span class="material-icons">brightness_6</span> Dark Theme';
        }
    });

    // Navbar toggle for mobile view

    navbarToggle?.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
    });
});
