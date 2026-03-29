// menu.js
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector("nav ul");
  const icon = menuBtn.querySelector("i");

  if (!menuBtn || !navLinks || !icon) return;

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    navLinks.classList.toggle("show-menu");

    // toggle icon between bars and xmark
    if (navLinks.classList.contains("show-menu")) {
      icon.classList.replace("fa-bars", "fa-xmark");
    } else {
      icon.classList.replace("fa-xmark", "fa-bars");
    }
  });

  // close menu when clicking a nav link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show-menu");
      icon.classList.replace("fa-xmark", "fa-bars");
    });
  });

  // close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
      navLinks.classList.remove("show-menu");
      icon.classList.replace("fa-xmark", "fa-bars");
    }
  });
});
