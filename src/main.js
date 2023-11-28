
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.js'

//createApp(App).mount('#app')
const app = createApp(App)
app.config.globalProperties.$serverUrl = '//localhost:7777'

app.use(router).mount('#app')