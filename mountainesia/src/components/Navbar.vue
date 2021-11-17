<template>
  <div id='section1' style="margin-top: 15px; font-size: 12px;">
    <div class='row'>
      <div class='col-3'>
        <a href="#" style="text-decoration:none; color: grey" @click.prevent="toHome">Home</a>
      </div>
      <div class='col-3'>
        <a href="#" style="text-decoration:none; color: grey" @click.prevent="toSignIn" v-if="!isLogin">Login</a>
      </div>
      <div class='col-3'>
        <a href="#" style="text-decoration:none; color: grey" @click.prevent="toRegister" v-if="!isLogin">Register</a>
      </div>
       <div class='col-3'>
        <a href="#" style="text-decoration:none; color: grey" @click.prevent="toLogout" v-if="isLogin">Logout</a>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'Navbar',
  computed: {
    isLogin: function () {
      return this.$store.state.isLogin
    }
  },
  methods: {
    toHome () {
      this.$router.push('/')
    },
    toSignIn () {
      this.$router.push('/login')
    },
    toRegister () {
      this.$router.push('/register')
    },
    toLogout () {
      this.$store.state.isLogin = false
      localStorage.clear()
      this.$router.push('/login')
      Swal.fire(
        'Thank You! Logout Success!'
      )
    }
  }
}
</script>

<style scoped>
#section1 {
    display: flex;
    justify-content: flex-end;
    padding-right: 5%;
}

a:hover {
  color:#D4AC2B;
  font-weight: 600;
}

</style>
