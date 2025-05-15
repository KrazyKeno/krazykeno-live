
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabase = createClient(
  'https://btqyrahhdsxtsmbqtfjd.supabase.co',
  'YOUR_PUBLIC_ANON_KEY'
)

window.addEventListener('load', async () => {
  const { data, error } = await supabase
    .from('keno_combos')
    .select('*')
    .eq('pick_type', 'Pick 5')
    .order('hit_count', { ascending: false })
    .limit(5)

  if (error) {
    document.getElementById('content').innerText = 'Error loading data.'
    console.error(error)
    return
  }

  const list = data.map(d => `<p>[${d.numbers}] – ${d.hit_count} hits</p>`).join('')
  document.getElementById('content').innerHTML = `<h2>Top Pick 5 Combos</h2>${list}`
})
