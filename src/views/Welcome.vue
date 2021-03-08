<template>
  <div class="welcome container">
      <h1>Welcome To Live Chat</h1>
      <div v-if="showLogin">
          <h2>Login</h2>
          <Login />
          <p>Not registered ?<span @click="showLogin = false"> Sign up</span></p>
      </div>
      <div v-else>
          <h2>Register</h2>
          <Signup />
          <p>Already registered ?<span @click="showLogin = true"> Login</span></p>
      </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import Login from '../components/Login'
import Signup from '../components/Signup'

export default {
    components: { Login, Signup },

    setup(){
        const showLogin = ref(true)

        return { showLogin }
    }

}
</script>

<style>
.welcome{
    text-align: center;
    padding: 20px 0;
}
/* form styles */
.welcome form {
width: 300px;
margin: 20px auto;
}
.welcome label {
display: block;
margin: 20px 0 10px;
}
.welcome input {
width: 100%;
padding: 10px;
border-radius: 20px;
border: 1px solid #eee;
outline: none;
color: #999;
margin: 10px auto;
}
.welcome button{
    margin: 20px auto;
}
.welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
}
</style>