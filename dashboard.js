
async function loadPickCombos() {
    document.getElementById('content').innerHTML = "<h2>Pick 5 - Top Combos</h2>" +
        "<p>[3,8,27,33,45] – 15 hits</p>" +
        "<p>[1,12,22,38,47] – 11 hits</p>" +
        "<p>[5,9,18,21,40] – 9 hits</p>";
}

async function loadBlackjack() {
    document.getElementById('content').innerHTML = "<h2>Blackjack Tables</h2>" +
        "<div style='display:flex;justify-content:center;gap:20px'>" +
        "<div style='background:#8f8;padding:10px'>El Cortez<br>Decks: 1<br>Payout: 3:2<br>Min: $5<br>Edge: 0.18%</div>" +
        "<div style='background:#ff8;padding:10px'>Bellagio<br>Decks: 6<br>Payout: 3:2<br>Min: $15<br>Edge: 0.50%</div>" +
        "<div style='background:#f88;padding:10px'>Resorts World<br>Decks: 8<br>Payout: 6:5<br>Min: $25<br>Edge: 1.90%</div>" +
        "</div>";
}
