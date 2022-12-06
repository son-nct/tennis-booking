import {createRouter , createWebHistory} from 'vue-router'

const routes = [
    {
        name : 'login-page',
        path : '/login',
        component : () => import('@/pages/common/LoginPage.vue')
    },
    /* customer */
    {
        name : 'home-page',
        path : '/home',
        component : () => import('@/pages/customer/HomePage.vue')
    },
    {
        name : 'search-vendor-page',
        path : '/vendor/:search',
        component : () => import('@/pages/customer/SearchPage.vue'),
        props:true
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;