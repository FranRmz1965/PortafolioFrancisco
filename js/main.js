// Barra de navegación:
// 1. Al inicio se muestra completa.
// 2. Al hacer scroll se convierte en un círculo.
// 3. Al dar click en el círculo, despliega el menú.
const navbar = document.querySelector("#navbar");
const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelectorAll(".nav-link");

function updateNavbar() {
  if (window.scrollY > 90) {
    navbar.classList.add("floating");
  } else {
    navbar.classList.remove("floating");
    navbar.classList.remove("menu-open");
  }
}

menuToggle.addEventListener("click", () => {
  if (navbar.classList.contains("floating") || window.innerWidth <= 900) {
    navbar.classList.toggle("menu-open");
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("menu-open");
  });
});

document.addEventListener("click", (event) => {
  const clickedInsideNav = navbar.contains(event.target);

  if (!clickedInsideNav) {
    navbar.classList.remove("menu-open");
  }
});

window.addEventListener("scroll", updateNavbar);
updateNavbar();

// Movimiento sutil de las palabras en la sección de trabajo
const wordGallery = document.querySelector("#wordGallery");
const workWords = document.querySelectorAll(".work-word");

if (wordGallery) {
  wordGallery.addEventListener("mousemove", (event) => {
    const rect = wordGallery.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    workWords.forEach((word, index) => {
      const depth = (index + 1) * 4;
      word.style.marginLeft = `${x * depth}px`;
      word.style.marginTop = `${y * depth}px`;
    });
  });

  wordGallery.addEventListener("mouseleave", () => {
    workWords.forEach((word) => {
      word.style.marginLeft = "0px";
      word.style.marginTop = "0px";
    });
  });
}

// Animación de aparición al hacer scroll
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.15
});

revealElements.forEach((element) => observer.observe(element));
