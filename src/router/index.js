import { createRouter, createWebHistory } from "vue-router";

//라우터가 연결할 페이지(컴포넌트 : vue파일)들 임포트 함
import PageMain from '@/views/common/PageMain.vue'

const routes = [
    {
        path: '/'
        ,name: 'PageMain'
        ,component: PageMain
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

