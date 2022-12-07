<template>
    <div>
        <customer-header />
        <div class="pt-28">
            <vendor-introduction />
        </div>
        <div class="w-full mt-8 px-16 t flex items-center justify-center">
            <nav class="flex items-center">
                <span
                    :class="[currentTab === 'list-court' ? ['border-b-2', 'border-red-500', 'cursor-default'] : 'cursor-pointer']"
                    @click="setCurrentTab('list-court','list-court-of-vendor')" class="text-base font-medium mr-4 pb-2">Danh Sách Sân</span>
                <span
                    :class="[currentTab === 'list-rating' ? ['border-b-2', 'border-red-500', 'cursor-default'] : 'cursor-pointer']"
                    @click="setCurrentTab('list-rating','list-rating-of-vendor')" class="text-base font-medium pb-2">Đánh Giá</span>
            </nav>
        </div>
        <div class="container-fluid mt-8 px-16 w-full">
            <component :is="currentComponent" />
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import ListCourtOfVendor from '@/components/court/ListCourtOfVendor.vue';

const CustomerHeader = defineAsyncComponent(() => import('@/components/layout/customer/CustomerHeader.vue'))
const CustomerFooter = defineAsyncComponent(() => import('@/components/layout/customer/CustomerFooter.vue'))

const VendorIntroduction = defineAsyncComponent(() => import('@/components/vendor/VendorIntroduction.vue'))


export default {
    components: {
        CustomerHeader,
        CustomerFooter,
        VendorIntroduction,
        ListCourtOfVendor
    },
    data() {
        return {
            currentTab: 'list-court',
            currentComponent : 'list-court-of-vendor'
        }
    },
    methods: {
        setCurrentTab(tab,component) {
            this.currentTab = tab;
            this.currentComponent = component;
        }
    }
}
</script>

<style>

</style>