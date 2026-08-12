document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu") || document.querySelector(".-menu");
  const links = document.querySelectorAll(".nav-menu a, .-menu a");

  const onScroll = () => header?.classList.toggle("scrolled", window.scrollY > 20);
  onScroll(); 
  window.addEventListener("scroll", onScroll, { passive: true });

  toggle?.addEventListener("click", () => {
    const isOpen = navMenu?.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen);
  });

  links.forEach(a => a.addEventListener("click", () => {
    navMenu?.classList.remove("open");
  }));

  document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener("click", e => {
    const id = a.getAttribute("href"); 
    const el = document.querySelector(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }));
});