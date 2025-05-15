import { supabase } from './supabase.js';

async function loadData() {
  const comboRes = await supabase.from('keno_combos').select('*').order('hit_count', { ascending: false });
  const tableRes = await supabase.from('blackjack_tables').select('*');

  const content = document.getElementById('content');

  if (comboRes.error || tableRes.error) {
    content.innerText = "Error loading data.";
    return;
  }

  content.innerHTML = `
    <h2>Top Pick 5 Combos</h2>
    <ul>${comboRes.data.map(row => `<li>${row.numbers} - ${row.hit_count} hits</li>`).join('')}</ul>
    <h2>Blackjack Tables</h2>
    <ul>${tableRes.data.map(row => `<li>${row.casino_name} (${row.zone}): ${row.deck_count} decks, ${row.payout_ratio}, Min $${row.min_bet}, Edge ${row.house_edge}%</li>`).join('')}</ul>
  `;
}

loadData();
