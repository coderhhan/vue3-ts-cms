import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from './store'
import 'normalize.css'
import '@/assets/css/index.less'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

createApp(App).use(router).use(store).mount('#app')
setupStore()
