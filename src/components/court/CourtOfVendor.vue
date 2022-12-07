<template>
    <div class="vendor-item w-9/12 flex items-center bg-white cursor-pointer rounded shadow mb-10 duration-300 ease-in">
        <div class="p-2">
            <img src="https://i.ibb.co/cCBcJ9s/san-tennis-dat-nen-2.jpg"
                class="w-72 h-42 object-cover rounded" alt="ảnh cửa hàng tennis" />
        </div>
        <div class="pl-4 pt-2 flex flex-col justify-between items-start -mt-10">
            <div class="flex items-center">
                <Icon icon="icon-park-outline:court" class="w-7 h-7 text-gray-600 text-base mr-2" />
                <h3 class="font-bold text-lg">Sân Đất Nện 1A</h3>
            </div>
            <div class="flex items-center my-2">
                <span class="px-1 text-gray-600 text-sm">5.0</span>
                <div class="flex items-center">
                    <Icon icon="material-symbols:star-rounded" class="w-5 h-5 text-yellow-600 text-base" />
                    <Icon icon="material-symbols:star-rounded" class="w-5 h-5 text-yellow-600 text-base" />
                    <Icon icon="material-symbols:star-rounded" class="w-5 h-5 text-yellow-600 text-base" />
                    <Icon icon="material-symbols:star-rounded" class="w-5 h-5 text-yellow-600 text-base" />
                    <Icon icon="material-symbols:star-rounded" class="w-5 h-5 text-yellow-600 text-base" />

                    <span class="text-base text-gray-600 ml-1">(10 đánh giá)</span>
                </div>
            </div>


            <div class="flex items-center mb-3 mt-1">
                <Icon icon="game-icons:tennis-court" class="w-5 h-5 text-gray-600 text-base" />
                <span class="text-sm text-gray-600 ml-2">Sân Đất Nện</span>
            </div>

            <div class="flex items-center mb-3">
                <Icon icon="nimbus:size-height" class="w-5 h-5 text-gray-600 text-base" />
                <span class="text-sm text-gray-600 ml-2">40m x 20m</span>
            </div>

            <div class="flex items-center mb-3">
                <Icon icon="ic:twotone-photo-size-select-small" class="w-5 h-5 text-gray-600 text-base" />
                <span class="text-sm text-gray-600 ml-2">Kích Thước Lớn</span>
            </div>
            
            <div class="flex items-center justify-end">
                <button class="px-4 py-2 rounded bg-[#027B2D] hover:bg-[#199c47] duration-200 mr-4 text-white">Đặt Sân</button>
                <button class="px-4 py-2 rounded bg-yellow-700 hover:bg-yellow-900 duration-200 mr-4 text-white">Xem Đánh Giá</button>
            </div>

        </div>
    </div>
</template>

<style scoped>
.vendor-item:hover {
    animation: focusItem .2s ease-in-out both;
}

@keyframes focusItem {
    from {
        transform: translateY(0);
    }

    to {
        transform: translateY(-5px);
    }
}
</style>

<script>
import { Icon } from '@iconify/vue'
export default {
    components: {
        Icon,
    }
}
</script>