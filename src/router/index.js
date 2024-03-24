import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
//createRouter 创建Router实例对象
//createWebHistory 创建history模式路由
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component:Layout,
      children:[//二级路由
        {
            path:'',//默认二级路由，会一同加载
            component:Home
        },
        {
          path:'category',
          component:Category
      }
      ]
    },
    {
      path:'/login',
      component:Login
    }

  ]
})

export default router
