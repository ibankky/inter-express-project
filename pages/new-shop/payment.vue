<template>
  <div class="bg-gray-2 bg-opacity-20 h-screen w-full relative pb-[20px]">
    <HeaderWithStepper :title="'สร้างร้านค้า'"></HeaderWithStepper>
    <div class="container px-[15px] mt-[20px]">
      <div class="bg-white rounded-[6px] px-2 py-2 pb-[100px]">
        <input
          type="text"
          placeholder="ข้อมูลทางการเงิน"
          class="form-control w-full border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"
        />
        <nuxt-link :to="'/new-shop/bank'">
          <div
            class="flex w-100 border-0 border-b border-gray bg-white py-4 px-3"
          >
            <div class="w-1/2 text-[14px]">ธนาคารสำหรับรับยอดขาย</div>
            <div class="w-1/2 text-gray justify-end items-center flex">
              <span class="mr-4 text-[12px]">กรุณาเลือก</span>
              <img src="/icons/next-icons.svg" class="w-[12px]" />
            </div>
          </div>
        </nuxt-link>

        <input
          type="text"
          placeholder="ชื่อบัญขี"
          class="form-control w-full border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"
        />
        <input
          type="text"
          placeholder="เลขบัญชี"
          class="form-control w-full border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"
        />
        <p class="pl-4 my-2">หน้าสมุดบัญชี</p>
        <div class="px-2 pt-2">
          <label for="file-upload" class="custom-file-upload">
            <div
              class="w-[100px] h-[100px] border border-dashed border-blue flex items-center justify-center rounded-[6px]"
            >
              <div class="text-center">
                <img
                  src="/icons/plus-icon.svg"
                  alt=""
                  class="w-[24px] mx-auto fill-blue"
                />
                <div class="text-blue mt-2">อัปโหลด</div>
              </div>
            </div>
          </label>
          <input id="file-upload" type="file" />
        </div>
      </div>
      <div class="flex mx-2 my-4">
        <div class="mr-2">
          <input type="checkbox" />
        </div>
        <div>
          <p>
            ข้าพเจ้าได้อ่านและยอมรับ
            <span class="text-blue underline">ข้อตกลงและเงื่อนไข</span>
            การใช้งาน แอปพลิเคชัน XXXX เรียบร้อยแล้ว
          </p>
        </div>
      </div>
    </div>
    <div class="fixed bottom-0 w-full px-[15px]">
      <div
        class="flex w-full bg-blue border-none text-white text-center justify-center items-center h-[48px] mb-[20px] rounded-[6px]"
      >
        <span class="text-[16px]">สร้างร้าน</span>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, useContext } from "vue";
export default defineComponent({
  setup() {
    return {};
  },
});
</script>
