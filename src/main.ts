import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import '../node_modules/jquery/dist/jquery.js';
import '../node_modules/@ob1/web/dist/css/style.css';
import '../node_modules/@ob1/web/dist/js/ob1.js';

createApp(App).use(store).mount('#app')
