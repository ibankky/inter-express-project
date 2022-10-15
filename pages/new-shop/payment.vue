<template>
  <div class="bg-gray-2 bg-opacity-20 h-screen w-full relative pb-[20px]">
    <HeaderWithStepper :title="'สร้างร้านค้า'"></HeaderWithStepper>
    <div class="container px-[15px] mt-[20px]">
      <div class="bg-white rounded-[6px] px-2 py-2">
        <input
          type="text"
          placeholder="ข้อมูลทางการเงิน"
          class="form-control w-full border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"
        />
        <input
          type="text"
          placeholder="ธนาคารสำหรับรับยอดขาย"
          class="form-control w-full border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"
        />
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
        <input
          type="text"
          placeholder="หน้าสมุดบัญชี"
          class="form-control w-full border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"
        />
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

      <div
        class="flex w-full bg-blue border-none text-white text-center justify-center items-center h-[48px] mb-[20px] rounded-[6px] mt-[100px]"
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
