async function loadData() {
    const { data, error } = await supabase.from('pick5').select('*');
    const display = document.getElementById('dataDisplay');
    if (error) {
        display.textContent = 'Error loading data.';
        console.error(error);
    } else {
        display.textContent = JSON.stringify(data);
    }
}
loadData();