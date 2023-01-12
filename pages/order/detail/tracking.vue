<template>
  <div>
    <HeaderOrder :title="'ติดตามสถานะการจัดส่ง'"></HeaderOrder>
    <div class="container bg-gray-2 bg-opacity-20 px-[15px] py-2">
      <div class="bg-white p-4 mt-4 mb-4 rounded-[6px]">
        <div class="flex items-center">
          <div>จัดส่งโดย <span class="font-bold">Inter Express Logistics</span></div>
        </div>
        <div class="flex mt-2">
          <div class="text-gray">รหัสติดตามพัสดุ</div>
          <div class="pl-4 text-blue">1231232131</div>
        </div>
      </div>
      <div class="bg-white p-4 mt-4 mb-4 rounded-[6px]">
        <div class="my-4">สถานะการจัดส่ง</div>
        <div class="flex py-4 border-b border-gray">
          <div class="w-1/2">วันที่ต้องการรถ:</div>
          <div class="w-1/2 flex justify-end">ศุกร์ 11 พ.ย. 2023</div>
        </div>
        <div class="flex py-4">
          <div class="w-1/2">วันที่เข้ารับ:</div>
          <div class="w-1/2 flex justify-end">9.00 - 12.00 น</div>
        </div>
      </div>
      
    </div>
    <div class="fixed bottom-0 w-full shadow-lg py-2">
      <div class="flex px-2">
        <div class="w-1/2 px-2">
          <button
            type="button"
            class="
              flex
              w-full
              border
              border-blue
              text-blue text-center
              justify-center
              items-center
              h-[48px]
              mb-[10px]
              rounded-[6px]
            "
          >
            <span class="text-[16px]">QR code</span>
          </button>
        </div>
        <div class="w-1/2 px-2">
          <button
            type="button"
            class="
              flex
              w-full
              bg-blue
              border-none
              text-white text-center
              justify-center
              items-center
              h-[48px]
              mb-[10px]
              rounded-[6px]
            "
          >
            <span class="text-[16px]">พิมพ์ลาเบล</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, useContext } from "vue";
export default defineComponent({
  components: {},
  setup() {
    return {};
  },
});
</script>
<style lang="css" scoped>
</style>
