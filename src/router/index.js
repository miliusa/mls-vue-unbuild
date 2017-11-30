import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Index from '@/components/index'
import Login from '@/components/login'
import Register from '@/components/register'
import HomePage from '@/components/home-page'
import HomeOtherPage from '@/components/home-other-page'
import ProductDetail from '@/components/product-detail'
import ShoppingCart from '@/components/shopping-cart'
import SearchProducts from '@/components/search-products'
import NotFound from '@/components/not-found'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {path: '/',redirect:'/index'},
    {
      path:'/index',
      component:Index,
      children:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomePage},
        {path:'/otherPage/:action',component:HomeOtherPage},
        {path:'/search/:kw',component:SearchProducts}
      ]},
    {path:'/login',component:Login},
    {path:'/register',component:Register},
    {path:'/detail/:pid',component:ProductDetail},
    {path:'/cart',component:ShoppingCart},
    {path:'*',component:NotFound}
  ]
})
