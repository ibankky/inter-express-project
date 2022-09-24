<template>
  <div class="bg-gray-2 bg-opacity-20 h-full w-full relative">
    <HeaderDefault :title="'ตั้งค่ารหัสผ่านใหม่'"></HeaderDefault>
    <div class="container px-[15px]">
      <div class=" bg-white rounded-[6px] px-2 py-2">
         <input type='text'  placeholder="รหัสผ่านที่ได้รับ" class=" form-control w-full   border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"/>
         <input type='password'  placeholder="รหัสผ่านใหม่" class= "form-control w-full  border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"/>
         <input type='password'  placeholder="ยืนยันรหัสผ่านใหม่" class=" form-control w-full  border-0  bg-white py-4 focus:ring-0 focus:border-gray"/>
      </div>
     <div class="flex">
        <div class="pt-[17px]  w-full text-right">
          <span class="text-gray-3">ยังไม่ได้รับรหัสผ่านชั่วคราว?</span>
           <nuxt-link :to="'/request-password'">
          <span class="text-blue pl-1">ส่งอีกครั้ง</span>
           </nuxt-link>
        </div>
      </div>
       <div class="mt-[17px]">
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
