import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
const supabase = createClient('https://your-project.supabase.co', 'public-anon-key');

async function fetchJackpots() {
  const { data, error } = await supabase.from('jackpots').select('*').order('timestamp', { ascending: false }).limit(10);
  if (error) {
    console.error('Error fetching jackpots:', error);
    return;
  }

  document.getElementById('loader').style.display = 'none';
  const gameTypes = ['pick5', 'pick7', 'pick8', '20card'];
  gameTypes.forEach(type => {
    const section = document.getElementById(type);
    const rows = data.filter(row => row.game_type.toLowerCase() === type);
    section.innerHTML = rows.map(j => `<p><strong>${j.casino}</strong> hit $${j.jackpot_amount} with: ${j.hit_numbers.join(', ')}</p>`).join('');
  });
}
fetchJackpots();