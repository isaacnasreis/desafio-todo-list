import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/main.css'
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const app = createApp(App)

app.use(createPinia())
app.use(Toast);

app.mount('#app')
