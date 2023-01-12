<template>
  <div class="bg-gray-2 bg-opacity-20 h-full w-full relative  min-h-screen">
    <HeaderDefault :title="'ขอรหัสผ่านชั่วคราว'"></HeaderDefault>
    <div class="container px-[15px] min-h-[90vh] mt-4">
      <div class="bg-white">
       <div class="text-black flex border-0 px-2">
          <div class="w-1/3 flex items-center">
            <label for="forms-RequstTel">เบอร์โทรศัพท์</label>
          </div>
          <div class="w-2/3 flex-grow">
            <input class="w-full border-0  bg-white py-4 focus:ring-0 focus:border-gray text-right" type="text" placeholder="eg.0812345678" id="forms-RequstTel"/>
          </div>
        </div>
      </div>  
      <div class="flex">
        <div class="pt-[17px]  w-full text-center">
          <span class="text-gray-3">รหัสผ่านชั่วคราวจะถูกส่งไปยังเบอร์โทรศัพท์ของคุณ</span>
        </div>
      </div>
     <div class="sticky top-[100vh] mb-4">
       <nuxt-link :to="'/otp'">
        <div class="flex w-full bg-blue border-none text-white  text-center justify-center items-center h-[48px] mb-[10px] rounded-[6px]">
            <span class="text-[16px]">ขอรหัสผ่านชั่วคราว</span>
        </div>
       </nuxt-link>
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
