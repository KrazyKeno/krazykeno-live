import { supabase } from './supabase.js';

async function fetchKenoCombos() {
  const target = document.getElementById('keno-data');
  if (!target) return console.error("Missing #keno-data element in HTML.");
  const { data, error } = await supabase.from('keno_combos').select('*');
  if (error || !data) {
    console.error("Keno fetch error:", error);
    target.innerHTML = "<p>Error loading Keno combo data.</p>";
    return;
  }
  target.innerHTML = "<h2>Top Pick Combos</h2>" + data.map(d => `<div>${d.numbers} (${d.hit_count} hits)</div>`).join('');
}

async function fetchBlackjackTables() {
  const target = document.getElementById('blackjack-data');
  if (!target) return console.error("Missing #blackjack-data element in HTML.");
  const { data, error } = await supabase.from('blackjack_tables').select('*');
  if (error || !data) {
    console.error("Blackjack fetch error:", error);
    target.innerHTML = "<p>Error loading Blackjack table data.</p>";
    return;
  }
  target.innerHTML = "<h2>Blackjack Tables</h2>" + data.map(d =>
    `<div>${d.casino_name} | ${d.zone} | ${d.deck_count} decks | ${d.payout_ratio} | Min: $${d.min_bet}</div>`
  ).join('');
}

function initMap() {
  const mapDiv = document.getElementById("map");
  if (!mapDiv) return console.error("Missing #map element.");
  mapDiv.innerHTML = "<iframe src='https://www.google.com/maps/d/u/0/embed?mid=1MAPID' width='100%' height='400'></iframe>";
}

document.addEventListener("DOMContentLoaded", () => {
  fetchKenoCombos();
  fetchBlackjackTables();
  initMap();
});
