
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("comboDisplay").innerText = "Latest Pick 5 Combo: 3, 8, 27, 33, 45";
  const tables = [
    { casino: "El Cortez", decks: 1, payout: "3:2", edge: "0.18%", color: "green" },
    { casino: "Bellagio", decks: 6, payout: "3:2", edge: "0.50%", color: "yellow" },
    { casino: "Resorts World", decks: 8, payout: "6:5", edge: "1.90%", color: "red" }
  ];
  const grid = document.getElementById("blackjackGrid");
  grid.innerHTML = tables.map(t => `<div class='heat-card ${t.color}'>${t.casino}<br>Decks: ${t.decks}<br>Payout: ${t.payout}<br>Edge: ${t.edge}</div>`).join('');
});
