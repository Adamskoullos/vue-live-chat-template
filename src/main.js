import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

// firebase auth service
import { fAuth } from './firebase/config'

let app

fAuth.onAuthStateChanged(() => {
    if(!app){
        app = createApp(App).use(router).mount('#app')
    }
})


