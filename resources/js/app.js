require('./bootstrap');
require('bootstrap-material-design');
require('./plugin/material-dashboard.min.js');
import router from './router/router.js'
import { createApp } from 'vue';
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.min.css';
import 'vue3-perfect-scrollbar/src/style.css';


const app = createApp()
app.use(PerfectScrollbar)
app.use(router)

app.mount('#app')
