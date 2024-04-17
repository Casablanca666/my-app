import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Main from '../views/Main.vue'
import Mall from '../views/Mall.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'

Vue.use(VueRouter)  
//1.创建路由组件
//2.将路由与组件进行映射
//3.创建router实例
//4.创建和挂载根实例
//5.路由出口
const  routes = [
    {path:'/',
    component:Main,
    redirect:'/home',
    children:[
        //子路由
        {path:'home',name:'home',component:Home},
        {path:'user',name:'user',component:User},
        {path:'mall',name:'mall',component:Mall},
        {path:'page1',name:'page1',component:PageOne},
        {path:'page2',name:'page2',component:PageTwo}     
    ]
},
   
]

const router = new VueRouter({
     routes   //（缩写） 相当于routes:routes
})

export default router

