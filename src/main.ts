import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/es'

import App from './App.vue'
import router from './router'
import { VueQueryPlugin } from '@tanstack/vue-query'

const app = createApp(App)

app.use(VueQueryPlugin)
app.use(createPinia())
app.use(router)
app.use(Quasar, {
    plugins: {},
    lang: quasarLang
})

app.mount('#app')
