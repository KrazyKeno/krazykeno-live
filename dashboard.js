
async function loadPick(type) {
  const { data, error } = await db.from(type).select('*').limit(10);
  const container = document.getElementById('content');
  if (error) {
    container.innerText = 'Error loading data: ' + error.message;
  } else {
    container.innerHTML = '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
  }
}
