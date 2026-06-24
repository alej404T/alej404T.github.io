const cards = document.querySelectorAll(".project-card, .skill-grid article");
const links = document.querySelectorAll('a[href^="#"]');

// efeito simples para dar um pouco de vida sem complicar demais
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-4px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
