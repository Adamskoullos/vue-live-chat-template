<template>
    <nav>
        <div>
            <p>displayName</p>
            <p class="email">email</p>
        </div>
        <button @click="handleLogout" >Logout</button>
    </nav>
</template>

<script>
import useLogout from '../composables/logout'

export default {

    setup(){

        const { error, logout } = useLogout()

        const handleLogout = async () => {
            await logout()
        }
        
        return { error, handleLogout }
    }

}
</script>

<style>
  nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
  }
  nav p.email {
    font-size: 14px;
    color: #999;
  }
</style>