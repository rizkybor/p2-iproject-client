<template>
  <div class="register">
    <!-- <h1>This is Register Page</h1> -->
    <div class="container-fluid ps-md-0">
      <div class="row g-0">
        <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
        <div class="col-md-8 col-lg-6">
          <div class="login d-flex align-items-center py-5">
            <div class="container">
              <div class="row">
                <div class="col-md-9 col-lg-8 mx-auto">
                  <h3 class="login-heading mb-4"><strong>Create an account for free</strong></h3>
                  <p>Free forever. No payment needed.</p>
                  <!-- Sign In Form -->
                  <form>
                    <div class="form-floating mb-3">
                      <input v-model="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                      <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input v-model="password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
                      <label for="floatingPassword">Password</label>
                    </div>
                    <div class="d-grid">
                      <button @click="register" class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit">Sign Up with Email</button>
                      <div class="text-center">
                        <p>Don't have an account ? <a @click="toSignIn" class="small" href="#">Sign Up with Email</a></p>
                      </div>
                      <br>
                      <div class="text-center">
                        <p>Want to search the accommodation first ? <a @click="toHomeUnregister" class="small" href="#">Back to Home</a></p>
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
  name: 'Register',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register: function () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('register', payload)
      this.$router.push('/login')
    },
    toHomeUnregister () {
      this.$router.push('/')
    },
    toSignIn () {
      this.$router.push('/login')
    }
  }
}
</script>

<style>
.login {
  min-height: 100vh;
}

.bg-image {
  background-image: url('https://bromoeastjava.files.wordpress.com/2016/11/ghg.jpg');
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
