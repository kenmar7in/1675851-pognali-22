// main-nav menu

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", function() {
  if (menuToggle.classList.contains("menu-toggle--closed")) {
    menuToggle.classList.remove("menu-toggle--closed");
    menuToggle.classList.add("menu-toggle--opened");
    menu.style.display = "block";
  } else if (menuToggle.classList.contains("menu-toggle--opened")) {
    menuToggle.classList.remove("menu-toggle--opened");
    menuToggle.classList.add("menu-toggle--closed");
    menu.style.display = "none";
  }
});
