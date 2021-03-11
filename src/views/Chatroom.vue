<template>
  <div class="container">
    <Navbar />
    <NewChatForm />
  </div>
</template>

<script>
import { watch } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import NewChatForm from '../components/NewChatForm'
import getUser from '../composables/getUser'

export default {
  components: { Navbar, NewChatForm },

  setup(){
    const { user } = getUser()
    const router = useRouter()

    watch(user, () =>{
      if(!user.value){
        router.push({ name: 'Welcome' })
      }
    })

    return {  }
  }

}
</script>

<style>

</style>