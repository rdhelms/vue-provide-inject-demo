import { createApp } from 'vue'
import App from './App.vue'
import { myPlugin } from '../myPlugin'

const app = createApp(App)

app.use(myPlugin)

app.mount('#app')
