'use strict';
import { PlayerComponent } from './player.component.js';

const app = new Vue({
    el: '#app',
    components: {
        'app-player': PlayerComponent
    },
    data: {
        message: 'Hello Vue!'
    },

});


