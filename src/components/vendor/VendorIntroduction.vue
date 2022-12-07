<template>
    <div class="container-fluid px-16 bg-[#333] h-96  mx-auto shadow">
        <div class="grid grid-cols-8 gap-4 h-full pt-10">
            <div class="col-span-3">
                <div class="w-full h-72 rounded bg-white p-3">
                    <img src="https://tennissaigon.com/wp-content/uploads/2021/08/san-tennis-quan-9.jpg"
                        class="w-full h-full object-cover rounded" alt="ảnh cửa hàng tennis" />
                </div>
            </div>
            <div class="col-span-5">
                <div class="pt-1 px-4 ">
                    <h2 class="text-2xl text-white font-semibold mb-2">Sân Tennis Trung Kiên</h2>


                    <div class="flex items-center mb-3">
                        <Icon icon="material-symbols:star-rounded" class="w-5 h-5 text-yellow-600 text-base" />
                        <Icon icon="material-symbols:star-rounded" class="w-5 h-5 text-yellow-600 text-base" />
                        <Icon icon="material-symbols:star-rounded" class="w-5 h-5 text-yellow-600 text-base" />
                        <Icon icon="material-symbols:star-rounded" class="w-5 h-5 text-yellow-600 text-base" />
                        <Icon icon="material-symbols:star-rounded" class="w-5 h-5 text-yellow-600 text-base" />

                        <span class="text-sm text-white pl-4">( 200 lượt đánh giá )</span>
                    </div>

                    <div class="flex items-center mb-3">
                        <Icon icon="ic:sharp-access-time" class="w-5 h-5 text-white text-base" />
                        <span class="text-base text-white ml-2">8:00 - 22:00</span>
                    </div>

                    <div class="flex items-center mb-3">
                        <Icon icon="material-symbols:location-on-outline-rounded"
                            class="w-5 h-5 text-white text-base" />
                        <span class="text-base text-white ml-2">18D Cộng Hòa, Tân Bình, TPHCM.</span>
                    </div>

                    <div class="flex items-center mb-3">
                        <Icon icon="material-symbols:attach-money" class="w-5 h-5 text-white text-base" />
                        <span class="text-base text-white ml-2">150.000 VNĐ - 350.000 VNĐ</span>
                    </div>

                    <div class="flex items-center mb-3 pl-1">
                        <Icon icon="ic:outline-phone" class="w-5 h-5 text-white text-base" />
                        <span class="text-base text-white ml-2">0985.151.689</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue'
export default {
    components: {
        Icon
    }
}

</script>

<style>

</style>