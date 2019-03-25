import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import Cart from './views/Cart.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',component: Index },
    { path: '/about', component: About},
    { path:'/cart',component:Cart},
    { path: '*',component: NotFound }   
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
