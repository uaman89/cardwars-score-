Vue.component('app-player', {
    template: `
    <div class="health">
        <div class="health__bar"></div>
        <div class="health__count"></div>
    </div>
    <div class="bottom-panel">
        <div class="buttons">
            <div v-for="let damage in attackValues"
                 @click="attack(damage)"
                 class="buttons__attack">1</div>
        </div>
        <div class="life">
            <form action="#" onsubmit="setFullLife()">
                <input id="fullLife" type="text">
            </form>
            <button onclick="heal()">♥ 100%</button>
        </div>
    </div>  
    `,
    data: () => {
        return {
            attackValues: [1,2,3,4,5],
            totalLife: 50,
            playerLife: this.totalLife,
        }
    },
    computed: {
        lifePercent: () => this.playerLife / this.fullLife * 100,
    },
    maathods: {
        doDamage(damage){
           this.playerLife -= damage; 
        }
    }
});