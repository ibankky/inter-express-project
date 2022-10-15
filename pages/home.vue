<template>
  <div>
    <div class="container bg-light-blue h-[180px] relative">
      <div class="flex py-10 px-4 items-center">
        <div class="w-1/5">
          <div class="bg-gray rounded-[6px] px-2 py-2">
            <img src="/icons/avatar-icon.svg" alt="" class="w-full" />
          </div>
        </div>
        <div class="w-4/5 pl-6">
          <h1 class="text-title">ชื่อร้าน</h1>
          <p class="text-gray-3">ย่านกิ่งแก้ว</p>
        </div>
      </div>
    </div>
    <div class="container bg-gray-2 bg-opacity-20 py-10 h-full px-[15px] mb-[70px]">
      <div class="flex justify-center">
        <div class="block p-4 rounded-lg shadow-lg bg-white w-full">
          <h5 class="text-gray mb-4">สถานะคำสั่งซื้อ</h5>
          <div class="flex justify-center items-center">
            <div class="w-1/4">
              <p class="text-small">ที่ต้องเรียกเก็บ</p>
            </div>
            <div class="w-1/4">
              <p class="text-small">ที่ต้องเรียกเก็บ</p>
            </div>
            <div class="w-1/4">
              <p class="text-small">ที่ต้องเรียกเก็บ</p>
            </div>
            <div class="w-1/4">
              <p class="text-small">ที่ต้องเรียกเก็บ</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-4">
        <div class="block p-4 rounded-lg shadow-lg bg-white w-full">
          <h5 class="text-gray mb-4">ยอดขายรายสัปดาห์</h5>
          <div class="flex justify-center items-center">
            <div class="w-1/4">
              <p class="text-small">ที่ต้องเรียกเก็บ</p>
            </div>
            <div class="w-1/4">
              <p class="text-small">ที่ต้องเรียกเก็บ</p>
            </div>
            <div class="w-1/4">
              <p class="text-small">ที่ต้องเรียกเก็บ</p>
            </div>
            <div class="w-1/4">
              <p class="text-small">ที่ต้องเรียกเก็บ</p>
            </div>
          </div>
        </div>
      </div>
       <h5 class="mb-4 mt-4">สินค้าขายดีประจำสัปดาห์</h5>
       <div class="flex justify-center mt-4">
           <div class="block p-4 rounded-lg shadow-lg bg-white w-full">
                <div class="flex items-top">
                    <div class="w-1/12">
                        1.
                    </div>
                    <div class="w-3/12">
                         <img src="/images/item-demo.png" alt="" class="w-full" />
                    </div>
                    <div class="8/12 pl-2">
                       <p> Lorem ipsum dolor consecteturism adipiscing</p>
                       <p class="text-blue">฿199</p>
                    </div>
                </div>
                <div class="flex justify-end">
                    <div class="text-gray text-small-2">
                        ขายแล้ว 85
                    </div>
                </div>    
           </div>
       </div>    
       <div class="flex justify-center mt-4">
           <div class="block p-4 rounded-lg shadow-lg bg-white w-full">
                <div class="flex items-top">
                    <div class="w-1/12">
                        2.
                    </div>
                    <div class="w-3/12">
                         <img src="/images/item-demo.png" alt="" class="w-full" />
                    </div>
                    <div class="8/12 pl-2">
                       <p> Lorem ipsum dolor consecteturism adipiscing</p>
                       <p class="text-blue">฿199</p>
                    </div>
                </div>
                <div class="flex justify-end">
                    <div class="text-gray text-small-2">
                        ขายแล้ว 85
                    </div>
                </div>    
           </div>
       </div> 
       <div class="flex justify-center mt-4">
           <div class="block p-4 rounded-lg shadow-lg bg-white w-full">
                <div class="flex items-top">
                    <div class="w-1/12">
                        3.
                    </div>
                    <div class="w-3/12">
                         <img src="/images/item-demo.png" alt="" class="w-full" />
                    </div>
                    <div class="8/12 pl-2">
                       <p> Lorem ipsum dolor consecteturism adipiscing</p>
                       <p class="text-blue">฿199</p>
                    </div>
                </div>
                <div class="flex justify-end">
                    <div class="text-gray text-small-2">
                        ขายแล้ว 85
                    </div>
                </div>    
           </div>
       </div>    
    </div>
    <share-mobile-menu></share-mobile-menu>
  </div>
</template>
<script>
import { defineComponent, useContext } from "vue";
import CreateshopModal from "../components/modal/CreateshopModal.vue";
export default defineComponent({
  components: { CreateshopModal },
  setup() {
  },
});
</script>
