<template>
  <div  class="bg-gray-2 bg-opacity-20 h-full w-full relative pb-[20px]">
     <HeaderDefault :title="'เพิ่มสินค้า'"></HeaderDefault>
     <div class="container px-[15px] mt-[20px] ">
      <div class="bg-white rounded-[6px] px-2 py-2 mb-4">
          <p class="pl-4 my-2">ภาพสินค้า</p>
          
          <div class="px-4 pt-4 ">
           <p class="my-2 mb-2">ภาพปก(0/5)</p> 
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
          <p class="pl-4 my-2">ภาพด้านบนและด้านหน้าสินค้า (0/2) </p>
          
          <div class="px-4">
           <p class="my-2 mb-2 text-gray text-small">ใช้สำหรับตรวจสอบขนาดและปริมาตร</p> 
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
      <div class="bg-white rounded-[6px] px-2 py-2">
         <p class="pl-4 my-2">ข้อมูลสินค้า </p>  
        <input
          type="text"
          placeholder="ชื่อสินค้า"
          class="form-control w-full border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"
        />
        <input
          type="text"
          placeholder="หมวดหมู่สินค้า"
          class="form-control w-full border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"
        />
        <input
          type="text"
          placeholder="ราคา"
          class="form-control w-full border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"
        />
        <input
          type="text"
          placeholder="หน่วย"
          class="form-control w-full border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"
        />
        <input
          type="text"
          placeholder="คลัง"
          class="form-control w-full border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"
        />
        
         <textarea
          type="text"
          rows="4"
          placeholder="รายละเอียดสินค้า"
          class="form-control w-full border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"
        />
        
      </div>
      <div class="bg-white rounded-[6px] px-2 py-2">
         <p class="pl-4 my-2">ข้อมูลการจัดส่ง </p>  
        <input
          type="text"
          placeholder="Service การจัดส่ง"
          class="form-control w-full border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"
        />
        <input
          type="text"
          placeholder="ค่าขนส่งที่ติดโดย IEL"
          class="form-control w-full border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"
        />
        <input
          type="text"
          placeholder="ผู้ขายกำหนดค่าขนส่งเอง"
          class="form-control w-full border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"
        />
        
        
      </div>
      <div class="bg-white rounded-[6px] px-2 py-2">
         <p class="pl-4 my-2">คำสั่งพรีออเดอร์ </p>  
        <input
          type="text"
          placeholder="Service การจัดส่ง"
          class="form-control w-full border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"
        />
        <input
          type="text"
          placeholder="ค่าขนส่งที่ติดโดย IEL"
          class="form-control w-full border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"
        />
      
        
        
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
