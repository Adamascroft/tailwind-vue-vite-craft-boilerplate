import './tailwind.css'

import { createApp } from 'vue'

import CatsMeow from './components/CatsMeow.vue'

const app = createApp({
  components: {
    CatsMeow,
  },
})

app.mount('#app')