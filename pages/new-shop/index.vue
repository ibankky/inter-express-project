<template>
  <div  class="bg-gray-2 bg-opacity-20 h-full w-full relative pb-[20px]">
     <HeaderWithStepper :title="'สร้างร้านค้า'"></HeaderWithStepper>
     <div class="container px-[15px] mt-[20px] ">
      <div class="bg-white rounded-[6px] px-2 py-2">
        <input
          type="text"
          placeholder="ข้อมูลทั่วไป"
          class="form-control w-full border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"
        />
        <input
          type="text"
          placeholder="รหัสลูกค้า"
          class="form-control w-full border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"
        />
        <input
          type="text"
          placeholder="คำนำหน้า"
          class="form-control w-full border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"
        />
        <input
          type="text"
          placeholder="ชื่อ"
          class="form-control w-full border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"
        />
        <input
          type="text"
          placeholder="นามสกุล"
          class="form-control w-full border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"
        />
        <input
          type="text"
          placeholder="เลขประจำตัวประชาชน/พาสปอร์ต"
          class="form-control w-full border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"
        />
         <textarea
          type="text"
          rows="4"
          placeholder="ที่อยู่ตามบัตรประชาชน"
          class="form-control w-full border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"
        />
        <p class="pl-4 my-2">ภาพหน้าบัตรประชน/พาสปอร์ต</p>
          <div class="px-4 py-4">
          <label for="file-upload" class="custom-file-upload">
            <div class="w-[100px] h-[100px] border border-dashed border-blue flex items-center justify-center rounded-[6px]">
              <div class="text-center">
                 <img src="/icons/plus-icon.svg" alt="" class="w-[24px] mx-auto fill-blue" />
                 <div class="text-blue mt-2">อัปโหลด</div>
              </div>
              
            </div>
          </label>
          <input id="file-upload" type="file" />
          </div>
      </div>
       <div
          class="flex w-full bg-blue border-none text-white text-center justify-center items-center h-[48px] mb-[20px] rounded-[6px] mt-[100px]"
        >
          <span class="text-[16px]">ถัดไป</span>
        </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent, useContext } from 'vue'
  export default defineComponent({
    setup() {
      return {
      }
    }
  })
</script>
