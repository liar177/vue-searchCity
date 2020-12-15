import Vue from "vue"
import VueRouter from "vue-router"
import Login from '@/Login'


Vue.use(VueRouter);// 2.安装vue.js插件

const routes =[
  {
    path:'/login',
    name:'Login',
    component:Login
  },
  {
    path:'/register',
    name:'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 如同上述注释所述，这是异步加载Register 组件 等到需要的时候才加载，也称懒加载
    component:() =>
    import(/* webpackChunkName: "Register" */ "../Register.vue")
  }

];

const router=new VueRouter({ // 1.定义路由
  mode:'history',
  base: process.env.BASE_URL,
  routes
})

export default router