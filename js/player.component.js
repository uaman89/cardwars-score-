const PlayerComponent = {
    template: `
    <div class="app-player">
        <div class="health">
            <div :style="{ width: lifePercent + '%'} " class="health__bar"></div>
            <div class="health__count">{{playerLife}}</div>
        </div>
        <div class="bottom-panel">
            <div class="buttons">
                <div v-for="damage in attackValues"
                     @click="doDamage(damage)"
                     class="buttons__button buttons__button--attack">
                     <img src="./img/sword.png" alt="attack icon">&nbsp;{{damage}}
                </div>
                <div @click="heal(1)" class="buttons__button buttons__button--heal">♥ 1</div>
            </div>
            <div class="life">
                <div>
                    ♥♥♥: <input v-model="fullLife" type="text">
                </div>
                <div>
                    <button @click="heal(fullLife)"> ♥ 100%</button>
                </div>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            attackValues: [1, 2, 3, 4, 5],
            fullLife: 50,
            playerLife: 50,
            healValue: 0,
        }
    },
    watch: {
        fullLife(newValue) {
            if (this.playerLife > this.fullLife) {
                this.playerLife = this.fullLife;
            }
        }
    },
    computed: {
        lifePercent() {
            return this.playerLife / this.fullLife * 100
        },
    },
    methods: {
        doDamage(damage) {
            console.log(this.playerLife, damage);
            this.playerLife = +this.playerLife - damage;
            if (this.playerLife < 0){
                this.playerLife = 0;
            }
            console.log(this.playerLife, damage);
        },
        heal(value=0) {
            this.playerLife = +this.playerLife + value;
            if (this.playerLife > this.fullLife) {
                this.playerLife = this.fullLife;
            }
        }
    }
};

export { PlayerComponent };
