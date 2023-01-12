<template>
  <div>
     <HeaderDefault :title="'สินค้า'"></HeaderDefault>
     <div class="container px-[15px]">
        <div class="flex justify-center w-3/4 mx-auto mt-[150px]">
          <img src="/icons/box.svg" class="w-[100px]">
        </div>
        <div class="flex mb-10 mt-2 justify-center w-3/4 mx-auto">
          <p class="text-gray text-center ">คุณยังไม่มีสินค้า</p>
        </div>
        <div class="flex justify-center w-3/4 mx-auto">
          <button type="button" class="flex w-full bg-blue border-none text-white  text-center justify-center items-center h-[48px] mb-[10px] rounded-[6px]"
            @click="addProduct()"
            >
              <span class="text-[16px]">เพิ่มสินค้า</span>
          </button>
        </div>
        
     </div>  
    <share-mobile-menu></share-mobile-menu>
  </div>
</template>
<script>
  import { defineComponent, computed , ref ,useContext } from 'vue'
  export default defineComponent({
    
    setup() {
     function addProduct(){
         this.$router.push('/product/form')
      }
      return {
          addProduct
      }
  },
  })
</script>

