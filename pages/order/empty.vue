<template>
  <div>
     <HeaderWithOrderMenu :title="'คำสั่งซื่อ'"></HeaderWithOrderMenu>
     <div class="container px-[15px]">
        <div class="flex justify-center w-3/4 mx-auto mt-[150px]">
          <img src="/icons/box.svg" class="w-[100px]">
        </div>
        <div class="flex mb-10 mt-2 justify-center w-3/4 mx-auto">
          <p class="text-gray text-center ">คุณยังไม่มีคำสั่งซื้อ</p>
        </div>
        
     </div>  
    <share-mobile-menu></share-mobile-menu>
  </div>
</template>
<script>
  import { defineComponent, ref ,useContext } from 'vue'
  export default defineComponent({
    setup() {
      
    }
  })
</script>

