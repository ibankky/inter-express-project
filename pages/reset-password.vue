<template>
  <div class="bg-gray-2 bg-opacity-20 h-full w-full relative  min-h-screen">
    <HeaderDefault :title="'ตั้งค่ารหัสผ่านใหม่'"></HeaderDefault>
    <div class="container px-[15px] min-h-[90vh] mt-4">
      <div class=" bg-white rounded-[6px] px-2 py-2">
         <div class="text-black flex border-0 border-b border-gray px-2">
          <div class="w-1/3 flex items-center">
            <label for="forms-resetPassword">รหัสผ่านที่ได้รับ</label>
          </div>
          <div class="w-2/3 flex-grow">
            <input class="w-full border-0  bg-white py-4 focus:ring-0 focus:border-gray text-right" type="text" placeholder="" id="forms-resetPassword"/>
          </div>
        </div>
        <div class="text-black flex border-0 border-b border-gray px-2">
          <div class="w-1/3 flex items-center">
            <label for="forms-resetPasswordNew">รหัสผ่านใหม่</label>
          </div>
          <div class="w-2/3 flex-grow">
            <input class="w-full border-0  bg-white py-4 focus:ring-0 focus:border-gray text-right" type="text" placeholder="" id="forms-resetPasswordNew"/>
          </div>
        </div>
        <div class="text-black flex border-0 border-b border-gray px-2">
          <div class="w-1/3 flex items-center">
            <label for="forms-resetPasswordConfirm">ยืนยันรหัสผ่านใหม่</label>
          </div>
          <div class="w-2/3 flex-grow">
            <input class="w-full border-0  bg-white py-4 focus:ring-0 focus:border-gray text-right" type="text" placeholder="" id="forms-resetPasswordConfirm"/>
          </div>
        </div>
         
      </div>
     <div class="flex">
        <div class="pt-[17px]  w-full text-right">
          <span class="text-gray-3">ยังไม่ได้รับรหัสผ่านชั่วคราว?</span>
           <nuxt-link :to="'/request-password'">
          <span class="text-blue pl-1">ส่งอีกครั้ง</span>
           </nuxt-link>
        </div>
      </div>
       <div class="sticky top-[100vh] mb-4">
        <div class="flex w-full bg-blue border-none text-white  text-center justify-center items-center h-[48px] mb-[10px] rounded-[6px]">
            <span class="text-[16px]">ตั้งค่ารหัสผ่านใหม่</span>
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
