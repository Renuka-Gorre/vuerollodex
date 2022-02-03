import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Card from '@/components/Card'
import Cardlist from '@/components/Cardlist'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/card',
      name: 'Card',
      component: Card
    },
    {
      path: '/cardlist',
      name: 'Cardlist',
      component: Cardlist
    },
  ]
})
