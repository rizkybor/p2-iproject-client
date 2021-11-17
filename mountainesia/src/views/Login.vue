<template>
   <div class="login">
    <!-- <h1>This is Login Page</h1> -->
    <div class="container-fluid ps-md-0">
      <div class="row g-0">
        <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
        <div class="col-md-8 col-lg-6">
          <div class="login d-flex align-items-center py-5">
            <div class="container">
              <div class="row">
                <div class="col-md-9 col-lg-8 mx-auto">
                  <h3 class="login-heading mb-4"><strong>Login</strong></h3>
                      <p>Welcome Back!</p>
                  <!-- Sign In Form -->
                  <form @submit.prevent="login">
                    <div class="form-floating mb-3">
                      <input v-model="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                      <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input v-model="password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
                      <label for="floatingPassword">Password</label>
                    </div>
                    <div class="d-grid">
                      <button class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit">Sign in</button>
                      <div class="text-center">
                        <p>Don't have an account ? <a @click="toSignUp" class="small" href="#">Register here</a></p>
                      </div>
                      <br>
                      <div class="text-center">
                        <p>Want to search the accommodation first ? <a @click="toHomeUnregister" class="small"  href="#">Back to Home</a></p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
</template>

<script>
export default {
  name: 'Login',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
    },
    toHomeUnregister () {
      this.$router.push('/')
    },
    toSignUp () {
      this.$router.push('/register')
    }
  }
}
</script>

<style scoped>
.login {
  min-height: 100vh;
}

.bg-image {
  background-image: url('https://www.fodors.com/wp-content/uploads/2019/04/00_HikingMtRinjani__HERO_iStock-874887810.jpg');
  background-size: cover;
  background-position: center;
}

.login-heading {
  font-weight: 300;
}

.btn-login {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
}

</style>
