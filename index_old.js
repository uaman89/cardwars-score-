let fullLife = 25;
let playerLife = fullLife;

const lifeBar = document.querySelector('.health > .health__bar');
const attackBtns = document.querySelectorAll('.buttons .buttons__attack');
const fullLifeInput = document.querySelector('#fullLife');

function updateLifeBar() {
    const currLifeWidth = lifeBar.clientWidth;
    lifeBar.style.width = `${playerLife / fullLife * 100}%`;
    lifeBar.innerHTML = playerLife;
}

function attack(count) {
    playerLife -= count;
    updateLifeBar();
    if (playerLife <= 0 && window.confirm('Game Over')) {
        heal();
    }
}

function heal() {
    playerLife = fullLife;
    updateLifeBar();
}

function setFullLife() {
    if (fullLifeInput.value) {
        fullLife = fullLifeInput.value;
        updateLifeBar();
    }
}

fullLifeInput.value = fullLife;

attackBtns.forEach(btn => {
    btn.onclick = () => {
        attack(parseInt(btn.innerHTML));
    }
});


