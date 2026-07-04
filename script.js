document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     SMOOTH SCROLL
  ========================= */
  const links = document.querySelectorAll("a[href^='#']");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: "smooth"
        });
      }
    });
  });

  /* =========================
     NAVBAR SCROLL EFFECT
  ========================= */
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      header.style.background = "rgba(0,0,0,0.9)";
      header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
    } else {
      header.style.background = "rgba(0,0,0,0.6)";
      header.style.boxShadow = "none";
    }
  });

  /* =========================
     FORM SUBMIT
  ========================= */
  const form = document.querySelector(".form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const inputs = form.querySelectorAll("input, textarea");

      let valid = true;

      inputs.forEach(input => {
        if (input.value.trim() === "" && input.hasAttribute("required")) {
          valid = false;
        }
      });

      if (!valid) {
        alert("Por favor completa todos los campos requeridos.");
        return;
      }

      alert("Solicitud enviada correctamente. Te contactaremos pronto.");

      form.reset();
    });
  }

  /* =========================
     ANIMACIONES AL SCROLL
  ========================= */
  const elements = document.querySelectorAll(".card, .about-card, .gallery img, .hours-box");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        entry.target.style.transition = "0.6s ease";
      }
    });
  }, {
    threshold: 0.1
  });

  elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";
    observer.observe(el);
  });

});