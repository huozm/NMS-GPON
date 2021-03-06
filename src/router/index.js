 /* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../components/Home.vue'
import HomeOne from '../components/HomeOne.vue'
import HomeTwo from '../components/HomeTwo.vue'
import HomeThree from '../components/HomeThree.vue'
import HomeFour from '../components/HomeFour.vue'
import HomeFive from '../components/HomeFive.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home',
      component: Home
    },
    {
      path:'/HomeOne',
      component:HomeOne
    },
    {
      path:'/HomeTwo',
      component:HomeTwo
    },
    {
      path:'/HomeThree',
      component:HomeThree
    },
    {
      path:'/HomeFour',
      component: HomeFour
    },
    {
      path:'/HomeFive',
      component: HomeFive
    }
  ]
})
