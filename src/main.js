import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import BaseButton from "./components/ui/BaseButton.vue"
import { createPinia } from 'pinia'
import router from "./router"
import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const icons = {
  defaultSet: 'mdi',
  aliases,
  sets: {
    mdi,
  }
}

const pinia = createPinia()
const app = createApp(App)
const vuetify = createVuetify({
  icons,
    components,
    directives,
    theme: {
        dark: true
      },
})

app.use(vuetify)
app.use(pinia)
app.use(router)


app.component('base-button', BaseButton);

app.mount('#app')