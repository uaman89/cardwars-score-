Vue.component('app-player', {
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
                 class="buttons__attack">{{damage}}</div>
        </div>
        <div class="life">
            <div>
                <form action="#" @submit.prevent="heal">
                    <input v-model="healValue" type="text">
                    <button type="submit"> ♥ </button>
                </form>
            </div>
            <div>
                max: <input v-model="fullLife" type="text">
            </div>
        </div>
    </div>
    </div>  
    `,
    data(){
        return {
            attackValues: [1,2,3,4,5],
            fullLife: 50,
            playerLife: 50,
            healValue: 0,
        }
    },
    watch:{
        fullLife(newValue){
            if (this.playerLife > this.fullLife){
                this.playerLife = this.fullLife;
            }
        }
    },
    computed: {
        lifePercent(){ return  this.playerLife / this.fullLife * 100 },
    },
    methods: {
        doDamage(damage){
           console.log(this.playerLife, damage);
           this.playerLife -= damage;
           console.log(this.playerLife, damage); 
        },
        heal(){
            this.playerLife = parseInt(this.healValue);
            if (this.playerLife > this.fullLife){
                this.playerLife = this.fullLife;
            }
        }
    }
});

const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});


