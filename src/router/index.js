import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import choose from '@/components/choose'
import goodDetail from '@/detail/goodDetail'
import classify from "@/components/Classify/classify"
import news from "@/components/Classify/New/news"
import newsDetail from "@/components/Classify/New/newsDetail"
import my from "@/my/my"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/choose',
      name: 'choose', 
      component: choose 
    },
    { 
      path: '/goodDetail', 
      name: 'goodDetail', 
      component: goodDetail,
      meta:{index:0}
    },
    {
      path:'/classify',
      name:'classify',
      component:classify
    },
    {
      path:'/news',
      name:'news',
      component:news
    },
    {
      path:'/my',
      name:'my',
      component:my
    },
    {
      path:'/newsDetail',
      name:'newsDetail',
      component:newsDetail
    }
  ]
})
