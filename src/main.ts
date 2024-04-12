import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import SirvjsVue from './plugins/SirvMediaViewer'

createApp(App)
    .use(router)
    .use(SirvjsVue)
    .mount('#app')
