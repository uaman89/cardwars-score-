const SettingsComponent = {
    template: `
        <div class="settings">
            ♥♥♥: <input v-model.number="settings.maxLife" type="number" min="0">
        </div>
    `,
    props:{
        settings: Object
    }
};


export { SettingsComponent };