document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("content").innerText = "Fetching live data...";
  // Simulated load — real data logic would be fetched from Supabase here
  setTimeout(() => {
    document.getElementById("content").innerText = "Latest Pick 5 Combo: 3, 8, 19, 27, 42";
  }, 2000);
});
