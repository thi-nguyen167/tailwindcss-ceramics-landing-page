document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // MOBILE MENU LOGIC
  // ==========================================
  const initMobileMenu = () => {
    const hamburgerBtn = document.getElementById("hamburger-menu");
    const mobileMenu = document.getElementById("mobile-menu-overlay");
    if (!hamburgerBtn || !mobileMenu) return;

    const iconSpan = hamburgerBtn.querySelector("span");
    const mobileLinks = mobileMenu.querySelectorAll("a");

    const toggleMenu = (forceClose = false) => {
      const isCurrentlyHidden = mobileMenu.classList.contains("opacity-0");
      const shouldHide = forceClose ? true : !isCurrentlyHidden;

      if (shouldHide) {
        // Close the menu
        mobileMenu.classList.add("opacity-0", "pointer-events-none");
        iconSpan.textContent = "menu";
        document.body.style.overflow = ""; // Re-enable page scrolling
      } else {
        // Open the menu
        mobileMenu.classList.remove("opacity-0", "pointer-events-none");
        iconSpan.textContent = "close";
        document.body.style.overflow = "hidden"; // Disable page scrolling
      }
    };

    // Attach click event to the hamburger button
    hamburgerBtn.addEventListener("click", () => toggleMenu());

    // Attach click event to all links inside the mobile menu to force close it when clicked
    mobileLinks.forEach((link) =>
      link.addEventListener("click", () => toggleMenu(true)),
    );
  };

  // ==========================================
  // SCROLL & PARALLAX EFFECTS
  // ==========================================
  const initScrollEffects = () => {
    const nav = document.querySelector("nav");
    const heroImg = document.getElementById("hero-img");
    const processImg = document.getElementById("process-parallax");

    let ticking = false; // Variable to control requestAnimationFrame

    const onScroll = () => {
      const scrolled = window.scrollY; // Use window.scrollY as the modern standard

      // Hero Image Parallax (moves the image slightly slower than the scroll)
      if (heroImg) {
        heroImg.style.transform = `translateY(${scrolled * 0.5}px) scale(1.05)`;
      }

      // Process Section Parallax (calculates relative position in the viewport)
      if (processImg) {
        const rect = processImg.parentElement.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const relativePos =
            (window.innerHeight - rect.top) / window.innerHeight;
          processImg.style.transform = `translateY(${(relativePos - 0.5) * 80}px) scale(1.2)`;
        }
      }

      // Navbar Blur
      if (nav) {
        if (scrolled > 50) {
          nav.classList.add(
            "bg-background/80",
            "backdrop-blur-xl",
            "py-5",
            "border-on-background/10",
          );
        } else {
          nav.classList.remove(
            "bg-background/80",
            "backdrop-blur-xl",
            "py-5",
            "border-on-background/10",
          );
        }
      }

      ticking = false;
    };

    // Optimize the scroll event listener using requestAnimationFrame to prevent layout thrashing
    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    });
  };

  // ==========================================
  // REVEAL ANIMATION (Intersection Observer)
  // ==========================================
  const initRevealAnimations = () => {
    const elementsToReveal = document.querySelectorAll(".reveal");
    if (elementsToReveal.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Stop observing the element once it has been revealed to save CPU resources
            observer.unobserve(entry.target);
          }
        });
      },
      // Trigger the animation when 10% of the element is visible, with a -100px bottom margin offset
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    );

    elementsToReveal.forEach((el) => observer.observe(el));
  };

  // ==========================================
  // CUSTOM CURSOR
  // ==========================================
  const initCustomCursor = () => {
    const cursor = document.getElementById("custom-cursor");
    if (!cursor) return;

    // Update cursor position based on mouse movement
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });

    // Group both 'cursor-pointer' and 'cursor-hover' classes into a single NodeList
    const interactables = document.querySelectorAll(
      ".cursor-pointer, .cursor-hover",
    );

    // Add active class (scaling effect) when hovering over interactable elements
    interactables.forEach((item) => {
      item.addEventListener("mouseenter", () => cursor.classList.add("active"));
      item.addEventListener("mouseleave", () =>
        cursor.classList.remove("active"),
      );
    });
  };

  // ==========================================
  // THEME TOGGLE (LIGHT/DARK MODE)
  // ==========================================
  const initThemeToggle = () => {
    const themeToggleBtn = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    // Exit if the button or icon is missing from the DOM
    if (!themeToggleBtn || !themeIcon) return;

    // Retrieve the user's saved theme preference from the browser's LocalStorage
    const currentTheme = localStorage.getItem("theme");

    // If the user previously selected the light theme, apply it immediately on load
    if (currentTheme === "light") {
      document.documentElement.classList.add("light");
      themeIcon.textContent = "dark_mode"; // Change icon to moon
    }

    // Handle the click event to toggle between themes
    themeToggleBtn.addEventListener("click", () => {
      // Toggle the '.light' class on the root <html> element
      document.documentElement.classList.toggle("light");

      // Update LocalStorage and the toggle icon based on the new active state
      if (document.documentElement.classList.contains("light")) {
        localStorage.setItem("theme", "light");
        themeIcon.textContent = "dark_mode";
      } else {
        localStorage.setItem("theme", "dark");
        themeIcon.textContent = "light_mode";
      }
    });
  };

  // Initialize
  initMobileMenu();
  initScrollEffects();
  initRevealAnimations();
  initCustomCursor();
  initThemeToggle();
});
