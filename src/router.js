import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',component: Index },
    { path: '/about', component: About},
    { path: '*',component: NotFound }   
  ]
})
