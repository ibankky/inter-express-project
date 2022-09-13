<template>
  <div class="bg-gray-2 bg-opacity-20 h-screen w-full relative">
    <HeaderDefault></HeaderDefault>
    <div class="container px-[15px]">
      <div class=" bg-white rounded-[6px] px-2 py-2">
         <input type='text'  placeholder="เบอร์โทรศัพท์" class="w-full   border-0 border-b border-gray bg-white py-[20px] focus:ring-0 focus:border-gray"/>
         <input type='password'  placeholder="รหัสผ่าน" class="w-full bg-white py-[20px] border-none border-t border-gray focus:ring-0"/>
      </div>
      <div class="flex justify-end">
        <div class="pt-[17px]">
          <span class="text-blue">ลืมรหัสผ่าน</span>
        </div>
      </div>
      <div class="mt-[250px]">
        <div class="flex w-full bg-blue border-none text-white  text-center justify-center items-center h-[48px] mb-[10px] rounded-[6px]">
            <span class="text-[16px]">เข้าสู่ระบบ</span>
        </div>
         <div class="relative flex py-2 items-center mb-[10px]">
    <div class="flex-grow border-t border-gray"></div>
    <span class="flex-shrink mx-4 text-gray-400">หรือ</span>
    <div class="flex-grow border-t border-gray"></div>
</div>
         <div class="flex w-full bg-blue border-none text-white  text-center justify-center items-center h-[48px] mb-[10px] rounded-[6px]">
            <span class="text-[16px]">เข้าสู่ระบบ</span>
        </div>
         <div class="flex w-full bg-blue border-none text-white  text-center justify-center items-center h-[48px] mb-[10px] rounded-[6px]">
            <span class="text-[16px]">เข้าสู่ระบบ</span>
        </div>
         <div class="flex w-full bg-blue border-none text-white  text-center justify-center items-center h-[48px] mb-[10px] rounded-[6px]">
            <span class="text-[16px]">เข้าสู่ระบบ</span>
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
