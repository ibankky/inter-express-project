<template>
  <div  class="bg-gray-2 bg-opacity-20 h-full w-full relative pb-[20px]">
     <HeaderDefault :title="'เลือก Service ขนส่ง'"></HeaderDefault>
     <div class="container px-[15px] mt-[20px] ">
      
       <div
          class="flex w-full bg-blue border-none text-white text-center justify-center items-center h-[48px] mb-[20px] rounded-[6px] mt-[100px]"
        >
          <span class="text-[16px]">ถัดไป</span>
        </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent, useContext } from 'vue'
  export default defineComponent({
    setup() {
      return {
      }
    }
  })
</script>
