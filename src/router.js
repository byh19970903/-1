import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import My from './views/My.vue'
import Login from './views/Login.vue'
import Reg from './views/Reg.vue'
import El from './views/el.vue'
import BasicLayout from './BasicLayout.vue'
import BasicContainer from './BasicContainer.vue'
import FormRadio from './FormRadio.vue'
import FormCheckbox from './FormCheckbox'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/my',
      name: 'my',
      component: My,
      children:[
        {
          path:'login',
          component:Login
        },
        {
          path:'reg',
          component:Reg
        },
        {
          path:'el',
          component:El
        },
        {
          path:'BasicLayout',
          component:BasicLayout
        } ,
        {
          path:'BasicContainer',
          component:BasicContainer
        },
        {
          path:'FormRadio',
          component:FormRadio
        },
        {
          path:'FormCheckbox',
          component:FormCheckbox
        },
      
      ]
    },
    // {
    //   path: '/My',
    //   name: 'my',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/My.vue')
    // }
  ]
})
