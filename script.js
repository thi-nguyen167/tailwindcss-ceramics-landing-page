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

window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;

  // Navbar blur on scroll
  const nav = document.querySelector("nav");
  if (scrolled > 50) {
    nav.classList.add(
      "bg-background/80",
      "backdrop-blur-xl",
      "border-b",
      "border-on-background/5",
    );
    nav.style.paddingTop = "20px";
    nav.style.paddingBottom = "20px";
  } else {
    nav.classList.remove(
      "bg-background/80",
      "backdrop-blur-xl",
      "border-b",
      "border-on-background/5",
    );
    nav.style.paddingTop = "40px";
    nav.style.paddingBottom = "40px";
  }
});
