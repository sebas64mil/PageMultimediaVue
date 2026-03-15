import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// Styles
import './styles/variables.css'

// Bootstrap CSS y JS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

// FontAwesome
import '@fortawesome/fontawesome-free/css/all.css'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')

