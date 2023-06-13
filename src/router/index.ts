
import { createRouter, createWebHistory } from 'vue-router'
import { constantRoutes } from './routes'
let router = createRouter({
    //路由模式
    history: createWebHistory(),
    routes: constantRoutes,
    //滚动行为
    scrollBehavior() {
        return {
            top: 0,
            left: 0
        }
    }
})

export default router