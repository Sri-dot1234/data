import { createRouter, createWebHistory } from 'vue-router'
import FormData from '../components/FormData.vue'
import GetData from '../components/GetData.vue'
const routes = [
  {
    path: '/',
    name: 'FormData',
    component: FormData
  },
  {
    path: '/GetData',
    name: 'GetData',
    component: GetData
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
