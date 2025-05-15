import { supabase } from './supabase.js';

async function fetchData() {
  const { data, error } = await supabase.from('keno_combos').select('*');
  const container = document.getElementById('content');
  if (error) container.textContent = 'Error loading data.';
  else container.textContent = JSON.stringify(data, null, 2);
}

window.onload = fetchData;