<template>
  <div>
     <HeaderDefault :title="'สร้างร้านค้า'"></HeaderDefault>
     <div class="container px-[15px]">
        <div class="flex justify-center w-3/4 mx-auto mt-[150px]">
          <img src="icons/store.png" class="w-[100px]">
        </div>
        <div class="flex my-10 justify-center w-3/4 mx-auto">
          <p class="text-gray text-center ">คุณยังไม่มีร้านค้า <br/> สร้างร้านง่ายๆ แล้วเริ่มขายเลย</p>
        </div>
        <div class="flex justify-center w-3/4 mx-auto">
          <button type="button" class="flex w-full bg-blue border-none text-white  text-center justify-center items-center h-[48px] mb-[10px] rounded-[6px]"
            @click="showModalShop()">
              <span class="text-[16px]">สร้างร้าน</span>
          </button>
        </div>
        <div class="flex items-center justify-center w-full mb-12 mt-12">
  
  <label for="toggleB" class="flex items-center cursor-pointer">
    <!-- toggle -->
    <div class="relative">
      <!-- input -->
      <input type="checkbox" id="toggleB" class="sr-only">
      <!-- line -->
      <div class="block bg-gray w-14 h-8 rounded-full"></div>
      <!-- dot -->
      <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
    </div>
    <!-- label -->
    <div class="ml-3 text-gray-700 font-medium">
      Toggle Me!
    </div>
  </label>

</div>
     </div>  
    <share-mobile-menu></share-mobile-menu>
    <createshop-modal v-if="showModal" @close-modal="showModal = false"></createshop-modal>
  </div>
</template>
<script>
  import { defineComponent, ref ,useContext } from 'vue'
import CreateshopModal from '../components/modal/CreateshopModal.vue'
  export default defineComponent({
  components: { CreateshopModal },
    setup() {
      const showModal = ref(false)
       function showModalShop(){
          console.log('showModalShop')
          showModal.value = true
          console.log(showModal.value)
      }
      return {
        showModalShop,
        
        showModal
        
      }
    }
  })
</script>
<style lang="css" scoped>
/* Toggle B */
input:checked ~ .dot {
  transform: translateX(100%);
  background-color: #48bb78;
}
</style>
