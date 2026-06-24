const cards = document.querySelectorAll(".project-card");

// efeito pequeno so para a pagina nao ficar totalmente parada
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-4px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});
