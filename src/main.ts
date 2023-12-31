import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';

import "primevue/resources/themes/bootstrap4-light-blue/theme.css";

import Button from "primevue/button"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);

app.component('Button', Button);

app.mount('#app')
