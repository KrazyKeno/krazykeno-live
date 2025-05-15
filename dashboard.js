
import { supabase } from './supabase.js';

async function fetchKenoCombos() {
  const { data, error } = await supabase.from('keno_combos').select('*');
  const target = document.getElementById('keno-data');
  if (error || !data) {
    target.innerHTML = "<p>Error loading Keno combo data.</p>";
    return;
  }
  target.innerHTML = "<h2>Top Pick Combos</h2>" + data.map(d => `<div>${d.numbers} (${d.hit_count} hits)</div>`).join('');
}

async function fetchBlackjackTables() {
  const { data, error } = await supabase.from('blackjack_tables').select('*');
  const target = document.getElementById('blackjack-data');
  if (error || !data) {
    target.innerHTML = "<p>Error loading Blackjack table data.</p>";
    return;
  }
  target.innerHTML = "<h2>Blackjack Tables</h2>" + data.map(d => `<div>${d.casino_name} | ${d.zone} | ${d.deck_count} decks | ${d.payout_ratio} | Min: $${d.min_bet}</div>`).join('');
}

function initMap() {
  const mapDiv = document.getElementById("map");
  mapDiv.innerHTML = "<iframe src='https://www.google.com/maps/d/u/0/embed?mid=1MAPID' width='100%' height='400'></iframe>";
}

document.addEventListener("DOMContentLoaded", () => {
  fetchKenoCombos();
  fetchBlackjackTables();
  initMap();
});
