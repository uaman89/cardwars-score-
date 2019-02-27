'use strict';
import { PlayerComponent }   from './player.component.js';
import { SettingsComponent } from './settings.component.js';

new Vue({
    el: '#app',
    components: {
        'app-player': PlayerComponent,
        'app-settings': SettingsComponent
    },
    data: {
        settings: {
            maxLife: 50
        }
    },

});


