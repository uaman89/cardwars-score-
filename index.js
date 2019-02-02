const fullLife = 25;
let playerLife = fullLife;

const lifeBar = document.querySelector('.health > .health__bar');
const attackBtns = document.querySelectorAll('.buttons .buttons__attack');

attackBtns;  

function updateLifeBar(){
    const currLifeWidth = lifeBar.clientWidth;
    lifeBar.style.width = `${playerLife/fullLife * 100}%`;
}

function attack(count){
    playerLife -= count;
    updateLifeBar();
    if (playerLife <= 0 && window.confirm('Game Over')){
        playerLife = fullLife;
        updateLifeBar();
    }
}

attackBtns.forEach(btn=>{
    btn.onclick = () => {
        attack(parseInt(btn.innerHTML));
    }
});

