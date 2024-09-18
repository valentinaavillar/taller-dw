import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import axios from "axios";
import VueAxios from 'vue-axios';

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

const app = createApp(App).use(router);

app.use(VueAxios, axios)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.mount("#app")

export {app};

