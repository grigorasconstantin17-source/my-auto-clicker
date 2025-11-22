// ...existing code...
document.addEventListener('DOMContentLoaded', () => {
    const scoreEl = document.getElementById('score');
    const clicksPerClickEl = document.getElementById('clicksPerClick');
    const clickBtn = document.getElementById('clickBtn');
    const buyBtn = document.getElementById('buyUpgradeBtn');
    const upgradeCostEl = document.getElementById('upgradeCost');
    const shopMsg = document.getElementById('shopMsg');

    if (!scoreEl || !clicksPerClickEl || !clickBtn || !buyBtn || !upgradeCostEl) {
        // Required elements not found in the page
        return;
    }

    let score = 0;
    let clicksPerClick = 1;
    const upgradeCost = 100; // cost to buy +1 click

    function updateUI() {
        scoreEl.textContent = score;
        clicksPerClickEl.textContent = clicksPerClick;
        upgradeCostEl.textContent = upgradeCost;
        buyBtn.disabled = score < upgradeCost;
    }

    clickBtn.addEventListener('click', () => {
        score += clicksPerClick;
        updateUI();
        shopMsg.textContent = '';
    });

    buyBtn.addEventListener('click', () => {
        if (score >= upgradeCost) {
            score -= upgradeCost;
            clicksPerClick += 1;
            updateUI();
            shopMsg.textContent = 'Purchase successful: +1 click!';
        } else {
            shopMsg.textContent = 'Not enough points.';
        }
    });

    updateUI();
});
// ...existing code...