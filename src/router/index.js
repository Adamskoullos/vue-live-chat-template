import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'
import { fAuth } from '../firebase/config' 
// Auth Guard
const requireAuth = (to, from, next) => {

    let user = fAuth.currentUser
    if(!user){
      next({ name: 'Welcome' })
    } else {
      next()
    }
} 

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
