import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import DetailsByID from '../views/DetailsByID.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/details/:id',
    name: 'DetailsByID',
    component: DetailsByID
  }
  // {
  //   path: '/about',
  //   name: 'About',
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (
    (to.name === 'Login' || to.name === 'Register') &&
  localStorage.access_token
  ) {
    next({ name: 'Home' })
  } else {
    next()
  }
  if (to.name === 'ImageById' && !localStorage.getItem('token')) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
