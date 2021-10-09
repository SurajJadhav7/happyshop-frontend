import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductDetails from '../components/ProductDetails.vue'
import Products from '../components/Products.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Products
  },
  {
    path: '/details/:id',
    name: 'ProductDetails',
    component: ProductDetails
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
