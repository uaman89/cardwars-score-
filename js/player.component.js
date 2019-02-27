const PlayerComponent = {
    template: `
    <div class="app-player">
        <div class="health">
            <div :style="{ width: lifePercent + '%'} " class="health__bar"></div>
            <div class="health__count">{{playerLife === 0 ? 'Game over' : playerLife}}</div>
        </div>
        <div class="bottom-panel">
            <div class="buttons">
                <div v-for="damage in attackValues"
                     @click="doDamage(damage)"
                     class="buttons__button buttons__button--attack">
                     <img src="./img/sword.png" alt="attack icon">&nbsp;{{damage}}
                </div>
                <div @click="heal(1)" class="buttons__button buttons__button--heal">♥ 1</div>
                <div @click="heal(maxLife)" class="buttons__button buttons__button--heal">♥100%</div>
            </div>
        </div>
    </div>
    `,
    props: {
        maxLife: Number
    },
    data() {
        return {
            attackValues: [1, 2, 3, 4, 5],
            playerLife: this.maxLife,
            healValue: 0,
        }
    },
    watch: {
        maxLife(newValue) {
            if (this.playerLife > this.maxLife) {
                this.playerLife = this.maxLife;
            }
        }
    },
    computed: {
        lifePercent() {
            console.log('this.maxLife', this.maxLife);
            return this.playerLife / this.maxLife * 100
        },
    },
    methods: {
        doDamage(damage) {
            this.playerLife = +this.playerLife - damage;
            if (this.playerLife < 0){
                this.playerLife = 0;
            }
        },
        heal(value=0) {
            this.playerLife = +this.playerLife + parseInt(value);
            if (this.playerLife > this.maxLife) {
                this.playerLife = this.maxLife;
            }
        }
    }
};

export { PlayerComponent };
