import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from './store'
import { globalRegister } from './global'

import 'normalize.css'
import '@/assets/css/index.less'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(globalRegister)
setupStore()
app.use(router).use(store).mount('#app')
