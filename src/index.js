const toggleBtn = document.querySelector("#toggle-menu-btn");
const mobileMenu = document.querySelector("#menu .navlist");

toggleBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});
