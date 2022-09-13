<template>
  <div class="relative p-2">
      <h2 class="text-heading-1 pb-5 px-0">Promotion</h2> 
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
          <div class="bg-gray w-100 h-[100px]"></div>
      </swiper-slide>
       <swiper-slide>
          <div class="bg-gray w-100 h-[100px]"></div>
      </swiper-slide>
       <swiper-slide>
          <div class="bg-gray w-100 h-[100px]"></div>
      </swiper-slide>
       
    </swiper>
  </div>
</template>
<script>
import { defineComponent , ref } from 'vue'
export default defineComponent({
    props: {
    },
  setup() {
      const swiperOptions = ref({
      loop: false,
      slidesPerView: 1.5,
      spaceBetween: 30,
      autoplay: {
        delay: 10000,
      },
    })
    return {
       swiperOptions,
  }
  },
  
})
</script>
