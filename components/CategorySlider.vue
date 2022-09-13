<template>
  <div class="w-100 px-2 py-2">
      <h2 class="text-heading-1 pb-5 px-0">Category</h2>
    <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide>
         <div class="bg-gray w-100 h-[50px]"></div>
    </swiper-slide>
     <swiper-slide>
         <div class="bg-gray w-100 h-[50px]"></div>
    </swiper-slide>
     <swiper-slide>
         <div class="bg-gray w-100 h-[50px]"></div>
    </swiper-slide>
     <swiper-slide>
         <div class="bg-gray w-100 h-[50px]"></div>
    </swiper-slide>
     <swiper-slide>
         <div class="bg-gray w-100 h-[50px]"></div>
    </swiper-slide>
     <swiper-slide>
         <div class="bg-gray w-100 h-[50px]"></div>
    </swiper-slide>
     <swiper-slide>
         <div class="bg-gray w-100 h-[50px]"></div>
    </swiper-slide>
     <swiper-slide>
         <div class="bg-gray w-100 h-[50px]"></div>
    </swiper-slide>
     <swiper-slide>
         <div class="bg-gray w-100 h-[50px]"></div>
    </swiper-slide>
     <swiper-slide>
         <div class="bg-gray w-100 h-[50px]"></div>
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
    slidesPerView: 4.5,
    slidesPerColumn: 2,
    spaceBetween: 30,
    slidesPerColumnFill: 'row',
    })
    return {
       swiperOptions,
  }
  },
  
})
</script>
<style lang="scss" scoped>
</style>
