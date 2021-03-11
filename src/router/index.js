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

// Route Guard to route logged in users to ChatRoom
const noAuth = (to, from, next) => {
  let user = fAuth.currentUser
  if(user){
    next({ name: 'Chatroom' })
  } else {
    next()
  }
} 

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: noAuth
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


