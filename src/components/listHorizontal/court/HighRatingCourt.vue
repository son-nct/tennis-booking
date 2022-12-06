<template>
    <div class="flex justify-center">
        <div
            class="relative rounded-lg shadow-lg bg-white max-w-sm min-w-[320px] w-52 h-[450px] overflow-hidden my-1 mx-8 mr-4 cursor-pointer border">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img class="rounded-t-lg w-full h-52 object-cover"
                    src="https://i.ibb.co/cCBcJ9s/san-tennis-dat-nen-2.jpg"
                    alt="" />
            </a>
            <div class="p-4">
                <div class="flex items-center">
                    <Icon icon="icon-park-outline:court" class="w-7 h-7 text-gray-600 text-sm mr-2" />
                    <h3 class="text-gray-900 text-xl font-medium mb-1">Sân Đất Nện 2A </h3>
                </div>

                <div class="flex items-center mb-3">
                    <Icon icon="material-symbols:star-rounded" class="w-5 h-5 text-yellow-600 text-sm" />
                    <Icon icon="material-symbols:star-rounded" class="w-5 h-5 text-yellow-600 text-sm" />
                    <Icon icon="material-symbols:star-rounded" class="w-5 h-5 text-yellow-600 text-sm" />
                    <Icon icon="material-symbols:star-rounded" class="w-5 h-5 text-yellow-600 text-sm" />
                    <Icon icon="material-symbols:star-rounded" class="w-5 h-5 text-yellow-600 text-sm" />

                    <span class="text-sm text-gray-600">(200 lượt đánh giá)</span>
                </div>

              

                <div class="flex items-center mb-2">
                    <Icon icon="ic:sharp-access-time" class="w-5 h-5 text-gray-600 text-sm" />
                    <span class="text-sm text-gray-600 ml-2">8:00 - 22:00</span>
                </div>

                <div class="flex items-center mb-2">
                    <Icon icon="game-icons:tennis-court" class="w-5 h-5 text-gray-600 text-sm" />
                    <span class="text-sm text-gray-600 ml-2">Sân Đất Nện</span>
                </div>

                <div class="flex items-center mb-2">
                    <Icon icon="material-symbols:location-on-outline-rounded" class="w-5 h-5 text-gray-600 text-sm" />
                    <span class="text-sm text-gray-600 ml-2">18D Cộng Hòa, Tân Bình, TPHCM.</span>
                </div>

                <div class="flex items-center mb-2">
                    <Icon icon="material-symbols:attach-money" class="w-5 h-5 text-gray-600 text-sm" />
                    <span class="text-sm text-gray-600 ml-2">150.000 VNĐ - 350.000 VNĐ</span>
                </div>

             

            </div>

            <div class="flex items-center text-base justify-end px-4 cursor-pointer">
                <span class="text-gray-600 mx-1">Xem Cửa Hàng</span>
                <Icon icon="material-symbols:arrow-forward-rounded" class="w-5 h-5 text-gray-600 text-sm" />
            </div>
        </div>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue'
export default {
    components: {
        Icon,
    }
}
</script>

<style>

</style>