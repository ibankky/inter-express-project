<template>
  <div>
    <HeaderOrder :title="'พิมพ์ลาเบล'"></HeaderOrder>
    <div class="container bg-gray-2 bg-opacity-20"> 
      <div class="modal-overlay w-full h-[95vh]">
        <div class="mx-4 mt-10">
          <img src="/images/label-demo.png">
        </div>
        
      </div>
      
    </div>
    <div class="fixed bottom-0 w-full shadow-lg py-2">
    <div class="flex px-2">
      
      <div class="w-full">
           <button type="button" class="flex w-full bg-blue border-none text-white  text-center justify-center items-center h-[48px] mb-[10px] rounded-[6px]"
           @click="backtoOrder()">
                <span class="text-[16px]">เสร็จสิ้น</span>
           </button>
      </div>
    </div>
  </div>
    
  </div>
</template>
<script>
import { defineComponent, ref, useContext } from "vue";
export default defineComponent({
  components: {},
  setup() {
    function backtoOrder (){
        this.$router.push('/order')
    }
    return {
      backtoOrder
    };
  },
});
</script>
<style scoped>
.modal-overlay {
  display: flex;
  justify-content: center;
  background-color: #000000da;
  z-index: 10;
}

</style>
