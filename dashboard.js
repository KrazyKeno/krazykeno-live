
document.addEventListener("DOMContentLoaded", () => {
  const combos = [
    { combo: [3, 8, 27, 33, 45], hits: 15 },
    { combo: [1, 12, 22, 38, 47], hits: 11 },
    { combo: [5, 9, 18, 21, 40], hits: 9 }
  ];
  const ul = document.getElementById("comboChart");
  ul.innerHTML = combos.map(c => `<li>${JSON.stringify(c.combo)} - ${c.hits} hits</li>`).join("");

  const tables = [
    { casino: "El Cortez", decks: 1, payout: "3:2", min: "$5", edge: "0.18%", color: "green" },
    { casino: "Bellagio", decks: 6, payout: "3:2", min: "$15", edge: "0.50%", color: "yellow" },
    { casino: "Resorts World", decks: 8, payout: "6:5", min: "$25", edge: "1.90%", color: "red" }
  ];
  const grid = document.getElementById("blackjackGrid");
  grid.innerHTML = tables.map(t =>
    `<div class="heat-card ${t.color}">
      ${t.casino}<br>Decks: ${t.decks}<br>Payout: ${t.payout}<br>Min: ${t.min}<br>Edge: ${t.edge}
    </div>`
  ).join('');
});
