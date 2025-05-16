import { createRouter, createWebHistory } from 'vue-router'
import Launch from '../views/Launch.vue'
import About from '../views/About.vue'

const routes = [
  { path: '/', component: Launch },
  { path: '/about', component: About },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
