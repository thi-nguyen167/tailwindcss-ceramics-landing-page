const hamburgerBtn = document.getElementById("hamburger-menu");
const mobileMenu = document.getElementById("mobile-menu-overlay");
const iconSpan = hamburgerBtn.querySelector("span");

hamburgerBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("opacity-0");
  mobileMenu.classList.toggle("pointer-events-none");

  const isMenuHidden = mobileMenu.classList.contains("opacity-0");

  iconSpan.textContent = isMenuHidden ? "menu" : "close";
  document.body.style.overflow = isMenuHidden ? "" : "hidden";
});
