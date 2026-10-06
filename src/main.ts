import './assets/globalestyle.css'
import { createMemoryHistory, createRouter } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'



import Accueil from './page/Accueil.vue'
import Demo from './page/Demo.vue'
import Projets from './page/Projets.vue'
import Contacts from './page/Contacts.vue'

const routes = [
  { path: '/', component: Accueil },
  { path: '/home', component: Accueil },
  { path: '/demo', component: Demo },
  { path: '/projets', component: Projets },
  { path: '/contacts', component: Contacts },
  
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App).use(router).mount('#app')







