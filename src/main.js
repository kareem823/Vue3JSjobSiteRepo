import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import 'primeicons/primeicons.css';
import router from './router'; // Correct router import
import Toast  from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const app = createApp(App);

app.use(router);
app.use(Toast);

app.mount('#app');
