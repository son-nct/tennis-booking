import {createRouter , createWebHistory} from 'vue-router'

const routes = [
    {
        name : 'login-page',
        path : '/login',
        component : () => import('@/pages/common/LoginPage.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;