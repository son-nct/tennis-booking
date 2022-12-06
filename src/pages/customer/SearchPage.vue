<template>
    <div>
        <customer-header />

        <!--Search Result-->
        <div class="container pl-10 2xl:pt-32">
            <div class="container px-20 py-4">
                <span class="text-base my-4 block">
                    <router-link to="/home">Trang Chủ</router-link> / <span>Kết Quả Tìm Kiếm</span>
                </span>
                <h2 class="text-2xl font-semibold">25 Kết Quả Cho "123"</h2>
            </div>
        </div>

        <!--filter-->
        <div class="container-fluid bg-[#F7F7F7] h-auto mt-2 px-24">
            <div class="container grid grid-cols-8 gap-4 h-full">
                <div class="col-span-2 pt-8">
                    <div class="flex items-center">
                        <Icon icon="material-symbols:filter-alt-outline" class="w- h-6 cursor-pointer" />
                        <span class="text-lg font-semibold text-[#404040]">Lọc</span>

                    </div>
                    <div class="border-b-2 mt-2"> </div>

                    <div class="mt-4">
                        <div class="flex items-center justify-between">
                            <span class="font-medium">Đánh Giá</span>
                            <Icon icon="ic:round-plus" class="w-4 h-4 text-gray-600 cursor-pointer" />
                        </div>
                        <div class="pl-6 pt-4">
                            <ul>
                                <li class="flex items-center mb-2">
                                    <input type="checkbox" class="mr-2 mt-1 w-8 h-4 cursor-pointer" />
                                    <div class="flex items-center">
                                        <Icon icon="material-symbols:star-rounded"
                                            class="w-5 h-5 text-yellow-600 text-sm" />
                                        <Icon icon="material-symbols:star-rounded"
                                            class="w-5 h-5 text-yellow-600 text-sm" />
                                        <Icon icon="material-symbols:star-rounded"
                                            class="w-5 h-5 text-yellow-600 text-sm" />
                                        <Icon icon="material-symbols:star-rounded"
                                            class="w-5 h-5 text-yellow-600 text-sm" />
                                        <Icon icon="material-symbols:star-rounded"
                                            class="w-5 h-5 text-yellow-600 text-sm" />
                                        <span class="text-sm text-gray-600 ml-2 pt-1">( 15 )</span>
                                    </div>
                                </li>
                                <li class="flex items-center mb-2">
                                    <input type="checkbox" class="mr-2 mt-1 w-8 h-4 cursor-pointer" />
                                    <div class="flex items-center">
                                        <Icon icon="material-symbols:star-rounded"
                                            class="w-5 h-5 text-yellow-600 text-sm" />
                                        <Icon icon="material-symbols:star-rounded"
                                            class="w-5 h-5 text-yellow-600 text-sm" />
                                        <Icon icon="material-symbols:star-rounded"
                                            class="w-5 h-5 text-yellow-600 text-sm" />

                                        <Icon icon="material-symbols:star-rounded"
                                            class="w-5 h-5 text-yellow-600 text-sm" />
                                        <span class="text-sm text-gray-600 ml-2 pt-1">( 30 )</span>
                                    </div>
                                </li>

                                <li class="flex items-center mb-2">
                                    <input type="checkbox" class="mr-2 mt-1 w-8 h-4 cursor-pointer" />
                                    <div class="flex items-center">
                                        <Icon icon="material-symbols:star-rounded"
                                            class="w-5 h-5 text-yellow-600 text-sm" />
                                        <Icon icon="material-symbols:star-rounded"
                                            class="w-5 h-5 text-yellow-600 text-sm" />

                                        <Icon icon="material-symbols:star-rounded"
                                            class="w-5 h-5 text-yellow-600 text-sm" />
                                        <span class="text-sm text-gray-600 ml-2 pt-1">( 45 )</span>
                                    </div>
                                </li>

                                <li class="flex items-center mb-2">
                                    <input type="checkbox" class="mr-2 mt-1 w-8 h-4 cursor-pointer" />
                                    <div class="flex items-center">
                                        <Icon icon="material-symbols:star-rounded"
                                            class="w-5 h-5 text-yellow-600 text-sm" />
                                        <Icon icon="material-symbols:star-rounded"
                                            class="w-5 h-5 text-yellow-600 text-sm" />
                                        <span class="text-sm text-gray-600 ml-2 pt-1">( 30 )</span>
                                    </div>
                                </li>

                                <li class="flex items-center mb-2">
                                    <input type="checkbox" class="mr-2 mt-1 w-8 h-4 cursor-pointer" />
                                    <div class="flex items-center">
                                        <Icon icon="material-symbols:star-rounded"
                                            class="w-5 h-5 text-yellow-600 text-sm" />
                                        <span class="text-sm text-gray-600 ml-2 pt-1">( 30 )</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="mt-8">
                        <div class="flex items-center justify-between">
                            <span class="font-medium">Giá</span>
                            <Icon icon="ic:round-plus" class="w-4 h-4 text-gray-600 cursor-pointer" />
                        </div>
                        <div class="pl-6 pt-4">
                            <ul>
                                <li class="flex items-center mb-2">
                                    <input type="checkbox" class="mr-2 mt-1 w-8 h-4 cursor-pointer" />
                                    <span> Từ 100.000 VNĐ Đến 250.000 VNĐ</span>
                                   
                                </li>
                                <li class="flex items-center mb-2">
                                    <input type="checkbox" class="mr-2 mt-1 w-8 h-4 cursor-pointer" />
                                    <span>Từ 250.000 VNĐ Đến 350.000 VNĐ</span>
                                   
                                </li>
                                <li class="flex items-center mb-2">
                                    <input type="checkbox" class="mr-2 mt-1 w-8 h-4 cursor-pointer" />
                                    <span>Trên 350.000 VNĐ</span>
                                   
                                </li>
                            </ul>
                        </div>

                        
                    </div>

                    <div class="mt-8">
                        <div class="flex items-center justify-between">
                            <span class="font-medium">Loại Sân</span>
                            <Icon icon="ic:round-plus" class="w-4 h-4 text-gray-600 cursor-pointer" />
                        </div>
                        <div class="pl-6 pt-4">
                            <ul>
                                <li class="flex items-center mb-2">
                                    <input type="checkbox" class="mr-2 mt-1 w-8 h-4 cursor-pointer" />
                                    <span> Sân Đất Nện</span>
                                   
                                </li>
                                <li class="flex items-center mb-2">
                                    <input type="checkbox" class="mr-2 mt-1 w-8 h-4 cursor-pointer" />
                                    <span>Sân Cỏ</span>
                                   
                                </li>
                                <li class="flex items-center mb-2">
                                    <input type="checkbox" class="mr-2 mt-1 w-8 h-4 cursor-pointer" />
                                    <span>Sân Cứng</span>
                                   
                                </li>
                            </ul>
                        </div>

                        
                    </div>
                </div>
                <div class="col-span-6  pt-8 px-10">1</div>

            </div>
        </div>


    </div>
</template>

<script>
import { Icon } from '@iconify/vue'
import { defineAsyncComponent } from 'vue';
const CustomerHeader = defineAsyncComponent(() => import('@/components/layout/customer/CustomerHeader.vue'))

export default {
    components: {
        Icon,
        CustomerHeader
    }
}
</script>

<style>

</style>