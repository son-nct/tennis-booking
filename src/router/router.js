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
        path : '/vendor/search/:search',
        component : () => import('@/pages/customer/SearchPage.vue'),
        props:true
    },
    {
        name : 'vendor-detail-page',
        path : '/vendor/:vendorId',
        component : () => import('@/pages/customer/VendorDetailPage.vue'),
        props:true
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
        if(savedPosition) {
            return savedPosition;
        }else {
            return {
                top : 0,
                left : 0,
            }
        }
    }
});


export default router;