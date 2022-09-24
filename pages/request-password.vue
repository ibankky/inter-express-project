<template>
  <div class="bg-gray-2 bg-opacity-20 h-full w-full relative">
    <HeaderDefault :title="'ขอรหัสผ่านชั่วคราว'"></HeaderDefault>
    <div class="container px-[15px]">
      <div class=" bg-white rounded-[6px] px-2 py-2">
         <input type='text'  placeholder="เบอร์โทรศัพท์" class="w-full   border-0 bg-white py-4 focus:ring-0 focus:border-gray"/>
      </div>
      <div class="flex">
        <div class="pt-[17px]  w-full text-center">
          <span class="text-gray-3">รหัสผ่านชั่วคราวจะถูกส่งไปยังเบอร์โทรศัพท์ของคุณ</span>
        </div>
      </div>
     <div class="mt-[17px]">
        <div class="flex w-full bg-blue border-none text-white  text-center justify-center items-center h-[48px] mb-[10px] rounded-[6px]">
            <span class="text-[16px]">ขอรหัสผ่านชั่วคราว</span>
        </div>
     </div>
      
    </div>
  </div>
</template>
<script>
  import { ref} from 'vue'
  export default {
    setup() {
      
    }
  }
</script>
