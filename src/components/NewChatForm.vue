<template>
  <form>
      <textarea
        v-model="message"
        placeholder="Type your message and hit enter"
        @keydown.enter.prevent="handleSubmit"
      ></textarea>
      <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '../composables/getUser'
import useCollection from '../composables/useCollection'
import { timeStamp } from '../firebase/config'

export default {
    setup(){
        const message = ref('')
        const { addDoc, error } = useCollection('messages')
        const { user } = getUser()

        const handleSubmit = async () => {
            const chat = {
                name: user.value.displayName,
                message: message.value,
                createdAt: timeStamp()
            }
            await addDoc(chat)
            if(!error.value){
                message.value = ''
            }
        }

        return { message, handleSubmit, error }
    }
}
</script>

<style scoped>
form {
    margin: 10px;
  }
  textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 10px;
    font-family: inherit;
    outline: none;
  }
</style>