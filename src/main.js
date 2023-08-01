import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routers'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import vClickOutside from 'click-outside-vue3'
// import store from './store';


const app = createApp(App);
// app.use(store);
app.use(ElementPlus)
app.use(router);
app.use(vClickOutside)
app.mount('#app')
