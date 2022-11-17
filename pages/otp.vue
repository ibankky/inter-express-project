<template>
  <div class="bg-gray-2 bg-opacity-20 h-screen w-full relative">
    <HeaderDefault :title="'ขอรหัสผ่านชั่วคราว'"></HeaderDefault>
    <div class="container px-[15px]">
      <div class="flex">
        <div class="pt-[17px]  w-full text-center">
          <span class="text-gray-3">กรุณาระบุรหัส OTP</span>
        </div>
      </div>
      <div class="flex">
        <div class="pt-[17px]  w-full text-center">
          <span class="text-gray-3">รหัส OTP ได้ถูกส่งไปยังเบอร์โทรศัพท์หมายเลข <span>081-234-5678</span>
          <br/> กรุณากรอกรหัสที่ได้รับเพื่อยืนยันตัวตน</span>
        </div>
      </div>
      <div class="flex pt-4">
          <div class=" px-4">
              <input type='num' class=" form-control w-full   border border-blue bg-white py-4 focus:ring-0 focus:border-gray rounded-[4px]"/>
          </div>
          <div class="px-4">
              <input type='num' class=" form-control w-full   border border-blue bg-white py-4 focus:ring-0 focus:border-gray rounded-[4px]"/>
          </div>
          <div class="px-4">
              <input type='num' class=" form-control w-full   border border-blue bg-white py-4 focus:ring-0 focus:border-gray rounded-[4px]"/>
          </div>
          <div class="px-4">
              <input type='num' class=" form-control w-full   border border-blue bg-white py-4 focus:ring-0 focus:border-gray rounded-[4px]"/>
          </div>
      </div>
     <div class="mt-[200px]">
       <nuxt-link :to="'/'">
        <div class="flex w-full bg-blue border-none text-white  text-center justify-center items-center h-[48px] mb-[10px] rounded-[6px]">
            <span class="text-[16px]">ยืนยัน</span>
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
