<template>
  <div class="bg-gray-2 bg-opacity-20 h-full w-full relative pb-[20px]">
    <HeaderWithStepper :title="'สร้างร้านค้า'"></HeaderWithStepper>
    <div class="container bg-light-blue h-[200px] mb-10 relative">
      <div
        class="absolute bottom-[-15px] left-[15px] w-[100px] h-[100px] bg-white rounded-[6px]"
      >
        <div class="flex h-full text-center justify-center items-center">
          <label for="file-upload" class="custom-file-upload">
            <img src="/icons/img-icon.png" alt="" class="w-[32px]" />
          </label>
          <input id="file-upload" type="file" />
        </div>
      </div>
    </div>
    <div class="container px-[15px] mt-[20px] pb-[100px]">
      <div class="bg-white rounded-[6px] px-2 py-2">
        <input
          type="text"
          placeholder="ชื่อร้าน"
          class="form-control w-full border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"
        />
        <nuxt-link :to="'/new-shop/category'">
        <div class="flex w-100 border-0 border-b border-gray bg-white py-4 px-3">
          <div class="w-1/2 text-[14px]">ประเภทสินค้าที่ขาย</div>
          <div class="w-1/2 text-gray justify-end items-center flex"><span class="mr-4 text-[12px]">กรุณาเลือก</span>  <img src="/icons/next-icons.svg" class="w-[12px]" /></div>
        </div>
        </nuxt-link>
        <input
          type="text"
          placeholder="เบอร์โทรศัพท์ร้าน"
          class="form-control w-full border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"
        />
        <input
          type="text"
          placeholder="อีเมล"
          class="form-control w-full border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"
        />
        <input
          type="text"
          placeholder="Line ID"
          class="form-control w-full border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"
        />

        <textarea
          type="text"
          rows="4"
          placeholder="รายละเอียดร้าน"
          class="form-control w-full border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"
        />
        <textarea
          type="text"
          rows="4"
          placeholder="ที่อยู่ร้าน"
          class="form-control w-full border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"
        />
        <p class="pl-4 mt-4">ตำแหน่งร้าน</p>
        <div class="w-full h-[200px] bg-gray"></div>
      </div>
       <div class="bg-white rounded-[6px] px-2 py-2 mt-4">
          <p class="pl-4 my-2">ภาพหน้าร้าน</p>
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
       
    </div>
     <div class="fixed bottom-0 w-full px-[15px]">
        <div
          class="flex w-full bg-blue border-none text-white text-center justify-center items-center h-[48px] mb-[20px] rounded-[6px]"
        @click="submitShopDetail()"
        >
          <span class="text-[16px]">ถัดไป</span>
        </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, useContext } from "vue";
export default defineComponent({
  setup() {
    function submitShopDetail(){
         this.$router.push('/new-shop/billingdetail')
      }
    return {
      submitShopDetail
    };
  },
});
</script>
