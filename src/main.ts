import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from '@/App.vue'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//svg文件需要的配置代码
import 'virtual:svg-icons-register'
//注册自定义组件
import GlobalComponents from '@/components'
//引入全局样式
import '@/styles/index.scss'
//注册路由
import router from './router'



const app = createApp(App)

app.use(GlobalComponents)
app.use(router)
app.use(ElementPlus, {
    locale: zhCn,
})
app.mount('#app')