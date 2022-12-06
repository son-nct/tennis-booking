<template>
    <div class="w-full px-12 pt-12 bg-gray-700">
      <div class="container mx-auto">
        <section class="pb-8 w-full">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="col-span-2 tracking-tighter">
              <div>
                <div class="my-2">
                  <h1 class="text-3xl uppercase text-white text-left">
                    Logo Here
                  </h1>
                </div>
                <ul class="list-none text-base text-gray-400 pt-4">
                  <li class="flex items-center justify-start mb-4">
                    <Icon
                      icon="carbon:phone"
                      class="w-6 h-6 text-yellow-500 mr-4"
                    />
                    <span>0985 151 689</span>
                  </li>
                  <li
                    class="flex items-center justify-start mb-4 tracking-tighter"
                  >
                    <Icon
                      icon="akar-icons:location"
                      class="w-6 h-6 text-yellow-500 mr-4 shrink-0"
                    />
                    <span
                      >Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, <br />
                      Thành Phố Thủ Đức, Thành phố Hồ Chí Minh 700000</span
                    >
                  </li>
                  <li class="flex items-center justify-start mb-4">
                    <Icon
                      icon="ant-design:mail-outlined"
                      class="w-6 h-6 text-yellow-500 mr-4"
                    />
                    <span>learninglab@gmail.com</span>
                  </li>
                  <li class="flex items-center justify-start mb-">
                    <div class="flex items-center">
                      <a
                        class="text-gray-400 hover:text-blue-600 duration-200 mr-2"
                        href="http://facebook.com/"
                      >
                        <Icon icon="akar-icons:facebook-fill" class="w-6 h-6" />
                      </a>
                      <a
                        class="text-gray-400 hover:text-blue-600 duration-200 mr-2 pt-0.5"
                        href="http://facebook.com/"
                      >
                        <Icon icon="akar-icons:instagram-fill" class="w-6 h-6" />
                      </a>
                      <a
                        class="text-gray-400 hover:text-blue-600 duration-200 pt-0.5"
                        href="http://facebook.com/"
                      >
                        <Icon icon="akar-icons:twitter-fill" class="w-6 h-6" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-span-1 tracking-tighter">
              <div>
                <div class="my-2">
                  <h4 class="uppercase text-white text-left">Về Learning Lab</h4>
                </div>
                <ul class="list-none text-base text-gray-400 pt-4">
                  <li class="flex items-center justify-start mb-4">
                    <span>Giới thiệu về Learning Lab</span>
                  </li>
                  <li class="flex items-center justify-start mb-4">
                    <span>Câu hỏi thường gặp</span>
                  </li>
                  <li class="flex items-center justify-start mb-4">
                    <span>Điều khoản dịch vụ</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-span-1 tracking-tighter">
              <div>
                <div class="my-2">
                  <h4 class="uppercase text-white text-left">Hợp tác liên kết</h4>
                </div>
                <ul class="list-none text-base text-gray-400 pt-4">
                  <li class="flex items-center justify-start mb-4">
                    <span>Đăng ký giảng viên</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="mt-8 h-1/2 opacity-50" />
          <div class="block md:flex items-center justify-between pt-8">
            <p class="text-base shrink text-gray-400 track-tighter">
              Nền Tảng Học Trực Tuyến Learning Lab
            </p>
            <p class="text-base text-gray-400 track-tighter">
              @2022 Learning Lab, Inc
            </p>
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "TheFooter",
  };
  </script>
  