import Vue from 'vue'
import VueRouter from 'vue-router'
import White from '../views/white'
import White2 from '../views/white2'

Vue.use(VueRouter)

const routes = [
  {
    path: '/white',
    component: White
  },
  {
    path: '/white2',
    component: White2
  }
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
