document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.getElementById("searchBox");
  if (!searchBox) return;
  const cards = document.querySelectorAll(".card");

  searchBox.addEventListener("keyup", () => {
    const term = searchBox.value.toLowerCase();
    cards.forEach(card => {
      card.style.display = card.textContent.toLowerCase().includes(term) ? "block" : "none";
    });
  });
});